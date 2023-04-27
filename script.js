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

console.log(getComputerChoice());