/*When the start button is pressed (call button),
the first question pops up (remove intro card, call question 1 card),
with (buttons/check boxes?) for multiple choice answers
and a timer starts*/
var timeEl = document.querySelector(".time");
var timeStartEl = document.getElementById("start")

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
function sendMessage() {
    timeEl.textContent = " "

timeStartEl.addEventListener("click", function setTime ());
