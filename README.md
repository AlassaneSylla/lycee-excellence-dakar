## lycee-excellence-dakar 
    Cette application facilite la gestion des classes et des étudiants. D'abord, avant toute manipulation, l'utilisateur doit créer un compte avec prénom, nom et mot       de passe. Une fois le compte créé, l'utilisateur a la possibilité de gérer son profil. Il pourra ainsi afficher le profil pour une éventuelle modification de son       nom, de son prénom ou de son mot de passe. (in progress)

    Ensuite une fois connecté, l'utilisateur pourra gérer les classes. Il pourra créer une classe, modifier une classe et supprimer une classe. 

    Enfin au nivequ de la gestion des étudiants, inscrire un étudiant dans une classe et ou afficher la liste des étudiants et a partir de la il pourra modifier ou         supprimer les donnees enregistrées.

## Frontend
# script
    _ start: ng serve
# dependencies: v 13.3.0
    _ @angular/animations
    _ @angular/cdk
    _ @angular/common
    _ @angular/compiler
    _ @angular/core
    _ @angular/forms
    _ @angular/material : MatButtonModule, MatIconModule, MatMenuModule, MatCardModule, MatTableModule, FormsModule
    _ @angular/platform-browser
    _ @angular/platform-browser-dynamic
    _ @angular/router

## Backend
    _ Installation Node
    _ Application express
    _ La fonction normalizePort de server.js renvoie un port valide
    _ Femettre les classes dans app
    _ Faire le CORS: la communication entre les PORTS 4200 et 3000 et bloque egalement les requtes malvailleantes
    _ Connection avec MongoDB 
      * npm instal mongoose : interaction avec BD
      * import mongoose and connect to DB 
    _ Creation schema 
    _ Implementation des endpoints
    _ Optimisation du backend
    _ Authentifications
     1. npm install mongoose-unique-validator : un package de validation pour prevalider les informations
     2. configurer les routes d'authentification dans les controllers user.controller.js
     3. configurer les routes user.routes.js
     4. npm install bcrypt : pour la fonction signup pour hash le password
     5.login pour verifier les donnees du user
     6. creer des tokens d'auth: npm install jsonwebtoken 


    
