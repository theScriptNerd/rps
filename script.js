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

function playground(user,comp){
    if(user === comp) return 'tie';
    if ((user === 'rock' && comp === 'scissors') ||
    (user === 'paper' && comp === 'rock') ||
    (user === 'scissors' && comp === 'paper')) return 'you win';
    else {
        console.log('Comp, Wins')
    }
}
playground()