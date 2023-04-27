function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(min);
    console.log(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//I realize that I could just use Math.random as a standalone, 
//but I was curious how a getRandomIntInclusive function worked

console.log(getRandomIntInclusive(1,3))