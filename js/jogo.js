import CenaPontos from "./js/cena-pontos";
import CenaJogo from "./js/cena-jogo";
import CenaCarregamento from "./js/cena-carregamento";

const config = {
    type: Phaser.AUTO,
    parent: 'jogo',
    scene: [CenaCarregamento, CenaJogo, CenaPontos]
}

const jogo = new Phaser.Game(config);