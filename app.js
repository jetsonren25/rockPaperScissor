/** 
 Problem:
 * Write a program that plays rock, paper, scissors. 
 * Your game will be played against the computer. 
 * You will write a function that randomly returns “rock”, “paper” or “scissors”.
 * Your game will be played by a human player. 
 * You will write a function that takes the user choice and returns it.
 * Your game will keep track of the players score. 
 * You will write variables to keep track of the players score.
 * Your game will be played round by round. 
 * You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement
 * Your game will play 5 rounds. 
 * You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.
 Planning: 
 * user input is needed.
 Pseudocode:
 * get a program to select a random rock, paper, or scissor 
 * get the user input to select rock, paper, or scissor and keep track of their score too
 * compare both the user and program selections to see who wins
 * --> 
 
 * rock beats scissors
 * rock loses to paper
 
 * paper beats rock
 * paper loses to scissors
 
 * scissors beats paper
 * scissors loses to rock
 
 * keep playing the game until the game has been played 5 times
 * declare a winner
 */


const getCompChoice = function(){
    let option = ["rock","paper","scissor"]
    let randomNum = Math.floor(Math.random() * 3)
    let choice = option[randomNum]
    return 'rock'
}

const getHumanChoice = function(){
    let userInput = prompt('Please type rock, paper, or scissor')
    return userInput
}


const playRound = (humanChoice,compChoice) => {
    let humanScore = 0
    let compScore = 0


    console.log(`Computer choice: ${compChoice}`)
    if(humanChoice === compChoice){
        console.log("It's a tie.")
    } else if ((humanChoice === 'rock' && compChoice === 'scissors') || (humanChoice === 'paper' && compChoice === 'rock')){
        console.log(`You win! ${humanChoice} beats ${compChoice}.`)
        
    }else if(humanChoice === 'scissors' && compChoice === 'paper'){
        console.log(`You win! ${humanChoice} beats ${compChoice}.`)
    } else {
        console.log(`You lose! ${compChoice} beats ${humanChoice}.`)
    }

}


playRound(getHumanChoice(),getCompChoice())

const playGame = () => {}
