function Timer(initialTime) {
    this.initialTime = initialTime;

    this.createTimer = function () {
        const timeContainer = document.querySelector(' #timers-container');
        timeContainer.innerHTML += '<div>new timer</div>'
    }
}

export default Timer;