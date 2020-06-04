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

//This will make the back button clear the questions and high score at the end of the game
homeEl.addEventListener("click", function () {
  landing.style.display = "block";
  heading.style.display = "block";
  highScore.style.display = "none";
});

//This will clear the high score log when clicked
clearEl.addEventListener("click", function () {
  localStorage.clear();
  savedArray = [];
});

//This will start the quiz (ref startQuiz function)
startBtn.addEventListener("click", function () {
  landing.style.display = "none";
  questions.style.display = "block";
  startQuiz();
});

//This will allow the user to store (locally) the final score with initials when the submit button is clicked
submit.addEventListener("click", function () {
  scoreObj.initials = initials.value;
  scoreObj.score = score;
  savedArray.push(scoreObj);
  localStorage.setItem(
    "highscore",
    JSON.stringify(savedArray)
  );
});

//function to run timer and fill screen with questions and choices
function startQuiz() {
  time = 125;
  index = 0;

  shuffle(questionsArray);
  //calls on randomization of questions function

  populateQuestions(index);
  //calls on function to put questions on screen

  startTimer = setInterval(function () {
    time--;
    timerUpdate();
    //displays countdown
    timeUp();
    //stops clock & ends quiz
  }, 1000);
  choice1.addEventListener("click", evaluate);
  choice2.addEventListener("click", evaluate);
  choice3.addEventListener("click", evaluate);
  choice4.addEventListener("click", evaluate);
  //allows choices to be clicked on
}

//fills div with question
function populateQuestions(index) {
  var temp = questionsArray[index];
  currentAnswer = temp.a;
  //finds correct answer from question object
  questionsTitle.textContent = temp.q;
  //fills question from question object

  var choiceTemp = [];
  //holds current temp
  var i = 0;
  //this will loop through the choices for the current question object
  for (i; i < temp.c.length; i++) {
    //This will display the choices available for the current question
    choiceTemp.push(temp.c[i]);
  }
  choice1.textContent = choiceTemp[0];
  choice2.textContent = choiceTemp[1];
  choice3.textContent = choiceTemp[2];
  choice4.textContent = choiceTemp[3];
}

function timeUp() {
  if (time < 0) {
    //clearInterval(startTimer);(need to make this function still)
    time = 0;
    timerUpdate();
    //endQuiz();(need to make this function still)
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
/*To do:
-Score Counter function: 
  --variable for user input (not sure if evaluate in startTimer function comes into play here?)
  --if user input === current answer,
    ---populateQuestions
    ---score++
  --else user input !== current answer
    ---time-- (X10?)
    ---populateQuestions

-clearInterval (need to look this one up)
-endQuiz:
  --if no more questions left,
      ---stop time
      ---display:
        endingScore.textContent
        scoreText.textContent
        intials.textContent
  


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

