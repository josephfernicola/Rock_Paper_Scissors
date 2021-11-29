function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

let score = [];

function playRound () {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "scissors") 
    {
        alert("You win! Rock beats Scissors!");
        return score.push(1);
    }
    else if (playerSelection === "rock" && computerSelection === "paper") 
    {
        alert("You Lose! Paper beats Rock!");
        return score.push(0);  
    }
    else if (playerSelection === "paper" && computerSelection === "rock") 
    {
        alert("You win! Paper beats Rock!");
        return score.push(1);
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") 
    {
        alert("You lose! Scissors beats Paper!");
        return score.push(0);
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") 
    {
        alert("You Lose! Rock beats Scissors!");
        return score.push(0);
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") 
    {
        alert("You win! Scissors beats Paper!");
        return score.push(1);
    } 
    else if (playerSelection === computerSelection) 
    {
        alert("Tie! Make another selection");
        return "tie";
    }
    else {
        alert("Invalid Selection. Please try again.");
        return "invalid";
    } 
};

function getOccurence(score, value) {
    let count = 0;
    score.forEach((v) => (v === value && count++));
    return count;
};

function game() {
    // While occurence of 1 in score < 3 and occurence of 0 in score < 3, Play a round then reset computer choice//
    while (getOccurence(score, 1) < 3 && getOccurence(score, 0) < 3) { 
       playRound();
       computerPlay();
    }
        // if 1 in score >=3, declare player the winner
      if (getOccurence(score, 1) == 3) {
          alert("You have beat the computer! Congratulations!");
          return "You have beat the computer! Congratulations!";
        }
        //else if 0 in score >=3, declare the computer the winner
      else if (getOccurence(score, 0) == 3) {
          alert("The computer has beat you. Better luck next time.");
          return "The computer has beat you. Better luck next time.";
        }
        //else, declare a tie
      else {
          alert("Tie!");
          return "Tie!";
        }
    
};
console.log(game());
console.log(getOccurence(score, 1));
console.log(getOccurence(score, 0));

