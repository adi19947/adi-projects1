const stopWatchView = document.querySelector('#stop-watch-view');

let hundredth = 0;
let seconds = 0;
let minutes = 0;

function displayTime() {
  let seconsString = seconds;
  if (seconds < 10) {
    seconsString = '0' + seconds;
  }
  //TODO  do the same to the minutes
  stopWatchView.innerHTML = `${minutes}:${seconsString}:${hundredth}`;
}

function handleTimeChange() {
  hundredth++;
  if (hundredth > 99) {
    hundredth = 0;
    seconds++;
    if (seconds > 59) {
      seconds = 0;
      minutes++;
    }
  }

  displayTime();
}

setInterval(handleTimeChange, 10);
