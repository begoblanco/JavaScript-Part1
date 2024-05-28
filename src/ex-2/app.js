//Escribe un programa que escriba en la pantalla
//“La suma de 3 + 5 es <resultado>”.

const number1 = 3;
const number2 = 5;
const mainBlock = document.querySelector("main");

function render(x, y, res) {
  mainBlock.innerHTML = `La suma de ${x} y ${y} es: ${res}`;
}

function sum(x, y) {
  let res = x + y;
  return res
}

render(number1, number2, sum(number1, number2));
