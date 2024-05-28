const hello = "Hello Javascript";
const divApp = document.querySelector("#app");

function renderTitle(title) {
  divApp.innerHTML = `<h1>${title}</h1>`;
}

renderTitle(hello);

console.log(divApp);
