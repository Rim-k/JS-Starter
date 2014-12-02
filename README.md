# JS Starter Kit

Le but de ce dépôt est de fournir une base pour faire les dojos en Javascript.

## Prérequis

Il faut avoir node installé sur la machine.

### Utiliser les paquets nodes globalement (facultatif)

Pour avoir accès aux paquets installés par node globalement dans votre invite de commandes sans devoir se trouver dans le répertoire contenant les paquets, il faut ajouter un dossier dans la variable d’environnement PATH.

Exécutez (Windows + R) :

    control.exe sysdm.cpl,System,3

Cliquez sur "Variable d’environnement". Dans "Variables utilisateur pour [XXXXXX]", cliquez sur "Nouvelle..." (si PATH existe, modifiez-la) avec les infos suivantes :

* Nom : PATH
* Valeur : %PATH%;%AppData%\npm

Il faudra également ajouter la variable NODE_PATH pour que les scripts node puissent trouver leurs dépendances :

* Nom : NODE_PATH
* Valeur : %AppData%\npm\node_modules

Redémarrez votre machine pour que les variables soient prises en compte (un peu old school certes, redémarrer votre session doit probablement suffire).

### Contourner le proxy pour installer les paquets node

Un dépôt interne npm a été mis en place, pour le définir, cherchez dans vos mails, la commande doit ressembler à ça :

    npm config set registry http://[....]


## Initialisation

Il suffit d'installer les paquets node configurés dans **package.json**, comme ceci :

    npm install

## Où ajouter mon code ?

Dans les fichiers suivants :

* **src/dojo.js**: code principal, c'est ici qu'on met l'intelligence du programme
* **src/main.js**: point d'entrée du script d'exécution, doit appeler le code de **src/dojo.js**
* **spec/dojo.spec.js**: pour les tests unitaires de **src/dojo.js**, syntaxe jasmine
	
## Exécution

Double cliquer sur **main.cmd** ou le runner depuis une invite de commande.

## Exécuter les TU

Double cliquer sur **test.cmd** ou le runner depuis une invite de commande.

En invite de commande, lancer avec l'option --autotest pour lancer automatiquement
les tests à chaque modif sur les fichiers de src et de spec :

    test.cmd --autotest