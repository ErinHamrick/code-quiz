const button = document.getElementById(start);

function buttonClick (event) {
    button.addEventListener("click", startQuiz)
}

function startQuiz() {
    

}

const questions = [
	{
		questionAsked: "Which built-in method returns the length of a string?",
		options: ["length()", "size()", "index()", "none of the above"],
		answer: "length()",
	},
	{
		questionAsked: "Which of the following function of String object returns the character at the specified index?",
		options: ["concat()", "charCodeAt()", "CharAt()", "indexOf()"],
		answer: "CharAt()",
	},
	{
		questionAsked: "Which built-in method returns the calling string value converted to upper case?",
		options: ["toUpper()", "toUpperCase()", "changeCase()", "none of the above"],
		answer: "toUpperCase",
	},
	{
		questionAsked: "Which of the following function of Array object adds and/or removes elements from an array?",
		options: ["toSource()", "sort()", "splice()", "unshift()"],
		answer: "splice()",
	},
	{
		questionAsked: "",
		options: [],
		answer: "",
	},
	{
		questionAsked: "",
		options: [],
		answer: "",
	},
	{
		questionAsked: "",
		options: [],
		answer: "",
	},
];
