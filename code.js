const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results");
const score = document.querySelector(".score");
let counter = 0;

results.innerText = "";

const moveOptions = ["rock", "paper", "scissors"];

// win conditions
const con1 = ["paper", "rock"].toString();
const con2 = ["scissors", "paper"].toString();
const con3 = ["rock", "scissors"].toString();
// scores [player, pc]
let scores = [0, 0];

rock.addEventListener("click", (e) => {
    e = "rock";
    displayScore();
    ++counter;
    playRound(e, getComputerChoice());
});
paper.addEventListener("click", (e) => {
    e = "paper";
    ++counter;
    playRound(e, getComputerChoice());
});
scissors.addEventListener("click", (e) => {
    e = "scissors";
    ++counter;
    playRound(e, getComputerChoice());
});

function getComputerChoice() {
    return moveOptions[Math.floor(Math.random() * moveOptions.length)];
}
function resetScores() {
    return (scores = [0, 0]);
}

function displayScore() {
    if (counter === 5) {
        counter = 0;
        if (scores[0] > scores[1]) {
            resetScores();
            (results.innerText = "You win 🏆");
        } else if (scores[0] < scores[1]) {
            resetScores();
            (results.innerText = "You lose 🙄");
        } else {
            resetScores();
            (results.innerText = "Draw 🤷");
        }
    }
}

function playRound(playerSelection, computerSelection) {
    let res = [];
    computerSelection = getComputerChoice();
    res.push(playerSelection, computerSelection).toString();
    console.log(res);
    console.log(scores);
    console.log("counter:", counter);
    if (playerSelection === computerSelection) {
        score.innerText = `Player: ${scores[0]}\nComputer: ${scores[1]}`;
        results.innerText = "It's a draw!";
    } else if (res == con1 || res == con2 || res == con3) {
        ++scores[0];
        score.innerText = `Player: ${scores[0]}\nComputer: ${scores[1]}`;
        results.innerText = "You win!";
    } else {
        ++scores[1];
        score.innerText = `Player: ${scores[0]}\nComputer: ${scores[1]}`;
        results.innerText = "You lose!";
    }
    displayScore();
}
