// Escribir un programa que escriba
// en pantalla los divisores de un número dado

const mainBlock = document.querySelector("main");
const number1 = document.getElementById("num-1").value;
const btnCheck = document.getElementById("btn-check");
let divisores = [];

function render() {
  mainBlock.innerHTML = `Los divisores de ${number1} son ${divisores}`;
}

function itsDivisible(num) {
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      divisores.push(i);
    }
  }
}

btnCheck.addEventListener("click", () => {
  render(itsDivisible(number1));
});
