let choices = document.querySelectorAll('.choice');
let score = document.querySelector('#score');
let modal = document.querySelector('.modal');
let result = document.querySelector('#result');
let restart = document.querySelector('#restart');
let scoreBoard = { 
    player: 0,
    computer: 0
};

// Play Game

function play(event) {
    restart.style.display = 'inline-block';
    let playerChoice = event.target.id;
    let computerChoice = getComputerChoice();
    let winner = getWinner(playerChoice,computerChoice);
    showWinner(winner, computerChoice)
}

//Get Computer Choice

function getComputerChoice() {
    let random = Math.random();
    if(random < 0.34) return 'rock'
    if(random <= 0.67) return 'paper'
    return 'scissors'
}

//getWinner

function getWinner(player, computer) {
    if (player === computer) return 'draw'
    if (player === 'rock'){
        if(computer === 'paper'){
            return 'computer'
        } else{
            return 'player'
        }
    }
    if(player === 'paper'){
        if(computer === 'scissors'){
             return 'computer'
        } else{
            return 'player'
        }
    }
    if(player === 'scissors'){
        if(computer === 'rock'){
            return 'computer'
        }else{
            return 'player'
        }
    }
}

//showWinner

function showWinner(winner, computerChoice) {
    if(winner === 'player'){
        scoreBoard.player++
        result.innerHTML = ` 
        <h1 class = "text-win">You win</h1>
        <i class = fas fa-hand-${computerChoice} fa-10x"</i>
        <p>Computer chose <strong>${computerChoice.toUpperCase()}<strong></p>
        `
    } else if(winner === 'computer'){
        scoreBoard.computer++
        result.innerHTML = `
        <h1 class = "text-lose">You lost</h1>
        <i class = "fas fa-hand-${computerChoice} fa-10x"</i>
        <p>Computer chose <strong>${computerChoice.toUpperCase()}<strong></p>
        `
    }
    else{
        result.innerHTML = `
        <h1>It is a draw</h1>
        <i class = "fas fa-hand-${computerChoice} fa-10x"</i>
        <p>Computer chose <strong>${computerChoice.toUpperCase()}<strong></p>
        `
    }

    score.innerHTML = `
        <p> Player: ${scoreBoard.player} </p>
        <p> Computer: ${scoreBoard.computer}</p>
    `

    modal.style.display = 'block'
}

//restartGame

function restartGame() {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML = `
        <p> Player: ${scoreBoard.player} </p>
        <p> Computer: ${scoreBoard.computer}</p>
    `
}

//createModal

function clearModal(event) {
    if(event.target == modal){
        modal.style.display = 'none'
    }
}

//Event Listener

choices.forEach(choice => {
    return choice.addEventListener('click', play)
});

window.addEventListener('click', clearModal)
restart.addEventListener('click', restartGame)