// menu jogo
let pia = document.querySelector(".piano")
let voltar = document.querySelector('#retornaMenu');
pia.classList.add("none");
let menu = document.querySelector('#menu');
let botaoJogar = document.querySelector('#botao');
const teclaPiano = document.querySelectorAll('.tecla');
let time = 0;
let strUsuario = [];
let idmus = 0;
let doremifa = [18, 19, 20, 21, 25, 21, 21, 25, 18, 19, 18, 19, 25, 19, 19, 25, 18, 22, 21, 20,  25, 20, 20, 18, 19, 20, 21, 25, 21, 21];
let nonap1 = [17, 17, 18, 19, 19, 18, 17, 16, 15, 15, 16, 17,17, 25, 16, 16];
let nonap2 = [17, 17, 18, 19,19, 18, 17, 16, 15, 15, 16];

placar = parseInt(localStorage.getItem('placar'));

// variavel para parar a musica caso perca
let musica = [], music = [];
let tituloMusica = document.querySelector('#botao1')
idchange(0);
tituloMusica.addEventListener('click', () => {
    ++idmus;
    idmus %= 2;
    idchange(idmus);
})
function idchange(idm){
    if(idm == 0)
    {
        musica = doremifa;
        tituloMusica.innerHTML = "Do re mi fa"

    }
    else 
    {
        musica = nonap1;
        tituloMusica.innerHTML = "Nona Sinfonia";
    }
}

botaoJogar.addEventListener('click', () => {
    menu.classList.add("none");
    pia.classList.remove("none");
    voltar.style.display = 'block';
    for(let i = 0; i < musica.length;i++)
    if(musica[i] != 25)
        music.push(musica[i]);
    play(musica.length - 1);
})
voltar.addEventListener('click', () =>{
    err = 0;
    menu.classList.remove("none");
    pia.classList.add("none");
    voltar.style.display = 'none';
})

function erro() {
    strUsuario = [];
    menu.classList.remove("none");
    pia.classList.add("none");
    voltar.style.display = 'none';
    alert("Você perdeu");
    err = 0;
}
function fim() {
    strUsuario = [];
    menu.classList.remove("none");
    pia.classList.add("none");
    voltar.style.display = 'none';
    alert("Você venceu!");
    err = 0;
    placar = placar + 100;
    localStorage.setItem('placar', placar);
}
let err = 1;
let tam;
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
    if(clique == 1)
    {
        tam = strUsuario.length - 1;
        if(strUsuario[tam] != music[tam])
            erro();
        if(strUsuario.length == music.length)
            fim();
    }
}
function pausecomp(millis) {
    setInterval(() => {;}, millis);
}
// do == 18
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
function play(limite) {
    if(limite == undefined)
        limite = 23;
    let i = 0;
    let tocaDoremi = setInterval(() => {
        if (i === limite || err == 0) {
            err = 1;
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
function tocarTecla(tecla, i) {
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    tecla.addEventListener('click', () => tocar(number));
    return number;
}
teclaPiano.forEach((tecla, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    tecla.addEventListener('click', () => tocar(number, 1));

})
