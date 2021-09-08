import BN from 'bn.js';
import { IToBN, Decimal, FormattedBalance } from '../../bnHexWei';
import { Fraction, Value, IToFraction } from '../../fraction';
import { ICurrency } from '../Currency';
export interface NormalizedAmount<T extends Amount> {
    decimals: number;
    value: Fraction;
    original: T;
}
export declare abstract class Amount<C extends ICurrency = ICurrency> implements IToBN, IToFraction {
    readonly currency: C;
    abstract _type: symbol;
    private value;
    constructor(amount: Value, currency: C);
    abstract makeAmount(amount: Value, currency: C): this;
    abstract toFormattedBalance(precision?: number, withSymbol?: boolean, withSI?: boolean): FormattedBalance;
    toFormattedString(precision?: number, withSymbol?: boolean): string;
    toShortString(precision?: number, withSymbol?: boolean): string;
    withValue(newValue: Value): this;
    sub(value: Value): this;
    add(value: Value): this;
    div(value: Value): this;
    mul(value: Value): this;
    isZero(): boolean;
    isNeg(): boolean;
    eq(value: this): boolean;
    eqValues(value: Value): boolean;
    gt(value: Value): boolean;
    lt(value: Value): boolean;
    gte(value: Value): boolean;
    lte(value: Value): boolean;
    abs(): Fraction;
    pow(power: BN | IToBN | number): Fraction;
    toBN(): BN;
    toFraction(): Fraction;
    toDecimal(precision: number): Decimal;
    toNumber(): number;
    toString(base?: number | 'hex' | undefined, length?: number | undefined): string;
    valueOf(): number;
    toSignificantValue(significantFractionalDigits?: number): this;
}
