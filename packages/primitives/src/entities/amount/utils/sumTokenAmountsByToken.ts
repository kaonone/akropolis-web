import { TokenAmount } from '../../TokenAmount';

export function sumTokenAmountsByToken(amounts: TokenAmount[]): TokenAmount[] {
  const reducedAmounts = amounts.reduce((acc, cur) => {
    const prev = acc.get(cur.currency.address)?.toFraction() || 0;
    acc.set(cur.currency.address, cur.add(prev));
    return acc;
  }, new Map<string, TokenAmount>());

  return Array.from(reducedAmounts.values());
}
