//Selecting Elements
let container = document.querySelector('.container');
const reset = document.querySelector('.new-game');
let diceImg = document.querySelector('.img');
let turnAlert = document.querySelector('.player-turn');
let player1TotalScore = document.querySelector('#player-0');
let player2TotalScore = document.querySelector('#player-1');
let player1CurrentScore = document.querySelector('.current-0');
let player2CurrntScore = document.querySelector('.current-1');
const rollDiceBtn = document.querySelector('.roll');
const holdScoreBtn = document.querySelector('.hold');

let score = [0, 0];
let currentScore = 0;
let active = 0;
let condition = true;

rollDiceBtn.addEventListener('click', () => {
    if (condition) {
        let dice = Math.floor(Math.random() * 6 + 1);
        diceImg.firstChild.src = `${dice}.png`
        currentScore += dice;
        if (dice !== 1) {
            document.querySelector(`.current-${active}`).textContent = currentScore;
        } else {
            // Reset Score && switch player
            document.querySelector(`.current-${active}`).textContent = 0;
            playerSwitch();
        }
    }
})

holdScoreBtn.addEventListener('click', () => {
    if (condition) {
        score[active] += currentScore;
        document.querySelector(`#player-${active}`).textContent = score[active];

        if (score[active] >= 100) {
            condition = false;
            if (active === 0) {
                turnAlert.textContent = 'Player1 wins!';
                document.body.style.backgroundColor = '#4f320a';
                container.style.backgroundColor = '#675843';
            }
            else {
                turnAlert.textContent = 'Player2 wins!';
                document.body.style.backgroundColor = '#4f320a';
                container.style.backgroundColor = '#675843';
            }
        } else {
            playerSwitch();
        }
    }

})

// Adding Reset Functionality
reset.addEventListener('click', () => {
    gameReset();
})


//Switch Game Functionality
function playerSwitch() {
    currentScore = 0;
    active = active === 0 ? 1 : 0;
    if (active === 0) {
        turnAlert.style.display = 'flex';
        turnAlert.textContent = 'Player 1 GO!';
    } else {
        turnAlert.style.display = 'flex';
        turnAlert.textContent = 'Player 2 GO!';
    }
}

// Reset Game Functionality
function gameReset() {
    score = [0, 0];
    currentScore = 0;
    active = 0;
    condition = true;

    turnAlert.style.display = 'none';
    document.body.style.backgroundColor = '#b87818';
    container.style.backgroundColor = '#dbb172';
    diceImg.firstChild.src = 'dice.png';
    player1TotalScore.textContent = 0;
    player2TotalScore.textContent = 0;
    player1CurrentScore.textContent = 0;
    player2CurrntScore.textContent = 0;
}