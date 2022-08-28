//Constructor function
function Timer(initialTime) {
  this.initialTime = initialTime;

  this.createTimer = function () {
    const timersContainer = document.querySelector('#timers-container');

    const timerElement = document.createElement('p');
    timerElement.innerText = 'new timer with create element';

    timersContainer.appendChild(timerElement);
  };
}

export default Timer;
