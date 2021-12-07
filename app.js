function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

const rock = document.querySelector('#rock')
rock.addEventListener('click', () =>  {
    playerSelection = "rock";
    playRound();
    return;
});
const paper = document.querySelector('#paper')
paper.addEventListener('click', () =>  {
    playerSelection = "paper";
    playRound();
    return;
});
const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () =>  {
    playerSelection = "scissors";
    playRound();
    return;
});


let playerscore = document.querySelector("#playerscore");
let compscore = document.querySelector("#compscore");

playerscore = 0;
compscore = 0;

function updateScore() {
    document.getElementById("playerscore").textContent = "You: " + playerscore;
    document.getElementById("compscore").textContent = "Computer: " + compscore;
    if (playerscore == 5) {
        alert("You have beat the computer! Congratulations! Your score: 5. Computer Score: " +compscore);
        gameOver();
        return;
    }
    else if (compscore == 5) {
        alert("The computer has beat you. Better luck next time. Computer Score: 5. Your score: "+ playerscore);
        gameOver();
        return;
    }
}   

function gameOver () {
    playerscore = 0;
    compscore = 0;
    document.getElementById("playerscore").textContent = "You: " + playerscore;
    document.getElementById("compscore").textContent = "Computer: " + compscore;
}

function playRound () {
    let computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "scissors") 
    {
        document.getElementById("roundResult").textContent = "You win! You chose paper and the computer chose scissors!";
        playerscore++;
        updateScore();
    }
    else if (playerSelection === "rock" && computerSelection === "paper") 
    {
        document.getElementById("roundResult").textContent = "You lose! You chose rock and the computer chose paper!";
        compscore++;
        updateScore(); 
    }
    else if (playerSelection === "paper" && computerSelection === "rock") 
    {
        document.getElementById("roundResult").textContent = "You win! You chose paper and the computer chose rock!";
        playerscore++;
        updateScore();
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") 
    {
        document.getElementById("roundResult").textContent = "You lose! You chose paper and the computer chose scissors!";
        compscore++;
        updateScore();
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") 
    {
        document.getElementById("roundResult").textContent = "You lose! You chose scissors and the computer chose rock!";
        compscore++;
        updateScore();
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") 
    {
        playerscore++;
        updateScore();
    } 
    else if (playerSelection === computerSelection) 
    {
        document.getElementById("roundResult").textContent = "Tie! Make another selection";
        updateScore();
        return;
    }
    else {
        alert("Invalid Selection. Please try again.");
        updateScore();
        return;
    } 
};    