const timer = document.querySelector('.timer');
const title = document.querySelector('.title');
const startBtn = document.querySelector('.startBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const resumeBtn = document.querySelector('.resumeBtn');
const resetBtn = document.querySelector('.resetBtn');

//making variables
const work_time = 1*60;
const break_time = 0.5*60;
let timerID = null;

//function to countdown
const countDown = (time) => {
    return () =>{
        timer.textContent = time;
        time--;
        if(time < 0){
            stopTimer();
            timerID = break_time;
        }
    }
}

// arrow function to start timer
const startTimer = (startTime) =>{
    if(timerID !== null)
        stopTimer();
    return setInterval(countDown(startTime),1000);
}

//arrow function to stop timer
const stopTimer = () =>{
    clearInterval(timerID);
    timerID = null;
}


//adding event listener to start button
startBtn.addEventListener('click',()=>{
    console.log("working")
    timerID = startTimer(work_time);
});