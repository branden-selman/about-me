// import functions and grab DOM elements
const button = document.getElementById("quiz-button");
const resultsDiv = document.getElementById(results);

console.log(button, resultsDiv);

button.addEventListener("click", () => {
  alert("It is Quiz Time!");
  const startquiz = confirm("Are you ready?");
  console.log("startquiz");
  if (startquiz === false) {
    return;
  }
  const firstName = prompt("What is your first name");
  const lastName = prompt("What is your last name?");
console.log (firstName, lastName);
const Answer1 = prompt('Did the iPad inspire the creation of the iPhone?')



});

// initialize state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
