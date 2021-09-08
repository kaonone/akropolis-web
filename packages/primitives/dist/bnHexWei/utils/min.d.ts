import BN from 'bn.js';
import { IToBN } from '../types';
export declare function min<Value extends IToBN | BN | string | number | null>(first: Value, ...rest: Array<Value>): Value;
