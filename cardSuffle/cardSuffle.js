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

  }
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

newDeck.readCards();

