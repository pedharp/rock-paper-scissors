const moveOptions = ['rock', 'paper', 'scissors']

function getComputerChoice(){
	return moveOptions[Math.floor(Math.random() * moveOptions.length)]
}
function getPlayerChoice(){
	let choice = prompt("Choose: rock, paper or scissors.").toLowerCase()
	return choice
}
function playRound(playerSelection, computerSelection){
	let res = []
	playerSelection = getPlayerChoice()
	computerSelection = getComputerChoice()
	res.push(playerSelection, computerSelection).toString()
	console.log(res)
	if (playerSelection === computerSelection){
		return 'It\'s a draw!'
	} else if (res == con1 || res == con2 || res == con3){
		return 'Your win!'
	} else{
		return 'You lose!'
	}
}

function game(){
	console.log(playRound())
}
let con1 = ['paper', 'rock'].toString()
let con2 = ['scissors', 'paper'].toString()
let con3 = ['rock', 'scissors'].toString()

let counter = 0
while (counter < 5){
	game()
	counter++
}
