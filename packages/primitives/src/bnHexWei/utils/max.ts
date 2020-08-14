import BN from 'bn.js';

import { IToBN } from '../types';
import { bnToBn } from './bnToBn';

export function max<Value extends IToBN | BN | string | number | null>(
  first: Value,
  ...rest: Array<Value>
): Value {
  return rest.reduce((acc, cur) => {
    const accBn = bnToBn(acc);
    const curBn = bnToBn(cur);

    return accBn.gt(curBn) ? acc : cur;
  }, first);
}
