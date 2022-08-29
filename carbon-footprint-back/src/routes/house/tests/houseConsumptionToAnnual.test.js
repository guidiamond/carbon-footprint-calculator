import { houseConsumptionToAnnual } from "../houseConsumptionToAnnual";

describe("houseConsumptionToAnnual #ut", () => {
  test.each([["electric"], ["naturalGas"], ["fuelOil"], ["lpg"]])(
    "Given a value for %s, should be the same value",
    (a) => {
      // Arrange
      const value = 3;
      // Act
      const valueInYear = houseConsumptionToAnnual[a](value);
      // Assert
      expect(valueInYear).toBe(value);
    }
  );

  test("Given a waste value in kg/week, it should return kg/year", () => {
    // Arrange
    const wasteInDay = 1;
    // Act
    const wasteInYear = houseConsumptionToAnnual.waste(wasteInDay);
    // Assert
    expect(wasteInYear).toBe(52);
  });

  test("Given a water value in liters/day, it should return liters/year", () => {
    // Arrange
    const waterConsumptionWeek = 1;
    // Act
    const wasteInYear = houseConsumptionToAnnual.water(waterConsumptionWeek);
    // Assert
    expect(wasteInYear).toBe(365);
  });
});
