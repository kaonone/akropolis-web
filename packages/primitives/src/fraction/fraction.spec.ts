import { decimalsToWei } from '../bnHexWei';

import { Fraction } from '.';

const operations = ['add', 'sub', 'div', 'mul'] as const;

type Operation = {
  op: typeof operations[number];
  num: string;
};

function setDefaultFractionOptions() {
  setFractionOptions(96, 18);
}

function setFractionOptions(maxBytes: number, accuracy: number) {
  Fraction.maxWordsInNumerator = maxBytes;
  Fraction.decimalsAccuracy = accuracy;
}

describe('Test equality and calculation time', (): void => {
  setDefaultFractionOptions();

  const operationsList = generateOperationsList(5000);
  const originalFraction = new Fraction(decimalsToWei(18));

  const roundedFractionAfterOperations = makeOperationsOnFraction(originalFraction, operationsList);

  setFractionOptions(Infinity, 18);

  const originalFractionAfterOperations = makeOperationsOnFraction(
    originalFraction,
    operationsList,
  );

  setDefaultFractionOptions();

  it(`rounded number length should be less original`, (): void => {
    expect(roundedFractionAfterOperations.numerator.byteLength()).toBeLessThan(
      originalFractionAfterOperations.numerator.byteLength(),
    );
  });

  // TODO: Fix random fails
  it.skip(`rounding should be enough accurate`, (): void => {
    setFractionOptions(Infinity, 18);

    const original = originalFractionAfterOperations.toBN();
    const rounded = roundedFractionAfterOperations.toBN();

    const allowedError = new Fraction(1).div(decimalsToWei(50));
    const currentError = new Fraction(original).sub(rounded).div(original).abs();

    setDefaultFractionOptions();

    expect(currentError.lte(allowedError)).toBeTruthy();
  });
});

function generateOperationsList(number: number) {
  const array = Array(number)
    .fill(null)
    .map(() => ({ op: operations[getRandom(0, 4)], num: getRandomNumber(getRandom(10, 25)) }))
    .filter(({ op }) => !!op);

  return array;
}

function makeOperationsOnFraction(fraction: Fraction, operationsList: Operation[]) {
  return operationsList.reduce((prev, curr) => prev[curr.op](curr.num), fraction);
}

function getRandomNumber(countNumbers: number): string {
  return Array(countNumbers)
    .fill(null)
    .map(() => `${getRandom(0, 10)}`)
    .join('');
}

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
