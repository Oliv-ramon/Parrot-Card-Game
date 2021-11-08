function perguntaQuantasCartas() {
    while (
      quantidadeDeCartas % 2 !== 0 ||
      quantidadeDeCartas < 4 ||
      quantidadeDeCartas > 14
    ) {
      alert("Quantidade de cartas inválida! Digite valores pares entre 4 e 14.");
      quantidadeDeCartas = parseInt(prompt("Com quantas cartas quer jogar?"));
    }
  }
  
function adicionaCartasNaLista(quantidade) {
    for (let i = 1; i <= quantidade / 2; i++) {
      let carta = `
            <div onclick="giraCarta(this)" class="carta par${i}">
                <div class="frente face desvirada">
                    <img src="arquivos/front.png" alt="frente da carta">
                </div>
                <div class="verso face">
                    <img src="arquivos/${i}.gif" alt="gif animado">
                </div>
            </div>
        `;
      listaDeCartas.push(carta);
      listaDeCartas.push(carta);
    }
  }
  
function botaAsCartas(quantidade) {
    document.querySelector("main").innerHTML = "";
    for (let j = 0; j < quantidade; j++) {
      document.querySelector("main").innerHTML += listaDeCartas[j];
    }
    document.querySelector(".tempo").innerText = `0:0${segundos}`;
    id = setInterval(contaTempo, 1000);
  }
  
async function giraCarta(carta) {
    carta.classList.add("virada");
    let cartaVirada = document.querySelectorAll(".virada .desvirada");
    if (cartaVirada.length === 2) {
      if (
        cartaVirada[0].parentNode.classList[1] ===
        cartaVirada[1].parentNode.classList[1]
      ) {
        cartaVirada[0].classList.remove("desvirada");
        cartaVirada[1].classList.remove("desvirada");
        cartaVirada = [];
        jogadas += 2;
      } else {
        await delay(1);
        cartaVirada[0].parentNode.classList.remove("virada");
        cartaVirada[1].parentNode.classList.remove("virada");
        cartaVirada = [];
        jogadas += 2;
      }
    }
    let cartasViradas = document.querySelectorAll(".virada");
    if (cartasViradas.length === quantidadeDeCartas) {
      clearInterval(id);
      await delay(1.0000001);
      alert(
        `"Você ganhou em ${jogadas} jogadas, ${minutos} minutos e ${segundos} segundos!"`
      );
      const resetSouN = prompt("Quer reiniciar a partida? (digite sim ou não)");
      if (resetSouN === "sim") {
        resetaJogo();
      }
    }
  }
  
function contaTempo() {
    segundos++;
    if (segundos < 10 && minutos < 1) {
      document.querySelector(".tempo").innerText = `0:0${segundos}`;
    } else if (segundos < 60 && minutos < 1) {
      document.querySelector(".tempo").innerText = `0:${segundos}`;
    } else if (segundos < 10) {
      document.querySelector(".tempo").innerText = `${minutos}:0${segundos}`;
    } else if (segundos < 60) {
      document.querySelector(".tempo").innerText = `${minutos}:${segundos}`;
    } else {
      minutos++;
      segundos = 0;
      document.querySelector(".tempo").innerText = `${minutos}:0${segundos}`;
    }
  }
  
function resetaJogo() {
    quantidadeDeCartas = parseInt(prompt("Com quantas cartas quer jogar?"));
    
    listaDeCartas = [];
    
    jogadas = 0;
    
    segundos = 0;
    
    minutos = 0;
    
    id = 0;
    
    perguntaQuantasCartas();
    
    adicionaCartasNaLista(quantidadeDeCartas);
    
    listaDeCartas.sort(comparador);
    
    botaAsCartas(quantidadeDeCartas);
  }
  
function comparador() {
    return Math.random() - 0.5;
  }
  
function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }
  
  let quantidadeDeCartas = parseInt(prompt("Com quantas cartas quer jogar?"));
  
  let listaDeCartas = [];
  
  let jogadas = 0;
  
  let segundos = 0;
  
  let minutos = 0;
  
  let id = 0;
  
  perguntaQuantasCartas();
  
  adicionaCartasNaLista(quantidadeDeCartas);
  
  listaDeCartas.sort(comparador);
  
  botaAsCartas(quantidadeDeCartas);
  