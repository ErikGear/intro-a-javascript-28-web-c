
/*
1. En consola del navegador, crea un pequeño programa que le pida al usuario que ingrese un número, multiplica
ese número por 2 y muestra en salida el resultado de esa operación.
*/

/*
const number = Number(prompt("Digite un número: "));

let multiplication = 0;

multiplication = number * 2;

alert("El resultado es: " + multiplication);
*/


/*
2. En la consola del navegador escribe un programa que reciba dos números e imprime en pántalla la resta de ambos.
*/
/*
const number1 = Number(prompt("Digite un número: "));
const number2 = Number(prompt("Digite otro número: "));

let rest = number1 - number2;

alert("El resultado de restar " + number1 + " - " + number2 + "  = " + rest);
*/

/*
3. Escribe un programa que calcule el áre de un ciruclo con un radio r = 5.3. (fórmula: PI * r^2)
*/
/*
const PI = 3.1416;
var area = 0;

var r = Number(prompt("Digite el radio del círculo: "));

area = PI * Math.pow(r,2);

areaDosdecimales = area.toFixed(2)

alert("El área del circulo es: " + areaDosdecimales);
*/

/*
 
4. Escribe un programa que calcule el área de un rombo, sabiendo que p = 5cm y D=8cm, d = 6cm (Fórmula: a=D * d /2)
 */

const D = 8;
const d = 6;

let area = (D * d) / 2;

let areaDosDecimales = area.toFixed(2);

alert("El area del rombo es: " + areaDosDecimales);