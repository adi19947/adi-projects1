function Timer(initialTime) {
    this.initialTime = initialTime;

    this.createTimer = function () {
        console.log('create Timer');
    }
}

const t1 = new Timer(50);
console.log('timer 1', t1);

const t2 = new Timer(40);
console.log('timer 2', t2);
export default Timer;