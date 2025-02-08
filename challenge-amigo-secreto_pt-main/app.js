//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo.trim() !== "") { // Verifica se o nome não está vazio ou contém apenas espaços em branco
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        document.getElementById('amigo').value = ""; // Limpa o campo de entrada
    } else {
        alert("Por favor, digite um nome válido.");
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach(amigo => {
        const novoItem = document.createElement('li');
        novoItem.textContent = amigo;
        listaAmigos.appendChild(novoItem);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos dois amigos para o sorteio.");
        return;
    }

    // Embaralha o array de amigos usando o algoritmo de Fisher-Yates
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }

    // Exibe o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpa a lista de resultados

    for (let i = 0; i < amigos.length; i++) {
        const amigoAtual = amigos[i];
        const amigoSorteado = amigos[(i + 1) % amigos.length]; // Usa o operador % para circular a lista

        const novoItem = document.createElement('li');
        novoItem.textContent = `${amigoAtual} tirou ${amigoSorteado}`;
        resultado.appendChild(novoItem);
    }
}