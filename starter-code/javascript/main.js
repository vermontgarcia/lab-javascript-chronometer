var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var split       = document.getElementById('splits');

function printTime() {   
    printMinutes();
    printSeconds();
    printMilliseconds()
}

function printMinutes() {
    minDec.innerText = chronometer.minutes[0];
    minUni.innerText = chronometer.minutes[1];
}

function printSeconds() {
    secDec.innerText = chronometer.seconds[0];
    secUni.innerText = chronometer.seconds[1];
}

function printMilliseconds() {
    milDec.innerText = chronometer.mili[0];
    milUni.innerText = chronometer.mili[1];
}

function printSplit() {
    var li = document.createElement('li');
    li.innerText = chronometer.splitClick();
    split.appendChild(li);
}

function clearSplits() {
    split.innerHTML = '';
}

function setStopBtn() {
    btnLeft.innerText = 'Stop';
    btnLeft.className = 'btn stop';
}

function setSplitBtn() {
    btnRight.innerText = 'Split';
    btnRight.className = 'btn split';
}

function setStartBtn() {
    btnLeft.innerText = 'Start';
    btnLeft.className = 'btn start';
}

function setResetBtn() {
    btnRight.innerText = 'Reset';
    btnRight.className = 'btn reset';    
}

function resetDisplay(){
    minDec.innerText = '0';
    minUni.innerText = '0';
    secDec.innerText = '0';
    secUni.innerText = '0';
    milDec.innerText = '0';
    milUni.innerText = '0';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className == 'btn start'){
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
    } else {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.className == 'btn split'){
        printSplit();
    } else {        
        chronometer.resetClick();
        clearSplits();
        resetDisplay();
    }
});
