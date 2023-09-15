const selectionButtons = document.querySelectorAll('[data-selection]')
const winSpan = document.querySelector('[data-result-win]')
const loseSpan = document.querySelector('[data-result-lose]')
const drawSpan = document.querySelector('[data-result-draw]')

const OUTCOMES = { rock: 'scissors', paper: 'rock', scissors: 'paper' }


selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    makeSelection(selectionName)
  })
})


function makeSelection(playerSelection) {
  const computerSelection = randomSelection()
  const youWin = isWinner(playerSelection, computerSelection)
  const computerWin = isWinner(computerSelection, playerSelection)
  
  addResult(youWin, computerWin)
}


function addScore(scoreSpan, amount = 1) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + amount
}


function addResult(youWin, computerWin) {
  if (!youWin && !computerWin) {
    addScore(drawSpan)
  } else if (youWin) {
    addScore(winSpan)
  } else if (computerWin) {
    addScore(loseSpan)
  }
}
  

function isWinner(playerSelection, opponentSelection) {
  return OUTCOMES[playerSelection] === opponentSelection
}

function randomSelection() {
  const options = Object.keys(OUTCOMES)
  const randomIndex = Math.floor(Math.random() * options.length)
  return options[randomIndex]
}