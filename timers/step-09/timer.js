export default function Timer(initialTime) {
    let time = initialTime;
    let timerElement;
    let timeView;
    let intervalId;

    function displayTime() {
        time--;
        if (time == 0) {
            stopTimer();
        }
        timeView.innerText = time;
    }

    function stopTimer() {
        clearInterval(intervalId);
    }

    function startTimer() {
        console.log('timer is started');
        intervalId = setInterval(displayTime, 1000);
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

    function createTimeView() {
        timeView = document.createElement('span');
        timerElement.appendChild(timeView);
    }


    this.createTimer = function () {
        console.log('create timer');
        timerElement = document.createElement('div');

        createTimeView()
        createStartButton();
        createDeleteButton();

        document.querySelector(' #timers-container').appendChild(timerElement);
    };
    console.log('my Timer');
}


