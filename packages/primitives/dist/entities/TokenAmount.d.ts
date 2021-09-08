import { FormattedBalance } from '../bnHexWei';
import { Value } from '../fraction';
import { Token } from './Token';
import { Amount } from './amount/Amount';
declare const uniqType: unique symbol;
export declare class TokenAmount extends Amount<Token> {
    _type: typeof uniqType;
    makeAmount(amount: Value, token: Token): this;
    toFormattedBalance(precision?: number, withSymbol?: boolean, withSI?: boolean): FormattedBalance;
    withToken(newToken: Token): TokenAmount;
}
export {};
