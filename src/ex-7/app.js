// Escribe un programa que pida una frase
// y escriba cuantas veces aparece la letra a

const mainBlock = document.querySelector("main");
const sentence = document.getElementById("sentence-1").value;
const btnCheck = document.getElementById("btn-check");
let counter = 0;

function render(msg) {
  mainBlock.innerHTML = msg;
}

function countA(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].toLowerCase() === "a") {
      counter++;
    }
  }
  return `La letra 'a' aparece ${counter} veces.`;
}

btnCheck.addEventListener("click", () => {
  render(countA(sentence));
});
