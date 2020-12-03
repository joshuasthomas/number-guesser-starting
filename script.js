let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor( Math.random() * 10 ) ;
}

function compareGuesses(hguess, cguess, tguess) {
    let hdiff = Math.abs(hguess - tguess);
    let cdiff = Math.abs(cguess - tguess);

    return hdiff <= cdiff ? true : false;
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}