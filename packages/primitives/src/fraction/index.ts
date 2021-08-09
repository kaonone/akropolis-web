import BN from 'bn.js';

import { getDecimal, bnToBn, IToBN, Decimal, decimalsToWei } from '../bnHexWei';

export type Value = number | string | BN | IToBN | Fraction | IToFraction;

type FractionDiv = {
  numerator: BN;
  denominator: BN;
  originalNumerator: BN;
  originalDenominator: BN;
};

export interface IToFraction {
  toFraction(): Fraction;
}

export class Fraction implements IToBN {
  public readonly numerator: BN;
  public readonly denominator: BN;
  private disableRound: boolean;
  private minimumDecimalsAccuracy: number;
  private maxNumberLength: number;

  constructor(
    numerator: string | number | BN | IToBN,
    denominator: string | number | BN | IToBN = new BN(1),
    roundOptions: {
      disableRound?: boolean;
      minimumDecimalsAccuracy?: number;
      maxNumberLength?: number;
    } = {},
  ) {
    const {
      disableRound = false,
      minimumDecimalsAccuracy = 50,
      maxNumberLength = 50,
    } = roundOptions;

    this.disableRound = disableRound;
    this.minimumDecimalsAccuracy = minimumDecimalsAccuracy;
    this.maxNumberLength = maxNumberLength;

    if (disableRound) {
      this.numerator = bnToBn(numerator);
      this.denominator = bnToBn(denominator);
    } else {
      const {
        numerator: roundedNumerator,
        denominator: roundedDenominator,
      } = this.getRoundedFraction(bnToBn(numerator), bnToBn(denominator));

      this.numerator = roundedNumerator;
      this.denominator = roundedDenominator;
    }
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
    const { denominator, numerator } = toFraction(value, this.disableRound);
    return new Fraction(
      this.numerator.mul(denominator).add(numerator.mul(this.denominator)),
      this.denominator.mul(denominator),
      { disableRound: this.disableRound },
    );
  }

  sub(value: Value) {
    const { denominator, numerator } = toFraction(value, this.disableRound);

    return new Fraction(
      this.numerator.mul(denominator).sub(numerator.mul(this.denominator)),
      this.denominator.mul(denominator),
      { disableRound: this.disableRound },
    );
  }

  div(value: Value) {
    const { denominator, numerator } = toFraction(value, this.disableRound);
    return new Fraction(this.numerator.mul(denominator), this.denominator.mul(numerator), {
      disableRound: this.disableRound,
    });
  }

  mul(value: Value) {
    const { denominator, numerator } = toFraction(value, this.disableRound);
    return new Fraction(this.numerator.mul(numerator), this.denominator.mul(denominator), {
      disableRound: this.disableRound,
    });
  }

  eq(value: Value): boolean {
    return this.toBN().eq(toFraction(value, this.disableRound).toBN());
  }

  gt(value: Value): boolean {
    const { denominator, numerator } = toFraction(value, this.disableRound);
    return this.numerator.mul(denominator).gt(numerator.mul(this.denominator));
  }

  lt(value: Value): boolean {
    const { denominator, numerator } = toFraction(value, this.disableRound);
    return this.numerator.mul(denominator).lt(numerator.mul(this.denominator));
  }

  lte(value: Value): boolean {
    const { denominator, numerator } = toFraction(value, this.disableRound);
    return this.numerator.mul(denominator).lte(numerator.mul(this.denominator));
  }

  gte(value: Value): boolean {
    const { denominator, numerator } = toFraction(value, this.disableRound);
    return this.numerator.mul(denominator).gte(numerator.mul(this.denominator));
  }

  abs(): Fraction {
    return new Fraction(this.numerator.abs(), this.denominator.abs(), {
      disableRound: this.disableRound,
    });
  }

  pow(rawPower: BN | IToBN | number) {
    const power = bnToBn(rawPower);
    return new Fraction(this.numerator.pow(power), this.denominator.pow(power), {
      disableRound: this.disableRound,
    });
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
    const fractionalPrecisionMultiplier = new BN(10).pow(new BN(20));

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

  private getRoundedFraction(numerator: BN, denominator: BN) {
    const numeratorLength = numerator.toString().length;
    const denominatorLength = denominator.toString().length;
    const numeratorDegreeDiff = numeratorLength - this.maxNumberLength;

    if (numeratorLength <= denominatorLength && numeratorDegreeDiff > 0) {
      const numberToDiv = decimalsToWei(numeratorDegreeDiff);
      return { numerator: numerator.div(numberToDiv), denominator: denominator.div(numberToDiv) };
    }

    return this.reduceFractionByDenominator({
      numerator,
      denominator,
      originalNumerator: numerator,
      originalDenominator: denominator,
    });
  }

  private reduceFractionByDenominator({
    numerator,
    denominator,
    originalNumerator,
    originalDenominator,
  }: FractionDiv): FractionDiv {
    const roundDegree = decimalsToWei(denominator.toString().length.toString().length - 1);

    const roundedFraction = new Fraction(numerator.div(roundDegree), denominator.div(roundDegree), {
      disableRound: true,
    });

    const noNeedToRound =
      new Fraction(originalNumerator, originalDenominator, { disableRound: true })
        .sub(roundedFraction)
        .abs()
        .gt(new Fraction(1, decimalsToWei(this.minimumDecimalsAccuracy), { disableRound: true })) ||
      roundedFraction.denominator.toString().length <= this.maxNumberLength;

    if (noNeedToRound) {
      return {
        numerator,
        denominator,
        originalNumerator,
        originalDenominator,
      };
    }

    return this.reduceFractionByDenominator({
      numerator: roundedFraction.numerator,
      denominator: roundedFraction.denominator,
      originalNumerator,
      originalDenominator,
    });
  }
}

export function toFraction(value: Value, disableRound?: boolean): Fraction {
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
      return new Fraction(fractional.toFixed(18).replace(/0\.(\d+)/, '1$1'), decimalsToWei(18), {
        disableRound,
      })
        .sub(new BN(1))
        .add(new BN(integer));
    }

    return new Fraction(new BN(integer), 0, { disableRound });
  }
  return new Fraction(value, 0, { disableRound });
}
