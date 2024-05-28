// Escribe un programa que pida 3 números
// y escriba en la pantalla el mayor de los tres.

const num1 = document.getElementById("number-1");
const num2 = document.getElementById("number-2");
const num3 = document.getElementById("number-3");
const btnGreater = document.getElementById("btn-greater");
const mainBlock = document.querySelector("main");

function render(msg) {
  mainBlock.innerHTML = msg;
}

function greater(x, y, z) {
  if (x > y && x > z) {
    return `Entre ${x}, ${y} y ${z} el mayor es: ${x}`;
  }
  if (y > x && y > z) {
    return `Entre ${x}, ${y} y ${z} el mayor es: ${y}`;
  }
  if (z > x && z > y) {
    return `Entre ${x}, ${y} y ${z} el mayor es: ${z}`;
  }
  return `Son iguales`;
}

btnGreater.addEventListener("click", () => {
  let n1 = num1.value;
  let n2 = num2.value;
  let n3 = num3.value;

  render(greater(parseInt(n1), parseInt(n2), parseInt(n3)));
});
