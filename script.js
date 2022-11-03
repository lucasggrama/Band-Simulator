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
        imagem: './imgs/metallica.png'
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
let imagemBackground = document.querySelector('#imagemRandom')
imagemBackground.style.backgroundImage = `url(${bandas[i].imagem})`;