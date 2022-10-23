let themeButtonDark = document.querySelector("#theme-button-dark");
let themeButtonPink = document.querySelector("#theme-button-pink");
let themeButtonLight = document.querySelector("#theme-button-light");

function changeThemePink(event) {
  event.preventDefault();
  document.body.style.background = " #ebd5d5";
  document.querySelector(".main-content").style.background = "#ea8a8a";
  themeButtonPink.style.background = "#fecea8";
  themeButtonPink.style.borderColor = "#fecea8";
  themeButtonDark.style.background = "#f2ead3";
  themeButtonDark.style.borderColor = "#f2ead3";
  themeButtonLight.style.background = "#f2ead3";
  themeButtonLight.style.borderColor = "#f2ead3";
}

function changeThemeDark(event) {
  event.preventDefault();
  document.body.style.background =
    "linear-gradient(to right, #434343 0%, black 100%)";
  document.querySelector(".main-content").style.background = " #fecea8";
  themeButtonDark.style.background = "#fecea8";
  themeButtonDark.style.borderColor = "#fecea8";
  themeButtonPink.style.background = "#f2ead3";
  themeButtonPink.style.borderColor = "#f2ead3";
  themeButtonLight.style.background = "#f2ead3";
  themeButtonLight.style.borderColor = "#f2ead3";
}

function changeThemeLight(event) {
  event.preventDefault();
  document.body.style.background = "#fafafa";
  document.querySelector(".main-content").style.background = " #e1eeff";
  themeButtonLight.style.background = "#fecea8";
  themeButtonLight.style.borderColor = "#fecea8";
  themeButtonPink.style.background = "#f2ead3";
  themeButtonPink.style.borderColor = "#f2ead3";
  themeButtonDark.style.background = "#f2ead3";
  themeButtonDark.style.borderColor = "#f2ead3";
}

themeButtonPink.addEventListener("click", changeThemePink);

themeButtonDark.addEventListener("click", changeThemeDark);

themeButtonLight.addEventListener("click", changeThemeLight);
