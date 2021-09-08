import BN from 'bn.js';
import { IToBN, Decimal } from '../bnHexWei';
export declare type Value = number | string | BN | IToBN | Fraction | IToFraction;
export interface IToFraction {
    toFraction(): Fraction;
}
export declare class Fraction implements IToBN {
    static decimalsAccuracy: number;
    static maxWordsInNumerator: number;
    readonly numerator: BN;
    readonly denominator: BN;
    constructor(numerator: string | number | BN | IToBN, denominator?: string | number | BN | IToBN);
    static isFraction(value: unknown): value is Fraction;
    toBN(): BN;
    toDecimal(baseDecimals: number, precision: number): Decimal;
    add(value: Value): Fraction;
    sub(value: Value): Fraction;
    div(value: Value): Fraction;
    mul(value: Value): Fraction;
    eq(value: Value): boolean;
    gt(value: Value): boolean;
    lt(value: Value): boolean;
    lte(value: Value): boolean;
    gte(value: Value): boolean;
    abs(): Fraction;
    pow(rawPower: BN | IToBN | number): Fraction;
    isZero(): boolean;
    isNeg(): boolean;
    toNumber(): number;
    toString(): string;
    valueOf(): number;
    round(numerator: BN, denominator: BN): BN[];
}
export declare function toFraction(value: Value): Fraction;
