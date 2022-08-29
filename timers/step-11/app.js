import Timer from './timer.js'
const timerInput = document.querySelector('#time-input');




function addTimer() {
    const initialTime = timerInput.value;

    const timer = new Timer(initialTime);
    timer.createTimer();
}

document.querySelector(' #create-timer').addEventListener('click', addTimer);

