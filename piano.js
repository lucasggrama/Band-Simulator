const teclaPiano = document.querySelectorAll('.tecla');
function tocar(id) {
    console.log(id);
    let url = 'piano/' + id + '.mp3';
    new Audio(url).play();
}
function teste(number) {
    switch(number) {
        case 1:
            alert("do");
    }
}
teclaPiano.forEach((tecla, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1)
    tecla.addEventListener('click', () => tocar(number))
})