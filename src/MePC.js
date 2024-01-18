/// 打字音效
// 音效文件的路径
const soundFiles = [
    './res/click01.wav',
    './res/click02.wav',
    './res/click03.wav'
];

const printsoundFile = [
    './res/printer01.wav'
];
// 获取文本输入框
const terminalInput = document.getElementById('terminal-input');

// 随机播放音效的函数
function playRandomSound() {
    const randomIndex = Math.floor(Math.random() * soundFiles.length);
    const audio = new Audio(soundFiles[randomIndex]);
    audio.play();
}

// 播放音效的函数
function playSound(soundFiles,keyType) {
    const audio = new Audio(soundFiles[keyType]);
    audio.play();
}

// 监听文本输入框的键盘事件
terminalInput.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    if (key === 'enter') {
        playSound(soundFiles,0);
    } else if (key === 'backspace' || key === 'delete' || key === 'space') {
        playSound(soundFiles,1);
    } else {
        // 如果想要为其他键添加音效，可以在这里添加相应的逻辑
        playSound(soundFiles,2);
    }
});