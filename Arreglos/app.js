var verduras = ["Jitomate", "cebolla", "zanahoria"];

console.log(verduras.length);

//IndexOF --> retorna el indice del elemnto que estamos buscandoi
// de no encontrarlo regresa un -1
var indice = verduras.indexOf("Jitomate");

console.log(indice);

//includes("Elemento a buscar")
var frutas = ["mango", "tuna", "uva"];

let includesMango = frutas.includes("mango");
console.log(includesMango);

//metodo PUSH
let personajes = ["Goku", "Krilin", "Vegeta"];
personajes.push("Gohan");

console.log(personajes);

//Metodo Unshit --> agrega un elemento al inicio del arreglo
personajes.unshift("Bills");


//Metodo POP elimina el ultimo elemento apilado
personajes.pop();

//Metodo SHIFT elimina el primer elemento del arreglo
personajes.shift();




