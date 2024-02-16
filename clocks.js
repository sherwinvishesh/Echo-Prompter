let timer;
let isPaused = false;
let remainingSeconds; // This will keep track of the remaining seconds when paused

document.getElementById('start-timer').addEventListener('click', function() {
    if (isPaused) {
        isPaused = false;
        this.style.display = 'none';
        document.getElementById('pause-timer').style.display = 'inline';
        startTimer(remainingSeconds); // Resume with remaining seconds
    } else {
        const minutes = parseInt(document.getElementById('minutes').value) || 0;
        const seconds = parseInt(document.getElementById('seconds').value) || 0;
        remainingSeconds = minutes * 60 + seconds;
        startTimer(remainingSeconds);
    }
});

document.getElementById('pause-timer').addEventListener('click', function() {
    isPaused = true;
    this.style.display = 'none';
    document.getElementById('start-timer').style.display = 'inline';
    clearInterval(timer);
});

document.getElementById('stop-timer').addEventListener('click', function() {
    clearInterval(timer);
    resetTimer();
});

function startTimer(seconds) {
    remainingSeconds = seconds;

    document.getElementById('start-timer').style.display = 'none';
    document.getElementById('pause-timer').style.display = 'inline';
    document.getElementById('stop-timer').style.display = 'inline';

    timer = setInterval(function() {
        if (remainingSeconds <= 0) {
            clearInterval(timer);
            resetTimer();
            alert('Time is up!');
            return;
        }

        const minutes = parseInt(remainingSeconds / 60, 10);
        const seconds = parseInt(remainingSeconds % 60, 10);

        document.getElementById('time-display').textContent = formatTime(minutes) + ":" + formatTime(seconds);
        remainingSeconds -= 1;
    }, 1000);
}

function resetTimer() {
    document.getElementById('time-display').textContent = "00:00";
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('start-timer').style.display = 'inline';
    document.getElementById('pause-timer').style.display = 'none';
    document.getElementById('stop-timer').style.display = 'none';
    isPaused = false;
    remainingSeconds = 0; // Reset the remaining seconds
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

let stopwatchInterval;
let stopwatchTime = 0; // Time in milliseconds

document.getElementById('startStop').addEventListener('click', function() {
    const hasClassPlay = this.firstChild.classList.contains('fa-play');
    if (hasClassPlay) {
        startStopwatch();
        this.firstChild.classList.remove('fa-play');
        this.firstChild.classList.add('fa-pause');
        document.getElementById('reset').style.display = 'inline';
    } else {
        stopStopwatch();
        this.firstChild.classList.remove('fa-pause');
        this.firstChild.classList.add('fa-play');
    }
});

document.getElementById('reset').addEventListener('click', function() {
    stopStopwatch();
    resetStopwatch();
    document.getElementById('startStop').firstChild.classList.remove('fa-pause');
    document.getElementById('startStop').firstChild.classList.add('fa-play');
    this.style.display = 'none';
});

function startStopwatch() {
    if (!stopwatchInterval) {
        const startTime = Date.now() - stopwatchTime;
        stopwatchInterval = setInterval(function() {
            stopwatchTime = Date.now() - startTime;
            document.getElementById('stopwatch-timer').textContent = formatStopwatchTime(stopwatchTime);
        }, 10); // Update stopwatch every 10 milliseconds
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    document.getElementById('stopwatch-timer').textContent = "00:00:00:000";
}

function formatStopwatchTime(ms) {
    let milliseconds = parseInt((ms % 1000) / 10),
        seconds = Math.floor((ms / 1000) % 60),
        minutes = Math.floor((ms / (1000 * 60)) % 60),
        hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}
