
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
let musica = document.querySelector('#musica');
let audio = document.querySelector('audio');
musica.innerHTML = bandas[i].musica;
audio.src = bandas[i].audio;
imagemBackground.style.backgroundImage = `url(${bandas[i].imagem})`;

// LIGHT MODE

let switchDarkModeEl = document.querySelector("#switcher")
let bodyDoSiteEl = document.querySelector("body")

switchDarkModeEl.addEventListener('click', () => {
    bodyDoSiteEl.classList.toggle('escuro')
});

import CenaCarregamento from "./cena-carregamento";
// FIM LIGHT MODE
// INICIO DO JOGO
import CenaPontos from "./cena-pontos";
import CenaJogo from "./cena-jogo";
import CenaCarregamento from "./cena-carregamento";

const config = {
    type: Phaser.AUTO,
    parent: 'jogo',
    scene: [CenaCarregamento, CenaJogo, CenaPontos],
}