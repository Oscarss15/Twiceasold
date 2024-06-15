//recoger datos del dom
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let divisible = document.getElementById("divisible");
let mostrarResultado = document.getElementById("mostrarResultado");
let reset = document.getElementById("reset");

//función que cuando hace click llama a función principal
divisible.addEventListener("click", () => {
  let num1Value = parseInt(num1.value);
  let num2Value = parseInt(num2.value);
  calcularDobleEdad(num1Value, num2Value);
});
//función que al hacer click llama a la función resetear
reset.addEventListener("click", () => {
  resetear();
});
//función principal para calcular el doble de dad del padre sobre el hijo
function calcularDobleEdad(number1, number2) {
  let contup = 0;
  let contdown = 0;
  let contupfinal = Infinity;
  let contdownfinal = Infinity;

  for (let i = number2; i < 100; i++) {
    if (number1 === number2 * 2) {
      contupfinal = contup;
      break;
    }
    contup++;
    number1++;
    number2++;
  }

  number1 = parseInt(num1.value);
  number2 = parseInt(num2.value);

  for (let i = number1; i > 0; i--) {
    if (number1 === number2 * 2) {
      contdownfinal = contdown;
      break;
    }
    contdown++;
    number1--;
    number2--;
  }

  mostrarResultado.innerHTML = "";
  if (contupfinal < contdownfinal) {
    mostrarResultado.innerHTML =
      "En " + contupfinal + " años";
  } else if (contdownfinal < contupfinal) {
    mostrarResultado.innerHTML =
      "Hace " + contdownfinal + " años";
  } else if (contupfinal === contdownfinal && contupfinal !== Infinity) {
    mostrarResultado.innerHTML =
      "Dentro de " +contupfinal +" años .";
  } else {
    mostrarResultado.innerHTML =
      "Nunca";
  }
}
//función para resetear
function resetear() {
  num1.value = "";
  num2.value = "";
  mostrarResultado.innerHTML = "";
}
