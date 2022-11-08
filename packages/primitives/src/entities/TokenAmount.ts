import { formatBalance, FormattedBalance } from '../bnHexWei';
import { Value } from '../fraction';
import { Token } from './Token';
import { Amount } from './amount/Amount';
import { SiPrecision } from '../bnHexWei/format/balance/types';

const uniqType = Symbol('TokenAmount');

export class TokenAmount extends Amount<Token> {
  public _type: typeof uniqType = uniqType;

  // eslint-disable-next-line class-methods-use-this
  public makeAmount(amount: Value, token: Token): this {
    return new TokenAmount(amount, token) as this;
  }

  public toFormattedBalance(
    precision: number = 2,
    withSymbol = true,
    withSI?: boolean,
    siPrecision?: SiPrecision,
  ): FormattedBalance {
    return formatBalance({
      withSI,
      amountInBaseUnits: this.toBN(),
      tokenSymbol: withSymbol ? this.currency.symbol : undefined,
      baseDecimals: this.currency.decimals,
      precision,
      symbolPosition: 'end-space',
      siPrecision,
    });
  }

  public withToken(newToken: Token): TokenAmount {
    return new TokenAmount(this.toFraction(), newToken);
  }
}
