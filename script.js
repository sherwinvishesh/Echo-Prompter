let timer;
let isPaused = false;
let remainingSeconds; // This will keep track of the remaining seconds when paused

document.getElementById('start').addEventListener('click', function() {
    if (isPaused) {
        isPaused = false;
        this.style.display = 'none';
        document.getElementById('pause').style.display = 'inline';
        startTimer(remainingSeconds); // Resume with remaining seconds
    } else {
        const minutes = parseInt(document.getElementById('minutes').value) || 0;
        const seconds = parseInt(document.getElementById('seconds').value) || 0;
        remainingSeconds = minutes * 60 + seconds;
        startTimer(remainingSeconds);
    }
});

document.getElementById('pause').addEventListener('click', function() {
    isPaused = true;
    this.style.display = 'none';
    document.getElementById('start').style.display = 'inline';
    clearInterval(timer);
});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(timer);
    resetTimer();
});

function startTimer(seconds) {
    remainingSeconds = seconds;

    document.getElementById('start').style.display = 'none';
    document.getElementById('pause').style.display = 'inline';
    document.getElementById('stop').style.display = 'inline';

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
    document.getElementById('start').style.display = 'inline';
    document.getElementById('pause').style.display = 'none';
    document.getElementById('stop').style.display = 'none';
    isPaused = false;
    remainingSeconds = 0; // Reset the remaining seconds
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
