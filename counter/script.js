
let countdown;
let isPaused = false;
let timeLeft = 59;


const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");


function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


function startTimer() {
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        } else {
            timeLeft--;
            updateDisplay(timeLeft);
        }
    }, 1000);

    startButton.disabled = true;
    pauseButton.disabled = false;
}


function pauseTimer() {
    clearInterval(countdown);
    startButton.disabled = false;
    pauseButton.disabled = true;
}


function resetTimer() {
    clearInterval(countdown);
    timeLeft = 10;
    updateDisplay(timeLeft);
    startButton.disabled = false;
    pauseButton.disabled = true;
}


startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);


updateDisplay(timeLeft);

