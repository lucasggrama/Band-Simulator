function gerarNumero(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
let bandas = [
    {
        imagem: './imgs/ghost.png',
        musica: 'Dance Macabre - Ghost',
        audio: 'audio/ghost.mp3'
    },
    {
        imagem: './imgs/stones.png',
        musica: 'Paint it, Black - The Rolling Stones',
        audio: 'audio/stones.mp3'
    },
    {
        imagem: './imgs/mayhem.png',
        musica: 'Freezing Moon - Mayhem',
        audio: 'audio/mayhem.mp3'
    },
    {
        imagem: './imgs/queen.png',
        musica: 'Don`t Stop Me Now - Queen',
        audio: 'audio/queen.mp3'
    },
    {
        imagem: './imgs/metallica.png',
        musica: 'Sad But True - Metallica',
        audio: 'audio/metallica.mp3'
    },
]
let volumeEl = document.querySelector("#reproducao-musica");
volumeEl.volume = 0.2;

let i = gerarNumero(0, 5);
if (i === localStorage.getItem('imagemAleatoria')) {
    geraNovamente();
}
function geraNovamente() {
    if (i == localStorage.getItem('imagemAleatoria')) {
        i = gerarNumero(0, 5);
        geraNovamente();
    }
}
geraNovamente();

localStorage.setItem('imagemAleatoria', i);
let imagemBackground = document.querySelector('#bodyInicial');
imagemBackground.style.backgroundImage = `url(${bandas[i].imagem})`;

//audio

let musica = document.querySelector('#musica');
let audio = document.querySelector('audio');
musica.innerHTML = bandas[i].musica;
audio.src = bandas[i].audio;
audio.play();

// fim audio

// botoes
$('#sobre').css({display: "none"});
$('#container-perfil').css({display: "none"});
$('#placar').css({display: "none"});
$('#newPerfil').css({display: "none"});

function aparecerDiv(e){
    if(e.currentTarget.innerHTML == "Sobre"){
        if(sobreEl.style.display == "none")
            sobreEl.style.display = "block";
        else
        sobreEl.style.display = "none";
    }
    else if(e.currentTarget.innerHTML == "Placar"){
        if(placarEl.style.display == "none")
            placarEl.style.display = "block";
        else
            placarEl.style.display = "none";
    }
    else if(e.currentTarget.classList == "botaoPequeno"){
        if(perfilNovoEl.style.display == "none")
            perfilNovoEl.style.display = "block";
        else
            perfilNovoEl.style.display = "none";
    }
    else if(e.currentTarget.innerHTML != "Jogar"){
        if(perfilEL.style.display == "none")
            perfilEL.style.display = "block";
        else
            perfilEL.style.display = "none";
    }
}

let botaoDiv = document.querySelectorAll('.botoesDiv');
let sobreEl = document.querySelector('#sobre');
let placarEl = document.querySelector('#placar');
let perfilEL = document.querySelector('#container-perfil');
let perfilNovoEl = document.querySelector('#newPerfil');

for(botoes of botaoDiv){
    botoes.addEventListener('click', aparecerDiv);
}

let botaoPerfil = document.querySelector('#perfil');
let botaoNewPerfil = document.querySelector('#novoPerfil')
botaoPerfil.addEventListener('click', aparecerDiv);
botaoNewPerfil.addEventListener('click', aparecerDiv);


// fim botoes
// altera imagens

function alteraImagemPerfil(){
    imagemPerfil.src = bandas[i].imagem;
}

let imagemPerfil = document.querySelector('#imagemPerfil');
imagemPerfil.addEventListener('click', alteraImagemPerfil);

function imagemPadrao(imagemVetor){
    for(imagem of imagemVetor){
        imagem.src = 'imgs/pngegg.png';
    }
}

let imagems = document.querySelectorAll('.imagemDoPerfil');
imagemPadrao(imagems);

// criar perfil


function criarNome(){
    seuNome.innerHTML = inputNome.value;
}

let inputNome = document.querySelector('#nomePerfil')
let seuNome = document.querySelector('#nomeAlteravel');

// fim criar perfil