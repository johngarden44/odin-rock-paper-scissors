let computerChoice;
let playerChoice;

//getComputerChoice returns the computer's randomized selction of 
//"Rock", "Paper", or "Scissors"
//I realize that I could just use Math.random as a standalone, 
//but I was curious how a getRandomIntInclusive type of function worked

function getComputerChoice() {
    let min = 1;
    let max = 3;
    switch (Math.floor(Math.random() * 3 + 1)) {
    case 1:
        computerChoice = 'rock';
        return 'rock';
    case 2:
        computerChoice =  'paper'
        return 'paper';
    case 3:
        computerChoice = 'scissors';
        return 'scissors';
    }
}

//getPlayerChoice prompts user for "rock", "paper", or "scissors"
//and returns the entered value (will be updated to verify input)

function getPlayerChoice() {
    playerChoice = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();
    return playerChoice;
    }

//game compares computerChoice to playerChoice and returns a string declaring a winner

function game(computerChoice, playerChoice) {
    if (computerChoice === 'rock') {
        switch (playerChoice) {
            case 'scissors':
                return 'rock beats scissors, computer wins';
            case 'paper':
                return 'paper beats rock, player wins';
            case 'rock':
                return 'draw';
        }  
    }
    else if (computerChoice === 'paper') {
        switch (playerChoice) {
            case 'scissors':
                return 'scissors beats paper, player wins';
            case 'paper':
                return 'draw';
            case 'rock':
                return 'paper beats rock, computer wins';
        }
    }
    else if (computerChoice === 'scissors') {
        switch (playerChoice) {
            case 'scissors':
                return 'draw';
            case 'paper':
                return 'scissors beats paper, computer wins';
            case 'rock':
                return 'rock beats scissors, player wins';
        }
    }
}

//runs functions to determine player and computer selections

getComputerChoice();
getPlayerChoice();

//outputs to screen the player and computer selections and declares winner

console.log(`computer picks ${computerChoice}`);
console.log(`player picks ${playerChoice}`);
console.log(game(computerChoice, playerChoice));