# JS Starter Kit

Le but de ce dépôt est de fournir une base pour faire les dojos en Javascript.

## Prérequis

* `node` installé
* `karma-cli` installé (une fois node installé, `npm install -g karma-cli`)

### Contourner le proxy pour installer les paquets node

Un dépôt interne npm a été mis en place, pour le définir, cherchez dans vos mails, la commande doit ressembler à ça :

    npm config set registry http://[....]

## Initialisation

Normalement tout est inclus dans le package. Sinon, il suffit d'installer les paquets node configurés dans `package.json`, comme ceci :

    npm install

## Où ajouter mon code ?

Dans les fichiers suivants :

* **src/dojo.js**: code principal, c'est ici qu'on met l'intelligence du programme
* **tests/dojo.spec.js**: pour les tests unitaires de **src/dojo.js**, syntaxe jasmine

## Exécuter les TU

Lancer la commande suivante :

    npm test
