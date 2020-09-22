alert(
	'This is a simple exercize for my daily practice of JavaScript. You should pay attention and choose the correct answer! :)'
);

const questions = [
	[ 'Whats my name?', 'Fabio' ],
	[ 'Whats the best TV Show ever made?', 'Sopranos' ],
	[ 'Whats the worse TV Show ending ever made?', 'Sopranos' ],
	[ 'Whos the greatest football team in Brazil ever?', 'Flamengo' ],
	[ 'Whats the greatest band nowadays?', 'Dream Theater' ],
	[ 'Whats the best food ever made by man?', 'Pizza' ]
];

const correct = [];
const incorrect = [];
let correctAnswers = 0;

for (let i = 0; i < questions.length; i++) {
	let question = questions[i][0];
	let answers = questions[i][1];
	let ask = prompt(question);
	if (ask === answers) {
		correctAnswers++;
		correct.push(question);
	} else {
		incorrect.push(question);
	}
	console.log(correctAnswers);
}

function createListItems(arr) {
	let items = '';
	for (let i = 0; i < arr.length; i++) {
		items += `<li>${arr[i]}</li>`;
	}
	return items;
}

let html = `
    <h1>You got ${correctAnswers} correct answer(s)!</h1>
    <h2>You got these questions correct right:</h2>
    <ol> ${createListItems(correct)} </ol>

    <h2>You got these questions wrong:</h2>
    <ol> ${createListItems(incorrect)} </ol>
`;

document.querySelector('main').innerHTML = html;
