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
let stopwatchElapsed = 0; // Time in milliseconds
let stopwatchRunning = false;

function formatStopwatch(milliseconds) {
  let hours = Math.floor(milliseconds / 3600000);
  milliseconds %= 3600000;
  let minutes = Math.floor(milliseconds / 60000);
  milliseconds %= 60000;
  let seconds = Math.floor(milliseconds / 1000);
  milliseconds %= 1000;
  return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}.${pad(milliseconds, 3)}`;
}

function pad(number, length) {
  return ('000' + number).slice(-length);
}

function updateStopwatchDisplay() {
  document.getElementById('stopwatch-display').textContent = formatStopwatch(stopwatchElapsed);
}

function startStopwatch() {
  const startTime = Date.now() - stopwatchElapsed;
  stopwatchInterval = setInterval(() => {
    stopwatchElapsed = Date.now() - startTime;
    updateStopwatchDisplay();
  }, 1);
  stopwatchRunning = true;
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchElapsed = 0;
  updateStopwatchDisplay();
  stopwatchRunning = false;
}

// Remove event listeners from here and integrate into Teleprompter.js
