// Escribir un programa que nos diga si un número dado es primo
// (no es divisible por ninguno otro número que no sea él mismo o la unidad)

const mainBlock = document.querySelector("main");
const number1 = document.getElementById("num-1").value;
const btnCheck = document.getElementById("btn-check");

function render(msg) {
  mainBlock.innerHTML = msg;
}

function itsPrime(num) {
  if (num > 1) {
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        return `${number1} NO es primo`;
      } else {
        return `${number1} es primo`;
      }
    }
  }
  return `not a valid number to check prime`;
}

btnCheck.addEventListener("click", () => {
  render(itsPrime(number1));
});
