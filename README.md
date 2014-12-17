# JS Starter Kit

Le but de ce dépôt est de fournir une base pour faire les dojos en Javascript.

## Prérequis

Il faut avoir node installé sur la machine.

Pour la suite, il faut utiliser, sous Windows, l'invite de commande node ("Node.js command prompt") **ou** configurer les variables d'environnement avec les valeurs suivantes :

* **Nom** : PATH, **valeur** : %PATH%;%AppData%\npm
* **Nom** : NODE_PATH, **valeur** : %AppData%\npm\node_modules

### Contourner le proxy pour installer les paquets node

Un dépôt interne npm a été mis en place, pour le définir, cherchez dans vos mails, la commande doit ressembler à ça :

    npm config set registry http://[....]

## Initialisation

Il suffit d'installer les paquets node configurés dans **package.json**, comme ceci :

    npm install

## Où ajouter mon code ?

Dans les fichiers suivants :

* **src/dojo.js**: code principal, c'est ici qu'on met l'intelligence du programme
* **spec/dojo.spec.js**: pour les tests unitaires de **src/dojo.js**, syntaxe jasmine
* **src/main.js**: point d'entrée du script d'exécution, doit appeler le code de **src/dojo.js**

## Exécuter les TU

Lancer la commande suivante :

    npm test
	
Pour lancer les tests automatiquement à chaque modification du fichier, lancer la commande suivante :

    node node_modules\jasmine-node\bin\jasmine-node spec --watch src --autotest
	
## Exécution

Dans l'invite de commande node, lancer la commande suivante :

    node src\main.js