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


describe("Parqueo - Validaciones", () => {
  it("lanza error si salida es menor a entrada", () => {
    const entry = mkDate(2025, 9, 1, 12, 0);
    const exit = mkDate(2025, 9, 1, 11, 0);
    expect(() => calculateFee(entry, exit)).toThrow("exit-before-entry");
  });
});


  it("lanza error si salida es igual a entrada", () => {
    const entry = mkDate(2025, 9, 1, 10, 0);
    const exit = mkDate(2025, 9, 1, 10, 0);
    expect(() => calculateFee(entry, exit)).toThrow("exit-before-entry");
  });


describe("Parqueo - Tarifa nocturna", () => {
  it("23:10 a 01:05 cobra tarifa nocturna Bs6/h", () => {
    const entry = mkDate(2025, 9, 1, 23, 10);
    const exit = mkDate(2025, 9, 2, 1, 5);
    const res = calculateFee(entry, exit);
    expect(res.total).toBe(18);
  });
});

describe("Parqueo - Tarifa mixta", () => {
  it("21:40 a 22:20 mezcla día y noche (10 + 6 = 16)", () => {
    const entry = mkDate(2025, 9, 1, 21, 40);
    const exit = mkDate(2025, 9, 1, 22, 20);
    const res = calculateFee(entry, exit);
    expect(res.total).toBe(16);
  });
  });

describe("Parqueo - Tope diario", () => {
  it("estadía larga en un mismo día no supera Bs50", () => {
    const entry = mkDate(2025, 9, 1, 6, 0);
    const exit = mkDate(2025, 9, 1, 23, 0);
    const res = calculateFee(entry, exit);
    expect(res.total).toBe(50);
  });
});

describe("Parqueo - Ticket perdido", () => {
  it("cobra Bs80 sin importar la estadía", () => {
    const entry = mkDate(2025, 9, 1, 8, 0);
    const exit = mkDate(2025, 9, 1, 20, 0);
    const res = calculateFee(entry, exit, true);
    expect(res.total).toBe(80);
  });
});

describe("Parqueo - Redondeo dinero", () => {
  it("si el total es entero muestra .00", () => {
    const entry = mkDate(2025, 9, 1, 10, 0);
    const exit = mkDate(2025, 9, 1, 11, 0);
    const res = calculateFee(entry, exit);
    expect(res.total).toBe(10.00);
  });
});
