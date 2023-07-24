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

const questions = [
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
			"Using args.length property",
			"Using arguments.length property",
			"Both of the above",
			"None of the above",
		],
		answer: "Using arguments.length property",
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
	questionAskedEL.innerHTML = questions[currentIndex].questionAsked;
	optionsEl.innerHTML = "";
	for (let i = 0; i < questions[currentIndex].options.length; i++) {
		let button = document.createElement("button");
		button.textContent = questions[currentIndex].options[i];
		optionsEl.append(button);
	}
}

optionsEl.addEventListener("click", (e) => {
	console.log(e.target.textContent);
	if (e.target.textContent === questions[currentIndex].answer) {
		// let button = document.createElement("button");
		// button.textContent = "Correct!";
		// quizEl.append(button);
		currentIndex++;
	} else {
		console.log("wrong");
		currentIndex++;
		if (timeLeft > 15) {
			timeLeft -= 15;
		} else {
			timeLeft = 0;
		}
	}
	startQuiz();
});

startButton.addEventListener("click", () => {
	let timeInterval = setInterval(() => {
		if (timeLeft > 1) {
			timerEl.textContent = timeLeft + " seconds remaining";
			timeLeft--;
		} else if (timeLeft === 1) {
			timerEl.textContent = timeLeft + " second remaining";
			timeLeft--;
		} else {
			timerEl.textContent = "Time up";
			alert("TIME UP!");
			clearInterval(timeInterval);
		}
	}, 1000);
	startQuiz();
});
