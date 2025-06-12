/** 
 Pseudocode:
 * get a program to select a random rock, paper, or scissor 
 * get the user input to select rock, paper, or scissor and keep track of their score too
 * compare both the user and program selections to see who wins
 */


let humanScore = 0
let compScore = 0
let rounds = 5

const getCompChoice = function(){
    let options = ["rock","paper","scissors"]
    let randomNum = Math.floor(Math.random() * 3)
    let choice = options[randomNum]
    return choice
}

const getHumanChoice = function(){
    let userInput = prompt(`Please type rock, paper, or scissors`)
    return userInput
}

function playRound(computerChoice,humanChoice){
    let lowerCaseHumanChoice = humanChoice.toLowerCase()
    console.log(humanChoice)
    if(lowerCaseHumanChoice === computerChoice){
        return 'tie'
    } else if (lowerCaseHumanChoice === 'rock' && computerChoice === 'scissors' || 
        lowerCaseHumanChoice === 'paper' && computerChoice === 'rock'){
        return 'human'
    } else if(lowerCaseHumanChoice === 'scissors' && computerChoice === 'paper'){
        return 'human' 
    } else {
        return 'comp'
    }
}

playGame = (isWinner) => {
    while(rounds > 1){
        switch (isWinner) {
            case 'tie':
                alert('Tie')
                break;
            case 'human':
                alert('Human victory')
                humanScore++
                break;
            case 'comp':
                alert('Sentient victory')
                compScore++
                break;
            default:
                break;
            }
        rounds--
        playGame(playRound(getCompChoice(),getHumanChoice()))
    }

}

playGame(playRound(getCompChoice(),getHumanChoice()))
humanScore > compScore ? alert(`Human wins. Human: ${humanScore + 1} - Computer: ${compScore}`) : alert(`Computer wins. Human: ${humanScore} - Computer: ${compScore + 1}`)


