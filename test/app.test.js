import { describe, it, expect } from "vitest";
import { calculateDoubleAge } from "../public/js/app";

describe("calculateDoubleAge", () => {
  it("La edad devuelta deberís ser 22 en caso de que el padre tenga 36 y el hijo 7", () => {
    expect(calculateDoubleAge(36, 7)).toBe(22);
  });
  it("La edad devuelta deberís ser 5 en caso de que el padre tenga 55 y el hijo 30", () => {
    expect(calculateDoubleAge(55, 30)).toBe(5);
  });
  it("La edad devuelta deberís ser 0 en caso de que el padre tenga 42 y el hijo 21", () => {
    expect(calculateDoubleAge(42, 21)).toBe(0);
  });
  it("La edad devuelta deberís ser 20 en caso de que el padre tenga 22 y el hijo 1", () => {
    expect(calculateDoubleAge(22, 1)).toBe(20);
  });
  it("La edad devuelta deberís ser 29 en caso de que el padre tenga 29 y el hijo 0", () => {
    expect(calculateDoubleAge(29, 0)).toBe(29);
  });
});
