const btnRock = document.querySelector("#btnRock")
const btnPaper = document.querySelector("#btnPaper")
const btnScis = document.querySelector("#btnScis")
const btnReset = document.querySelector("#btnReset")

let gmStatus = document.querySelector("#gmStatus")
let playerScoreText = document.querySelector("#playerScore");
let cpuScoreText = document.querySelector("#cpuScore");

let playerScore = 0;
let cpuScore = 0;

function getComputerChoice() {
    const choice = ['rock','paper','scissors'];
    let sel = Math.floor(Math.random() *3);
    return choice[sel];
}

function playRound(computerSel,playerSel) {
    if (playerScore === 5 || cpuScore === 5) {
        alert("game over!")
        resetGame();
    } else {
        if (computerSel === playerSel) { // tie
            gmStatus.textContent = "Tied!";
            return 0; 
        
        } else if (computerSel === "rock" && playerSel == "scissors" || 
                computerSel === "scissors" && playerSel === "paper" ||                   
                computerSel === "paper" && playerSel === "rock") {
                    gmStatus.textContent = "CPU victory!"
            cpuScore++;
            cpuScoreText.textContent = cpuScore;

            return 1;  // CPU victory
        } else {
            gmStatus.textContent = "Player victory!"
            playerScore++;
            playerScoreText.textContent = playerScore;
            return 2; // Player Victory
        }
    }
}

function resetGame() {
    gmStatus.textContent = "5 points needed to win!"
    cpuScore = 0;
    playerScore = 0;
    cpuScoreText.textContent = cpuScore;
    playerScoreText.textContent = playerScore;
}

btnRock.addEventListener('click', () => {
    playRound(getComputerChoice(),"rock")
})

btnPaper.addEventListener('click', () => {
    playRound(getComputerChoice(),"paper");
    
})

btnScis.addEventListener('click', () => {
    playRound(getComputerChoice(),"scissors");
})

btnReset.addEventListener('click', () => {
    resetGame();
})


function game() {
    let wins = 0
    let playerSel = prompt("Rock, paper, or scissors?")
    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i}`)
      let cpuSel = getComputerChoice()
      let res = playRound(cpuSel,playerSel)
      switch (res) {
        case 0:
            console.log(`tie. CPU: ${cpuSel}, player: ${playerSel}`)
            break;
        case 1:
            console.log(`CPU Victory.  CPU: ${cpuSel}, player: ${playerSel}`)
            break;
        case 2:
            console.log(`User victory. CPU: ${cpuSel}, player: ${playerSel}`)
            break;
      }
    }
}