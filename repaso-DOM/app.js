const secretNumberContainer = document.getElementById("secret-number");
const input = document.getElementById("floatingInput");
const button = document.getElementById("check-button");
const hint = document.getElementById("hint");
const scoreContainer = document.getElementById("score");

const randomNumber = Math.trunc( Math.random() * 20 ); //genera un numero aleatorio entre 0 y  < 1

secretNumberContainer.textContent = randomNumber;

let score = 100;
scoreContainer.textContent = score;


const compareToRandom = function () {
    const respuesta = parseInt(input.value);
    if (respuesta === randomNumber) {
        hint.textContent = "correcto";
        hint.classList = "alert alert-success";//cambiando la clase
    } else if (respuesta > randomNumber) {
        hint.textContent = "Intenta con un número más pequeño"
        hint.classList = "alert alert-danger";
        score--;
        scoreContainer.textContent = score;
    } else {
        hint.textContent = "Intenta un número más grande";
        hint.classList = "alert alert-danger";
        score--;
        scoreContainer.textContent = score;
    }
};

button.addEventListener("click", compareToRandom);
