function sortear() {
    // Obtém os valores dos inputs e converte para números inteiros.
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    // Verifica se a quantidade solicitada é válida
    if (quantidade > (ate - de + 1)) {
        alert("A quantidade de números sorteados não pode ser maior que o intervalo especificado.");
        return; // Interrompe a função
    };

    // Gera números aleatórios únicos dentro do intervalo especificado.
    let numerosSorteados = new Set();
    while (numerosSorteados.size < quantidade) {
        let numero = gravarNumerosAleatorios(de, ate);
        numerosSorteados.add(numero);
    };

    // Converte o conjunto de números em um array e ordena em ordem crescente.
    let sorteados = Array.from(numerosSorteados).sort((a, b) => a - b);

    // Exibe os números sorteados na tela.
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
};

// Gera um número aleatório entre min e max.
function gravarNumerosAleatorios(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Limpa os campos de entrada e o resultado.
function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    resultado.innerHTML = `<label class="texto__paragrafo">Nenhum número até agora</label>`;
};
