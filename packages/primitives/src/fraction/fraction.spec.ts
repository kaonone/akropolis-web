import BN from 'bn.js';

import { Fraction } from ".";

function makeCalculation(fraction: Fraction, iterations: number) {
  const cycle = Array(iterations).fill(new Fraction(0, 0));

  return cycle.reduce<Fraction>(acc => acc.mul(new Fraction(999999999999999, 3333333333333333)).div(new Fraction(999999999999999, 3333333333333333)), fraction);
}

function calcTime(value: Fraction) {
  const startTime = new Date().getTime();
  value.toNumber();
  const endTime = new Date().getTime();
  return endTime - startTime;
}

function getNumberToDiv(fraction: Fraction) {
  const numeratorLength = fraction.numerator.toString().length;
  const degreeDiff = numeratorLength - 25000;

  if (degreeDiff > 0) {
    const numberToDiv = new BN(10).pow(new BN(degreeDiff));
    return numberToDiv.gt(fraction.denominator) ? new BN(1) : numberToDiv;
  }
  return new BN(1)
}


describe('Search Fraction performance weak place', (): void => {
  it('Test fraction big numbers calculations', () => {
    const results = Array(20).fill(new Fraction(0, 0)).map((_, i) => {
      return makeCalculation(new Fraction(9999999, 22222), (i + 1) * 100);
    })

    const rounded = results.map(v => { 
      const numberToDiv = getNumberToDiv(v);
      return new Fraction(v.numerator.div(numberToDiv), v.denominator.div(numberToDiv)) 
    })


    console.log(
      'lengths: ',
      ...results.map(v => v.numerator.toString().length),
      'roundedLengths: ',
      ...rounded.map(v => v.numerator.toString().length),
      'times: ',
      ...results.map(v => calcTime(v)),
      'roundedTimes: ',
      ...rounded.map(v => calcTime(v)),
      'numberDiff: ',
      ...results.map((v, i) => v.sub(rounded[i]).toNumber()),
    )


    expect(true).toBeDefined();
  });
});