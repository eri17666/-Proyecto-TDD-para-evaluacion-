import calculateFee from "./parqueo.js";

function mkDate(y, m, d, h, min) {
  return new Date(y, m - 1, d, h, min, 0, 0);
}
describe("Parqueo - Caso base", () => {
  it("30 minutos cobra 1 hora (Bs10)", () => {
  });
});


  it("30 minutos cobra 1 hora (Bs10)", () => {
    const entry = mkDate(2025, 9, 1, 10, 0);
    const exit = mkDate(2025, 9, 1, 10, 30);
    const res = calculateFee(entry, exit);
    expect(res.total).toBe(10);
  });


  it("2 horas 10 minutos redondea a 3h (Bs30)", () => {
    const entry = mkDate(2025, 9, 1, 8, 0);
    const exit = mkDate(2025, 9, 1, 10, 10);
    const res = calculateFee(entry, exit);
    expect(res.total).toBe(30);
  });
