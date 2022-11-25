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
let nonap1 = [17, 17, 18, 19, 19, 18, 17, 16, 15, 15, 16, 17,17, 25, 16, 16, 17, 17, 18, 19,19, 18, 17, 16, 15, 15, 16, 17, 16, 25, 15, 15];
let jinglebell = [17, 17, 17, 25, 17, 17, 17, 25, 17, 19, 15, 16, 17, 25, 25, 25, 18, 18, 18, 25, 17, 17, 17, 25, 16, 17, 16, 17, 16, 25, 19, 17, 17, 17, 25, 17, 17, 17, 25, 17, 19, 15, 16, 25, 18, 18, 18, 25, 18, 17, 17, 25, 18, 17, 15, 14];
let asabranca = [15, 16, 17, 25, 19, 25, 19, 25, 17, 25, 18, 25, 25, 25, 18, 15, 16, 17,  19, 25, 19, 25, 18, 17, 17, 25, 15, 15, 16, 17, 19, 25, 19,  18, 17, 15, 18, 25, 25, 25, 17, 17, 16, 16, 25];
placar = parseInt(localStorage.getItem('placar'));

// variavel para parar a musica caso perca
let musica = [], music = [];
let tituloMusica = document.querySelector('#botao1')
idchange(0);
tituloMusica.addEventListener('click', () => {
    ++idmus;
    idmus %= 4;
    idchange(idmus);
})
function idchange(idm){
    if(idm == 0)
    {
        musica = doremifa;
        tituloMusica.innerHTML = "Do re mi fa"

    }
    else if(idm == 1)
    {
        musica = jinglebell;
        tituloMusica.innerHTML = "Bate o Sino (Jingle Bells)";
    }
    else if(idm == 2)
    {
        musica = asabranca;
        tituloMusica.innerHTML = "Asa Branca"
    }
    else 
    {
        musica = nonap1;
        tituloMusica.innerHTML = "9º Sinfonia de Bethoven";
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
    alert("Você perdeu");
    window.location.reload(true);
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
    }, 400)
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
