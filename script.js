function gerarNumero(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
let bandas = [
    {
        imagem: './imgs/ghost.png',
        musica: 'Dance Macabre - Ghost',
        audio: 'audio/ghost.mp3',
        link: 'https://www.youtube.com/watch?v=aGUwV0yS-L4'
    },
    {
        imagem: './imgs/stones.png',
        musica: 'Paint it, Black - The Rolling Stones',
        audio: 'audio/stones.mp3',
        link: 'https://www.youtube.com/watch?v=O4irXQhgMqg'
    },
    {
        imagem: './imgs/mayhem.png',
        musica: 'Freezing Moon - Mayhem',
        audio: 'audio/mayhem.mp3',
        link: 'https://www.youtube.com/watch?v=9emO9qo4FwE'
    },
    {
        imagem: './imgs/queen.png',
        musica: 'Don`t Stop Me Now - Queen',
        audio: 'audio/queen.mp3',
        link: 'https://www.youtube.com/watch?v=HgzGwKwLmgM'
    },
    {
        imagem: './imgs/metallica.png',
        musica: 'Sad But True - Metallica',
        audio: 'audio/metallica.mp3',
        link: 'https://www.youtube.com/watch?v=A8MO7fkZc5o'
    },
]
let opçõesPerfil = [
    {
        imagem: './imgs/ghostPerfil.jpg'
    },
    {
        imagem: './imgs/stonesPerfil.jpg'
    },
    {
        imagem: './imgs/mayhemPerfil.jpg'
    },
    {
        imagem: './imgs/queenPerfil.jpg'
    },
    {
        imagem: './imgs/stonesPerfil.jpg'
    },
    {
        imagem: './imgs/metallicaPerfil.jpg'
    }
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
let musicaLink = document.querySelector('#musica')
imagemBackground.style.backgroundImage = `url(${bandas[i].imagem})`;
musicaLink.href = bandas[i].link;

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

function imagemPadrao(imagemVetor, string){
    for(imagem of imagemVetor){
        imagem.src = string;
    }
}

let imagens = document.querySelectorAll('.imagemDoPerfil');
imagemPadrao(imagens,'imgs/pngegg.png');

// criar perfil


function criaPerfil(){
    seuNome.innerHTML = inputNome.value;
    if(j == 0){
        imagemPadrao(imagens, opçõesPerfil[opçõesPerfil.length-1].imagem);
    }
    else{
        imagemPadrao(imagens, opçõesPerfil[j-1].imagem);
    }
}
function switchImage(){
    imagemPreviewEl.src = opçõesPerfil[j].imagem;
    if(j == opçõesPerfil.length-1)
        j = 0;
    else
        j++;
}
let j = 0;
let inputNome = document.querySelector('#nomePerfil');
let seuNome = document.querySelector('#nomeAlteravel');
let imagemPreviewEl = document.querySelector('#previewPerfil')
$('#confirma-perfil').click(criaPerfil);
$('#switcher-imagem').click(switchImage)
// fim criar perfil