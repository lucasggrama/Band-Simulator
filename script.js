function gerarNumero(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
let bandas = [
    {
        imagem: "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2508495.jpg&f=1&nofb=1&ipt=aee8d3a84421f0fa24cf3d8998766d378de9c87eeec68426eec7232f8341051c&ipo=images')"
    }
];
let i = gerarNumero(0, 5);
document.body.style.backgroundImage = "url(" + bandas[0].imagem + ")";