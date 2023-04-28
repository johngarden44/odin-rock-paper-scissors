//getComputerChoice returns the computer's randomized selction of 
//"Rock", "Paper", or "Scissors"
//I realize that I could just use Math.random as a standalone, 
//but I was curious how a getRandomIntInclusive type of function worked

function getComputerChoice() {
    let min = 1;
    let max = 3;
    switch (Math.floor(Math.random() * 3 + 1)) {
    case 1:
        return "Rock";
    case 2:
        return "Paper";
    case 3:
        return "Scissors";
    }
}

//getPlayerChoice prompts user for "rock", "paper", or "scissors"
//and returns the enter value (will be updated to verify input)

function getPlayerChoice() {
return prompt("Enter 'rock', 'paper', or 'scissors'");
}

console.log(getPlayerChoice());