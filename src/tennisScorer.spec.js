import TennisScorer from "./tennisScorer.js";

describe("TennisScorer", () => {
  //Empieza sin puntos     --> "Love - Love"
  it("game empieza con ambos en cero", () => {
    const scorer = new TennisScorer();
    expect(scorer.showScore()).toEqual("Love - Love");
  });

  it("Jugador 1 marca un punto y el jugador en cero", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("15 - Love");
  });

  it("Jugador 1 marca 2 puntos y jugador 2 en cero", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("30 - Love");
  });
  it("El Jugador 1 marca 3 puntos y jugador 2 en 0", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("40 - Love");
  });

it("Jugador 2 marca un punto y jugador 1 en cero", () => {
  const scorer = new TennisScorer();
  scorer.player2Scores();
  expect(scorer.showScore()).toEqual("Love - 15");
});

it("Jugador 2 marca 2 puntos y jugador 1 en cero", () => {
  const scorer = new TennisScorer();
  scorer.player2Scores();
  scorer.player2Scores();
  expect(scorer.showScore()).toEqual("Love - 30");
});

it("Jugador 2 marca 3 puntos y jugador 1 en cero", () => {
  const scorer = new TennisScorer();
  scorer.player2Scores();
  scorer.player2Scores();
  scorer.player2Scores();
  expect(scorer.showScore()).toEqual("Love - 40");
});

it("Empate en 15 - 15", () => {
  const scorer = new TennisScorer();
  scorer.player1Scores();
  scorer.player2Scores();
  expect(scorer.showScore()).toEqual("15 - 15");
});

it("Empate en 30 - 30", () => {
  const scorer = new TennisScorer();
  scorer.player1Scores(); scorer.player1Scores();
  scorer.player2Scores(); scorer.player2Scores();
  expect(scorer.showScore()).toEqual("30 - 30");
});

it("Empate en Deuce", () => {
  const scorer = new TennisScorer();
  scorer.player1Scores(); scorer.player1Scores(); scorer.player1Scores();
  scorer.player2Scores(); scorer.player2Scores(); scorer.player2Scores();
  expect(scorer.showScore()).toEqual("Deuce");
});

it("Deuce → ventaja jugador 1", () => {
  const scorer = new TennisScorer();
  scorer.player1Scores(); scorer.player1Scores(); scorer.player1Scores();
  scorer.player2Scores(); scorer.player2Scores(); scorer.player2Scores();
  scorer.player1Scores();
  expect(scorer.showScore()).toEqual("Advantage Player 1");
});

it("Deuce → ventaja jugador 2", () => {
  const scorer = new TennisScorer();
  scorer.player1Scores(); scorer.player1Scores(); scorer.player1Scores();
  scorer.player2Scores(); scorer.player2Scores(); scorer.player2Scores();
  scorer.player2Scores();
  expect(scorer.showScore()).toEqual("Advantage Player 2");
});

it("Ventaja vuelve a Deuce si anota el rival", () => {
  const scorer = new TennisScorer();
  scorer.player1Scores(); scorer.player1Scores(); scorer.player1Scores();
  scorer.player2Scores(); scorer.player2Scores(); scorer.player2Scores();

  scorer.player1Scores(); // Advantage P1
  scorer.player2Scores(); // debería volver a deuce
  expect(scorer.showScore()).toEqual("Deuce");
});

describe("Ciclo 12: Ganador del game", () => {
  it("Jugador 1 gana el game desde 40 - 30", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores(); // 15 - Love
    scorer.player1Scores(); // 30 - Love
    scorer.player1Scores(); // 40 - Love
    scorer.player2Scores(); // 40 - 15
    scorer.player2Scores(); // 40 - 30
    scorer.player1Scores(); // Game
    expect(scorer.showScore()).toEqual("Game for Player 1");
  });

  it("Jugador 2 gana el game tras ventaja", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores(); // 15 - Love
    scorer.player1Scores(); // 30 - Love
    scorer.player1Scores(); // 40 - Love
    scorer.player2Scores(); // 40 - 15
    scorer.player2Scores(); // 40 - 30
    scorer.player2Scores(); // 40 - 40 (Deuce)
    scorer.player2Scores(); // Advantage Player 2
    scorer.player2Scores(); // Game for Player 2
    expect(scorer.showScore()).toEqual("Game for Player 2");
  });
});

});

