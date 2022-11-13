const teclaPiano = document.querySelectorAll('.tecla');
let time = 0;
function tocar(id) {
    let tocada = document.getElementById(id);
    let url = 'piano/' + id +'.mp3'
tocada.classList.add("tocando");
    new Audio(url).play();
    setTimeout(() => {
        tocada.classList.remove("tocando");
    }, 500);
}
function teste(number) {
alert(number);
}
function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

function doremi()
{
   // let x = [17, 17, 18, 19, 19, 18, 17, 16, 15, 15, 16, 17, 17, 16, 16, 25, 17, 17, 18, 19, 19, 18, 17, 16, 15, 15, 16];
       let x = [18, 19, 20, 21, 25, 21, 21, 25, 18, 19, 18, 19, 25, 19, 19, 25, 18, 22, 21, 20, 25, 20, 20, 25, 18, 19, 20, 21, 25, 21, 21, -1];

   let i = 0;
    /*for(let i = 0; i < 3; i++)
    {
        pausecomp(500);
        tocar(x[i]);
    }*/
    setInterval(() =>
    {
        let tocada = document.getElementById(x[i]);
        if(x[i] == 25)
            ;
        else
            tocada.click();
        
        ++i;
    }, 700)
}

    

teclaPiano.forEach((tecla, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    tecla.addEventListener('click', () => tocar(number))

})