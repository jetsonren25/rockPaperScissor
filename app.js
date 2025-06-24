let body = document.querySelector('body')

let humanScore, compScore, tie = 0
let rounds = 5

let scoreSpan = document.createElement('span')
scoreSpan.setAttribute('id','score')

let rpsH2 = document.createElement('h2')
rpsH2.textContent = 'Rock, Paper, Scissors'

let container = document.createElement('div')
container.setAttribute('id','main-cont')

let rock = document.createElement('button')
rock.setAttribute('class','game rock')
rock.textContent = 'rock'

let paper = document.createElement('button')
paper.setAttribute('class','game paper')
paper.textContent = 'paper'

let scissors = document.createElement('button')
scissors.setAttribute('class','game scissors')
scissors.textContent = 'scissors'



body.appendChild(rpsH2)
body.appendChild(container)
body.append(scoreSpan)

container.appendChild(rock)
container.appendChild(paper)
container.appendChild(scissors)


// --------- CODE HERE

const getCompChoice = function(){
    let options = ["rock","paper","scissors"]
    return options[Math.floor(Math.random() * 3)]
}

const btns = document.querySelectorAll(".game")
btns.forEach(btn => {
    btn.addEventListener('click', (e) =>{playGame(playRound(getCompChoice(),e.target.textContent))})
})

function playRound(computer,human){
    console.log(`This is the comp: ${computer} and this is the human: ${human}`)
    if(human === computer){
        return 'tie'
    } else if (human === 'rock' && computer === 'scissors' || 
        human === 'paper' && computer === 'rock'){
        return 'human'
    } else if(human === 'scissors' && computer === 'paper'){
        return 'human' 
    } else {
        return 'comp'
    }
}

playGame = (isWinner) => {
    switch (isWinner) {
        case 'human':
            humanScore++
            break;
        case 'comp':
            compScore++
            break;
        default:
            tie++
            break;
    }

    scoreSpan.textContent = `You: ${humanScore} - Computer: ${compScore} - Tie: ${tie}`
    if(humanScore === 5){scoreSpan.textContent = 'You are the winner!'}
    if(compScore === 5){scoreSpan.textContent = 'Computer is the winner!'}
}