import { decimalsToWei } from '../../../bnHexWei';
import { Amount, NormalizedAmount } from '../Amount';

export function normalizeAmounts<T extends Amount>(
  amounts: T[],
  decimals?: number,
): NormalizedAmount<T>[] {
  if (amounts.length < 1) {
    return [];
  }

  const maxDecimal =
    decimals !== undefined
      ? decimals
      : amounts
          .map(amount => amount.currency.decimals)
          .reduce((max, current) => (current > max ? current : max));

  return amounts.map(amount => {
    const diff = maxDecimal - amount.currency.decimals;
    return {
      decimals: maxDecimal,
      original: amount,
      value:
        diff >= 0
          ? amount.toFraction().mul(decimalsToWei(diff))
          : amount.toFraction().div(decimalsToWei(-diff)),
    };
  });
}
