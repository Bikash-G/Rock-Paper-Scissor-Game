let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Draw");
    msg.innerText = "Game was draw! Play Again";
    msg.style.backgroundColor = "black";
}

const showWinner = (compWin, userChoice, compChoice) => {
    if(compWin){
        console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }else{
        console.log("you win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let compWin = true;
        if(compChoice === "rock"){
            //paper, scissor
            compWin = userChoice === "paper" ? false : true;
        }else if(compChoice === "paper"){
            //scissor, rock
            compWin = userChoice === "scissor" ? false : true;
        }else {
            //rock, paper
            compWin = userChoice === "rock" ? false : true;
        }

        showWinner(compWin, userChoice, compChoice);

    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});