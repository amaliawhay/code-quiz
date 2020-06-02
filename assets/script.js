/*When the start button is pressed (call button),
the first question pops up (remove intro card, call question 1 card),
with (buttons/check boxes?) for multiple choice answers
and a timer starts*/
var startBtn = document.querySelector("#start");

const startingMinutes = 5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

//setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 5 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}
startBtn.addEventListener("click", updateCountdown);

/*var startButton = document.querySelector("#start");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");

var totalSeconds = 0;
var secondsElapsed = 0;

//These two functions are just for making sure the numbers look nice for the html elements
function getFormattedMinutes() {
  //
  var secondsLeft = totalSeconds - secondsElapsed;

  var minutesLeft = Math.floor(secondsLeft / 60);

  var formattedMinutes;

  if (minutesLeft < 10) {
    formattedMinutes = "0" + minutesLeft;
  } else {
    formattedMinutes = minutesLeft;
  }

  return formattedMinutes;
}

function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;

  var formattedSeconds;

  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }

  return formattedSeconds;
}
//This function does 2 things. displays the time and checks to see if time is up.
function renderTime() {
  // When renderTime is called it sets the textContent for the timer html...
  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();

  // ..and then checks to see if the time has run out
  if (secondsElapsed >= totalSeconds) {
    /*if (status === "Working") {
      alert("Time for a break!");
    } else {
      alert("Time to get back to work!");
    }*/

/*stopTimer();
  }
}

// This function is where the "time" aspect of the timer runs
// Notice no settings are changed other than to increment the secondsElapsed var
function startTimer() {
  setTime();

  // we only want to start the timer if minutes is > 0
  if (totalSeconds > 0) {
    /* the "interval" variable here using "setInterval()" begins the recurring increment of the 
       secondsElapsed variable which is used to check if the time is up */
/* interval = setInterval(function () {
      secondsElapsed++;
      //So renderTime() is called here once every second.
      renderTime();
    }, 1000);
  } /*else {
    alert("Minutes of work/rest must be greater than 0.")
  }*/
/*}
startButton.addEventListener(
  "click",
  startTimer,
  renderTime
);*/
