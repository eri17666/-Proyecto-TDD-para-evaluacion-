import sumar from "./sumador";
import TennisScorer from "./tennisScorer.js";
import calculate from "./Totalizadordeventa.js";
import calculateFee from "./parqueo.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});


const scorer = new TennisScorer();
const scoreDiv = document.querySelector("#score");
const player1Btn = document.querySelector("#player1-btn");
const player2Btn = document.querySelector("#player2-btn");

function updateScore() {
  scoreDiv.textContent = scorer.showScore();

  if (scorer.showScore().startsWith("Game for Player")) {
    player1Btn.disabled = true;
    player2Btn.disabled = true;
  }
}

player1Btn.addEventListener("click", () => {
  scorer.player1Scores();
  updateScore();
});

player2Btn.addEventListener("click", () => {
  scorer.player2Scores();
  updateScore();
});

const totalizerForm = document.querySelector("#totalizer-form");
const qtyInput = document.querySelector("#qty");
const priceInput = document.querySelector("#price");
const stateSelect = document.querySelector("#state");
const resultDi = document.querySelector("#result");

totalizerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const qty = parseInt(qtyInput.value, 10);
  const price = parseFloat(priceInput.value);
  const state = stateSelect.value;

  try {
    const r = calculate({ qty, price, state });

    resultDi.innerHTML = `
      <p><strong>Subtotal:</strong> $${r.subtotal}</p>
      <p><strong>Descuento aplicado:</strong> ${r.discountRate * 100}%</p>
      <p><strong>Monto descuento:</strong> -$${r.discount}</p>
      <p><strong>Total después del descuento:</strong> $${r.TotalafterDiscount}</p>
      <p><strong>Impuesto (${(r.taxRate * 100).toFixed(2)}%):</strong> $${r.taxAmount}</p>
      <p><strong>Total Final:</strong> $${r.total}</p>
    `;
  } catch (err) {
    resultDi.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }

});

const parkingForm = document.querySelector("#parking-form");
const entryInput = document.querySelector("#entry");
const exitInput = document.querySelector("#exit");
const lostTicketInput = document.querySelector("#lost-ticket");
const parkingResult = document.querySelector("#parking-result");

parkingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    const entry = new Date(entryInput.value);
    const exit = new Date(exitInput.value);
    const lostTicket = lostTicketInput.checked;

    const result = calculateFee(entry, exit, lostTicket);

    parkingResult.innerHTML = `
      <p><strong>Total a pagar:</strong> Bs ${result.total}</p>
    `;
  } catch (err) {
    parkingResult.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }
});