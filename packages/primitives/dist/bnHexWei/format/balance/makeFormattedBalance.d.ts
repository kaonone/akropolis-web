import { FormattedBalance, FormattingVariant, SI, SymbolPosition } from './types';
export declare function makeFormattedBalance({ rawInteger, rawFractional, symbolPosition, tokenSymbol, variant, si, }: {
    tokenSymbol: string;
    symbolPosition: SymbolPosition;
    rawInteger: string;
    rawFractional?: string;
    variant: FormattingVariant;
    si?: SI | null;
}): FormattedBalance;
