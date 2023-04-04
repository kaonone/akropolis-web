import { decimalsToWei } from '../bnHexWei';

import { Fraction, toFraction, Value } from '.';

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

describe('Test Fraction', (): void => {
  it('test isNeg', () => {
    expect(new Fraction('100', '200').isNeg()).toEqual(false);
    expect(new Fraction('-100', '200').isNeg()).toEqual(true);
    expect(new Fraction('100', '-200').isNeg()).toEqual(true);
    expect(new Fraction('-100', '-200').isNeg()).toEqual(false);
  });
  it('test toString', () => {
    expect(new Fraction('100', '200').toString()).toEqual('0.500000000000000000');
    expect(new Fraction('-100', '200').toString()).toEqual('-0.500000000000000000');
    expect(new Fraction('100', '-200').toString()).toEqual('-0.500000000000000000');
    expect(new Fraction('-100', '-200').toString()).toEqual('0.500000000000000000');
  });
  it('test toNumber', () => {
    expect(new Fraction('100', '200').toNumber()).toEqual(0.5);
    expect(new Fraction('-100', '200').toNumber()).toEqual(-0.5);
    expect(new Fraction('100', '-200').toNumber()).toEqual(-0.5);
    expect(new Fraction('-100', '-200').toNumber()).toEqual(0.5);
  });
});

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

describe('Test toFraction helper', () => {
  const makeTest = (
    message: string,
    testCases: [value: Value, expected: string, precision?: number][],
  ) =>
    testCases.map(([value, expected, precision = 0]) =>
      it(`${message}: ${value}`, () => {
        const { integer, fractional } = toFraction(value).toDecimal(0, precision);
        expect(`${integer}${fractional ? `.${fractional}` : ''}`).toEqual(expected);
      }),
    );

  makeTest('should convert strings with exponential numbers', [
    ['123e1', '1230'],
    ['123E1', '1230'],
    ['123e+1', '1230'],
    ['123e-30', '0.000000000000000000000000000123', 30],
    ['0.123e30', '123000000000000000000000000000'],
    ['0.123e-1', '0.0123', 4],
    ['.123e-1', '0.0123', 4],
    ['-123e30', '-123000000000000000000000000000000'],
  ]);

  makeTest('should convert fractional strings', [
    ['1234567891011121314.1234567891011121314', '1234567891011121314.1234567891011121314', 19],
    ['.1234567', '0.1234567', 7],
    ['-.1234567', '-0.1234567', 7],
    ['-12.1234567', '-12.1234567', 7],
    ['+123.', '123.0', 1],
  ]);
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
