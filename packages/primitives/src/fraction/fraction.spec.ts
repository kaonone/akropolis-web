import { decimalsToWei } from '../bnHexWei';

import { Fraction } from '.';

const MAXIMUM_PERFORM_TIME = 20; // milliseconds
const MAXIMUM_ROUNDING_TIME = 100; // milliseconds

describe('Test equality and calculation time', (): void => {
  const testCases = [
    { numeratorLength: 70, denominatorLength: 100 },
    { numeratorLength: 100, denominatorLength: 150 },
    { numeratorLength: 150, denominatorLength: 250 },
    { numeratorLength: 150, denominatorLength: 550 },
    { numeratorLength: 150, denominatorLength: 1000 },
    { numeratorLength: 1500, denominatorLength: 2000 },
    { numeratorLength: 2500, denominatorLength: 2510 },

    { numeratorLength: 250, denominatorLength: 240 },
    { numeratorLength: 250, denominatorLength: 220 },
    { numeratorLength: 550, denominatorLength: 530 },
    { numeratorLength: 550, denominatorLength: 500 },
    { numeratorLength: 530, denominatorLength: 500 },
    { numeratorLength: 1580, denominatorLength: 1500 },
    { numeratorLength: 1550, denominatorLength: 1500 },
    { numeratorLength: 1530, denominatorLength: 1500 },
    { numeratorLength: 980, denominatorLength: 900 },
    { numeratorLength: 950, denominatorLength: 900 },
    { numeratorLength: 930, denominatorLength: 900 },
    { numeratorLength: 280, denominatorLength: 200 },
    { numeratorLength: 250, denominatorLength: 200 },
    { numeratorLength: 230, denominatorLength: 200 },
    { numeratorLength: 180, denominatorLength: 120 },
    { numeratorLength: 150, denominatorLength: 120 },
    { numeratorLength: 80, denominatorLength: 70 },
    { numeratorLength: 100, denominatorLength: 80 },

    // If denominator too bigger then numerator - it is not rounding at all
    // { numeratorLength: 250, denominatorLength: 150 },
    // { numeratorLength: 550, denominatorLength: 150 },
    // { numeratorLength: 1000, denominatorLength: 150 },

    { numeratorLength: 70, denominatorLength: 70 },
    { numeratorLength: 250, denominatorLength: 250 },
    { numeratorLength: 550, denominatorLength: 550 },
    { numeratorLength: 1500, denominatorLength: 1500 },

    // Uncomment when it will need, hight performance test
    // It doesn't corresponds to max time
    // { numeratorLength: 5010, denominatorLength: 5000 },
    // { numeratorLength: 8000, denominatorLength: 8000 },
    // { numeratorLength: 25000, denominatorLength: 25000 },
  ];

  testCases.forEach(({ numeratorLength, denominatorLength }) => {
    const numerator = getRandomNumber(numeratorLength);
    const denominator = getRandomNumber(denominatorLength);
    const originalFraction = new Fraction(numerator, denominator, true);

    const roundingTimeStart = Date.now();
    const roundedFraction = new Fraction(numerator, denominator);
    const roundingTimeEnd = Date.now();

    it(`rounded number should be equal original (${numeratorLength}, ${denominatorLength})`, (): void => {
      expect(originalFraction.sub(roundedFraction).abs().toNumber()).toBeLessThanOrEqual(
        1 / 10 ** 18,
      );
      expect(originalFraction.toNumber()).toEqual(roundedFraction.toNumber());
      expect(originalFraction.eq(roundedFraction)).toBeTruthy();
    });

    it(`rounded number should corresponds to perform time (${numeratorLength}, ${denominatorLength})`, (): void => {
      expect(getFractionCalculationTime(roundedFraction)).toBeLessThanOrEqual(MAXIMUM_PERFORM_TIME);
    });

    it(`rounding operation should corresponds to time (${numeratorLength}, ${denominatorLength})`, (): void => {
      expect(roundingTimeEnd - roundingTimeStart).toBeLessThanOrEqual(MAXIMUM_ROUNDING_TIME);
    });

    it(`rounded number should be less then original (${numeratorLength}, ${denominatorLength})`, (): void => {
      expect(roundedFraction.numerator.toString().length).toBeLessThan(
        originalFraction.numerator.toString().length,
      );
    });
  });
});

