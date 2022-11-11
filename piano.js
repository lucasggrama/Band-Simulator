const teclaPiano = document.querySelectorAll('.tecla');
function tocar(id) {
    console.log(id);
    conts url = 'piano/key' + id + '.mp3';
    new Audio(url).play();
}
teclaPiano