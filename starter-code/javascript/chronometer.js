// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId=setInterval(() =>{
        this.currentTime++;
        this.setTime();
        printTime();
    }, 10)
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime/6000);  
};

Chronometer.prototype.setSeconds = function () {
    return Math.floor(this.currentTime/100 % 60);  
};

Chronometer.prototype.twoDigitsNumber = function (num) {
    return num < 10 ? '0'+ num.toString() : num.toString();
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    this.mili = this.twoDigitsNumber(this.setMilliseconds());
    
};

Chronometer.prototype.setMilliseconds = function () {
    return this.currentTime % 100;
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {
    return chronometer.minutes + ':' + chronometer.seconds + ':' + chronometer.mili;
};
