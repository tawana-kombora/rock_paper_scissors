// console.log('sup, hoe');

const player = function (){
    let choice = prompt('Rock, Paper, Scissors? ').toLowerCase();
    return choice;
}

function computerPlay(){
    let play = Math.floor((Math.random() * 100) + 1);
    // console.log(play);
    if (play <= 33){
        return 'rock';
    } else if (play > 33 && play < 66) {
        return'paper';
    } else if (play > 66) {
        return 'scissors';
    }
}

const runGame = function (computerChoice, playerChoice){
    let result = '';
    if (computerChoice === 'rock' && playerChoice === 'scissors'){
        result = `I win!\nI chose: ${computerChoice} and you chose: ${playerChoice}`;
        console.log(result);
    } else if (computerChoice === 'rock' && playerChoice === 'paper'){
        result =`I lost!\nI chose: ${computerChoice} and you chose: ${playerChoice}`;
        console.log(result);
    }  else if (computerChoice === 'paper' && playerChoice === 'rock'){
        result = `I win, :)!\nI chose: ${computerChoice} and you chose: ${playerChoice}`;
        console.log(result);
    } else if (computerChoice === 'paper' && playerChoice === 'scissors'){
        result = `I lost, :|!\nI chose: ${computerChoice} and you chose: ${playerChoice}`;
        console.log(result);
    } else if (computerChoice === 'scissors' && playerChoice === 'paper'){
        result = `Hah! I win!\nI chose: ${computerChoice} and you chose: ${playerChoice}`;
        console.log(result);
    } else if (computerChoice === 'scissors' && playerChoice === 'rock'){
        result = `:[\nhmmmmm\nSo I lost! because I chose: ${computerChoice} and you chose: ${playerChoice}`;
        console.log(result);
    } else if (computerChoice === playerChoice){
        result = `It's a tie!\nI chose ${computerChoice} and you chose: ${playerChoice}.`;
        console.log(result);
    }
}

// console.log(`I picked ${computerPlay()}`)
runGame(computerPlay(), player());