import { formatInteger } from '../formatInteger';
import { FormattedBalance, FormattingVariant, isStartPosition, SI, SymbolPosition } from './types';

const nbsp = ' ';

export function makeFormattedBalance({
  rawInteger,
  rawFractional = '',
  symbolPosition,
  tokenSymbol,
  variant,
  si,
}: {
  tokenSymbol: string;
  symbolPosition: SymbolPosition;
  rawInteger: string;
  rawFractional?: string;
  variant: FormattingVariant;
  si?: SI | null;
}): FormattedBalance {
  const isStartUnit = isStartPosition(symbolPosition);
  const isNegative = rawInteger[0]?.startsWith('-');

  const startSymbol = isStartUnit ? tokenSymbol : '';
  const startSpace = symbolPosition === 'start-space' ? nbsp : '';
  const negativeSign = isNegative ? '-' : '';
  const integer = formatInteger(isNegative ? rawInteger.substr(1) : rawInteger) || '0';
  const fractional = {
    default: () => rawFractional,
    'trim-fractional-zeros': () => rawFractional.replace(/^(\d*?)0*$/, '$1'),
  }[variant]();
  const decimalSeparator = fractional ? '.' : '';
  const siPower = si?.value || '';
  const endSpace = symbolPosition === 'end-space' ? nbsp : '';
  const endSymbol = !isStartUnit ? tokenSymbol : '';

  return {
    formatted: [
      negativeSign,
      startSymbol,
      startSpace,
      integer,
      decimalSeparator,
      fractional,
      siPower,
      endSpace,
      endSymbol,
    ]
      .join('')
      .trim(),
    detailed: {
      negativeSign,
      startSymbol,
      startSpace,
      integer,
      decimalSeparator,
      fractional,
      siPower,
      endSpace,
      endSymbol,
    },
  };
}
