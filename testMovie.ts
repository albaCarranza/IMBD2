
import { Movie } from "./movie";
import { Professional } from "./profesional";


let guardianesDelaGalaxia : Movie = new Movie ("Guardianes de la Galaxia", 2014, "Estadounidense", "Ciencia ficcion");
let starWars : Movie = new Movie ("Star Wars", 1999, "Estadounidense", "Ciencia ficcion");


console.log('-----Todos los datos------')

guardianesDelaGalaxia.printAll()
starWars.printAll()

