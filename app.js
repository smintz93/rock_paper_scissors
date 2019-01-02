console.log("Hello World")
// global variables 
const userScore = 0;
const compScore = 0;
// dom variables. used to store dom elements
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result-message");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

rock_div.addEventListener("click", () => {
	console.log('hey, you clicked rock')
});

paper_div.addEventListener("click", () => {
	console.log('hey, you clicked paper')
});

scissors_div.addEventListener("click", () => {
	console.log('hey, you clicked scissors')
});
