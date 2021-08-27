// eslint-disable-next-line max-classes-per-file
import BN from 'bn.js';

import { getDecimal, bnToBn, IToBN, Decimal, decimalsToWei } from '../bnHexWei';

export type Value = number | string | BN | IToBN | Fraction | IToFraction;

export interface IToFraction {
  toFraction(): Fraction;
}

export class Fraction implements IToBN {
  static decimalsAccuracy = 18;
  static maxWordsInNumerator = 96;

  public readonly numerator: BN;
  public readonly denominator: BN;

  constructor(
    numerator: string | number | BN | IToBN,
    denominator: string | number | BN | IToBN = new BN(1),
  ) {
    const [roundedNumerator, roundedDenominator] = this.round(
      bnToBn(numerator),
      bnToBn(denominator),
    );
    this.numerator = roundedNumerator;
    this.denominator = roundedDenominator;
  }

  static isFraction(value: unknown): value is Fraction {
    return value instanceof Fraction;
  }

  toBN() {
    return this.numerator.div(this.denominator);
  }

  public toDecimal(baseDecimals: number, precision: number): Decimal {
    const multiplier = new BN(10).pow(new BN(precision));
    return getDecimal(
      this.numerator.mul(multiplier).div(this.denominator).toString(),
      baseDecimals + precision,
      precision,
    );
  }

  add(value: Value) {
    const { denominator, numerator } = toFraction(value);
    return new Fraction(
      this.numerator.mul(denominator).add(numerator.mul(this.denominator)),
      this.denominator.mul(denominator),
    );
  }

  sub(value: Value) {
    const { denominator, numerator } = toFraction(value);
    return new Fraction(
      this.numerator.mul(denominator).sub(numerator.mul(this.denominator)),
      this.denominator.mul(denominator),
    );
  }

  div(value: Value) {
    const { denominator, numerator } = toFraction(value);
    return new Fraction(this.numerator.mul(denominator), this.denominator.mul(numerator));
  }

  mul(value: Value) {
    const { denominator, numerator } = toFraction(value);
    return new Fraction(this.numerator.mul(numerator), this.denominator.mul(denominator));
  }

  eq(value: Value): boolean {
    return this.toBN().eq(toFraction(value).toBN());
  }

  gt(value: Value): boolean {
    const { denominator, numerator } = toFraction(value);
    return this.numerator.mul(denominator).gt(numerator.mul(this.denominator));
  }

  lt(value: Value): boolean {
    const { denominator, numerator } = toFraction(value);
    return this.numerator.mul(denominator).lt(numerator.mul(this.denominator));
  }

  lte(value: Value): boolean {
    const { denominator, numerator } = toFraction(value);
    return this.numerator.mul(denominator).lte(numerator.mul(this.denominator));
  }

  gte(value: Value): boolean {
    const { denominator, numerator } = toFraction(value);
    return this.numerator.mul(denominator).gte(numerator.mul(this.denominator));
  }

  abs(): Fraction {
    return new Fraction(this.numerator.abs(), this.denominator.abs());
  }

  pow(rawPower: BN | IToBN | number) {
    const power = bnToBn(rawPower);
    return new Fraction(this.numerator.pow(power), this.denominator.pow(power));
  }

  isZero() {
    return this.numerator.isZero();
  }

  isNeg() {
    return this.numerator.isNeg();
  }

  toNumber() {
    return parseFloat(this.toString());
  }

  toString() {
    const fractionalPrecisionMultiplier = new BN(10).pow(new BN(Fraction.decimalsAccuracy));

    const integer = this.numerator.div(this.denominator);
    const remainder = this.numerator.sub(this.denominator.mul(integer));
    const fractional = remainder
      .add(this.denominator) // add one denominator so that after division we get result: `fractionalPrecisionMultiplier + fractional = 100023` (1.00023 without fractionalPrecisionMultiplier multiplying)
      .mul(fractionalPrecisionMultiplier)
      .div(this.denominator)
      .toString()
      .slice(1); // remove the first digit to take a fraction with padding 100023 -> 00023

    return `${integer}.${fractional}`;
  }

  valueOf() {
    return this.toNumber();
  }

  // eslint-disable-next-line class-methods-use-this
  round(numerator: BN, denominator: BN) {
    if ((numerator as any).length <= Fraction.maxWordsInNumerator) {
      return [numerator, denominator];
    }

    return [
      numerator.mul(decimalsToWei(Fraction.decimalsAccuracy)).div(denominator),
      decimalsToWei(Fraction.decimalsAccuracy),
    ];
  }
}

export function toFraction(value: Value): Fraction {
  if (value instanceof Fraction) {
    return value;
  }
  if (typeof value === 'object' && 'toFraction' in value) {
    return value.toFraction();
  }
  if (typeof value === 'number') {
    const integer = Math.floor(value);
    const fractional = value - integer;

    if (fractional) {
      return new Fraction(fractional.toFixed(18).replace(/0\.(\d+)/, '1$1'), decimalsToWei(18))
        .sub(new BN(1))
        .add(new BN(integer));
    }

    return new Fraction(new BN(integer));
  }
  return new Fraction(value);
}
