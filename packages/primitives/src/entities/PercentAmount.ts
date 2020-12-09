import BN from 'bn.js';

import { formatBalance, FormattedBalance } from '../bnHexWei';
import { Value } from '../fraction';
import { Amount } from './amount';
import { Currency } from './Currency';

const uniqType = Symbol('PercentAmount');

export class PercentAmount extends Amount<Currency> {
  public _type: typeof uniqType = uniqType;

  constructor(amount: Value) {
    super(amount, new Currency('%', 0));
  }

  // eslint-disable-next-line class-methods-use-this
  public makeAmount(amount: Value): this {
    return new PercentAmount(amount) as this;
  }

  public toFormattedBalance(
    precision: number = 2,
    withSymbol = true,
    withSI?: boolean,
  ): FormattedBalance {
    const multiplier = new BN(10).pow(new BN(precision));
    const value = this.toFraction().mul(multiplier);

    return formatBalance({
      withSI,
      amountInBaseUnits: value.toBN(),
      tokenSymbol: withSymbol ? this.currency.symbol : undefined,
      baseDecimals: precision,
      precision,
      symbolPosition: 'end',
    });
  }
}
