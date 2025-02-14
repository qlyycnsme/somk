// 获取元素
const filter = document.getElementById("filter");
const smoke = document.getElementById("smoke");
const scoreDisplay = document.getElementById("score");
const lighterSound = document.getElementById("lighter-sound");

let startTime = null;
let timerInterval = null;

// 监听鼠标按下事件
filter.addEventListener("mousedown", () => {
    smoke.classList.add("active"); // 开始冒烟
    lighterSound.play(); // 播放打火机音效
    startTimer(); // 开始计时
});

// 监听鼠标松开事件
filter.addEventListener("mouseup", () => {
    smoke.classList.remove("active"); // 停止冒烟
    stopTimer(); // 停止计时
});

// 监听鼠标移出事件
filter.addEventListener("mouseleave", () => {
    smoke.classList.remove("active"); // 停止冒烟
    stopTimer(); // 停止计时
});

// 开始计时
function startTimer() {
    if (startTime === null) {
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
    }
}

// 停止计时
function stopTimer() {
    if (startTime !== null) {
        clearInterval(timerInterval);
        startTime = null;
    }
}

// 更新计时器
function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    scoreDisplay.textContent = `时间: ${elapsedTime} 秒`;
}