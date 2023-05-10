import { Imdb } from "./imdb";
import { Movie } from "./movie";
import { Professional } from "./profesional";
import * as fs from 'fs';
const readlineSync = require('readline-sync');

// Lee los datos de un profesional
let nombre = readlineSync.question('Introduzca su nombre:');
let edad = readlineSync.question('Introduzca su edad:');
let peso = readlineSync.question('Introduzca su peso:');
let retirado = readlineSync.question('Introduzca si encuentra retirado:');
let nacionalidad = readlineSync.question('Introduzca su nacionalidad:');
let oscars = readlineSync.question('Introduzca la cantidad de Oscars:');
let profesion = readlineSync.question('Introduzca su profesión:');

let profesional1 : Professional = new Professional (nombre, edad, peso, retirado, nacionalidad, oscars, profesion);

console.log('\n-----Estos son los datos recogidos por pantalla para el profesional------')
profesional1.printAll();

console.log('\n-----Guardando datos del profesional en la primera peli de imdbBBDD------')
// Traigo los datos del fichero para modificarlos usando de base una clase imdb
let imdb: Imdb = new Imdb([]) // En este caso no me importa lo que se pase por el constructor puesto que solo quiero utilizar sus funciones

let objetoJsonGuardado = imdb.obtenerInstanciaIMDB('imdbBBDD');

// Extraigo los datos de la primera peli para trabajar con ellos
let peli = objetoJsonGuardado.peliculas[0];

// Creo una nueva peli de tipo Movie con los datos de peli
let nuevaPeli = new Movie(peli.title, peli.releaseYear, peli.nacionality, peli.genre);

// Seteo en el array de profesionales al profesional en la peli
nuevaPeli.setactors([profesional1]);

// Sustituyo la primera peli de objetoGuardado por el nuevo
objetoJsonGuardado.peliculas[0] = nuevaPeli;

// Escribo en fichero, pero sin pasar por la función de movies, puesto que esa graba lo que tiene el propio objet en sí mismo
let bdStringify = JSON.stringify(objetoJsonGuardado)
fs.writeFileSync('imdbBBDD.json', bdStringify)
console.log('\n-----Datos del profesional guardados correctamente------')