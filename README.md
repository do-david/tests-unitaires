# tests-unitaires
Projet de groupe réalisé par TWISHIME Jean-luc, HAMIDECHI Mohamed Aimene, ICHKARRANE Rida et DO David

# Requirement
node version > 14.x

# Commands
Se placer à la racine de chaque projet (par exemple "1-test-architecture") et lancer la commande "npm install" suivi de "npm run test.

# test-architecture
  Description
  API dont les tests unitaires vont être spécialisés dans la configuration architecturale du projet, notamment, grâce au mock du module "axios" qui permet de faire des requêtes en   json, ou encore la simulation d'une requête post nous assurant la séparation entre la couche "controller" et la couche "service".
  
# test-intégration-front
  Description
  Application front dans lequel, il est possible à l'utilisateur de rentrer son nom et son age en tapant manuellement dans les champs associés sur le navigateur. Avec la librairie   "puppeteer", nous avons pu mettre en place des tests End-to-End qui permettent l'automatisation d'un sénario type d'un utilisateur lambda.
  
  Spécificité
  Pour lancer le test, il faut d'abord changer une ligne du fichier util.test.js :
  await page.goto('<emplacement_sur_la_machine_du_fichier_index.js>');
  Comme par exemple : await page.goto('file:///C:/Users/Asus/Desktop/Js%20tests%20unitaire/index.html');
  
# test-unitaire-config
  Description
  API qui permet de collecter différentes recettes sous le format d'un CRUD. Les tests unitaires vont permettre au développeur de s'assurer de la bonne configuration de             l'application, notamment concernant, la connection entre l'api et la base de donnée sur MongoDB en insérant un object sur la table "tests" (mais qui sera effacé immédiatement     après le test bien entendu).
 
# test-unitaire-routes
  Description
  API qui se base sur des services Cloud de firebase. Les tests dans ce projet vont se concentrer uniquement sur l'automatisation des requêtes sur l'ensemble des endpoints du     projet : "/orders", "/products", "/category". Ces tests ont pour but de nous permettre de nous assurer que les routes renvois à chaque appel, un status code 200 ou 201 et en     même temps de vérifier que la response soit différente de nulle (grâce à plusieurs méthodes données dans la librairie "jest").
  
  Spécificité
  Taper la commande  "npm run server" puis dans un autre terminale "npm run test"
  
