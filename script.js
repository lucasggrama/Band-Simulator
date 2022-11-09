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
function aparecerDiv(e){
    if(e.currentTarget.innerHTML == "Sobre"){
        if(sobreEl.style.display == "none" || contador == 0)
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
    else{
        if(sobreEl.style.display == "none")
            sobreEl.style.display = "block";
        else
            sobreEl.style.display = "none";
    }
}
let contador = 0;
let botaoDiv = document.querySelectorAll('.botoesDiv');
let sobreEl = document.querySelector('#sobre');
let placarEl = document.querySelector('#placar');

for(botoes of botaoDiv){
    botoes.addEventListener('click', aparecerDiv);
} 

$('#fechar-ajuda').click();
let botaoPerfil = document.querySelector('#perfil');

// fim botoes
