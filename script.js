const resultDisplay = document.querySelector(".result");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

const options = ["rock", "paper", "scissors"];

let scores = {
    player: 0,
    computer: 0
};

function computerPlay() {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection, currentScore) {
    let result;

    if (playerSelection.toLowerCase() == computerSelection) {
        result = "Tie!";
    } else {
        switch(playerSelection.toLowerCase()) {
        case "rock":
            if (computerSelection == "scissors") {
                result = "You win! Rock beats scissors.";
                currentScore.player++;
            } else {
                result = "You lose! Paper beats rock.";
                currentScore.computer++;
            }
            break;
        case "paper":
            if (computerSelection == "scissors") {
                result = "You lose! Scissors beat paper.";
                currentScore.computer++;
            } else {
                result = "You win! Paper beats rock.";
                currentScore.player++;
            }
            break;
        case "scissors":
            if (computerSelection == "paper") {
                result = "You win! Scissors beats paper.";
                currentScore.player++;
            } else {
                result = "You lose! Rock beats scissors.";
                currentScore.computer++;
            }
            break;
        default:
            break;
        }
    }

    return result;
}

function updateScores() {
    playerScoreDisplay.textContent = scores.player;
    computerScoreDisplay.textContent = scores.computer;
}

const buttons = document.querySelectorAll('.options button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const computerChoice = computerPlay();
        const result = playRound(e.target.id, computerChoice, scores);

        // Update the display
        resultDisplay.textContent = result;
        updateScores();

        // Check for winner
        if (scores.player == 5 || scores.computer == 5) {
            if (scores.player == 5) {
                resultDisplay.textContent = "You've won the game! Make a choice to start playing again."
            } else {
                resultDisplay.textContent = "Sorry... the computer won the game. Make a choice to start playing again."
            }

            // Reset the scores
            scores.player = 0;
            scores.computer = 0;
        }
    })
});