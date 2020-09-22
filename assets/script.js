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

//---Timer functions----------------------------------------------------
var secondsRemaining = 0;
var interval;

var timeDisplay = document.querySelector("#timeDisplay");

function startTimer() {
  setTimeout();

  interval = setInterval(function () {
    secondsRemaining--;
    renderTime();
  }, 1000);
}

function setTime() {
  clearInterval(interval);
  secondsRemaining = questions.length * 15;
}

function renderTime() {
  timeDisplay.textContent = "Time: " + secondsRemaining;

  if (quizDone == true || secondsRemaining <= 0) {
    clearInterval(interval);
    timeDisplay.textContent = "";
    displayHighScoreEntry();
  }
}
//---High Score functions----------------------------------------------------------
var highScoreForm = document.querySelector(
  "#highScoreForm"
);
highScoreForm.setAttribute("style", "text-align: left");

var highScoreLabel = document.createElement("label");
highScoreLabel.setAttribute("for", "initials");
highScoreLabel.textContent = "Enter your initials: ";

var highScoreTextEntry = document.createElement("input");
highScoreTextEntry.setAttribute("type", "text");
highScoreTextEntry.setAttribute("name", "initials");
highScoreTextEntry.setAttribute("id", "initials");

var highScoreSubmitBtn = document.createElement("button");
highScoreSubmitBtn.setAttribute("class", "btn btn-primary");
highScoreSubmitBtn.textContent = "Submit";
highScoreSubmitBtn.addEventListener("click", addHighScore);

var goBackBtn = document.createElement("button");
goBackBtn.setAttribute("class", "btn btn-primary");
goBackBtn.textContent = "Go Back";
goBackBtn.addEventListener("click", displayStartPage);

var clearHighScoresBtn = document.createElement("button");
clearHighScoresBtn.setAttribute("class", "btn btn-primary");
clearHighScoresBtn.textContent = "Clear High Scores";
clearHighScoresBtn.addEventListener(
  "click",
  clearHighScores
);

localStorage.setItem("scoreboard", JSON.stringify([]));

var scoreboardDisplay = document.querySelector(
  "#scoreboardDisplay"
);

function displayHighScoreEntry() {
  clearScreen();

  headerText.textContent = "You have completed the quiz!";
  openingText.textContent =
    "Your final score is " + secondsRemaining;
  openingText.setAttribute("style", "text-align: left");

  highScoreForm.appendChild(highScoreLabel);
  highScoreForm.appendChild(highScoreTextEntry);
  highScoreTextEntry.value = "";
  highScoreForm.appendChild(highScoreSubmitBtn);
}

function addHighScore() {
  var initials = highScoreTextEntry.value;
  var score = secondsRemaining;

  var scoreboard = JSON.parse(
    localStorage.getItem("scoreboard")
  );
  scoreboard.push(highScore);

  localStorage.setItem(
    "scoreboard",
    JSON.stringify(scoreboard)
  );

  displayHighScores();
}

function displayHighScores() {
  clearScreen();

  quizDone = true;

  headerText.textContent = "High Scores";

  sortHighScores();

  var scoreboard = JSON.parse(
    localStorage.getItem("scoreboard")
  );
  for (var i = 0; i < scoreboard.length; i++) {
    var newScore = document.createElement("div");
    newScore.textContent =
      "" +
      (i + 1) +
      ". " +
      scoreboard[i].myInitials +
      " - " +
      scoreboard[i].myScore;
    var divider = document.createElement("hr");
    scoreboardDisplay.appendChild(newScore);
    scoreboardDisplay.appendChild(divider);
  }
  scoreboardDisplay.appendChild(goBackBtn);
  scoreboardDisplay.appendChild(clearHighScoresBtn);
}

function sortHighScores() {
  var scoreboard = JSON.parse(
    localStorage.getItem("scoreboard")
  );
  for (var i = 0; i < scoreboard.length; i++) {
    for (var j = i + 1; j < scoreboard.length; j++) {
      if (scoreboard[j].myScore > scoreboard[i].myScore) {
        var temp = scoreboard[i];
        scoreboard[i] = scoreboard[j];
        scoreboard[j] = temp;
      }
    }
  }
  localStorage.setItem(
    "scoreboard",
    JSON.stringify(scoreboard)
  );
}

function clearHighScores() {
  localStorage.clear();
  localStorage.setItem("scoreboard", JSON.stringify([]));
  displayHighScores();
}

//---General functions--------------------------------------------
