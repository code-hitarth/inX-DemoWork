/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2021-09-15T17:01:17.194Z",
    "2021-09-18T23:36:17.929Z",
    "2021-09-19T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    //CONVERTING MILISECONDS TO DAYS
    Math.round(Math.abs((date2 - date1) / (1000 * 3600 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();

    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat().format(date);
  }
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  console.log(movs);

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    // const formattedMov = new Intl.NumberFormat(acc.locale, {
    //   style: "currency",
    //   currency: acc.currency,
    // }).format(mov);

    const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>

      <div class="movements__value">${formattedMov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  });
};

createUserName(accounts);

const calcdisplaySummary = function (acc) {
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(income, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

createUserName(accounts);
// console.log(accounts);

const updateUI = function (acc) {
  //Display Movements
  displayMovements(acc);

  //Display Balance
  calcDisplayBalance(acc);

  //Display Summary
  calcdisplaySummary(acc);
};

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);

    //In each call print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When time is  0 sec , stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Login to get started`;
      containerApp.style.opacity = 0;
    }

    //Decrease 1 sec
    time--;
  };

  //set timer to 5 mins

  let time = 120;

  //call timer every second

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

//EVENT HANDLERS
let currentAccount, timer;

//Fake always logged in

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

currentAccount = accounts.find(
  (acc) => acc.username === inputLoginUsername.value
);
// console.log(currentAccount);

const deposits = movements.filter((mov) => mov > 0);
// console.log(deposits);

const depositFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositFor.push(mov);
  }
}

// console.log(depositFor);

const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration number : ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

let a = 0;
for (const i of movements) {
  a += i;
}
// console.log(a);

//Maximum Value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
// console.log(max);

const account = accounts.find((arr) => arr.owner === "Jessica Davis");
// console.log(account);

btnLogin.addEventListener("click", function (e) {
  //Prevents  form from submitting
  e.preventDefault();

  //Displays account by filling account usernames
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount.pin === Number(inputLoginPin.value)) {
    //Display UI and a welcome message

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    console.log("Login Successful");
    containerApp.style.opacity = 100;

    //Create current date and time
    /*
    const now = new Date();
    labelDate.textContent = now;
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
*/

    //EXPERIMENTING API
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      // weekday: "short",
    };

    const locale = navigator.language;
    console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    //Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    //Timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();
    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);

  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log(`${amount} transferred successfully`);

    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //ADD TRANSFER DATE
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    //UPDATE UI
    updateUI(currentAccount);

    //RESET TIMER
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;

    //CLEAR INPUT FIELD
    inputCloseUsername.value = inputClosePin.value = "";
  }
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= 0.1 * amount)
  ) {
    setTimeout(function () {
      //Add movement
      currentAccount.movements.push(amount);

      //ADD LOAN  DATE
      currentAccount.movementsDates.push(new Date().toISOString());

      //Update UI
      updateUI(currentAccount);

      //RESET TIMER
      clearInterval(timer);
      timer = startLogoutTimer();

      //Clear Input Field
      inputLoanAmount.value = "";
    }, 2500);
  }
});

const overalBalance = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);
// console.log(overalBalance);

// console.log(movements);

movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});

// console.log(movements);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );
  console.log(movementsUI);

  // const movementsUI2 = [...document.querySelectorAll(".movements__value")];
});

//1.
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);

// console.log(bankDepositSum);

//2.
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count++ : count), 0);
// console.log(numDeposits1000);

//3.
const { deposit, withdrawal } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? `deposit` : `withdrawal`] += cur;
      return sums;
    },
    { deposit: 0, withdrawal: 0 }
  );

// console.log(deposit, withdrawal);

//4.
const convertTitleCase = function (title) {
  const exceptions = [
    "of",
    "at",
    "in",
    "by",
    "the",
    "a",
    "but",
    "or",
    "with",
    "and",
    "is",
  ];

  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");
  return capitalize(titleCase);
};

// console.log(convertTitleCase("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"));
// console.log(convertTitleCase("Just AN another example Of convertTitleCase"));
// console.log(convertTitleCase("this is a long TITLE but not too LonG"));

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = "orange";
    if (i % 3 === 0) row.style.backgroundColor = "skyblue";
  });
});

const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);
const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 3600 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
// console.log(days1);
