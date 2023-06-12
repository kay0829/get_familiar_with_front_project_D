// 아이디 입력 관련 기능 구현(+ html 태그 속성 부여)

const userNameInput = document.querySelector("#userAuthName");
const userNameMsg = document.querySelector("#usernamemsg");

function userNameCharNum(event) {
  const userNameValue = event.target.value;
  if (userNameValue.length <= 1) {
    userNameMsg.style.display = "block";
  } else {
    userNameMsg.style.display = "none";
  }
}

userNameInput.addEventListener("input", userNameCharNum);

// 비밀번호 입력 관련 기능 구현(+ html 태그 속성 부여, 정규표현식 활용)
// 영어 대소문자와 숫자 조건을 지키지 않으면 메시지가 빨간색이 되도록

const passwordInput = document.querySelector("#userAuthPw");
const passwordMsg = document.querySelector("#passwordmsg");

function passwordCondition(event) {
  const passwordValue = event.target.value;
  const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)$/;

  // 8자 이상 16자 이하 => 8자 미만이거나 16자 초과일때는 경고 메시지가 떠(하얀색)
  // 영어 대문자와 소문자, 숫자만을 이용해서 만들어야 됨 => 한글 같은 거 쓰면 경고 메시지가 떠(빨간색)
  // TODO : 코드스테이츠 과제 트라우마....

  if (passwordValue.length <= 8) {
    passwordMsg.style.display = "block";
    passwordMsg.style.color = "#b3cade";
    if (!passwordReg.test(passwordValue)) {
      passwordMsg.style.color = "red";
    }
  } else {
    if (!passwordReg.test(passwordValue)) {
      passwordMsg.style.display = "block";
      passwordMsg.style.color = "red";
    } else {
      passwordMsg.style.display = "none";
    }
  }
}

passwordInput.addEventListener("input", passwordCondition);
