import { ICurrency } from '../../entities';
import { decimalsToWei } from './decimalsToWei';

export function getSignificantValue(
  { symbol, decimals }: ICurrency,
  significantFractionalDigits?: number,
) {
  const fractionalDigits = significantFractionalDigits || getSignificantFractionalDigits(symbol);
  return decimalsToWei(Math.max(0, decimals - fractionalDigits));
}

// fractional digits should be based on the equivalent of 0.01$ in a given currency
function getSignificantFractionalDigits(currencySymbol: string): number {
  switch (currencySymbol.toUpperCase()) {
    case 'BTC':
    case 'RENBTC':
    case 'WBTC':
    case 'SBTC':
    case 'YFI': {
      return 7;
    }
    default: {
      return 5;
    }
  }
}
