function gerarNumero(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
let bandas= [
    { 
        imagem: "url('./imgs/ghost.png')"
    },
    {
        imagem: "url('./imgs/stones.png')"
    },
    {
        imagem: "url('./imgs/mayhem.png')"
    },
    {
        imagem: "url('./imgs/queen.png')"
    },
    {
        imagem: "url('./imgs/metallica')"
    },
    ]
let i = gerarNumero(0, 5);
document.body.style.backgroundImage = `url(${bandas[i].imagem})`;