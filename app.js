import { YesOrNo } from "./utils";

// import functions and grab DOM elements
const button = document.getElementById('quiz-button');
const resultsDiv = document.getElementById("results");

console.log(button, resultsDiv);

button.addEventListener("click", () => {
  alert('It is Quiz Time!');
  const startquiz = confirm("Are you ready?");
  console.log("startquiz");
  if (startquiz === false) {
    return;
})
  const firstName = prompt("What is your first name");
    const lastName = prompt("What is your last name?");
console.log (firstName, lastName);
const Answer1 = prompt('Did the iPad inspire the creation of the iPhone?')
const Answer2 = prompt('Did Apple originally approach Verizon to launch the iPhone?')
const Answer3 = prompt('Yes or no: The cameras are the most expensive iPhone component.')


let score = 0;

if (YesOrNo(Answer1)) {
    score++

};
if (YesOrNo(Answer2)) {
  score++

};
if (!YesOrNo(Answer3)) {
  score++

};

const results = "Congratulations ${firstName} ${LastName}! You got ${score} out of 3!"
// initialize state

// set event listeners
// get user input
// use user input to update state