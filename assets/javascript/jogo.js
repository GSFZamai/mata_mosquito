var altura = 0
var largura = 0

function ajustaPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);
}

ajustaPalcoJogo();

function posicaoAleatoria() {

    //define posição imagem
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);
    //cria elemento imagem e define propriedades
    var mosquito = document.createElement('img');
    mosquito.src = './assets/imagens/mosca.png';
    mosquito.className = 'mosquito1';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.position = 'relative';

    document.body.appendChild(mosquito);
}