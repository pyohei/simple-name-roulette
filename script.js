const names = [
    "テスト",
];
const excludeNames = [
    "テスト",
];  // 除外したい名前を設定

let interval;
let isRunning = true;

const nameDisplay = document.getElementById('nameDisplay');
const stopButton = document.getElementById('stopButton');

// 除外したい名前を取り除いた新しい配列を作成
const filteredNames = names.filter(name => !excludeNames.includes(name));

// 名前をランダムに表示する関数
function startRoulette() {
    interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * filteredNames.length);
        nameDisplay.textContent = filteredNames[randomIndex];
    }, 10); // 0.1秒ごとに名前を表示
}

// ルーレットを止める関数
function stopRoulette() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
        stopButton.textContent = 'リセット';
    } else {
        nameDisplay.textContent = '---';
        isRunning = true;
        stopButton.textContent = 'ストップ';
        startRoulette();
    }
}

// ストップボタンのイベントリスナー
stopButton.addEventListener('click', stopRoulette);

// ページ読み込み時にルーレット開始
startRoulette();
