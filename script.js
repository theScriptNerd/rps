console.log( 'time for some rps coding, innit?');

function users(){
    const userChoice = prompt('rock, paper or scissors?');
    return userChoice.toLowerCase()
}
const user = users();

function computerThings() {
    const getComputerChoice = ['rock', 'paper', 'scissors'];
    return getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];
}
const comp = computerThings();

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

function game(){
    console.log('Welcome')
    let playerScore = 0;
    let computerScore = 0;
    for(i = 0; i < 5; i++){
        const user = users();
        const comp = computerThings();
        console.log(playground(user,comp));
        console.log('------');    //for spacing between rounds
        if(checkWinner(user,comp) == `Player`){
            playerScore++;
        }
        else if(checkWinner(user,comp) == `Computer`){
            computerScore++;
        }
    }
    console.log(`Game Over`)
    if(playerScore > computerScore){
        console.log(`You Win!`)
    } 
    else if(playerScore < computerScore){
        console.log(`Computer Wins!`)
    }
    else {
        console.log(`We Have a Tie`)
    }
}

game()