import { formatBalance, formatShortBalance } from '../bnHexWei';
import { Value } from '../fraction';
import { Token } from './Token';
import { Amount } from './amount/Amount';

const uniqType = Symbol('TokenAmount');

export class TokenAmount extends Amount<Token> {
  public _type: typeof uniqType = uniqType;

  // eslint-disable-next-line class-methods-use-this
  public makeAmount(amount: Value, token: Token): this {
    return new TokenAmount(amount, token) as this;
  }

  public toFormattedString(precision: number = 2, withSymbol = true): string {
    return formatBalance({
      amountInBaseUnits: this.toBN(),
      tokenSymbol: withSymbol ? this.currency.symbol : undefined,
      baseDecimals: this.currency.decimals,
      precision,
      symbolPosition: 'end-space',
    });
  }

  public toShortString(withSymbol = true): string {
    return formatShortBalance({
      amountInBaseUnits: this.toBN(),
      tokenSymbol: withSymbol ? this.currency.symbol : undefined,
      baseDecimals: this.currency.decimals,
      symbolPosition: 'end-space',
    });
  }

  public withToken(newToken: Token): TokenAmount {
    return new TokenAmount(this.toFraction(), newToken);
  }
}
