// Escribir un programa que escriba en pantalla
// los divisores comunes de dos números dados

const mainBlock = document.querySelector("main");
const number1 = document.getElementById("num-1").value;
const number2 = document.getElementById("num-2").value;
const btnCheck = document.getElementById("btn-check");
let divisores = [];

function render() {
  mainBlock.innerHTML = `Los divisores comunes de ${number1} y ${number2} son ${divisores}`;
}

function itsDivisible(num1, num2) {
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisores.push(i);
    }
  }
}

btnCheck.addEventListener("click", () => {
  render(itsDivisible(number1, number2));
});