describe('calculating with rounding with real data', (): void => {
  const testCases = [
    { numeratorLength: 20, operationsNumber: 100 },
    { numeratorLength: 22, operationsNumber: 100 },
    { numeratorLength: 27, operationsNumber: 100 },
    { numeratorLength: 36, operationsNumber: 100 },

    { numeratorLength: 20, operationsNumber: 250 },
    { numeratorLength: 22, operationsNumber: 250 },
    { numeratorLength: 27, operationsNumber: 250 },
    { numeratorLength: 36, operationsNumber: 250 },

    { numeratorLength: 20, operationsNumber: 500 },
    { numeratorLength: 22, operationsNumber: 500 },
    { numeratorLength: 27, operationsNumber: 500 },
    { numeratorLength: 36, operationsNumber: 500 },

    // Uncomment when it will need, hight performance test
    // { numeratorLength: 20, operationsNumber: 1000 },
    // { numeratorLength: 22, operationsNumber: 1000 },
    // { numeratorLength: 27, operationsNumber: 1000 },
    // { numeratorLength: 36, operationsNumber: 1000 },

    // { numeratorLength: 20, operationsNumber: 5000 },
    // { numeratorLength: 22, operationsNumber: 5000 },
    // { numeratorLength: 27, operationsNumber: 5000 },
    // { numeratorLength: 36, operationsNumber: 5000 },
  ];

  testCases.forEach(({ numeratorLength, operationsNumber }) => {
    const numerator = getRandomNumber(numeratorLength); // x - integral, 18 - decimals
    const denominator = decimalsToWei(18);
    const originalFraction = new Fraction(numerator, denominator, true);
    const roundedFraction = new Fraction(numerator, denominator);

    const fractionAfterCalculations = makeFractionCalculation(roundedFraction, operationsNumber);
    const originalFractionAfterCalculations = makeFractionCalculation(
      originalFraction,
      operationsNumber,
    );

    it(`${operationsNumber}x (${numeratorLength}) number should be equal original`, (): void => {
      expect(originalFraction.sub(roundedFraction).abs().toNumber()).toBeLessThanOrEqual(
        1 / 10 ** 18,
      );
      expect(originalFraction.toNumber()).toEqual(fractionAfterCalculations.toNumber());
      expect(originalFraction.eq(fractionAfterCalculations)).toBeTruthy();
    });

    it(`${operationsNumber}x (${numeratorLength}) number should corresponds to perform time`, (): void => {
      expect(getFractionCalculationTime(fractionAfterCalculations)).toBeLessThanOrEqual(
        MAXIMUM_PERFORM_TIME,
      );
    });

    it(`${operationsNumber}x (${numeratorLength}) number should be less then original`, (): void => {
      expect(fractionAfterCalculations.numerator.toString().length).toBeLessThan(
        originalFractionAfterCalculations.numerator.toString().length,
      );
    });
  });
});

function getFractionCalculationTime(roundedFraction: Fraction) {
  const startTime = Date.now();
  roundedFraction.toNumber();
  const endTime = Date.now();
  return endTime - startTime;
}

function getRandomNumber(countNumbers: number): string {
  return Array(countNumbers)
    .fill('')
    .reduce<string>(sum => `${sum}${Math.floor(Math.random() * 10)}`, '');
}

function makeFractionCalculation(fraction: Fraction, count: number): Fraction {
  return Array(count)
    .fill(fraction)
    .reduce<Fraction>(sum => sum.mul(fraction).div(fraction), fraction);
}
