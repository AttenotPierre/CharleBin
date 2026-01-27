# CharleBin

CharleBin est une application web de type pastebin chiffré, basée sur PrivateBin.
Elle permet de partager des messages de manière sécurisée, sans que le serveur
n’ait connaissance du contenu stocké.

## Fonctionnalités principales
- Chiffrement et déchiffrement côté client
- Messages temporaires avec durée d’expiration
- Possibilité de discussion autour d’un message
- Option de suppression après lecture

## Prérequis
- PHP >= 8.0
- Composer
- Un navigateur web moderne

## Installation en local
```
git clone git@github.com:AttenotPierre/CharleBin.git
cd CharleBin
make install
make start
```

L’application est ensuite accessible à l’adresse :

http://localhost:8080

Contribution

Les règles de contribution sont décrites dans le fichier
.github/CONTRIBUTING.md.
