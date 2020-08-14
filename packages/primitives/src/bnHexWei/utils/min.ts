import BN from 'bn.js';

import { IToBN } from '../types';
import { bnToBn } from './bnToBn';

export function min<Value extends IToBN | BN | string | number | null>(
  first: Value,
  ...rest: Array<Value>
): Value {
  return rest.reduce<Value>((acc, cur) => {
    const accBn = bnToBn(acc);
    const curBn = bnToBn(cur);

    return accBn.lt(curBn) ? acc : cur;
  }, first);
}
