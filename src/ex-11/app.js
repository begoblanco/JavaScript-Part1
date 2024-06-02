// Escribe un programa que pida un número
// y nos diga si es divisible por 2, 3, 5 o 7
// (sólo hay que comprobar si lo es por uno de los cuatro)

const mainBlock = document.querySelector("main");
const number1 = document.getElementById("num-1").value;
const btnCheck = document.getElementById("btn-check");

function render(msg) {
  mainBlock.innerHTML = msg;
}

function itsDivisible(num) {
  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    return `${num} es divisible por 2, 3, 5 o 7`;
  }
  return `${num} NO es divisible por 2, 3, 5 o 7`;
}

btnCheck.addEventListener("click", () => {
  render(itsDivisible(number1));
});
