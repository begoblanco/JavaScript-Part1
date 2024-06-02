// Escribe un programa que pida una frase
// y escriba cuántas veces aparecen cada una de las vocales

const mainBlock = document.querySelector("main");
const sentence = document.getElementById("sentence-1").value;
const btnCheck = document.getElementById("btn-check");

function render(msg) {
  for (const [key, value] of Object.entries(msg)) {
    console.log(key, value);

    let e = document.createElement("p");
    e.innerHTML = `<b>${key}</b>: ${value}`;
    mainBlock.appendChild(e);
  }
}

function countVowels(sentence) {
  const vowels = ["a", "e", "i", "o", "u"];
  let checkedVowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i].toLowerCase();

    if (vowels.includes(sentence[i].toLowerCase())) {
      checkedVowels[letter] += 1;
    }
  }
  return checkedVowels;
}

btnCheck.addEventListener("click", () => {
  render(countVowels(sentence));
});
