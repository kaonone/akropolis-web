import { IBrand, isEqualHex } from '../bnHexWei';
import { ICurrency } from './Currency';

const uniqType = Symbol('Token');

export type Network = 'eth' | 'bsc';

export class Token implements ICurrency, IBrand {
  public _type: typeof uniqType = uniqType;

  constructor(
    public readonly address: string,
    public readonly symbol: string,
    public readonly decimals: number,
    public readonly network: Network,
  ) {}

  toJSON() {
    const view: TokenJSONView = {
      _type: 'Token',
      address: this.address,
      symbol: this.symbol,
      decimals: this.decimals,
      network: this.network,
    };

    return view;
  }

  equals(a: Token): boolean {
    return isEqualHex(this.address, a.address);
  }
}

interface TokenJSONView {
  _type: 'Token';
  address: string;
  symbol: string;
  decimals: number;
  network: Network;
}
