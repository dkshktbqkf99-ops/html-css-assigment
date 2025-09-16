function handleSubmit(event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("이름:", name);
  console.log("이메일:", email);
  console.log("비밀번호:", password);

  const result = document.getElementById("result");
  result.textContent = `${name}님, 가입이 완료되었습니다! `;
}

const form = document.getElementById("membership-form");
form.addEventListener("submit", handleSubmit);