import { Movie } from "./movie";
import * as fs from 'fs';

export class Imdb {
    peliculas: Movie[];

    constructor(peliculas: Movie[]){
        this.peliculas = peliculas;
    }

    getPeliculas(): Movie[]{
        return this.peliculas;
    }

    setPeliculas(peliculas: Movie[]): void{
        this.peliculas = peliculas;
    }

    escribirEnFicheroJSON(nombreFichero: string) {        
        fs.writeFileSync(nombreFichero +'.json', JSON.stringify(this))
    }

    obtenerInstanciaIMDB(nombreFichero:string): Imdb {
        let bdFile = fs.readFileSync(nombreFichero +'.json', 'utf-8')
        let bdParsed = JSON.parse(bdFile);

        return new Imdb(bdParsed.peliculas);        
    }
}