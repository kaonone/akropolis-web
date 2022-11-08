import { formatBalance, FormattedBalance } from '../bnHexWei';
import { SiPrecision } from '../bnHexWei/format/balance/types';
import { Value } from '../fraction';
import { Amount } from './amount';
import { Currency } from './Currency';

type SymbolPosition = 'start-space' | 'start' | 'end-space' | 'end';
const uniqType = Symbol('LiquidityAmount type');

export class LiquidityAmount extends Amount<Currency> {
  public _type: typeof uniqType = uniqType;

  private readonly defaultPrecision: number = this.options?.precisions || 2;
  private readonly defaultSymbolPosition: SymbolPosition = this.options?.symbolPosition || 'start';

  constructor(
    amount: Value,
    currency: Currency,
    private options?: { precisions?: number; symbolPosition?: SymbolPosition },
  ) {
    super(amount, currency);
  }

  // eslint-disable-next-line class-methods-use-this
  public makeAmount(amount: Value, currency: Currency): this {
    return new LiquidityAmount(amount, currency, this.options) as this;
  }

  public toFormattedBalance(
    precision: number = this.defaultPrecision,
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
      symbolPosition: this.defaultSymbolPosition,
      siPrecision,
    });
  }
}
