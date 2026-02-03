describe('CharleBin - création et lecture d’un paste', () => {
  it('crée un paste protégé par mot de passe et le relit', () => {
    const message = 'Message de test Cypress';
    const password = 'secret123';

    // Accès à l’application
    cy.visit('http://localhost:8080');

    // Saisie du message
    cy.get('#message').type(message);

    // Saisie du mot de passe
    cy.get('#passwordinput').type(password);

    // Envoi du paste
    cy.get('#sendbutton').click();

    // Récupération de l’URL du paste
    cy.get('#pastelink a')
      .invoke('attr', 'href')
      .then((url) => {
        expect(url).to.exist;

        // Rechargement du paste via l’URL
        cy.visit(url);

        // Saisie du mot de passe pour lire le paste
        cy.get('#passwordinput').type(password, { force: true });


        // Vérification du contenu
        cy.contains(message).should('be.visible');
      });
  });
});