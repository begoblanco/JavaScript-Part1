// Añadir al ejercicio anterior que nos diga
// por cuál de los cuatro es divisible
// (hay que decir todos por los que es divisible)

const mainBlock = document.querySelector("main");
const number1 = document.getElementById("num-1").value;
const btnCheck = document.getElementById("btn-check");
let divisores = [];

function render() {
  if (divisores.length === 0) {
    mainBlock.innerHTML = `${number1} no es divisible por 2, 3, 5 o 7`;
  }
  mainBlock.innerHTML = `${number1} es divisible por ${divisores}`;
}

function itsDivisible(num) {
  if (num % 2 === 0) {
    divisores.push(2);
  }
  if (num % 3 === 0) {
    divisores.push(3);
  }
  if (num % 5 === 0) {
    divisores.push(5);
  }
  if (num % 7 === 0) {
    divisores.push(7);
  }
  return divisores;
}

btnCheck.addEventListener("click", () => {
  render(itsDivisible(number1));
});
