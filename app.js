import { yesOrNo } from '../utils.js';

// import functions and grab DOM elements
const button = document.getElementById('quiz-button');
const resultsDiv = document.getElementById('results');

console.log(button, resultsDiv);

button.addEventListener('click', () => {
    alert('It is Quiz Time!');
    const startQuiz = confirm('Are you ready?');
    console.log('startQuiz');
    if (startQuiz === false) {
        return;
    }
    const firstName = prompt('What is your first name');
    const lastName = prompt('What is your last name?');
    console.log (firstName, lastName);
    const Answer1 = prompt('Did the iPad inspire the creation of the iPhone?');
    const Answer2 = prompt('Did Apple originally approach Verizon to launch the iPhone?');
    const Answer3 = prompt('Yes or no: The cameras are the most expensive iPhone component.');



    let score = 0;

    // eslint-disable-next-line new-cap
    if (yesOrNo(Answer1)) {
        score = score + 1;

    }
    // eslint-disable-next-line new-cap
    if (yesOrNo(Answer2)) {
        score = score + 1;

    }
    // eslint-disable-next-line new-cap
    if (!yesOrNo(Answer3)) {
        score = score + 1;

    }

    const results = `Congratulations ${firstName} ${lastName}! You got ${score} out of 3!`;

    resultsDiv.textContent = results;
});