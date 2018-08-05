class BowlingGame {
  constructor() {
    this.round = 0;
    this.game = [];
  }
  addPins(num) {
    if(this.round === 9) {
    }
    if(!this.game[this.round]){
      this.game[this.round] = new Frame(num, this.round);
      if(this.round > 0 && (this.game[this.round-1].hasStrike() || this.game[this.round-1].hasSpare())) {
       this.game[this.round-1].addTotal(num);
      }
      if(num === 10) {
        this.round++;
      }
      return;
    }
    this.game[this.round].addPins(num);
    if(this.round > 0 && this.game[this.round-1].hasStrike()) {
     this.game[this.round-1].addTotal(num);
    }
    this.round ++;
  }
  showGame() {
    var total = 0;
    this.game.forEach(function(frame){
      console.log(frame.printFrame());
      total += frame.getTotal();
      console.log(total);
    });
    console.log(total);
  }
}

class Frame {
  constructor(num, round) {
    this.round = round + 1;
    this.total = 0;
    this.pins = [];
    this.addPins(num);
    this.strike = false;
    this.spare = false;
    if(num === 10) {
      this.strike = true;
      this.addPins(0);
    }
  }
  addPins(pins) {
    this.pins[this.pins.length] = pins;
    this.total += pins;
    if(this.pins.length === 2 && this.total === 10) {
      this.spare = true;
    }

  }
  printFrame() {
    console.log("Frame ", this.round);
    console.log(this.pins);
  }
  getTotal() {
    return this.total;
  }
  addTotal(num) {
    this.total += num;
  }
  hasStrike() {
    return this.strike;
  }
  hasSpare() {
    return this.spare;
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
currentGame.addPins(8);
currentGame.addPins(1);
//round 5
currentGame.addPins(4);
currentGame.addPins(2);
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
currentGame.addPins(4);
currentGame.addPins(2);


currentGame.showGame();
