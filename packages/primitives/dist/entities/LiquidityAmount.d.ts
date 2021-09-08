import { FormattedBalance } from '../bnHexWei';
import { Value } from '../fraction';
import { Amount } from './amount';
import { Currency } from './Currency';
declare const uniqType: unique symbol;
export declare class LiquidityAmount extends Amount<Currency> {
    private options?;
    _type: typeof uniqType;
    private readonly defaultPrecision;
    private readonly defaultSymbolPosition;
    constructor(amount: Value, currency: Currency, options?: {
        precisions?: number | undefined;
        symbolPosition?: "start-space" | "start" | "end-space" | "end" | undefined;
    } | undefined);
    makeAmount(amount: Value, currency: Currency): this;
    toFormattedBalance(precision?: number, withSymbol?: boolean, withSI?: boolean): FormattedBalance;
}
export {};
