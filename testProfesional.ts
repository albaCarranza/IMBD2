// 1. Crear un archivo testProfessional.ts con varios objetos de la clase Professional y mostrar
// todos sus atributos usando el método anterior.

// 2. Actualizar el GIT con esta nueva versión de la app

// 3. No olvidad que los ficheros .js deben estar en el .gitignore.

import { Professional } from "./profesional";

let luis : Professional = new Professional ("Luis",26, 86, false, "Spanish", 3, "director");
let charlie : Professional = new Professional ("Charlie",31, 94, true, "American", 2, "writer");
let ines : Professional = new Professional ("Ines",35, 63, false, "Canadian", 1, "Actor");
let david : Professional = new Professional ("David",81,90 , true, "Mexican", 8, "Director film");
let lukas : Professional = new Professional ("Lukas",36, 75, false, "Dutch", 3, "Actor");

let myProfessionals = [luis, charlie, ines, david, lukas]
console.log('-----Valor de todos los atrubutos------')

for(let profesional of myProfessionals) {
    profesional.printAll()
}



