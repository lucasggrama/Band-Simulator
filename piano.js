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
let subtrai = document.querySelector('#subtrai');
let soma = document.querySelector('#soma');
let link = document.querySelector('a');
let recorde = document.querySelector('#recorde')

let doremifa = [18, 19, 20, 21, 25, 21, 21, 25, 18, 19, 18, 19, 25, 19, 19, 25, 18, 22, 21, 20, 25, 20, 20, 18, 19, 20, 21, 25, 21, 21];
let nonap1 = [17, 17, 18, 19, 19, 18, 17, 16, 15, 15, 16, 17, 17, 25, 16, 16, 17, 17, 18, 19, 19, 18, 17, 16, 15, 15, 16, 17, 16, 25, 15, 15];
let jinglebell = [17, 17, 17, 25, 17, 17, 17, 25, 17, 19, 15, 16, 17, 25, 25, 25, 18, 18, 18, 25, 17, 17, 17, 25, 16, 17, 16, 17, 16, 25, 19, 17, 17, 17, 25, 17, 17, 17, 25, 17, 19, 15, 16, 17, 25, 18, 18, 18, 25, 18, 17, 17, 25, 19, 19, 18, 16, 15];
let asabranca = [15, 16, 17, 25, 19, 25, 19, 25, 17, 25, 18, 25, 25, 25, 18, 15, 16, 17, 19, 25, 19, 25, 18, 17, 17, 25, 15, 15, 16, 17, 19, 25, 19, 18, 17, 15, 18, 25, 25, 25, 17, 17, 16, 16, 25, 17, 25, 16, 16, 15, 15];
let canetaazul = [16, 19, 19, "06", 25, 25, 16, 17, 17, 16, 25, 25, 16, 19, 19, "06", 25, 15, 16, 17, 16, 16, 25, "03"];
let placarContainer = document.querySelector('#placar-header');
let placarEl = document.querySelector('#placar-piano');
placar = 0;
let dificuldade = document.querySelector('#dificuldade');

// variavel para parar a musica caso perca
let musica = [], music = [];
let tituloMusica = document.querySelector('#botao1')

/*tituloMusica.addEventListener('click', () => {
    ++idmus;
    idmus %= 5;
    idchange(idmus);
})*/
if(localStorage.getItem('placar') == 0){}

idchange(idmus)
soma.addEventListener('click', () => {
    idmus = (idmus + 1) % 5;
    idchange(idmus);
}
);
subtrai.addEventListener('click', () => {
    idmus -= 1;
    if(idmus == -1)
        idmus = 4;
    idchange(idmus);
}
);
// definir recorde
if(localStorage.getItem('recorde') == null)
    recorde.innerHTML = 'Recorde: 0'
else
    recorde.innerHTML = 'Recorde: ' + localStorage.getItem('recorde');
function idchange(idm) {
    if (idm == 0) {
        musica = doremifa;
        tituloMusica.innerHTML = "Do re mi fa"
        dificuldade.innerHTML = "Dificuldade: Fácil"

        
    }
    else if(idm == 4)
    {
        musica = canetaazul;
        tituloMusica.innerHTML = "Caneta azul";
        dificuldade.innerHTML = "Dificuldade: 🖊️";
    }
    else if (idm == 1) {
        musica = jinglebell;
        tituloMusica.innerHTML = "Bate o Sino (Jingle Bells)";
        dificuldade.innerHTML = "Dificuldade: Fácil"
    }
    else if (idm == 2) {
        musica = nonap1;
        tituloMusica.innerHTML = "9º Sinfonia de Bethoven";
        dificuldade.innerHTML = "Dificuldade: Médio";
    }
    else if(idm == 3) {
        musica = asabranca;
        tituloMusica.innerHTML = "Asa Branca"
        dificuldade.innerHTML = "Dificuldade: Difícil"
    }
}

botaoJogar.addEventListener('click', () => {
    menu.classList.add("none");
    pia.classList.remove("none");

    voltar.style.display = 'block';
    placarContainer.style.display = 'flex';

    for (let i = 0; i < musica.length; i++)
        if (musica[i] != 25)
            music.push(musica[i]);

    play(musica.length - 1);
    
})

voltar.addEventListener('click', () => {
    err = 0;
    menu.classList.remove("none");
    pia.classList.add("none");
    voltar.style.display = 'none';
    placarContainer.style.display = 'none';
    window.location.reload(true);  
})

let containerFimEl = document.querySelector("#fim-de-jogo");

function erro(id) {
    window.location.reload(true);  
    alert("Ahh! Você Perdeu! 😫");
    if(placar > localStorage.getItem('recorde') || localStorage.getItem('recorde') == null)
    {
        alert("Novo recorde!");
        localStorage.setItem('recorde', placar);
    }
}
function fim() {
    placar += 100;
    alert("Boaaa! Você venceu e é SENSACIONAL! 😄");
    if(placar > localStorage.getItem('recorde') || localStorage.getItem('recorede') == null)
    {
        alert("Novo recorde!")
        localStorage.setItem('recorde', placar)
    }
    placarEl.innerHTML = placar;
    localStorage.setItem('placar', placar);
    window.location.reload(true);
}
let err = 1;
let tam;
function tocar(id, clique) {
    if (clique == 1)
        strUsuario.push(id);

    let tocada = document.getElementById(id);
    let url = 'piano/' + id + '.mp3'
    if(clique != 1)
        tocada.classList.add("tocando");
    new Audio(url).play();
    if(clique != 1)
    setTimeout(() => {
        tocada.classList.remove("tocando");
    }, 500);
    if (clique == 1) {
        tam = strUsuario.length - 1;
        if (strUsuario[tam] != music[tam])
        {
            tocada.classList.add("erro");
            setTimeout(erro, 500);
        }
        else {
            if(dificuldade.innerHTML == "Dificuldade: Fácil")
                placar += 10;
            else if(dificuldade.innerHTML == "Dificuldade: Médio")
                placar += 15;
            else
                placar += 20;
            placarEl.innerHTML = placar;
            tocada.classList.add("acerto");
            setTimeout(() => {
                tocada.classList.remove("acerto");
            }, 500);
        }
        if (strUsuario.length == music.length)
        {
            setTimeout(fim, 500)
        }
    }
}
function pausecomp(millis) {
    setInterval(() => { ; }, millis);
}

// do == 18
function intervaloJogador(limite) {

    teclaPiano.forEach((tecla, i) => {
        const number = i < 9 ? '0' + (i + 1) : (i + 1);
        let x = 0;
        tecla.addEventListener('click', () => {
            tocar(number)
            if (number == musica[x]) {
                alert('correto');
                x++;
            }
            else {
                alert('errado');
            }
        })

    })
}

function play(limite) {
    if (limite == undefined)
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

function estahcerto(musica, jogador) {
    for (let i = 0; i < jogador.length; i += 2)
        if (musica[i] != jogador[i]) {
            return false;
        }

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let a = 0;

function tocarTecla(tecla, i) {
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    tecla.addEventListener('click', () => tocar(number));
    return number;
}

teclaPiano.forEach((tecla, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    tecla.addEventListener('click', () => tocar(number, 1));

})
