import { decimalsToWei } from '../bnHexWei';

import { Fraction } from '.';

const operations = ['add', 'sub', 'div', 'mul'] as const;

type Operation = {
  op: typeof operations[number];
  num: string;
};

describe('Test equality and calculation time', (): void => {
  const operationsList = generateOperationsList(10000);
  const originalFraction = new Fraction(decimalsToWei(18));

  const roundedFractionAfterOperations = makeOperationsOnFraction(originalFraction, operationsList);

  Fraction.maximumNumeratorBytes = Infinity;

  const originalFractionAfterOperations = makeOperationsOnFraction(
    originalFraction,
    operationsList,
  );

  it(`rounded number length should be equal original`, (): void => {
    expect(roundedFractionAfterOperations.numerator.byteLength()).toBeLessThanOrEqual(
      originalFractionAfterOperations.numerator.byteLength(),
    );
  });
  it(`rounded number should be equal original`, (): void => {
    expect(roundedFractionAfterOperations.eq(originalFractionAfterOperations)).toBeTruthy();
  });
});

function generateOperationsList(number: number) {
  const array = Array(number)
    .fill({})
    .map(() => ({ op: operations[getRandom(0, 3)], num: getRandomNumber(getRandom(5, 28)) }));

  operations.forEach(
    op =>
      !array.find(value => value.op === op) &&
      array.push({ op, num: getRandomNumber(getRandom(5, 28)) }),
  );

  return array;
}

function makeOperationsOnFraction(fraction: Fraction, operationsList: Operation[]) {
  return operationsList.reduce((prev, curr) => prev[curr.op](curr.num), fraction);
}

function getRandomNumber(countNumbers: number): string {
  return Array(countNumbers)
    .fill('')
    .reduce<string>(sum => `${sum}${Math.floor(Math.random() * 10)}`, '');
}

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
