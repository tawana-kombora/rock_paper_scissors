// console.log('sup, hoe');

const playerSelection = function (){
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

function playRound(computerSelection, playerSelection  ){
    let result = '';
    if (computerSelection === 'rock' && playerSelection === 'scissors'){
        result = `I win!\n${computerSelection} beats ${playerSelection}`;
        return result;
    } else if (computerSelection === 'rock' && playerSelection === 'paper'){
        result =`I lost!\n${playerSelection} beats ${computerSelection}`;
        return result;
    }  else if (computerSelection === 'paper' && playerSelection  === 'rock'){
        result = `I win, :)\n${computerSelection} beats ${playerSelection}`;
        return result;
    } else if (computerSelection === 'paper' && playerSelection  === 'scissors'){
        result = `I lost, :|\n${playerSelection} beats ${computerSelection}`;
        return result;
    } else if (computerSelection === 'scissors' && playerSelection  === 'paper'){
        result = `Hah! I win!\n${computerSelection} beats ${playerSelection}`;
        return result;
    } else if (computerSelection === 'scissors' && playerSelection  === 'rock'){
        result = `I lost!\n${playerSelection} beats ${computerSelection}`;
        return result;
    } else if (computerSelection === playerSelection){
        result = `It's a tie!\n${computerSelection} doesn't beat ${playerSelection}`;
        return result;
    }
}

function playGame(){
    let scoreOne = playRound(computerPlay(), playerSelection())
    console.log(`Round 1: \n${scoreOne}`);
    let scoreTwo = playRound(computerPlay(), playerSelection())
    console.log(`Round 2: \n${scoreTwo}`);
    let scoreThree = playRound(computerPlay(), playerSelection())
    console.log(`Round 3: \n${scoreThree}`);
    let scoreFour = playRound(computerPlay(), playerSelection())
    console.log(`Round 4: \n${scoreFour}`);
    let scoreFive = playRound(computerPlay(), playerSelection());
    console.log(`Round 5: \n${scoreFive}`);

}
playGame();
// console.log(`I picked ${computerPlay()}`)
// console.log(playRound(computerPlay(), playerSelection()));