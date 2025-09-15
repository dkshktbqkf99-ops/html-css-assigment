const name = prompt("이름을 입력하세요:");
const age = prompt("나이를 입력하세요:");
const food = prompt("좋아하는 음식을 입력하세요:");

console.log("이름:", name, typeof name);
console.log("나이:", age, typeof age);
console.log("음식:", food, typeof food);

const ageNumber = Number(age); 

const resultText = `
  👤 이름: ${name} <br>
  🎂 나이: ${ageNumber}세 <br>
  🍽️ 좋아하는 음식: ${food}
`;

const infoBox = document.getElementById("user-info");
infoBox.innerHTML = resultText;