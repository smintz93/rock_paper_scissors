console.log("Hello World")
// global variables 
let userScore = 0;
let compScore = 0;
// dom variables. used to store dom elements
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result-message > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

getComputerChoice = () => {
	const choices = ["r", "p", "s"];
	const randomCompNumber = Math.floor((Math.random() * 3))
	return choices[randomCompNumber];

}

win = (userChoice, computerChoice) => {
	userScore++
	userScore_span.innerHTML = userScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord} You Win!`;

	// add styling 

	let greenGlow = document.getElementById(userChoice).classList.add('green-glow');

	// removing glow after 2 second
	setTimeout(() => {
		{document.getElementById(userChoice).classList.remove('green-glow')}
	}, 1000)
	

}

lose = (userChoice, computerChoice) => {
	compScore++
	compScore_span.innerHTML = compScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} losses to ${convertToWord(computerChoice)}${smallCompWord}. You Lose!`;

	document.getElementById(userChoice).classList.add('red-glow');

	setTimeout(() => {
		{document.getElementById(userChoice).classList.remove('red-glow')}
	}, 1000)
}

draw = (userChoice, computerChoice) => {
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ties with ${convertToWord(computerChoice)}${smallCompWord}. Draw!`;

	document.getElementById(userChoice).classList.add('gray-glow');

	setTimeout(() => {
		{document.getElementById(userChoice).classList.remove('gray-glow')}
	}, 1000)
}


convertToWord = (letter) => {
	if (letter === "r") return "Rock";
	if (letter ==="p") return "Paper";
	return "Scissors"
}

game = (userChoice) => {
	// console.log("this user choice" + userChoice)
	const computerChoice = getComputerChoice();
	// console.log("user choice => " + userChoice);
	// console.log("computer choice => " +computerChoice);

	switch (userChoice + computerChoice) {
		// cases when user would win 
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	};
}

// game('s');

main = () => {
	rock_div.addEventListener("click", () => {
		game("r");
	});

	paper_div.addEventListener("click", () => {
		game("p");
	});

	scissors_div.addEventListener("click", () => {
		game("s");
	});
};

main();





