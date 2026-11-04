/*
  Magic 8 Ball
  Name:
  Period:
*/

// Get input Values
 function askEightBall () {
  let userName = document.getElementById('nameInput').value;
  let userQuestion = document.getElementById('questionInput').value;

  console.log( userName, userQuestion)


// Show The Question on site

document.getElementById("questionOut").textContent = "You asked: " + userQuestion;

// Greet the user!
let greeting;

if (userName === "") {
  greeting = "Hello Mystery Person!";
} else {
  greeting = `Hello ${userName}!`;
}

document.getElementById("greeting").textContent = greeting;

// check the question

if (userQuestion === ""){
  document.getElementById('questionOut').textContent = ''
  document.getElementById('answer').textContent = "The 8Ball needs a question to work, Dummy! "
  document.getElementById('answerType').innerHTML = ''


// get a random number

// Get the Magic 8balls answer

// Shows the 8ball answer type badge

 }
}