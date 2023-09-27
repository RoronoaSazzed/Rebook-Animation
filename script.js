// First segmant
const phoneContent = document.getElementById("phone-content");
const appleTopBar = document.getElementById("apple-top-bar"); // Not animated
const popUpSec = document.getElementById("pop-up-sec");
const bgBtn = document.getElementById("bg-btn");
const mailBox = document.getElementById("mail-box");
const mailAddress = document.getElementById("mail-address");
const sendBtnBg_rect = document.querySelector("#send-btn-bg rect");
// Second segmant
const searchingScreen = document.getElementById("searching-screen");
const num1 = document.getElementById("num-1");
const num2 = document.getElementById("num-2");
const num3 = document.getElementById("num-3");
const num4 = document.getElementById("num-4");
const num5 = document.getElementById("num-5");
const searchingSec = document.getElementById("searching-sec");
const foundFor = document.getElementById("found-for");
const foundSec = document.getElementById("found-sec");
const rebookBtnBg_rect = document.querySelector("#rebook-btn-bg rect");
const bookingScreen = document.getElementById("booking-screen");
const bookRoomBtnBg = document.getElementById("book-room-btn-bg");
const tickSection = document.getElementById("tick-section");
const tick = document.getElementById("tick");

// Extras from second Segmant
const foundPrice_path = document.querySelector("#found-price path");
const foundForText_path = document.querySelector("#found-for-text path");
const foundBg = document.getElementById("found-bg");
const foundBgStroke = document.getElementById("found-bg-stroke");

// Third segmant
const congratsText = document.getElementById("congrats-text");
const savedAmountText = document.getElementById("saved-amount-text");
const cancelBtn = document.getElementById("cancel-btn");

// Option buttons
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

const label1 = document.querySelector('label[for="option1"]');
const label2 = document.querySelector('label[for="option2"]');
const label3 = document.querySelector('label[for="option3"]');

// extras
let clicked = false;
let bluring1 = false;
let bluring2 = false;
// Animation start here
phoneContent.classList.add("animate");
option1.checked = true;

phoneContent.onanimationend = () => {
  popUpSec.classList.add("animate");
};

popUpSec.onanimationend = () => {
  bgBtn.classList.add("animate");
};

bgBtn.onanimationend = () => {
  mailBox.classList.add("animate");
};

mailBox.onanimationend = () => {
  phoneContent.classList.remove("animate");
  popUpSec.classList.remove("animate");
  bgBtn.classList.remove("animate");

  mailAddress.classList.add("animate");
};

mailAddress.onanimationend = () => {
  sendBtnBg_rect.classList.add("animate");
};

sendBtnBg_rect.onanimationend = () => {
  searchingScreen.classList.add("animate");
  option2.checked = true;
};

searchingScreen.onanimationend = () => {
  mailBox.classList.remove("animate");
  mailAddress.classList.remove("animate");
  sendBtnBg_rect.classList.remove("animate");

  num1.classList.add("animate");
};

num1.onanimationend = () => {
  num2.classList.add("animate");
};

num2.onanimationend = () => {
  num3.classList.add("animate");
};

num3.onanimationend = () => {
  num4.classList.add("animate");
};

num4.onanimationend = () => {
  num5.classList.add("animate");
};

num5.onanimationend = () => {
  searchingSec.classList.add("animate");
  foundFor.classList.add("animate");
};

// searchingSec.onanimationend = () => {
//   console.log("Should work!");
// };

foundFor.onanimationend = () => {
  foundPrice_path.classList.add("animate");
  foundForText_path.classList.add("animate");
  foundBg.classList.add("animate");
  foundBgStroke.classList.add("animate");
};

foundBgStroke.onanimationend = () => {
  rebookBtnBg_rect.classList.add("animate");
};

rebookBtnBg_rect.onanimationend = () => {
  bookingScreen.classList.add("animate");
  option3.checked = true;
  if (clicked) clicked = false;
};

bookingScreen.onanimationend = () => {
  searchingScreen.classList.remove("animate");
  num1.classList.remove("animate");
  num2.classList.remove("animate");
  num3.classList.remove("animate");
  num4.classList.remove("animate");
  num5.classList.remove("animate");
  searchingSec.classList.remove("animate");
  foundFor.classList.remove("animate");
  foundPrice_path.classList.remove("animate");
  foundForText_path.classList.remove("animate");
  foundBg.classList.remove("animate");
  foundBgStroke.classList.remove("animate");
  rebookBtnBg_rect.classList.remove("animate");

  bookRoomBtnBg.classList.add("animate");
};

bookRoomBtnBg.onanimationend = () => {
  tickSection.classList.add("animate");
};

tickSection.onanimationend = () => {
  bookingScreen.classList.remove("animate");
  bookRoomBtnBg.classList.remove("animate");

  tick.classList.add("animate");
};

tick.onanimationend = () => {
  congratsText.classList.add("animate");
};

congratsText.onanimationend = () => {
  savedAmountText.classList.add("animate");
};

savedAmountText.onanimationend = () => {
  cancelBtn.classList.add("animate");
};

cancelBtn.onanimationend = () => {
  setTimeout(() => {
    if (clicked) clicked = false;
    else {
      tickSection.classList.remove("animate");
      congratsText.classList.remove("animate");
      savedAmountText.classList.remove("animate");
      cancelBtn.classList.remove("animate");
      tick.classList.remove("animate");
      phoneContent.classList.remove("blur");
      appleTopBar.classList.remove("blur");
      phoneContent.classList.add("animate");
      option1.checked = true;
    }
  }, 2000);
};

const handleAnimatedStuff = () => {
  document.querySelectorAll(".animate").forEach((ele) => {
    ele.classList.remove("animate");
  });
};

label1.onclick = () => {
  if (phoneContent.classList.contains("animate")) return;
  else {
    phoneContent.classList.remove("blur");
    appleTopBar.classList.remove("blur");
    handleAnimatedStuff();
    phoneContent.classList.add("animate");
  }
};
label2.onclick = () => {
  if (searchingScreen.classList.contains("animate")) return;
  else {
    phoneContent.classList.add("blur");
    appleTopBar.classList.add("blur");
    clicked = true;
    handleAnimatedStuff();
    searchingScreen.classList.add("animate");
  }
};
label3.onclick = () => {
  if (bookingScreen.classList.contains("animate")) return;
  else {
    phoneContent.classList.add("blur");
    appleTopBar.classList.add("blur");
    if (clicked) clicked = false;
    handleAnimatedStuff();
    bookingScreen.classList.add("animate");
  }
};
