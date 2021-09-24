//Selecting elements

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
let current0El = document.querySelector(".current-score");
let current1El = document.querySelector(".current-score");
let score, currentScore, playing, activePlayer;
//Starting Conditions

const init = function () {
  activePlayer = 0;
  currentScore = 0;
  score = [0, 0];
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El = 0;
  current1El = 0;
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  //   player0El.classList.remove("player--active");
  player1El.classList.remove("player--active");
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //   document.getElementById(`current--${!activePlayer}`).textContent = 0;
  diceEl.classList.add("hidden");
};
init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//Rolling Dice Functionality

// const rollDice = function () {
//   //GENERATING A RANDOM DICE ROLL
//   const dice = Math.trunc(Math.random() * 6) + 1;
//   console.log(dice);
//}

btnRoll.addEventListener("click", function () {
  //GENERATING A RANDOM DICE ROLL

  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //DISPLAY DICE
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //CHECK FOR ROLLED 1 .... IF TRUE SWITCH THE PLAYER
    if (dice != 1) {
      //ADD DICE TO THE CURRENT SCORE
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //SWITCH TO NEXT PLAYER
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //ADD CURRENT SCORE TO ACTIVE PLAYER'S SCORE
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //CHECK IF PLAYER'S SCORE IS >= 100

    if (score[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }

    //FINISH THE GAME
    //SWITCH TO NEXT PLAYER
    switchPlayer();
  }
});

btnNew.addEventListener("click", init);
