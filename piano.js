// menu jogo
let pia = document.querySelector(".piano")
pia.classList.add("none");
let menu = document.querySelector('#menu');
let botaoJogar = document.querySelector('#botao');
const teclaPiano = document.querySelectorAll('.tecla');
let time = 0;
let strUsuario = [];
botaoJogar.addEventListener('click', () => {
    menu.classList.add("none");
    pia.classList.remove("none");
})
function erro() {
    strUsuario = [];
    menu.classList.remove("none");
    pia.classList.add("none");
    alert("Você perdeu");
}

function tocar(id, clique) {
    if(clique == 1)
        strUsuario.push(id);
    let tocada = document.getElementById(id);
    let url = 'piano/' + id + '.mp3'
    tocada.classList.add("tocando");
    new Audio(url).play();
    setTimeout(() => {
        tocada.classList.remove("tocando");
    }, 500);
    let tam = strUsuario.length - 1;
    if(strUsuario[tam] != musica[tam])
        erro();
}
function pausecomp(millis) {
    setInterval(() => {;}, millis);
}
let musica = [18, 19, 20, 21, 21, 21, 18, 19, 18, 19, 19, 19, 18, 22, 21, 20, 20, 20, 18, 19, 20, 21, 21, 21, -1];

function intervaloJogador(limite) {
    
    teclaPiano.forEach((tecla, i) => {
        const number = i < 9 ? '0' + (i + 1) : (i + 1);
        let x=0;
        tecla.addEventListener('click', () => {tocar(number)
            if (number == musica[x]){
                alert('correto');
                x++;
            }
            else{
                alert('errado');
            }
        })
    
    })
}
function doremi(limite) {
    if(limite == undefined)
        limite = 30;
    let i = 0;
    let tocaDoremi = setInterval(() => {
        if (i === limite) {
            clearInterval(tocaDoremi);
        }

        let tocada = document.getElementById(musica[i]);
        if (musica[i] == 25)
            ;
        else
            tocar(musica[i]);

        ++i;
    }, 700)
}
function estahcerto(musica, jogador)
{
    for(let i = 0; i < jogador.length; i += 2)
        if(musica[i] != jogador[i])
        {
            return false;
        }
    
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let a =0;

/*function usuarioDigitar(){
    //for (; i<blah)



    //habilito para digitar 
    if(i<blah)
    for(let j = 0; j < strUsuario.length)
    setTimeout(jogar, i * 1000);


}*/
function jogar() {
    doremi(30);
}
function tocarTecla(tecla, i) {
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    tecla.addEventListener('click', () => tocar(number));
    return number;
}
teclaPiano.forEach((tecla, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    tecla.addEventListener('click', () => tocar(number, 1));

})
