export type FormattedBalance = {
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

export type SI = {
  power: number;
  value: string;
};

export type FormattingVariant = 'default' | 'trim-fractional-zeros';

const startPositions = ['start-space', 'start'] as const;
const endPositions = ['end-space', 'end'] as const;
type StartSymbolPosition = typeof startPositions[number];
type EndSymbolPosition = typeof endPositions[number];

export type SymbolPosition = StartSymbolPosition | EndSymbolPosition;

export function isStartPosition(value: SymbolPosition): value is StartSymbolPosition {
  return (startPositions as Readonly<SymbolPosition[]>).includes(value);
}
