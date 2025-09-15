let Amigo = []

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo.trim() !== "") { 
        Amigo.push(nomeAmigo); 
        document.getElementById('amigo').value = "";
        console.log(Amigo);
        mostrarLista();
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
 Amigo.forEach(function(nome) {
        let item = document.createElement("li"); 
        item.textContent = nome; 
        lista.appendChild(item); 
    });
}

function sortearAmigo() {
    if (Amigo.length === 0) {
        alert("A lista de amigos está vazia!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * Amigo.length);
    let nomeSorteado = Amigo[indiceAleatorio];

    // Exibe o resultado na tela, não em alert
    let resultado = document.getElementById('resultadoSorteio');
    resultado.textContent = "Seu amigo é: " + nomeSorteado;
}

function reiniciarJogo() {
    Amigo = []; // Zera a lista
    document.getElementById('listaAmigos').innerHTML = ""; // Limpa a exibição
    document.getElementById('amigo').value = ""; // Limpa o campo de entrada
    
}

