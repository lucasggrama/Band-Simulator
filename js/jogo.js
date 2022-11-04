import CenaJogo from "./js/cena-jogo";
import CenaCarregamento from "./js/cena-carregamento";

const config = {
    type: Phaser.AUTO;
    width: 800px,
    heigth: 600px,
    parent: 'jogo',
    scene: [CenaCarregamento, CenaJogo]
}

const jogo = new Phaser.Game(config);