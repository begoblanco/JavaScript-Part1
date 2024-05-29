// Escribe un programa que pida una frase
// y escriba las vocales que aparecen

const mainBlock = document.querySelector("main");
const sentence = document.getElementById("sentence-1").value;
const btnCheck = document.getElementById("btn-check");
let counter = 0;

function render(msg) {
  mainBlock.innerHTML = msg;
}

function countVowels(sentence) {
  const vowels = ["a", "e", "i", "o", "u"];
  
  for (let i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i].toLowerCase())) {
      counter++;
    }
  }
  return `Hay ${counter} vowels.`;
}

btnCheck.addEventListener("click", () => {
  render(countVowels(sentence));
});
