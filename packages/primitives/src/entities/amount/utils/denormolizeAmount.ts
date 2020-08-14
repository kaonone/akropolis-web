import { decimalsToWei } from '../../../bnHexWei';
import { TokenAmount } from '../../TokenAmount';
import { Token } from '../../Token';
import { Amount } from '../Amount';

export function denormolizeAmount<T extends Amount>(amount: T, token: Token): TokenAmount {
  const fractionAmount = amount.toFraction();

  return new TokenAmount(
    amount.currency.decimals > token.decimals
      ? fractionAmount.div(decimalsToWei(amount.currency.decimals - token.decimals))
      : fractionAmount.mul(decimalsToWei(token.decimals - amount.currency.decimals)),
    token,
  );
}
