let computerChoice;
let playerChoice;
let gameCount = 0;
let playerScore = 0;
let computerScore = 0;


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
                computerScore++;
                return 'rock beats scissors, computer wins';
            case 'paper':
                playerScore++;
                return 'paper beats rock, player wins';
            case 'rock':
                return 'draw';
        }  
    }
    else if (computerChoice === 'paper') {
        switch (playerChoice) {
            case 'scissors':
                playerScore++;
                return 'scissors beats paper, player wins';
            case 'paper':
                return 'draw';
            case 'rock':
                computerScore++;
                return 'paper beats rock, computer wins';
        }
    }
    else if (computerChoice === 'scissors') {
        switch (playerChoice) {
            case 'scissors':
                return 'draw';
            case 'paper':
                computerScore++;
                return 'scissors beats paper, computer wins';
            case 'rock':
                playerScore++;
                return 'rock beats scissors, player wins';
        }
    }
}

while (gameCount<5) {

//runs functions to determine player and computer selections

getComputerChoice();
getPlayerChoice();

//outputs to screen the player and computer selections and declares winner

console.log(`computer picks ${computerChoice}`);
console.log(`player picks ${playerChoice}`);
console.log(game(computerChoice, playerChoice));
console.log('');
gameCount++;
}

//delcares a winner after 5 rounds

if (playerScore>computerScore) {
    console.log('You won the best of 5 rounds');
}
else if (playersScore<computerScore) {
    console.log('You lost to a computer, how sad');
}
else console.log('After 5 rounds, it was a tie');