import { FormattedBalance } from '../bnHexWei';
import { Value } from '../fraction';
import { Amount } from './amount';
import { Currency } from './Currency';
declare const uniqType: unique symbol;
export declare class PercentAmount extends Amount<Currency> {
    _type: typeof uniqType;
    constructor(amount: Value);
    makeAmount(amount: Value): this;
    toFormattedBalance(precision?: number, withSymbol?: boolean, withSI?: boolean): FormattedBalance;
}
export {};
