const userNameinput = document.querySelector("#userAuthName");
const userNameMsg = document.querySelector("#usernamemsg");

function userNameCharNum(event) {
  const userNameValue = event.target.value;
  if (userNameValue.length <= 1 || userNameValue.length >= 11) {
    userNameMsg.style.display = "block";
  } else {
    userNameMsg.style.display = "none";
  }
}

userNameinput.addEventListener("input", userNameCharNum);
