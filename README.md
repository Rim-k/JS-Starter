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

    karma start

Le résultat attendu est :

    05 10 2015 14:30:37.577:WARN [karma]: No captured browser, open http://localhost:9876/
    05 10 2015 14:30:37.591:INFO [karma]: Karma v0.13.10 server started at http://localhost:9876/
    05 10 2015 14:30:37.613:INFO [launcher]: Starting browser PhantomJS
    05 10 2015 14:30:38.831:INFO [PhantomJS 1.9.8 (Windows 7 0.0.0)]: Connected on socket KgxRql5uow_nAJH6AAAA with id 99370867
    .
    **PhantomJS 1.9.8 (Windows 7 0.0.0): Executed 1 of 1 SUCCESS (0.002 secs / 0.002 secs)**

