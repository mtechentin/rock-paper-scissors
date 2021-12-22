

let computerPlay = () => {
    const WEAPONS = ['rock', 'paper', 'scissors']
    return WEAPONS[Math.floor(Math.random() * 3)]
}

let playRound = ( playerSelection, computerWeapon ) => {
    let winner;
    let playerWeapon = playerSelection.toLowerCase();

    if ( playerWeapon == computerWeapon) throw 'Matching Weapons'

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

    //debug
    console.log('Winner: ' + winner)

    let winnerWeapon = (winner == 'player' ? playerWeapon:computerWeapon);
    let winnerStr = winnerWeapon[0].toUpperCase() + winnerWeapon.substring(1);
    let loserWeapon = (winner == 'computer' ? playerWeapon:computerWeapon);
    let loserStr = loserWeapon[0].toUpperCase() + loserWeapon.substring(1);

    return `You ${(winner == 'player' ? 'Win':'Lose')}!\n${winnerStr} beats ${loserStr}\n`;
}

let game = () => {
    for (let i = 0; i < 5; i++) {
        let roundCompleted = false;
        while (!roundCompleted) {
            let playerChoice = prompt(`Round ${i + 1}: Enter 'rock,' 'paper,' or 'scissors'\n`)
            try {
                console.log(playRound(playerChoice, computerPlay()))
                roundCompleted = true;
            }
            catch(err) {
                if (err == 'Matching Weapons') {
                    console.log(`Tie! You both selected ${playerChoice.toLowerCase()}.\n
                    Try again.\n`)
                } else if ( err == 'Invalid Input') {
                    console.log('Invalid entry. Try again\n')
                }
            }          
        }
    }
}