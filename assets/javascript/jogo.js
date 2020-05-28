var altura = 0
var largura = 0
var vida = 1;

function ajustaPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);
}

ajustaPalcoJogo();

function posicaoAleatoria() {

    //remove mosquito (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if (vida > 3) {
            window.location.href = './fim_de_jogo.html';
        }else {
            document.getElementById('v' + vida).src = './assets/imagens/coracao_vazio.png';

            vida++;
        }
    }

    //define posição imagem
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);
    //cria elemento imagem e define propriedades
    var mosquito = document.createElement('img');
    mosquito.src = './assets/imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.position = 'relative';
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove();
    }

    document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
    var tamanho = Math.floor(Math.random() * 3);
    
    switch(tamanho) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2);

    switch(lado) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}