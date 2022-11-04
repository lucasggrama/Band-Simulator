
function gerarNumero(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
let bandas= [
    { 
        imagem: './imgs/ghost.png',
        musica: 'Dance Macabre - Ghost'
    },
    {
        imagem: './imgs/stones.png',
        musica: 'Paint it, Black - The Rolling Stones'
    },
    {
        imagem: './imgs/mayhem.png',
        musica: 'Freezing Moon - Mayhem'   
    },
    {
        imagem: './imgs/queen.png',
        musica: 'Bohemian Rhapsody - Queen'
    },
    {
        imagem: './imgs/metallica.png',
        musica: 'Enter Sandman - Metallica'
    },
    ]

let i = gerarNumero(0, 5);
if(i === localStorage.getItem('imagemAleatoria')){
    geraNovamente();
}
function geraNovamente(){
    if (i == localStorage.getItem('imagemAleatoria')){
        i = gerarNumero(0, 5);
        geraNovamente();
    }
}

geraNovamente();
localStorage.setItem('imagemAleatoria', i);
let imagemBackground = document.querySelector('#bodyInicial');
let musica = document.querySelector('#musica');
musica.innerHTML = bandas[i].musica;
imagemBackground.style.backgroundImage = `url(${bandas[i].imagem})`;

// LIGHT MODE

let switchDarkModeEl = document.querySelector("#switcher")
let bodyDoSiteEl = document.querySelector("body")

switchDarkModeEl.addEventListener('click', () => {
    bodyDoSiteEl.classList.toggle('escuro')
});

// FIM LIGHT MODE
