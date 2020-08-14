import BN from 'bn.js';

import { IToBN } from '../types';
import { isHex } from './isHex';
import { hexToBn } from './hexToBn';
import { isToBN } from './isToBN';

export function bnToBn(value?: IToBN | BN | string | number | null): BN {
  if (!value) {
    return new BN(0);
  }
  if (isHex(value, undefined, true)) {
    return hexToBn(value.toString());
  }

  const convertedToBnValue = isToBN(value) ? value.toBN() : new BN(value);

  return BN.isBN(value) ? value : convertedToBnValue;
}
