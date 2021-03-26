import BN from 'bn.js';

import { decimalsToWei } from './decimalsToWei';

export function roundWei(
  value: string | BN,
  decimals: number,
  variant: 'ceil' | 'floor' | 'half-away-from-zero',
  significant: number,
): BN {
  const bnValue = new BN(value);

  const multiplierDecimals = Math.max(0, decimals - significant);
  const multiplier = decimalsToWei(multiplierDecimals);

  if (!multiplierDecimals) {
    return bnValue;
  }

  const absFloorRounded = bnValue.abs().div(multiplier).mul(multiplier);
  const mod = bnValue.sub(absFloorRounded);

  const isNeedUpToCeil =
    (variant === 'ceil' && !bnValue.eq(absFloorRounded)) ||
    (variant === 'half-away-from-zero' && mod.gte(multiplier.divn(2)));

  return absFloorRounded
    .add(isNeedUpToCeil ? multiplier : new BN(0))
    .muln(bnValue.isNeg() ? -1 : 1);
}
