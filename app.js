let body = document.querySelector('body')

let rock = document.createElement('button')
rock.setAttribute('class','game')
rock.textContent = 'rock'

let paper = document.createElement('button')
paper.setAttribute('class','game')
paper.textContent = 'paper'

let scissors = document.createElement('button')
scissors.setAttribute('class','game')
scissors.textContent = 'scissors'

body.appendChild(rock)
body.appendChild(paper)
body.appendChild(scissors)

// --------- CODE HERE
const btns = document.querySelectorAll(".game")
btns.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        playRound(e.target.textContent)
    })
})



// let humanScore = 0
// let compScore = 0
// // let rounds = 5

const getCompChoice = function(){
    let options = ["rock","paper","scissors"]
    let randomNum = Math.floor(Math.random() * 3)
    let choice = options[randomNum]
    return choice
}

// function playRound(computerChoice,humanChoice){
//     // let lowerCaseHumanChoice = humanChoice.toLowerCase()
//     if(lowerCaseHumanChoice === computerChoice){
//         return 'tie'
//     } else if (lowerCaseHumanChoice === 'rock' && computerChoice === 'scissors' || 
//         lowerCaseHumanChoice === 'paper' && computerChoice === 'rock'){
//         return 'human'
//     } else if(lowerCaseHumanChoice === 'scissors' && computerChoice === 'paper'){
//         return 'human' 
//     } else {
//         return 'comp'
//     }
// }

// playGame = (isWinner) => {
//     while(rounds > 1){
//         switch (isWinner) {
//             case 'tie':
//                 alert('Tie')
//                 break;
//             case 'human':
//                 alert('Human victory')
//                 humanScore++
//                 break;
//             case 'comp':
//                 alert('Sentient victory')
//                 compScore++
//                 break;
//             default:
//                 break;
//             }
//         rounds--
//         playGame(playRound(getCompChoice(),getHumanChoice()))
//     }

// }

// playGame(playRound(getCompChoice(),getHumanChoice()))
// humanScore > compScore ? alert(`Human wins. Human: ${humanScore + 1} - Computer: ${compScore}`) : alert(`Computer wins. Human: ${humanScore} - Computer: ${compScore + 1}`)


