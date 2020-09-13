var startButton = document.querySelector("#startButton");
var headerText = document.querySelector("#header-text");
var openingText = document.querySelector("#opening-text");
var buttonSet = document.querySelector("#button-set");

var quizDone = false;

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

var currentQuestion = 1;

//---Start page functions--------------------------------------------------------------
startButton.addEventListener("click", startQuiz);
function startQuiz() {
  startTimer();
  clearScreen();
  currentWuestion = 0;
  quizDone = false;
  displayQuestion(currentQuestion);
}

function displayStartPage() {
  clearScreen();

  headerText.textContent = "Coding Quiz Challenge";
  openingText.textContent =
    "Answer the following questions about coding within the time limit! Think carefully, incorrect answers will deduct time from the clock.";
  openingText.setAttribute("style", "text-align: center");

  startButton = document.createElement("button");
  startButton.textContent = "Start";
  startButton.setAttribute("class", "btn btn-primary");
  buttonSet.appendChild(startButton);
  startButton.addEventListener("click", startQuiz);

  headerText.setAttribute("style", "text-align: center");
  buttonSet.setAttribute("style", "text-align: center");
}

//---Populate questions start page-------------------------------------------------------
function displayQuestion(index) {
  clearScreen();
  headerText.textContent = questions[index].q;

  for (var i = 0; i < questions[index].c.length; i++) {
    var newButton = document.createElement("button");
    newButton.textContent = questions[index].c[i];
    newButton.setAttribute("class", "btn btn-primary");
    buttonSet.appendChild(newButton);
    buttonSet.appendChild(document.createElement("br"));
    if (questions[index].c[i] === questions[index].a) {
      newButton.addEventListener(
        "click",
        nextQuestionCorrect
      );
    } else {
      newButton.addEventListener(
        "click",
        nextQuestionWrong
      );
    }
  }
  headerText.setAttribute("style", "text-align: left");
  buttonSet.setAttribute("style", "text-align: left");
}

function nextQuestionCorrect() {
  alert("Correct!");

  currentQuestion++;
  if (currentQuestion >= questions.length) {
    quizDone = true;
    displayHighScoreEntry();
  } else {
    displayQuestion(currentQuestion);
  }
}

function nextQuestionWrong() {
  alert(
    "Incorrect! 15 seconds has been removed from the clock."
  );
  secondsRemaining -= 15;

  currentQuestion++;
  if (currentQuestion >= questions.length) {
    quizDone = true;
  } else {
    displayQuestion(currentQuestion);
  }
}
