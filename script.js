//Randomly chooses rock, paper or scissors

function computerPlay() {
    let array = ["rock", "paper", "scissors"];
    let item = array[Math.floor(Math.random() * array.length)];
    return item;
}

//Plays a round of rock, paper, scissors
    //Could probably be written smaller

function playGame(playerSelection, computerSelection) {
    //Both players pick the same
    if (playerSelection === computerSelection) {
        return("It's a draw!");
        //Player picks rock
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return("Congratulations! Rock beats Scissors");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return("You lose! Paper beats Rock");
        //Player picks scissors
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return("Congratulations! Scissors beats Paper");    
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return("You lose! Rock beats Scissors");  
        //Player picks paper
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return("Congratulations! Paper beats Rock");  
    } else {
        return("You lose! Scissors beats Paper");  
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playGame(playerSelection, computerSelection));

function game() {
    function playRound() {

    }
}



