import BN from 'bn.js';

import { IToBN, Decimal, FormattedBalance, getSignificantValue } from '../../bnHexWei';
import { Fraction, toFraction, Value, IToFraction } from '../../fraction';
import { ICurrency } from '../Currency';

export interface NormalizedAmount<T extends Amount> {
  decimals: number;
  value: Fraction;
  original: T;
}

export abstract class Amount<C extends ICurrency = ICurrency> implements IToBN, IToFraction {
  public abstract _type: symbol;
  private value: Fraction;

  constructor(amount: Value, public readonly currency: C) {
    this.value = toFraction(amount);
  }

  public abstract makeAmount(amount: Value, currency: C): this;
  public abstract toFormattedBalance(
    precision?: number,
    withSymbol?: boolean,
    withSI?: boolean,
  ): FormattedBalance;

  public toFormattedString(precision?: number, withSymbol?: boolean): string {
    return this.toFormattedBalance(precision, withSymbol).formatted;
  }

  public toShortString(precision?: number, withSymbol?: boolean): string {
    return this.toFormattedBalance(precision, withSymbol, true).formatted;
  }

  public withValue(newValue: Value): this {
    return this.makeAmount(toFraction(newValue), this.currency);
  }

  public sub(value: Value): this {
    return this.makeAmount(this.value.sub(toFraction(value)), this.currency);
  }

  public add(value: Value): this {
    return this.makeAmount(this.value.add(toFraction(value)), this.currency);
  }

  public div(value: Value): this {
    return this.makeAmount(this.value.div(toFraction(value)), this.currency);
  }

  public mul(value: Value): this {
    return this.makeAmount(this.value.mul(toFraction(value)), this.currency);
  }

  public isZero(): boolean {
    return this.value.isZero();
  }

  public isNeg(): boolean {
    return this.value.isNeg();
  }

  public eq(value: this): boolean {
    return this.eqValues(value) && this.currency.equals(value.currency);
  }

  public eqValues(value: Value): boolean {
    return this.value.eq(toFraction(value));
  }

  // TODO make allowance for currency.decimals
  public gt(value: Value): boolean {
    return this.value.gt(toFraction(value));
  }

  public lt(value: Value): boolean {
    return this.value.lt(toFraction(value));
  }

  public gte(value: Value): boolean {
    return this.value.gte(toFraction(value));
  }

  public lte(value: Value): boolean {
    return this.value.lte(toFraction(value));
  }

  public abs() {
    return this.value.abs();
  }

  public pow(power: BN | IToBN | number) {
    return this.value.pow(power);
  }

  public toBN(): BN {
    return this.value.toBN();
  }

  public toFraction(): Fraction {
    return this.value;
  }

  public toDecimal(precision: number): Decimal {
    return this.value.toDecimal(this.currency.decimals, precision);
  }

  public toNumber(): number {
    return this.value.toNumber();
  }

  public toString(base?: number | 'hex' | undefined, length?: number | undefined): string {
    return this.toBN().toString(base, length);
  }

  public valueOf(): number {
    return this.value.valueOf();
  }

  public toSignificantValue(significantFractionalDigits?: number): this {
    const minSignificantValue = getSignificantValue(this.currency, significantFractionalDigits);
    return this.gte(minSignificantValue) ? this : this.makeAmount(0, this.currency);
  }
}
