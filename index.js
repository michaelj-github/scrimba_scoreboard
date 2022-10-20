const homeScore = document.getElementById("homeScore");
const guestScore = document.getElementById("guestScore");
const homeScoreH3 = document.getElementById("homeScoreH3");
const guestScoreH3 = document.getElementById("guestScoreH3");
const resetButton = document.getElementById("resetButton");
const addOneHomeButton = document.getElementById("addOneHomeButton");
const addTwoHomeButton = document.getElementById("addTwoHomeButton");
const addThreeHomeButton = document.getElementById("addThreeHomeButton");
const addOneGuestButton = document.getElementById("addOneGuestButton");
const addTwoGuestButton = document.getElementById("addTwoGuestButton");
const addThreeGuestButton = document.getElementById("addThreeGuestButton");
let homeScoreCount = 0;
let guestScoreCount = 0;

resetButton.addEventListener("click", () => {
  flashBoard();
  homeScoreCount = 0;
  guestScoreCount = 0;
});

addOneHomeButton.addEventListener("click", () => {
  homeScoreCount++;
  homeScore.innerText = homeScoreCount;
  checkScore();
});
addTwoHomeButton.addEventListener("click", () => {
  homeScoreCount += 2;
  homeScore.innerText = homeScoreCount;
  checkScore();
});
addThreeHomeButton.addEventListener("click", () => {
  homeScoreCount += 3;
  homeScore.innerText = homeScoreCount;
  checkScore();
});

addOneGuestButton.addEventListener("click", () => {
  guestScoreCount++;
  guestScore.innerText = guestScoreCount;
  checkScore();
});
addTwoGuestButton.addEventListener("click", () => {
  guestScoreCount += 2;
  guestScore.innerText = guestScoreCount;
  checkScore();
});
addThreeGuestButton.addEventListener("click", () => {
  guestScoreCount += 3;
  guestScore.innerText = guestScoreCount;
  checkScore();
});

const checkScore = () => {
  homeScoreH3.classList.remove("ahead");
  guestScoreH3.classList.remove("ahead");
  // prevent score from overrunning the board, limit of 999
  if (homeScoreCount > 996) homeScoreCount = 996;
  if (guestScoreCount > 996) guestScoreCount = 996;
  if (homeScoreCount > guestScoreCount) {
    homeScoreH3.classList.add("ahead");
  }
  if (homeScoreCount < guestScoreCount) {
    guestScoreH3.classList.add("ahead");
  }
};

const flashBoard = () => {
  homeScoreH3.classList.remove("ahead");
  guestScoreH3.classList.remove("ahead");
  homeScore.innerText = "000";
  guestScore.innerText = "000";
  setTimeout(() => {
    homeScore.innerText = "";
    guestScore.innerText = "";
  }, 500);
  setTimeout(() => {
    homeScore.innerText = "888";
    guestScore.innerText = "888";
  }, 1000);
  setTimeout(() => {
    homeScore.innerText = "";
    guestScore.innerText = "";
  }, 1500);
  setTimeout(() => {
    homeScore.innerText = "000";
    guestScore.innerText = "000";
  }, 2000);
  setTimeout(() => {
    homeScore.innerText = "0";
    guestScore.innerText = "0";
  }, 2500);
};

flashBoard();
