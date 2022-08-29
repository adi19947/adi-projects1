export default function Timer(initialTime) {
    let time = initialTime;
    let timerElement;
    let timeView;
    let intervalId;
    let isTimerRunning = false;

    function displayTime() {
        time--;
        timeView.innerText = time;

        if (time == 0) {
            stopTimer();
        }
    }

    function stopTimer() {
        clearInterval(intervalId);
        isTimerRunning = false;
    }

    function startTimer() {
        if (isTimerRunning) {
            return;
        }
        console.log('timer is started');
        intervalId = setInterval(displayTime, 1000);
        isTimerRunning = true;

    }

    function pauseTimer() {
        console.log('pause');
    }

    function deleteTimer() {
        timerElement.remove();
    }


    function createButton(buttonText, eventFunction) {
        const button = document.createElement('button');
        button.innerText = buttonText;
        button.addEventListener('click', eventFunction);
        timerElement.appendChild(button);
    }

    function createTimeView() {
        timeView = document.createElement('span');
        timerElement.appendChild(timeView);
    }


    this.createTimer = function () {

        timerElement = document.createElement('div');

        createTimeView();
        timeView.innerText = time;
        createButton('start', startTimer);
        createButton('pause', pauseTimer);
        createButton('Delete', deleteTimer);


        document.querySelector(' #timers-container').appendChild(timerElement);
    };
    console.log('my Timer');
}


