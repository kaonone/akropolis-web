export declare type FormattedBalance = {
    formatted: string;
    detailed: {
        startSymbol: string;
        startSpace: string;
        negativeSign: string;
        integer: string;
        decimalSeparator: string;
        fractional: string;
        siPower: string;
        endSpace: string;
        endSymbol: string;
    };
};
export declare type SI = {
    power: number;
    value: string;
};
export declare type FormattingVariant = 'default' | 'trim-fractional-zeros';
declare const startPositions: readonly ["start-space", "start"];
declare const endPositions: readonly ["end-space", "end"];
declare type StartSymbolPosition = typeof startPositions[number];
declare type EndSymbolPosition = typeof endPositions[number];
export declare type SymbolPosition = StartSymbolPosition | EndSymbolPosition;
export declare function isStartPosition(value: SymbolPosition): value is StartSymbolPosition;
export {};
