function perguntaQuantasCartas() {
    while (quantidadeDeCartas % 2 !== 0 || quantidadeDeCartas < 4 || quantidadeDeCartas > 14) {
        alert("Quantidade de cartas inválida! Digite valores pares entre 4 e 14.");
        quantidadeDeCartas = parseInt(prompt("Com quantas cartas quer jogar?"))
    }
}

function adicionaCartasNaLista(quantidade) {
    for (let i = 1; i <= quantidade/2; i++) {
        let carta = `
            <div class="carta par${i}">
                <div class="frente">
                    <img src="arquivos/front.png" alt="frente da carta">
                </div>
                <div class="verso hidden">
                    <img src="arquivos/${i}.gif" alt="gif animado">
                </div>
            </div>
        `;
        listaDeCartas.push(carta);
        listaDeCartas.push(carta);
    }
}

function botaAsCartas(quantidade) {
    document.querySelector("section").innerHTML = ""
    for (let j = 0; j < quantidade; j++) {
        document.querySelector("section").innerHTML += listaDeCartas[j]
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

let quantidadeDeCartas = parseInt(prompt("Com quantas cartas quer jogar?"));

let listaDeCartas = [];

perguntaQuantasCartas();

adicionaCartasNaLista(quantidadeDeCartas);

listaDeCartas.sort(comparador);
console.log(listaDeCartas)

botaAsCartas(quantidadeDeCartas);

