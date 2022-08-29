export default function Timer(initialTime) {
    let time = initialTime;
    let timerElement;
    let timeView;
    let intervalId;
    let isTimerRunning = false;

    function displayTime() {
        time--;
        if (time == 0) {
            stopTimer();
        }
        timeView.innerText = time;
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

    function createStartButton() {
        const startButton = document.createElement('button');
        startButton.innerText = 'start';
        timerElement.appendChild(startButton);
        startButton.addEventListener('click', startTimer);
    }

    function createDeleteButton() {
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        timerElement.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleteTimer)

    }

    function createPauseButton() {
        const pauseButton = document.createElement('button');
        pauseButton.innerText = 'pause';
        pauseButton.addEventListener('click', stopTimer);
        timerElement.appendChild(pauseButton);
    }

    function createTimeView() {
        timeView = document.createElement('span');
        timerElement.appendChild(timeView);
    }


    this.createTimer = function () {
        console.log('create timer');
        timerElement = document.createElement('div');

        createTimeView()
        createStartButton();
        createPauseButton();
        createDeleteButton();


        document.querySelector(' #timers-container').appendChild(timerElement);
    };
    console.log('my Timer');
}


