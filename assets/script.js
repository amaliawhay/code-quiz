/*When the start button is pressed (call button),
and a timer starts*/
var timeEl = document.querySelector(".time");
var heading = document.querySelector("#heading");
var startBtn = document.getElementById("start");
var homeEl = document.querySelector("#home");
var clearEl = document.querySelector("#clear");
var highScoreEl = document.querySelector("#viewScore");
var landing = document.querySelector("#landingContent");
var questions = document.querySelector("#questions");
var questionsTitle = document.querySelector(
  "#questionsTitle"
);
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var endingScore = document.querySelector("#endingScore");
var scoreText = document.querySelector("#scoreText");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var answerIndicator = document.querySelector(
  "#answerIndicator"
);
var viewScore = document.querySelector("#viewScore");

var savedArray =
  JSON.parse(localStorage.getItem("highscore")) || [];

var time = 0;
var score = 0;
var currentAnswer = "";
var index = 0;
var startTimer = 0;
var scoreObj = {
  initials: "",
  score: 0,
};

//score function
highScore.addEventListener("click");

homeEl.addEventListener("click", function () {
  landing.style.display = "block";
  heading.style.display = "block";
  highScore.style.display = "none";
});

clearEl.addEventListener("click", function () {
  localStorage.clear();
  savedArray = [];
});

startBtn.addEventListener("click", function () {
  landing.style.display = "none";
  questions.style.display = "block";
  startQuiz();
});

submit.addEventListener("click", function () {
  scoreObj.initials = initials.value;
  scoreObj.score = score;
  savedArray.push(scoreObj);
  localStorage.setItem(
    "highscore",
    JSON.stringify(savedArray)
  );
});

//function to run timer
function startQuiz() {
  time = 125;
  index = 0;
  shuffle(questionsArray);
  populateQuestions(index);

  startTimer = setInterval(function () {
    time--;
    timerUpdate();
    timeUp();
  }, 1000);
  choice1.addEventListener("click", evaluate);
  choice2.addEventListener("click", evaluate);
  choice3.addEventListener("click", evaluate);
  choice4.addEventListener("click", evaluate);
}

function populateQuestions(index) {
  var temp = questionsArray[index];
  currentAnswer = temp.a;
  questionsTitle.textContent = temp.q;

  var choiceTemp = [];
  var i = 0;
  for (i; i < temp.c.length; i++) {
    choiceTemp.push(temp.c[i]);
  }
  choice1.textContent = choiceTemp[0];
  choice2.textContent = choiceTemp[1];
  choice3.textContent = choiceTemp[2];
  choice4.textContent = choiceTemp[3];
}

function timeUp() {
  if (time < 0) {
    //clearInterval(startTimer);
    time = 0;
    timerUpdate();
    //endQuiz();
  } else {
    return;
  }
}

function timerUpdate() {
  timeEL.textContent = "Time: " + time;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
//Timer begins when start button is clicked

/*the first question pops up (remove intro card, call question 1 card),
with (buttons/check boxes?) for multiple choice answers*/

// //this is the variable for all 5 questions.
// var questions = [
//   "What are the 3 fundamental languages of the web?",
//   "Which famous poet's daughter is considered the first computer programmer?",
//   //does a t/f need a variable for the answer? boolean? Can I make that variable
//   "True or false? A person who knows how to code can read robots mind's",
//   "What is the definition of pseudocoding?",
//   "Which of the following is the correct syntax for JQuery?",
// ];

// //Variables for answers. Each question has its own array of answers.
// var answers = {
//   languageA: [
//     "wrong",
//     "wrong",
//     "HTML, CSS & JavaScript",
//     "wrong",
//   ],
//   poetA: [
//     "wrong",
//     "Lord Byron (Ada Lovelace)",
//     "wrong",
//     "wrong",
//   ],
//   pseudocodeA: [
//     "wrong",
//     "A description of the system operations written in layman's terms",
//     "wrong",
//     "wrong",
//   ],
//   syntaxA: ["wrong", "wrong", "$", "wrong"],
// };

// /*Replace quiz intro with 1st question
//     - loop through questions
//     - check/selector box for each answer

// function ()*/
