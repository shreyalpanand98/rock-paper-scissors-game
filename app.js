let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");
const you = document.querySelector("#user-score");
const computer = document.querySelector("#comp-score");

const generateCompChoice = () => {
    const options = ["rock", 'paper', "scissor"];
    let index = Math.floor(Math.random() * 3);

    return options[index];
}

const playGame = (userChoice) => {
    let compChoice = generateCompChoice();

    if(userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;

        if(userChoice === "rock") {
            if(compChoice === "paper") {
                userWin = false;
            }
        } else if(userChoice === "paper") {
            if(compChoice === "scissor") {
                userWin = false;
            }
        } else {
            if(compChoice === "rock") {
                userWin = false;
            }
        }

        showWinner(userWin, userChoice, compChoice);
    }

}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        message.innerText = `You win! ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    } else {
        compScore++;
        message.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        message.style.backgroundColor = "red";
    }
    you.innerText = userScore;
    computer.innerText = compScore;
}

const draw = () => {
    message.innerText = "Game was draw!";
    message.style.backgroundColor = "#081b31";
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})