//Escribe un programa que pida el nombre del usuario con un input
// y escriba un texto que diga “Hola <nombre-de-usuario>”

//click de boton = evento
//evento = recuperar el nombre de usuario
//renderizar en un contenedor html el texto

//comprobar si el input esta vacío

const inputUsername = document.getElementById("username");
const btnValidate = document.getElementById("btn-validar");
const mainBlock = document.querySelector("main");

btnValidate.addEventListener("click", () => {
  const username = inputUsername.value;
  render(username);
});

function render(username) {
  if (isEmpty(username)) {
    mainBlock.innerHTML = `<span>Debe introducir su nombre</span>`;
    return;
  }
  mainBlock.innerHTML = `<span>Hola ${username}</span>`;
}
function isEmpty(username) {
  const stringLength = username.length;
  return stringLength === 0 ? true : false;
}
