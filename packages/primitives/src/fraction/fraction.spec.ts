import { Fraction } from '.';
import { decimalsToWei } from '../bnHexWei';

const MAXIMUM_PERFORM_TIME = 20; // milliseconds

describe('Test equality and calculation time', (): void => {
  const testCases = [
    { numeratorNumber: 10, denominatorNumber: 20 },
    { numeratorNumber: 150, denominatorNumber: 250 },
    { numeratorNumber: 150, denominatorNumber: 550 },
    { numeratorNumber: 150, denominatorNumber: 1000 },
    { numeratorNumber: 1500, denominatorNumber: 8000 },
    { numeratorNumber: 5000, denominatorNumber: 5010 },

    { numeratorNumber: 20, denominatorNumber: 10 },
    { numeratorNumber: 250, denominatorNumber: 240 },
    { numeratorNumber: 250, denominatorNumber: 220 },
    { numeratorNumber: 5010, denominatorNumber: 5000 },
    { numeratorNumber: 550, denominatorNumber: 530 },
    { numeratorNumber: 550, denominatorNumber: 500 },
    // If denominator too bigger then numerator - it is not rounding at all
    { numeratorNumber: 550, denominatorNumber: 150 },
    { numeratorNumber: 250, denominatorNumber: 150 },
    { numeratorNumber: 1000, denominatorNumber: 150 },

    { numeratorNumber: 20, denominatorNumber: 20 },
    { numeratorNumber: 250, denominatorNumber: 250 },
    { numeratorNumber: 550, denominatorNumber: 550 },
    { numeratorNumber: 1500, denominatorNumber: 1500 },
    { numeratorNumber: 8000, denominatorNumber: 8000 },

    // Uncomment when it will need, hight performance test
    // { numeratorNumber: 25000, denominatorNumber: 50000 },
    // { numeratorNumber: 90000, denominatorNumber: 100000 },
    // { numeratorNumber: 100000, denominatorNumber: 100000 },
  ];

  testCases.forEach(({ numeratorNumber, denominatorNumber }) => {
    const numerator = getBigNumber(numeratorNumber);
    const denominator = getBigNumber(denominatorNumber);
    const originalFraction = new Fraction(numerator, denominator, { disableRound: true });
    const roundedFraction = new Fraction(numerator, denominator);

    it(`rounded number should be equal original (${numeratorNumber}, ${denominatorNumber})`, (): void => {
      expect(originalFraction.sub(roundedFraction).abs().toNumber()).toBeLessThanOrEqual(
        1 / Math.pow(10, 18),
      );
      expect(originalFraction.toNumber()).toEqual(roundedFraction.toNumber());
      expect(originalFraction.eq(roundedFraction)).toBeTruthy();
    });

    it(`rounded number should corresponds to perform time (${numeratorNumber}, ${denominatorNumber})`, (): void => {
      expect(getFractionCalculationTime(roundedFraction)).toBeLessThanOrEqual(MAXIMUM_PERFORM_TIME);
    });
  });
});

describe('calculating with rounding with real data', (): void => {
  const numerator = getBigNumber(22); // 4 - integral, 18 - decimals
  const denominator = decimalsToWei(18);
  const originalFraction = new Fraction(numerator, denominator, { disableRound: true });
  const roundedFraction = new Fraction(numerator, denominator);

  const testCases = [
    100,
    // Uncomment when it will need, hight performance test
    // 1000,
    // 5000,
    // 10000,
    // 50000,
  ];

  testCases.forEach((calculationsCount) => {
    const fractionAfterCalculations = makeFractionCalculation(roundedFraction, calculationsCount);

    it(`${calculationsCount}x number should be equal original`, (): void => {
      expect(originalFraction.sub(roundedFraction).abs().toNumber()).toBeLessThanOrEqual(
        1 / Math.pow(10, 18),
      );
      expect(originalFraction.toNumber()).toEqual(fractionAfterCalculations.toNumber());
      expect(originalFraction.eq(fractionAfterCalculations)).toBeTruthy();
    });
    it(`${calculationsCount}x number should corresponds to perform time`, (): void => {
      expect(getFractionCalculationTime(fractionAfterCalculations)).toBeLessThanOrEqual(
        MAXIMUM_PERFORM_TIME,
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

function getBigNumber(countNumbers: number): string {
  return Array(countNumbers)
    .fill('')
    .reduce<string>((sum) => `${sum}${Math.floor(Math.random() * 10)}`, '');
}

function makeFractionCalculation(fraction: Fraction, count: number): Fraction {
  return Array(count)
    .fill(fraction)
    .reduce<Fraction>((sum) => sum.mul(fraction).div(fraction), fraction);
}
