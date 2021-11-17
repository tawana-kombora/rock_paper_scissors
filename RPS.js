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
        result = `I win!\nI chose: ${computerSelection} and you chose: ${playerSelection  }`;
        return result;
    } else if (computerSelection === 'rock' && playerSelection === 'paper'){
        result =`I lost!\nI chose: ${computerSelection} and you chose: ${playerSelection  }`;
        return result;
    }  else if (computerSelection === 'paper' && playerSelection  === 'rock'){
        result = `I win, :)!\nI chose: ${computerSelection} and you chose: ${playerSelection  }`;
        return result;
    } else if (computerSelection === 'paper' && playerSelection  === 'scissors'){
        result = `I lost, :|!\nI chose: ${computerSelection} and you chose: ${playerSelection  }`;
        return result;
    } else if (computerSelection === 'scissors' && playerSelection  === 'paper'){
        result = `Hah! I win!\nI chose: ${computerSelection} and you chose: ${playerSelection  }`;
        return result;
    } else if (computerSelection === 'scissors' && playerSelection  === 'rock'){
        result = `hmmmmm\nSo I lost! because I chose: ${computerSelection} and you chose: ${playerSelection}`;
        return result;
    } else if (computerSelection === playerSelection){
        result = `It's a tie!\nI chose ${computerSelection} and you chose: ${playerSelection}.`;
        return result;
    }
}

// console.log(`I picked ${computerPlay()}`)
console.log(playRound(computerPlay(), playerSelection()));