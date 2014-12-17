# JS Starter Kit

Le but de ce d�p�t est de fournir une base pour faire les dojos en Javascript.

## Pr�requis

Il faut avoir node install� sur la machine.

Pour la suite, il faut utiliser, sous Windows, l'invite de commande node ("Node.js command prompt") **ou** configurer les variables d'environnement avec les valeurs suivantes :

* **Nom** : PATH, **valeur** : %PATH%;%AppData%\npm
* **Nom** : NODE_PATH, **valeur** : %AppData%\npm\node_modules

### Contourner le proxy pour installer les paquets node

Un d�p�t interne npm a �t� mis en place, pour le d�finir, cherchez dans vos mails, la commande doit ressembler � �a :

    npm config set registry http://[....]

## Initialisation

Il suffit d'installer les paquets node configur�s dans **package.json**, comme ceci :

    npm install

## O� ajouter mon code ?

Dans les fichiers suivants :

* **src/dojo.js**: code principal, c'est ici qu'on met l'intelligence du programme
* **spec/dojo.spec.js**: pour les tests unitaires de **src/dojo.js**, syntaxe jasmine
* **src/main.js**: point d'entr�e du script d'ex�cution, doit appeler le code de **src/dojo.js**

## Ex�cuter les TU

Lancer la commande suivante :

    npm test
	
Pour lancer les tests automatiquement � chaque modification du fichier, lancer la commande suivante :

    node node_modules\jasmine-node\bin\jasmine-node spec --watch src --autotest
	
## Ex�cution

Dans l'invite de commande node, lancer la commande suivante :

    node src\main.js