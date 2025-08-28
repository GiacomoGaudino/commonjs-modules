/*
3 - people.js
Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri. 
La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies.
 All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
*/

import hobbies from "./hobbies.js";
import fullName from "./names.js";

function myFunction() {
    const fullNameResult = fullName("Giacomo", "Gaudino");
    const hobbiesResult = hobbies("manga", "anime", "films");
    return {
        fullName: fullNameResult,
        hobbies: hobbiesResult
    }
}

console.log(myFunction());
