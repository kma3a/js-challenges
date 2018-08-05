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
  getTopCard() {
   return this.cards.shift();
  }
}

function randomNumber(min, max) {
  return  Math.ceil(Math.random() * (max - min) + min);
}

class Player {
  constructor() {
    this.hand = [];
  }
  getCard(card) {
    this.hand.push(card);
  }
  readHand() {
    this.hand.forEach(function(card) {
      console.log(card.print());
    });
  }
}

let suites = ["Hearts", "Diamonds", "Spades", "Clubs"];
let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
let newDeck = new Deck(suites, numbers);

function createDeck() {
  suites.forEach(function(suite) {
    numbers.forEach(function(number) {
      let card = new Card(suite, number);
      newDeck.addCard(card);
    });
  });
}

var numCards = 5;
var numPlayers = 5;

function dealCards(amountOfCards, amountOfPlayers) {
  newDeck.shuffleCards();
  var players = createPlayers(amountOfPlayers);
  while(amountOfCards > 0) {
    for( var index = 0; index < amountOfPlayers; index++) {
      var card = newDeck.getTopCard();
      players[index].getCard(card);
    };
    amountOfCards--;
  }

  readCards(players);
}

 function createPlayers(amountOfPlayers){
  var players = [];
  while(players.length < amountOfPlayers) {
    players.push(new Player());
  }
  return players;
}

function readCards(players) {
  players.forEach(function(player, index) {
    var playerNumber = index + 1;
    console.log("Player " + playerNumber);
    player.readHand();
  });
}
createDeck(); 
dealCards(numCards, numPlayers);


