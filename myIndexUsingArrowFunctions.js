var cards = document.querySelectorAll(".card");
// console.log(cards);
var firstCard;
var isFlipped = false;
var secondCard;
var score = 0;
var count = 0;

var increaseScore = () => {
  displayScore = document.querySelector(".score");
  score = score + 10;
  displayScore.innerHTML = score;
  if (score === 80) {
    var winner = document.querySelector(".winner");
    if (count >= 19) {
      winner.innerHTML =
        "You just have a terrible memory ! Go and have some Almonds ";
    } else if (count >= 13) {
      winner.innerHTML = "You got the OK OK kind of memory";
    } else if (count >= 8) {
      winner.innerHTML = "You got the best memory or maybe luck !!";
    }
  }
};

var reset = () => {
  firstCard = null;
  secondCard = null;
  isFlipped = false;
};

var success = () => {
  console.log("Success");
  firstCard.removeEventListener("click", flipIt);
  secondCard.removeEventListener("click", flipIt);
  increaseScore();

  reset();
};

var fail = () => {
  console.log("Failed");
  firstCard.addEventListener("click", flipIt);
  secondCard.addEventListener("click", flipIt);
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 300);
};

var checkIt = () => {
  if (firstCard.dataset.images === secondCard.dataset.images) {
    success();
  } else {
    fail();
  }
  count++;
  console.log(count);
};

function flipIt() {
  if (!isFlipped) {
    firstCard = this;
    isFlipped = true;
    console.log(`First card is : `);
    console.log(this);
    this.classList.add("flip");
    firstCard.removeEventListener("click", flipIt);
  } else {
    console.log(`Second  card is :`);
    console.log(this);
    secondCard = this;
    this.classList.add("flip");
    secondCard.removeEventListener("click", flipIt);
    checkIt();
  }
}

cards.forEach((card) => {
  //   cardIndex = cards.indexOf(card);
  card.addEventListener("click", flipIt);
});

var shuffle = () => {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
};

window.addEventListener("load", shuffle);
