import BN from 'bn.js';
import { IToBN } from '../../types';
import { FormattedBalance, FormattingVariant, SI, SymbolPosition } from './types';
interface IFormatBalanceOptions {
    amountInBaseUnits: string | BN | IToBN;
    baseDecimals: number;
    tokenSymbol?: string;
    precision?: number;
    variant?: FormattingVariant;
    symbolPosition?: SymbolPosition;
    withSI?: boolean;
}
export declare function formatBalance({ amountInBaseUnits, baseDecimals, tokenSymbol, precision, variant, symbolPosition, withSI, }: IFormatBalanceOptions): FormattedBalance;
export declare function calcSI(baseNumber: string): SI | null;
export declare const precisions: Record<string, SI>;
export {};
