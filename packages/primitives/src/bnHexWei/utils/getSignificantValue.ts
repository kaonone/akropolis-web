import { decimalsToWei } from './decimalsToWei';

export function getSignificantValue(significantFractionalDigits: number, decimals: number) {
  return decimalsToWei(Math.max(0, decimals - significantFractionalDigits));
}
