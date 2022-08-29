export default function Timer(initialTime) {
    let time = initialTime;
    let timerElement;

    function startTimer() {
        console.log('timer is started');
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

    this.createTimer = function () {
        console.log('create timer');
        timerElement = document.createElement('div');
        timerElement.innerText = time;

        createStartButton();
        createDeleteButton();

        document.querySelector(' #timers-container').appendChild(timerElement);
    };
    console.log('my Timer');
}


