function gerarNumero(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
let bandas = [
    {
        imagem: './imgs/ghost.png',
        musica: 'Dance Macabre - Ghost',
        audio: 'audio/ghost.mp3',
        link: 'https://www.youtube.com/watch?v=aGUwV0yS-L4'
    },
    {
        imagem: './imgs/stones.png',
        musica: 'Paint it, Black - The Rolling Stones',
        audio: 'audio/stones.mp3',
        link: 'https://www.youtube.com/watch?v=O4irXQhgMqg'
    },
    {
        imagem: './imgs/mayhem.png',
        musica: 'Freezing Moon - Mayhem',
        audio: 'audio/mayhem.mp3',
        link: 'https://www.youtube.com/watch?v=9emO9qo4FwE'
    },
    {
        imagem: './imgs/queen.png',
        musica: 'Don`t Stop Me Now - Queen',
        audio: 'audio/queen.mp3',
        link: 'https://www.youtube.com/watch?v=HgzGwKwLmgM'
    },
    {
        imagem: './imgs/metallica.png',
        musica: 'Sad But True - Metallica',
        audio: 'audio/metallica.mp3',
        link: 'https://www.youtube.com/watch?v=A8MO7fkZc5o'
    },
]
let opçõesPerfil = [
    {
        imagem: './imgs/ghostPerfil.jpg'
    },
    {
        imagem: './imgs/stonesPerfil.jpg'
    },
    {
        imagem: './imgs/mayhemPerfil.jpg'
    },
    {
        imagem: './imgs/queenPerfil.jpg'
    },
    {
        imagem: './imgs/metallicaPerfil.jpg'
    },
    {
        imagem: './imgs/pngegg.png'
    }
]
let perfisDeUsuario = [
    {
        nome: 'Anônimo',
        imagem: './imgs/pngegg.png',
        pontuacao: 0
    }
];
let perfilSelecao = [];
let perfilInicial = document.querySelector('#inicial');
perfilSelecao.push(perfilInicial);
perfilInicial.addEventListener('click', selecionarPerfil);

let volumeEl = document.querySelector("#reproducao-musica");
volumeEl.volume = 0.2;

let i = gerarNumero(0, 5);
if (i === localStorage.getItem('imagemAleatoria')) {
    geraNovamente();
}
function geraNovamente() {
    if (i == localStorage.getItem('imagemAleatoria')) {
        i = gerarNumero(0, 5);
        geraNovamente();
    }
}
geraNovamente();

localStorage.setItem('imagemAleatoria', i);
let imagemBackground = document.querySelector('#bodyInicial');
let musicaLink = document.querySelector('#musica')
imagemBackground.style.backgroundImage = `url(${bandas[i].imagem})`;
musicaLink.href = bandas[i].link;

//   ------------------------------------- audio ---------------------------------------------------------

let musica = document.querySelector('#musica');
let audio = document.querySelector('audio');
musica.innerHTML = bandas[i].musica;
audio.src = bandas[i].audio;
audio.play();

// ------------------------------------- botoes ---------------------------------------------------------
$('#sobre').css({ display: "none" });
$('#container-perfil').css({ display: "none" });
$('#placar').css({ display: "none" });
$('#newPerfil').css({ display: "none" });

function aparecerDiv(e) {
    if (e.currentTarget.innerHTML == "Sobre" || e.currentTarget == fecharSobre){
        if (sobreEl.style.display == "none")
            sobreEl.style.display = "block";
        else
            sobreEl.style.display = "none";
    }
    else if (e.currentTarget.innerHTML == "Placar" || e.currentTarget == fecharPlacar) {
        if (placarEl.style.display == "none")
            placarEl.style.display = "block";
        else
            placarEl.style.display = "none";
    }
    else if (e.currentTarget == corrigirBotao) {
        if (perfilNovoEl.style.display == "none")
            perfilNovoEl.style.display = "block";
        else
            perfilNovoEl.style.display = "none";
    }
    else if (e.currentTarget.innerHTML != "Jogar") {
        if (perfilEL.style.display == "none")
            perfilEL.style.display = "grid";
        else
            perfilEL.style.display = "none";
    }
}

let fecharPlacar = document.querySelector('#botaoPlacarX');
let fecharSobre = document.querySelector('#botaoSobreX');

let corrigirBotao = document.querySelector('#novoPerfil');
let botaoDiv = document.querySelectorAll('.botoesDiv');
let sobreEl = document.querySelector('#sobre');
let placarEl = document.querySelector('#placar');
let perfilEL = document.querySelector('#container-perfil');
let perfilNovoEl = document.querySelector('#newPerfil');

for (botoes of botaoDiv) {
    botoes.addEventListener('click', aparecerDiv);
}

let botaoPerfil = document.querySelector('#perfil');
let botaoNewPerfil = document.querySelector('#novoPerfil')
botaoPerfil.addEventListener('click', aparecerDiv);
botaoNewPerfil.addEventListener('click', aparecerDiv);


// fim botoes
// ------------------------------------- Imagens ---------------------------------------------------------

function alteraImagemPerfil() {
    imagemPerfil.src = bandas[i].imagem;
}

let imagemPerfil = document.querySelector('#imagemPerfil');
imagemPerfil.addEventListener('click', alteraImagemPerfil);

function imagemPadrao(imagemVetor, string) {
    for (imagem of imagemVetor) {
        imagem.src = string;
    }
}

let imagens = document.querySelectorAll('.imagemDoPerfil');
imagemPadrao(imagens, 'imgs/pngegg.png');

// ------------------------------------- selecionar Perfil ----------------------------------------------------
function atualiza(e){
    imagemPadrao(imagens,perfisDeUsuario[e].imagem);
    seuNome.innerHTML = perfisDeUsuario[e].nome;
    localStorage.setItem('placar', perfisDeUsuario[e].pontuacao);
    pontuacaoEl.innerHTML = 'Sua pontuação: ' + localStorage.getItem('placar');
}
let perfilAtual = 0;

function selecionarPerfil(e){
    for(al of perfilSelecao)
        al.classList.remove('perfilSelecionado');
    let perfilSelecionado = e.currentTarget;
    perfilSelecionado.classList.add('perfilSelecionado');
    for(let i = 0; i < perfilSelecao.length; i++){
        if(perfilSelecao[i] == perfilSelecionado){
            perfilAtual = i;
            atualiza(perfilAtual);
        }
    }
}
// ------------------------------------- criar Perfil ---------------------------------------------------------
function criaPerfil() {
    let imgAdd;
    if (j == 0)
        imgAdd = opçõesPerfil[opçõesPerfil.length - 1].imagem;
    else
        imgAdd = opçõesPerfil[j - 1].imagem;

    // Container do novo Perfil
    let containerPerfis = document.querySelector('#container-perfils-salvos')
    let novoPerfil = document.createElement('div');
    containerPerfis.appendChild(novoPerfil);
    novoPerfil.classList.add('perfilAdd');
    novoPerfil.addEventListener('click', selecionarPerfil);

    // imagem do novo Perfil
    let novaImagem = document.createElement('img');
    novaImagem.src = imgAdd;
    novoPerfil.appendChild(novaImagem);
    novaImagem.classList.add('imagemPerfisSalva');

    // nome do novo Perfil
    let novoNome = document.createElement('p');
    novoNome.innerHTML = inputNome.value;
    novoPerfil.appendChild(novoNome);
    novoNome.classList.add('textoPerfilAdd');

    let novo_perfil = {
        nome: inputNome.value,
        imagem: imgAdd,
        pontuacao: 0,
    };
    perfisDeUsuario.push(novo_perfil);
    perfilSelecao.push(novoPerfil);

}
function switchImage() {
    imagemPreviewEl.src = opçõesPerfil[j].imagem;
    if (j == opçõesPerfil.length - 1)
        j = 0;
    else
        j++;
}
let j = 0;
let pontuacaoEl = document.querySelector('#pontuação-perfil')
let inputNome = document.querySelector('#nomePerfil');
let seuNome = document.querySelector('#nomeAlteravel');
let imagemPreviewEl = document.querySelector('#previewPerfil');
$('#confirma-perfil').click(criaPerfil);
$('#switcher-imagem').click(switchImage);

// fim criar perfil