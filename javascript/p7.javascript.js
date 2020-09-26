let order = [];
let ClickedOrder = [];
let score = 0;

/* 0 = verde
   1 = vermelho
   2 = amarelo
   3 = azul  */

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

/* Cria ordem aleatoria de cores */
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    ClickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
 
/* Acende a próxima cor */
let lightColor = (Element, Number) => {
    Number = Number * 500;
    setTimeout(() => {
        Element.classList.add('selected');
    }, Number - 250);
    setTimeout(() => {
        Element.classList.remove('selected');
    });
}

/* Checa se os botões clicados são os mesmos da ordem gerada no jogo */
let checkOrder = () => {
    for(let i in ClickedOrder) {
        if(ClickedOrder[i] != order[i]) {
            gameover();
            break;
        }
    }
    
    if(ClickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextlevel();
    }
}

/* Função para o click do usuario */
let click = (color) => {
    ClickedOrder[ClickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

/* Função que retorna a cor */
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

/* Funçaõ para próximo nivel do jogo */
let nextlevel = () => {
    score++;
    shuffleOrder();
}

/* Função para Game Over */
let gameover = () => {
    alert("PONTUAÇÃO:" + `${score}!` + "\nVOCÊ PERDEU O JOGO!\nCLICK EM *OK* PARA INICIAR O JOGO!");
    order = [];
    ClickedOrder = [];

    playGame();
}

/* Funçaõ para iniciar o Jogo */
let playGame = () => {
    alert('BEM VINDO AO GENIUS! INICIANDO UM NOVO JOGO!');
    score = 0;

    nextlevel();
}

/* Eventos de click para as cores */
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

/* Inicio do Jogo */
playGame();