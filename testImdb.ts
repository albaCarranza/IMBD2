
import { Imdb } from "./imdb";
import { Movie } from "./movie";

import * as fs from 'fs';

// En primer lugar creamos las peliculas que se pasarán como parámetros
let guardianesDelaGalaxia : Movie = new Movie ("Guardianes de la Galaxia", 2014, "Estadounidense", "Ciencia ficcion");
let starWars : Movie = new Movie ("Star Wars", 1999, "Estadounidense", "Ciencia ficcion");

// Creamos una nueva instancia de imdb, pasando por parametros las peliculas dentro de un array
let imdb: Imdb = new Imdb([guardianesDelaGalaxia, starWars])


console.log('-----Prueba de imdb------')
for(let peli of imdb.getPeliculas()){
    console.log(peli.printAll())
}



// Paso 6: Lectura/Escritura en fichero

//Guarda el fichero
let bdStringify = JSON.stringify(imdb)
fs.writeFileSync('imdbBBDD.json', bdStringify)


//Lee el fichero
let bdFile = fs.readFileSync('imdbBBDD.json', 'utf-8')
let bdParsed = JSON.parse(bdFile);

// Creo una nueva instancia de imdb y le paso las pelis como parametros
console.log('-----Crea una imdb nueva con base al fichero y muestra sus datos------')
let imdb2: Imdb = new Imdb(bdParsed.peliculas)
console.log(imdb2) 


// Paso 7: Añadir nuevos métodos a la clase
console.log('-----Probar metodos de json de imdb------')
let imdb3: Imdb = new Imdb([guardianesDelaGalaxia, starWars]);
imdb3.escribirEnFicheroJSON('PelisDisney');

let imdb4: Imdb = imdb3.obtenerInstanciaIMDB('PelisDisney');
console.log('-----Instancia de IMDB------')
console.log(imdb4) 