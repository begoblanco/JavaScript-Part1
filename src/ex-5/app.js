//Escribe un programa que pida dos números
//y escriba en la pantalla cual es el mayor.

const num1 = document.getElementById("number-1")
const num2 = document.getElementById("number-2")
const btnGreater = document.getElementById("btn-greater");
const mainBlock = document.querySelector("main");

function render(num1, num2, res){
    mainBlock.innerHTML = `Entre ${num1} y ${num2} el mayor es: ${res}`;
}

function greater(x,y){
    if (x > y){
        return render(x, y, x)
    }
    return render(x, y, y)
}

btnGreater.addEventListener("click", () => {
    let n1 = num1.value;
    let n2 = num2.value;
  
    greater(parseInt(n1), parseInt(n2));
    
  });