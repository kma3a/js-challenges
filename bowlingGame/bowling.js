class BowlingGame {
  constructor() {
    this.round = 0;
    this.game = [];
  }
  addPins(num) {
    if(this.round > 0) {
      var previousRounds = this.round - 2 < 0 ? 0 : this.round - 2;
      for(previousRounds; previousRounds < this.round; previousRounds ++ ) {
        if(this.game[previousRounds].morePinsAmount() > 0) {
          this.game[previousRounds].addTotal(num);
        }
      }
    }
    if(!this.game[this.round]){
      this.game[this.round] = new Frame(num, this.round);
      if(num === 10) {
        this.round++;
      }
      return;
    }
    this.game[this.round].addPins(num);
    this.round ++;
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
  constructor(num, round) {
    this.round = round + 1;
    this.total = 0;
    this.pins = [];
    this.addPins(num);
    this.needsMorePins = 0;
    if(num === 10 && this.round !== 9) {
      this.needsMorePins = 2;
      this.pins = [10, 0];
    }
  }
  addPins(pins) {
    this.pins[this.pins.length] = pins;
    this.total += pins;
    if(this.pins.length === 2 && this.total === 10) {
      this.needsMorePins = 1;
    }

  }
  printFrame() {
    return "Frame " +  this.round + "\n" + "[" + this.pins[0] + "," + this.pins[1] + "]";
  }
  getTotal() {
    return this.total;
  }
  addTotal(num) {
    this.total += num;
    this.needsMorePins--;
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
currentGame.addPins(4);
currentGame.addPins(2);


currentGame.showGame();
