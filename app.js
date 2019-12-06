let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
console.log(getComputerChoice());

function wins(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = user + " beats " + computer + " Win! ";

}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
}

function draw(user, computer) {
    console.log("Its a draw.");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("user choice =>" + userChoice);
    console.log("computer choice =>" + computerChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            wins(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    })

    paper_div.addEventListener('click', function() {
        game('p');
    })
    scissors_div.addEventListener('click', function() {
        game('s');
    })
}
main();