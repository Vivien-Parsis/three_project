# ThreeJS game
Jeu de voiture sous three js

## Fonctionnalité principales
- Jeu de voiture

## Configuration requise
- node.js v21
- npm
- git ou docker

## Instruction d'installation

### Via source

- cloner le dépot : `git clone https://github.com/Vivien-Parsis/three_project && cd three_project`
- dans le repertoire, pour installer les dependances : `npm i`
- pour le lancer le serveur : `npm run dev`

### Via dockerFile

- cloner le dépot : `git clone https://github.com/Vivien-Parsis/three_project && cd three_project`
- build l'image : `docker build -t three_app .`
- lancer l'image : `docker run -p 3000:3000 --name three_app three_app`

## Adresse

`http://localhost:3000`