// this file is more towards arrow functioning and most imp i fixed some bugs as well in this file .

var cards = document.querySelectorAll(".card");
var score = document.querySelector(".score");

var count = 0;

cards.forEach((card) => {
  card.addEventListener("click", flipIt);
});

var cardFlipped = false;
var firstCard;
var secondCard;

function flipIt() {
  console.log(this);
  if (!cardFlipped) {
    cardFlipped = true;
    firstCard = this;
    this.classList.add("flip");
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    this.classList.add("flip");
    check();
  }
}

function check() {
  if (firstCard.dataset.images === secondCard.dataset.images) {
    success();
  } else {
    fail();
  }
  count++;
  //   console.log("checking");
}

function increaseScore() {
  score.innerHTML = parseInt(score.innerText) + 10;
}

function success() {
  console.log("Success");
  firstCard.removeEventListener("click", flipIt);
  secondCard.removeEventListener("click", flipIt);
  reset();
  increaseScore();
}

function fail() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 700);
  console.log("failed");
}

function reset() {
  firstCard = null;
  secondCard = null;
  cardFlipped = false;
}

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
