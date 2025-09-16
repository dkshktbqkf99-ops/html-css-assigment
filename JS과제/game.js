const gameArea = document.getElementById("game-area");
const message = document.getElementById("message");

const monsterCount = Math.floor(Math.random() * 6) + 5;

let caughtCount = 0;

for (let i = 0; i < monsterCount; i++) {
  const monster = document.createElement("div");
  monster.classList.add("monster");
  monster.textContent = "😈";

  // 클릭하면 몬스터 제거
  monster.addEventListener("click", function () {
    gameArea.removeChild(monster);
    caughtCount++;

    console.log(`몬스터 ${caughtCount}마리 잡음`);

    if (caughtCount === monsterCount) {
      message.textContent = "모든 몬스터를 잡았습니다!";
    }
  });

  gameArea.appendChild(monster);
}

//ㅁㄴㅇㄹ