import { IToBN } from '../types';

export function isToBN(value: unknown): value is IToBN {
  return typeof value === 'object' && !!value && 'toBN' in value;
}
