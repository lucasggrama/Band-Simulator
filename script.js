function gerarNumero(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
let bandas= [
    { 
        imagem: './imgs/ghost.png'
    },
    {
        imagem: './imgs/stones.png'
    },
    {
        imagem: './imgs/mayhem.png'
    },
    {
        imagem: './imgs/queen.png'
    },
    {
        imagem: './imgs/metallica'
    },
    ]
let i = gerarNumero(0, 4);
let imagemBackground = document.querySelector('#imagemRandom')
imagemBackground.style.backgroundImage = `url(${bandas[i].imagem})`;