const teclaPiano = document.querySelectorAll('.tecla');
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
teclaPiano.forEach((tecla, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    tecla.addEventListener('click', () => tocar(number))

})