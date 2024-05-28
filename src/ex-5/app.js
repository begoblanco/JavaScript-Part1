//Escribe un programa que pida dos números
//y escriba en la pantalla cual es el mayor.

const num1 = document.getElementById("number-1");
const num2 = document.getElementById("number-2");
const btnGreater = document.getElementById("btn-greater");
const mainBlock = document.querySelector("main");

function render(msg) {
  mainBlock.innerHTML = msg;
}

function greater(x, y) {
  if (x > y) {
    return `Entre ${x} y ${y} el mayor es: ${x}`;
  } 
  if (x < y) {
    return `Entre ${x} y ${y} el mayor es: ${y}`;
  }
  return `Son iguales`;
}

btnGreater.addEventListener("click", () => {
  let n1 = num1.value;
  let n2 = num2.value;

  render(greater(parseInt(n1), parseInt(n2)));
});
