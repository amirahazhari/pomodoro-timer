const FOCUS_MINUTES = 25;
const BREAK_MINUTES = 5;

let currentMode = 'focus'; // 'focus' or 'break'
let timeRemaining = FOCUS_MINUTES * 60; // in seconds
let intervalId = null;
let isRunning = false;
let vibeOn = false;

const timerEl = document.getElementById('timer');
const statusEl = document.getElementById('status');
const startPausebtn = document.getElementById('startPausebtn');
const resetBtn = document.getElementById('resetBtn');
const focusBtn = document.getElementById('focusbtn');
const breakBtn = document.getElementById('breakBtn');
const vibeToggle = document.getElementById('vibeToggle');
const lofiAudio = document.getElementById('lofi');
const lofiOptions = document.querySelectorAll('.lofi-option');
const currentTrackLabel = document.getElementById('currentTrack');


function formatTime(sec){
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

function renderTime(){
    timerEl.textContent = formatTime(timeRemaining);

}

function setMode(mode){
    currentMode = mode;
   timeRemaining = (mode === 'focus' ? FOCUS_MINUTES : BREAK_MINUTES) * 60;
    statusEl.textContent = mode === 'focus' ? 'Ready to focus' : 'Time to rest';
    renderTime();

    focusBtn.classList.toggle('active', mode === 'focus');
    breakBtn.classList.toggle('active', mode === 'break');

    stopTimer();
}

function startTimer(){
    if(isRunning) return;
    isRunning = true;
    startPausebtn.textContent = 'Pause';
    statusEl.textContent = currentMode === 'focus' ? 'Focusing...' : 'On a break...';
    intervalId = setInterval(() => {
            timeRemaining--;
            renderTime();
            if(timeRemaining <= 0){
                clearInterval(intervalId);
                isRunning = false;
                startPausebtn.textContent = 'Start';
                statusEl.textContent = currentMode === 'focus' ? 'Focus Session Done! Take a break': 'Break over! Back to focus';

                alert('Pomodoro session ended!');

                // Auto-switch modes
                setMode(currentMode === 'focus' ? 'break' : 'focus');
            }
        }, 1000);
    }
function stopTimer(){
    isRunning = false;
    startPausebtn.textContent = 'Start';
    if(intervalId) clearInterval(intervalId);
}

startPausebtn.addEventListener('click', () => {
    if(isRunning){
        stopTimer();
    statusEl.textContent = 'Paused ||';}
    else{
        startTimer();
    }
});

resetBtn.addEventListener('click', () => {
    setMode(currentMode);
});

focusBtn.addEventListener('click', () => {
    setMode('focus');
});

breakBtn.addEventListener('click', () => {
    setMode('break');
});

vibeToggle.addEventListener('change', () => {
    vibeOn = vibeToggle.checked;

    if (vibeOn) {
        lofiAudio.play().catch(() => {});
    } else {
        lofiAudio.pause();
    }
});


lofiOptions.forEach(btn => {
    btn.addEventListener('click', () => {
          const newSrc = btn.dataset.src;
        lofiAudio.src = newSrc;
        lofiAudio.load()

        lofiOptions.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

         // update "Now playing" text (using button text)
    currentTrackLabel.textContent = btn.textContent.trim();

        if(vibeOn){
            lofiAudio.play().catch(() => {});
        }
    });
});
renderTime();