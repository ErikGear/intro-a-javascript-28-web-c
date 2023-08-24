const header = document.createElement("h1");
header.textContent = "Este es un h1";

//al body le agregamos un header mediante JS
//querySelector, acepta todo tipo de selectores css con # para ids y con . para clases asi como otros tipos de selectores, etc.
const body = document.querySelector("body");
body.appendChild(header);

//getElementsById --> retorna un arreglos de elementos HTML
const body2 = document.getElementsByTagName("body");
body2[0].appendChild(header);


//Selecciona el elelemnto por su ID
const body3 = document.getElementById("body");
body3.appendChild(header);


//generando estilos de forma DINAMICA
//esta forma agregara estilos CSS INLINE
header.style.backgroundColor = "steelblue";
header.style.fontSize = "5rem";


//Seleccionando todos los parrafos para cambiar su tamaño de fuente:
const parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "blue";
}


//elimnar elementos de nuestra vista
// parrafos[0].style.opacity = 0;
// parrafos[0].styles.display = none;
body.removeChild(parrafos[0]);

const ankers = document.getElementsByClassName ("fondo");

//removiendo clase a un elemento mediante JS
ankers[2].classList.remove("fondo");


//Eventos

const button = document.querySelector("button");


function sayHello(){
    alert("Hello");
}

button.addEventListener("click", sayHello);