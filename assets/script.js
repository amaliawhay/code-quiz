/*PseudoCode:
A. When the user presses start("click event listener"):
    1. The timer(#timer) starts and is displayed at the top of the page
        -variable for time (global)
        -function for time decrement 
        -display "none" for #intro content
    2. The first question (#question) and selection of choices (#choice 1-4) with selectable buttons is displayed below the timer(#content) 
        -Loop (randomized?) for questions array 
        -variable to hold user answer
B. When the user selects an answer
    1. The answer is stored and compared to questions.a
        -var for user answer
        -If the user answer === questions.a:
            --#answerCheck informs user of correct answer
            --The time continues on same decrement 
            --The user's score (var for score - should be global) increases 
            --The next question is displayed (uses loop for question array)
        -If the user answer !== questions.a:
            --#answerCheck informs user of incorrect answer (and informs then of correct answer?)
            --The timer loses 10 sec off the clock
            --The user's score us unchanged
            --The next question is displayed (uses loop for question array)
C.a. When the timer hits 0:
    1.No more questions are displayed
    2.The user's score is displayed (#scoreText)
    3.The user can enter their initials (#initials) next to their score
        -This high score information is stored locally when user hits submit button (#submit)
C.b. When there are no questions left, but there is time left on the clock:
    1.No more questions are displayed
    2.The user's score is displayed (#scoreText)
    3.The user can enter their initials (#initials) next to their score
        -This high score information is stored locally when user hits submit button (#submit)*/

var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var intro = document.querySelector("#intro");
var questionTitle = document.querySelector(
  "#questionTitle"
);
var choice1Btn = document.querySelector("#choice1");
var choice2Btn = document.querySelector("#choice2");
var choice3Btn = document.querySelector("#choice3");
var choice4Btn = document.querySelector("#choice4");
var answerCheckEl = document.querySelector("#answerCheck");
var finalScoreEl = document.querySelector("#finalScore");
var scoreTextEl = document.querySelector("#scoreText");
var initialsEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var secLeft = 120;
var score = 0;

var userChoice = [];
var scoreObj = {
  initials: "",
  score: 0,
};

var savedArray =
  JSON.parse(localStorage.getItem("highscore")) || [];
var questions = [
  {
    q: "What are the 3 fundamental languages of the web?",
    c: [
      "German, French, Mandarin",
      "HTML, CSS & JavaScript",
      "Piglatin, Gibberish, baby talk",
      "Robot, Physics, Calculus",
    ],
    a: "HTML, CSS & JavaScript",
  },
  {
    q:
      "Which famous poet's daughter is considered the first computer programmer?",
    c: [
      "Shakespeare (Judith Quiney)",
      "Lord Byron (Ada Lovelace)",
      "Sylvia Plath (Frieda Hughes)",
      "E.E. Cummings (Nancy Thayer Andrews",
    ],
    a: "Lord Byron (Ada Lovelace)",
  },
  {
    q: "What is the definition of pseudocoding?",
    c: [
      "A description of the system operations written in layman's terms",
      "Fake code designed to confuse hackers",
      "Website templates",
      "Bad Code",
    ],
    a:
      "A description of the system operations written in layman's terms",
  },
  {
    q:
      "Which of the following is the correct syntax for JQuery?",
    c: ["#", "%", "@", "$"],
    a: "$",
  },
];
//These are the click events for start button
startBtn.addEventListener("click", function () {
  timerEl.textContent = setTime();
  intro.style.display = "none";
  questionTitle.textConent = getQuestions();
});
//These are the click events for each choice button
choice1Btn.addEventListener(
  "click",
  userChoice.push(questions.c[0])
);
choice2Btn.addEventListener(
  "click",
  userChoice.push(questions.c[1])
);
choice3Btn.addEventListener(
  "click",
  userChoice.push(questions.c[2])
);
choice4Btn.addEventListener(
  "click",
  userChoice.push(questions.c[3])
);
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

//function to run timer
function setTime() {
  var timerInterval = setInterval(function () {
    secLeft--;
    timerEl.textContent = "Timer: " + secLeft;

    if (secLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
//function to fill questions
function getQuestions() {
  {
    for (var i = 0; i < questions.length; i++);
    var currentQ = questions[i].q;
  }

  questionTitle.textContent = currentQ;
}

function getChoices() {
  var currentChoices = [];
  for (var j = 0; j < questions.c.length; j++) {
    currentChoices.push(questions.c[j]);
  }
  choice1Btn.textContent = currentChoices[0];
  choice2Btn.textContent = currentChoices[1];
  choice3Btn.textContent = currentChoices[2];
  choice4Btn.textContent = currentChoices[3];
}

function checkAnswer() {
  if (userChoice === questions.a) {
    answerCheckEl.textContent = "Correct!";
    score++;
  } else {
    answerCheckEl.textContent = "Incorrect";
    score++;
    time--;
  }
  getQuestions();
}

function endQuiz() {
  if ((secLeft = 0)) {
    scoreTextEl.textContent = score;
    initialsEl.textContent = initials.value;
  } else if (questions[4].q) {
    scoreTextEl.textContent = score;
    initialsEl.textContent = initials.value;
  }
}
