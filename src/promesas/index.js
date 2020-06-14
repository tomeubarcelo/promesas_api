/*  ********************************
 * @title Ejercicio promesas api
 * @version 0.0.1
 * @author Tomeu Barceló
 ******************************** */

/*
Resolver la petición a la API pero con Promesas
Siguiendo la estructura de NPM y marcando los git, cuando vayamos avanzando en nuestro código que solo se vera con 'npm run'.
*/

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/";
const PERSONAJE = "character/:id";

const TraerPersonaje = () => {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", API + PERSONAJE.replace(":id", 1), true); // definimos la ruta y si es GET o POST
    httpRequest.send(); // Pedimos la info
    httpRequest.onreadystatechange = function() { // Cuando nos llegue la info ejecutamos el PROMISE

        return new Promise((resolve, reject) => {
                if (httpRequest.readyState === 4) {
                    if (httpRequest.status === 200) { // si la respuesta es un OK 200 resolvemos la promesa
                        resolve(JSON.parse(httpRequest.responseText));
                    } else { //si hay algun lo enviamos al reject
                        const ERROR = console.error("Error : " + API + PERSONAJE.replace(":id", 1));
                        return reject(ERROR);
                    }
                }
            })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    }
}

Promise.all([TraerPersonaje()])
    .then((response) => {
        console.log("Resultados: ", response);
    })
    .catch(err => {
        console.error(err)
    })