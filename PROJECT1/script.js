let guess, secretNumber, score, highscore;
score = 20;
highscore = 0;
secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const displayMsg = function (message) {
  document.querySelector(".message").textContent = message;
};

document.getElementById("Btn").addEventListener("click", function () {
  guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  //NO INPUTS
  if (!guess) {
    // document.querySelector(".message").textContent = "No  Number";
    displayMsg("NO Number");
    document.querySelector("body").style.backgroundColor = "#00008B";
  }
  //IF GUESS EQUALS SECRETNUMBER
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "You Won 🔥";
    displayMsg("You Won 🔥");
    document.querySelector("body").style.backgroundColor = "#008000";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //IF GUESS DOESNOT MATCH SECRET NUMBER
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess < secretNumber ? "Too Low 😂 " : "Too High 🤣");
      // document.querySelector(".message").textContent =
      //   guess < secretNumber ? "Too Low 😂 " : "Too High 🤣";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "GAME OVER 🤙";
      displayMsg("GAME OVER 🤙");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#8B0000";
    }
  }
  //IF GUESS TOO LOW
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low 😂 ";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "GAME OVER 🤙";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "#8B0000";
  //   }

  //   //IF GUESS TOO HIGH
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too High ";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "GAME OVER 🤙";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "#8B0000";
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMsg("Start guessing...");
  // document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
