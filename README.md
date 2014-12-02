# JS Starter Kit

Le but de ce d�p�t est de fournir une base pour faire les dojos en Javascript.

## Pr�requis

Il faut avoir node install� sur la machine.

### Utiliser les paquets nodes globalement (facultatif)

Pour avoir acc�s aux paquets install�s par node globalement dans votre invite de commandes sans devoir se trouver dans le r�pertoire contenant les paquets, il faut ajouter un dossier dans la variable d�environnement PATH.

Ex�cutez (Windows + R) :

    control.exe sysdm.cpl,System,3

Cliquez sur "Variable d�environnement". Dans "Variables utilisateur pour [XXXXXX]", cliquez sur "Nouvelle..." (si PATH existe, modifiez-la) avec les infos suivantes :

* Nom : PATH
* Valeur : %PATH%;%AppData%\npm

Il faudra �galement ajouter la variable NODE_PATH pour que les scripts node puissent trouver leurs d�pendances :

* Nom : NODE_PATH
* Valeur : %AppData%\npm\node_modules

Red�marrez votre machine pour que les variables soient prises en compte (un peu old school certes, red�marrer votre session doit probablement suffire).

### Contourner le proxy pour installer les paquets node

Un d�p�t interne npm a �t� mis en place, pour le d�finir, cherchez dans vos mails, la commande doit ressembler � �a :

    npm config set registry http://[....]


## Initialisation

Il suffit d'installer les paquets node configur�s dans **package.json**, comme ceci :

    npm install

## O� ajouter mon code ?

Dans les fichiers suivants :

* **src/dojo.js**: code principal, c'est ici qu'on met l'intelligence du programme
* **src/main.js**: point d'entr�e du script d'ex�cution, doit appeler le code de **src/dojo.js**
* **spec/dojo.spec.js**: pour les tests unitaires de **src/dojo.js**, syntaxe jasmine
	
## Ex�cution

Double cliquer sur **main.cmd** ou le runner depuis une invite de commande.

## Ex�cuter les TU

Double cliquer sur **test.cmd** ou le runner depuis une invite de commande.

En invite de commande, lancer avec l'option --autotest pour lancer automatiquement
les tests � chaque modif sur les fichiers de src et de spec :

    test.cmd --autotest