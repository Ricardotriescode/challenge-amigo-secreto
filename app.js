/* El principal objetivo de este desafío es fortalecer tus habilidades en 
lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema. */

let nombreAmigos = [];

function agregarAmigo(){
    let inputAmigos = document.getElementById("amigo");
    let valueAmigos = inputAmigos.value;

    if (!valueAmigos){
        alert("Debes ingresar un nombre.");
        return;
    }
    nombreAmigos.push(valueAmigos);
    inputAmigos.value = "";
    inputAmigos.focus();
    mostrarAmigos();
}

function mostrarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < nombreAmigos.length; i++){
        let item = document.createElement("li");
        item.textContent = nombreAmigos[i];
        listaAmigos.appendChild(item);
    }

}

function sortearAmigo(){
    if (nombreAmigos.length === 0){
        alert("no hay amigos para sortear");
        return;
    }
    let amigoSorteado = nombreAmigos[Math.floor(Math.random() * nombreAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiaLista = document.getElementById("listaAmigos");
    limpiaLista.innerHTML = "";
}
