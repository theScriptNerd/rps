console.log( 'time for some rps coding, innit?');

function users(){
    const userChoice = prompt('rock, paper or scissors?');
    return userChoice.toLowerCase()
}
let user = users();
console.log(user);

function computerThings() {
    const getComputerChoice = ['rock', 'paper', 'scissors'];
    return getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];
}
let comp = computerThings();
console.log(comp);

function checkWinner(user,comp){
    if(user === comp) return `tie`;
    if ((user === 'rock' && comp === 'scissors') ||
    (user === 'paper' && comp === 'rock') ||
    (user === 'scissors' && comp === 'paper')) return `Player`;
    else {
        return `Computer`;
    }
}

function playground(user,comp){
    const result = checkWinner(user,comp);
    if (result == 'tie'){
        return `It's a Tie`;
    }
    else if (result == 'Player'){
        return `You Win! ${user} beats ${comp}`;
    }
    else {
        return `You Lose! ${comp} beats ${user}`;
    }
}
console.log(playground(user,comp))