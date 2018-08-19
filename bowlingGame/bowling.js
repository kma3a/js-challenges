class BowlingGame {
  constructor() {
    this.round = 0;
    this.game = [];
    this.gameOver = false;
  }
  addPins(num) {
    if(this.gameOver) {
      console.log("Game Over!");
      return;
    }
    if(this.round > 0) {
      var previousRounds = this.round - 2 < 0 ? 0 : this.round - 2;
      for(previousRounds; previousRounds < this.round; previousRounds ++ ) {
        if(!this.game[previousRounds].isFinished()) {
          this.game[previousRounds].addTotal(num);
        }
      }
    }
    if(!this.game[this.round]){
      this.game[this.round] = new Frame(this.round);
      this.game[this.round].addPins(num);
      if(num === 10 && this.round < 9) {
        this.round++;
      }
      return;
    }
    this.game[this.round].addPins(num);
    this.checkGameOver();
    if(this.round < 9) {
      this.round ++;
    }
  }
  checkGameOver() {
    this.gameOver = this.round === 9 && this.game[this.round].isFinished();
  }
  showGame() {
    var total = 0;
    var game = "";
    this.game.forEach(function(frame){
      total += frame.getTotal();
      game += frame.printFrame() + "\n" + total +"\n";
    });
    console.log( game + "\nTotal: " +  total);
  }
}

class Frame {
  constructor(round, isLast) {
    this.round = round + 1;
    this.total = 0;
    this.pins = [];
    this.needsMorePins = isLast ? 3 : 2;
    this.addPinsToTotal = 0;
    this.finished = false;
  }
  addPins(pins) {
    this.total += pins
    if(this.pins.length === 0 && pins === 10) {
      if(this.round < 10) {
        this.addPinsToTotal = 2;
        this.pins = [10, 0];
      }
      if(this.round === 10) {
        this.pins.push(10);
      }
      return;
    }
    this.needsMorePins--;
    this.pins[this.pins.length] = pins;
    if(this.pins.length === 2 && this.total === 10) {
      this.needsMorePins = 1;
    }
    this.checkFinished();
  }
  printFrame() {
    return "Frame " +  this.round + "\n" + "[" + this.showPins() +"]";
  }
  getTotal() {
    return this.total;
  }
  showPins() {
    var showPin = "";
    this.pins.forEach(function(currentPins, index, array) {
      showPin += index === array.length - 1 ? currentPins : currentPins + ", "; 
    });
    return showPin;
  }
  checkFinished() {
    this.finished = this.addPinsToTotal === 0 && this.needsMorePins === 0;
  }
  isFinished() {
    return this.finished;
  }
  addTotal(num) {
    this.total += num;
    this.addPinsToTotal--;
    this.checkFinished();
  }
  morePinsAmount() {
    return this.needsMorePins;
  }
}

var currentGame = new BowlingGame();
//roundd 1
currentGame.addPins(2);
currentGame.addPins(3);
//round 2 
currentGame.addPins(10);
//round 3
currentGame.addPins(6);
currentGame.addPins(4);
//round 4
currentGame.addPins(10);
//round 5
currentGame.addPins(10);
//round 26
currentGame.addPins(5);
currentGame.addPins(4);
//round 7
currentGame.addPins(6);
currentGame.addPins(2);
//round 8
currentGame.addPins(8);
currentGame.addPins(1);
//round 9
currentGame.addPins(4);
currentGame.addPins(2);
//round 10

currentGame.addPins(10);
currentGame.addPins(4);
currentGame.addPins(4);
currentGame.addPins(4);

currentGame.showGame();
