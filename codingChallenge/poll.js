const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlanes.bind(lufthansa));

//POLL Coding CHallenge
const poll = {
  question: "What is your favourite programming language?",

  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

  // This generates [0, 0, 0, 0]. More in the next section 😃😃😃😃😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);

    //Register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("felfk");
  },

  displayResults(type = "array") {
    if (type === "array") {
    } else if (type === "string") {
      console.log(`Poll results are : ${this.answers.join(",")}`);
    }
  },
};

// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [5, 2, 3] }, "array");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [5, 2, 3] });

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
