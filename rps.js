const playerScore = document.querySelector('.scoreboard .scorecard#player .score')
const computerScore = document.querySelector('.scoreboard .scorecard#computer .score')
const currentPlay = document.querySelector('.current-play .play')
const roundWinner = document.querySelector('.current-play .winner span')
const winnerBanner = document.querySelector('.winnerbanner')
const container = document.querySelector('.container')

const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            playRound(e.target.id, computerPlay())
        })
    })

let playerCount = 0;
let computerCount = 0;


let computerPlay = () => {
    const WEAPONS = ['rock', 'paper', 'scissors']
    return WEAPONS[Math.floor(Math.random() * 3)]
}

let playRound = ( playerWeapon, computerWeapon ) => {
    let winner;

    currentPlay.textContent = `${playerWeapon} vs. ${computerWeapon}`

    if ( playerWeapon == computerWeapon) winner = 'tie'

    //compute winner
    if ( playerWeapon == 'rock') {
         if ( computerWeapon == 'paper' ) {
            winner = 'computer';
         } 
         else if ( computerWeapon == 'scissors' ) winner = 'player';
    }
    else if ( playerWeapon == 'paper') {
        if ( computerWeapon == 'scissors' ) {
            winner = 'computer';
         } 
         else if ( computerWeapon == 'rock' ) winner = 'player';
    }
    else if ( playerWeapon == 'scissors') {
        if ( computerWeapon == 'rock' ) {
            winner = 'computer';
         } 
         else if ( computerWeapon == 'paper' ) winner = 'player';
    } 
    else throw 'Invalid Input'

    roundWinner.textContent = winner
    updateGame(winner)
}

let updateGame = (winner) => {
    if (winner === 'computer') {
        computerCount++
        computerScore.textContent = computerCount
    }
    else if (winner === 'player') {
        playerCount++
        playerScore.textContent = playerCount
    } 
    if (computerCount >= 5 || playerCount >= 5) {
        let winner = (computerCount > playerCount) ? 'Computer': 'Player'
        let endGame = document.createElement('div')
        endGame.textContent = `${winner} wins!`
        container.appendChild(endGame)
    }
    
}

