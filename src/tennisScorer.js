class TennisScorer {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }
  showScore() {
    if ((this.player1Points >= 4 || this.player2Points >= 4) &&
        Math.abs(this.player1Points - this.player2Points) >= 2) {
      return `Game for Player ${this.player1Points > this.player2Points ? 1 : 2}`;
    }
    
    if (this.player1Points >= 4 && this.player1Points === this.player2Points + 1) {
      return "Advantage Player 1";
    }else if (this.player2Points>=4 && this.player2Points === this.player1Points + 1) {
      return "Advantage Player 2";
    }else if (this.player1Points >= 3 && this.player1Points===this.player2Points) {
      return "Deuce";
    }
    else if (this.player1Points === this.player2Points) {
      const names = ["Love", "15", "30", "40"];
      return `${names[this.player1Points]} - ${names[this.player2Points]}`;
    }
        const names = ["Love", "15", "30", "40"];
    return `${names[this.player1Points]} - ${names[this.player2Points]}`;
  }
  player1Scores() {
    this.player1Points++;
    
  }
  player2Scores() {
    this.player2Points++;
  }
}
export default TennisScorer;
