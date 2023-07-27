const startButton = document.getElementById("start");
let timerEl = document.getElementById("timer");
let timeLeft = 60;
timerEl.textContent = "Timer: 60 seconds";
let currentIndex = 0;
let questionsEl = document.getElementById("questions");
let mainEl = document.getElementById("main");
let questionAskedEL = document.getElementById("question-asked");
let optionsEl = document.getElementById("options");
let quizEl = document.getElementById("quiz");
let responseBtn = document.getElementById("response-button");
let correctBtn = document.getElementById("correct");
let wrongBtn = document.getElementById("wrong");
let highscoresEl = document.getElementById("highscores");
let listEl = document.getElementById("list");
let initialsEl = document.getElementById("initials").value;
let endEl = document.getElementById("end");
let submitBtn = document.getElementById("submit");

let questions = [
	{
		questionAsked: "Which built-in method returns the length of a string?",
		options: ["length()", "size()", "index()", "none of the above"],
		answer: "length()",
	},
	{
		questionAsked: "JavaScript file has an extension of:",
		options: [".java", ".JavaScript", ".js", ".xml"],
		answer: ".js",
	},
	{
		questionAsked:
			"Which of the following function of String object returns the character at the specified index?",
		options: ["concat()", "charCodeAt()", "CharAt()", "indexOf()"],
		answer: "CharAt()",
	},
	{
		questionAsked:
			"Which built-in method returns the calling string value converted to upper case?",
		options: [
			"toUpper()",
			"toUpperCase()",
			"changeCase()",
			"none of the above",
		],
		answer: "toUpperCase()",
	},
	{
		questionAsked:
			"How can you get the total number of arguments passed to a function?",
		options: [
			"Using the args.length property",
			"Using the arguments.length property",
			"Both of the above",
			"None of the above",
		],
		answer: "Using the arguments.length property",
	},
	{
		questionAsked:
			"Which of the following function of Array object adds and/or removes elements from an array?",
		options: ["toSource()", "sort()", "splice()", "unshift()"],
		answer: "splice()",
	},
];

function startQuiz() {
	quizEl.setAttribute("class", "");
	questionAskedEL.setAttribute("class", "");
	mainEl.setAttribute("class", "hidden");
	showQuestion();
}
function showQuestion() {
	questionAskedEL.innerHTML = questions[currentIndex].questionAsked;
	optionsEl.innerHTML = "";

	for (let i = 0; i < questions[currentIndex].options.length; i++) {
		let button = document.createElement("button");
		button.textContent = questions[currentIndex].options[i];
		optionsEl.append(button);
	}
}

function checkIfEnd() {
	if (timeLeft <= 0 || currentIndex === questions.length) {
		endQuiz();
	} else {
		showQuestion();
	}
}

optionsEl.addEventListener("click", (e) => {
	e.preventDefault();
	console.log(e.target.textContent);
	if (e.target.textContent === questions[currentIndex].answer) {
		currentIndex++;
		checkIfEnd();
	} else {
		timeLeft -= 15;
		currentIndex++;
		checkIfEnd();
	}
});

startButton.addEventListener("click", () => {
	let timeInterval = setInterval(() => {
		if (timeLeft > 1) {
			timerEl.textContent = timeLeft + " seconds remaining";
			timeLeft--;
		} else if (timeLeft === 1) {
			timerEl.textContent = timeLeft + " second remaining";
			timeLeft--;
			} else if (timeLeft <= 0) {
				timeLeft = 0;
			} else {
			timerEl.textContent = "Out of time";
			clearInterval(timerEl);
			// checkIfEnd();
		}
	}, 1000);
	startQuiz();
});

function endQuiz() {
	quizEl.setAttribute("class", "hidden");
	endEl.removeAttribute("class", "hidden");
	let scoreEl = document.getElementById("score");
	scoreEl.textContent = timeLeft;
	document.getElementById("timer").setAttribute("class", "hidden"); 
}

function saveScore() {
	let highscores = JSON.parse(localStorage.getItem("scores")) || [];
	let score = {
		name: initialsEl.value,
		score: timeLeft,
	};

	highscores.push(score);
	localStorage.setItem("scores", JSON.stringify(highscores));

	window.location.href = "highscores.html";
}

submitBtn.addEventListener("click", saveScore);
submitBtn.addEventListener("click", init);
