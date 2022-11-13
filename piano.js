const teclaPiano = document.querySelectorAll('.tecla');
let time = 0;

function tocar(id) {
    let tocada = document.getElementById(id);
    let url = 'piano/' + id + '.mp3'
    tocada.classList.add("tocando");
    new Audio(url).play();
    setTimeout(() => {
        tocada.classList.remove("tocando");
    }, 500);
}

function teste(number) {
    alert(number);
}

function pausecomp(millis) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < millis);
}

let musica = [18, 19, 20, 21, 25, 21, 21, 25, 18, 19, 18, 19, 25, 19, 19, 25, 18, 22, 21, 20, 25, 20, 20, 25, 18, 19, 20, 21, 25, 21, 21, -1];

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
function jogar() {

    for (let x = 2; x <= musica.length ; x += 2) {
        doremi(x);
        let intervalo = setInterval(() => {
            intervaloJogador(x);
        }
            , x * 10500)
    }
}

function doremi(limite) {
    // let x = [17, 17, 18, 19, 19, 18, 17, 16, 15, 15, 16, 17, 17, 16, 16, 25, 17, 17, 18, 19, 19, 18, 17, 16, 15, 15, 16];

    let i = 0;
    /*for(let i = 0; i < 3; i++)
    {
        pausecomp(500);
        tocar(x[i]);
    }*/
    let tocaDoremi = setInterval(() => {
        if (i == limite) {
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



teclaPiano.forEach((tecla, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    tecla.addEventListener('click', () => tocar(number));

})