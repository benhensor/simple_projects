const selectionButtons = document.querySelectorAll('[data-selection]')
const resultMessage = document.querySelector('[data-message]')
const playerSpan = document.querySelector('[data-result-player]')
const computerSpan = document.querySelector('[data-result-computer]')


const OUTCOMES = { rock: 'paper', paper: 'scissors', scissors: 'rock' }

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    makeSelection(selectionName)
  })
})

const makeSelection = (playerSelection) => {
  const computerSelection = randomSelection()
  const playerWins = winner(playerSelection, computerSelection)
  const computerWins = winner(computerSelection, playerSelection)
  addResult(playerWins, computerWins)
}

const winner = (playerSelection, computerSelection) => {
  return OUTCOMES[playerSelection] === computerSelection
}

function addResult(playerWins, computerWins) {
  if (!playerWins && !computerWins) {
    resultMessage.innerText = "It's a Draw!"
  } else if (playerWins) {
    addScore(playerSpan, 1)
    resultMessage.innerText = "You Win!"
  } else if (computerWins) {
    addScore(computerSpan, 1)
    resultMessage.innerText = "Computer Wins!"
  }
}

const addScore = (span, amount = 1) => {
  span.innerText = parseInt(span.innerText) + amount
}

const randomSelection = () => {
  const options = Object.keys(OUTCOMES)
  const randomIndex = Math.floor(Math.random() * options.length)
  return options[randomIndex]
}

