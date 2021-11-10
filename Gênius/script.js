let order = [];
let clickedOrder = [];
let score = 0;

// 0 = blue, 1 = yellow, 2 = red e o 3 = green.

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

//Cria a ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1); 
    }
}

//Para iluminar o cor que foi sorteada
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//verifica se você clicou na cor certa
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou!! Iniciando próximo nível`);
        nextLevel();
    }
}

//Função para o clique do jogador.
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)
}

//Criando a função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return blue;
    }
    else if(color == 1){
        return yellow;
    }
    else if(color == 2){
        return red;
    }
    else if(color == 3){
        return green;
    }
}

//Função próximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função perdedor
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert(`Bem vindo ao Genesis! Iniciando novo jogo!`)
    score = 0;

    nextLevel();
}

blue.onclick = () => click(0);
yellow.onclick = () => click(1);
red.onclick = () => click(2);
green.onclick = () => click(3);

blue.addEventListener('click', click(0));
yellow.addEventListener('click', click(1));
red.addEventListener('click', click(2));
green.addEventListener('click', click(3));

playGame();