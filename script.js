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

//Get a random number
  let randomNumber = Math.floor(Math.random() * 8);

//Get the magic eight ball's answer
  switch (randomNumber) {
    case 0:
        eightBall = 'Never';
        break;
    case 1:
        eightBall = 'Probably Not';
        break;
    case 2:
        eightBall = 'Uncertain';
        break;
    case 3:
        eightBall = '50/50';
        break;
    case 4:
        eightBall = 'Likely';
        break;
    case 5:
        eightBall = 'Yes';
        break;
    case 6:
        eightBall = 'Always';
        break;
    case 7:
        eightBall = 'Ask again';
        break;
}

  //Show the eight ball's answer type badge
  document.getElementById("answer").textContent = eightBall;

  const answerType = document.getElementById("answerType");
  if (randomNumber < 2) {
  answerType.textContent = "No";
  } else if (randomNumber <= 3) {
  answerType.textContent = "Maybe";
  } else if (randomNumber <= 6) {
  answerType.textContent = "Yes";
}
  else {
  answerType.textContent = "Try again";
}

 }
}
