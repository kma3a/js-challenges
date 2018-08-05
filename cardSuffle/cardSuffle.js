class Card {
  constructor(suite, number) {
    this .suite = suite;
    this.number = number;
  }
  print() {
    return this.number + " of " + this.suite;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    
  }
  addCard(card) {
    this.cards.push(card);
  }
  readCards() {
    this.cards.forEach(function(card) {
      console.log(card.print());
    });
  }
  shuffleCards() {
    for(let index = 0; index < this.cards.length; index++) {
      var card = this.cards[index];
      var randIndex;
      if(index !== this.cards.length-1) {
        randIndex = randomNumber(index + 1, this.cards.length-1);
      } else {
        randIndex = randomNumber(0, index-1);
      }
      var tempCard = this.cards[randIndex];
      this.cards[randIndex] = card;
      this.cards[index] = tempCard;
    };
  }
}

function randomNumber(min, max) {
  return  Math.ceil(Math.random() * (max - min) + min);
}


let suites = ["Hearts", "Diamonds", "Spades", "Clubs"];
let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
let newDeck = new Deck(suites, numbers);

suites.forEach(function(suite) {
  numbers.forEach(function(number) {
    let card = new Card(suite, number);
    newDeck.addCard(card);
  });
});

newDeck.shuffleCards();
newDeck.readCards();

