/*When the start button is pressed (call button),
the first question pops up (remove intro card, call question 1 card),
with (buttons/check boxes?) for multiple choice answers
and a timer starts*/
var timeEl = document.querySelector(".time");
var startBtn = document.getElementById("start");
var secLeft = 120;

//function to run timer
function setTime() {
  var timerInterval = setInterval(function () {
    secLeft--;
    timeEl.textContent = secLeft;

    if (secLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//Timer begins when start button is clicked
startBtn.addEventListener("click", setTime);

// let time = startingMinutes * 60;

// const countdownEl = document.getElementById("countdown");

// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   seconds = seconds < 5 ? "0" + seconds : seconds;

//   countdownEl.innerHTML = `${minutes}: ${seconds}`;
//   time--;
// }
// startBtn.addEventListener("click", updateCountdown);
