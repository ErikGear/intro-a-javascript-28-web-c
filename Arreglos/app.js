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

//Metodo Split("caracter") --> permite formar arreglos apartir de una cadena de caracteres, indicando un caracter

let papas = "sabritas, Rufles, Chipotles";
papasArray = papas.split(",");

console.log(papasArray);


//metodo SLICE --> nos permite rebanr cadenas

let palabra = "fresamanzana";

let porcionString = palabra.slice(0,4);
console.log(porcionString);


//Método splice, para agregar o bororar elementos en un array en pisicones determinadas
 let frutas2 = ["pera", "manzana", "platano", "uvas", "mandarina"];
 frutas2.splice(2, 0, "limon", "sandia");

 // 2 --> indica el indice apartir del cual vamoas a insertar elementos nuevos en el arreglo

 // 0 --> indica cuanmtoa elementos vamos a elliminar de nuestro arreglo

 //Metodo REVERSE
 let letters = ['a', 'b', 'c', 'd'];

 letters.reverse();

 console.log(letters);

//Metodo CONCAT
let numbers1 = [1, 2, 3, 4];
let numbers2 = [5, 6, 7, 8];

let numerosCompletos = numbers1.concat(numbers2);

console.log(numerosCompletos);
