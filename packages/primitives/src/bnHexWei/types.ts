import BN from 'bn.js';

export type Decimal = {
  integer: string;
  fractional: string;
};

export interface IBrand {
  _type: symbol;
}

export interface IToBN {
  toBN(): BN;
}
