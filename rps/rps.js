const MAX_SCORE = 3;
const wepBtns = document.querySelector('.weaponBtns').children;
const btnsArray = Array.from(wepBtns);
const btnReset = document.querySelector("#btnReset");
const modal = document.querySelector("#myModal");
const closeX = document.querySelector(".close");


let gmStatus = document.querySelector("#gmStatus");
let playerScoreText = document.querySelector("#playerScore");
let cpuScoreText = document.querySelector("#cpuScore");
let playerChoiceTxt = document.querySelector("#playerChoice");
let cpuChoiceTxt = document.querySelector("#cpuChoice");
let endMsg = document.querySelector("#modalText")
let playerScore = 0;
let cpuScore = 0;

function getComputerChoice() {
    const choice = ['🪨','🧻','✂️'];
    let sel = Math.floor(Math.random() *3);
    return choice[sel];
}

// Create event listeners for game buttons
btnsArray.forEach((btn) => {
    btn.addEventListener('click', () => {
        const res = playRound(getComputerChoice(),btn.textContent)
        scoreGame(res)
    })
})

function playRound(computerSel,playerSel) {
        //console.log(`CPU: ${computerSel},Player: ${playerSel}`)
        playerChoiceTxt.textContent = playerSel;
        cpuChoiceTxt.textContent = computerSel;
        if (computerSel === playerSel) { // tie
            return 0; 
        
        } else if (computerSel === "🪨" && playerSel === "✂️" || 
                computerSel === "✂️" && playerSel === "🧻" ||                   
                computerSel === "🧻" && playerSel === "🪨") {
            return 1;  // CPU victory
        } else {

            return 2; // Player Victory
        }
}

function scoreGame(result) {
    switch (result) {
        case 0: // tie
            gmStatus.textContent = "Tied!";
            break;
        case 1: // CPU Victory
            cpuScore++;
            cpuScoreText.textContent = cpuScore;
            gmStatus.textContent = "CPU wins!"
            break;
        case 2: // User victory
            gmStatus.textContent = "Player victory!"
            playerScore++;
            playerScoreText.textContent = playerScore;
            break;          
    }
    if (cpuScore === MAX_SCORE || playerScore === MAX_SCORE) {
        return showWinner(playerScore === MAX_SCORE ? "Player" : "CPU");
    }
}

function showWinner(winner) {
    modal.style.display = "block";
    endMsg.textContent = `${winner} victory.`
}

function resetGame() { 
    gmStatus.textContent = "5 points needed to win!"
    cpuScore = 0;
    playerScore = 0;
    cpuScoreText.textContent = cpuScore;
    playerScoreText.textContent = playerScore;
    playerChoiceTxt.textContent = '🦙';
    cpuChoiceTxt.textContent = '🐥';
}

closeX.addEventListener('click', () => {
    modal.style.display = "none";
    resetGame();
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      resetGame();
    }
}
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