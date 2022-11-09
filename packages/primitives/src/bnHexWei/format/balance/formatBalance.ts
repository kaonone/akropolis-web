import BN from 'bn.js';

import { IToBN } from '../../types';
import { getDecimal, bnToBn } from '../../utils';
import { makeFormattedBalance } from './makeFormattedBalance';
import { FormattedBalance, FormattingVariant, SI, SiPrecision, SymbolPosition } from './types';

interface IFormatBalanceOptions {
  amountInBaseUnits: string | BN | IToBN;
  baseDecimals: number;
  tokenSymbol?: string;
  precision?: number;
  variant?: FormattingVariant;
  symbolPosition?: SymbolPosition;
  withSI?: boolean;
  siPrecision?: SiPrecision;
}

export function formatBalance({
  amountInBaseUnits,
  baseDecimals,
  tokenSymbol = '',
  precision = 2,
  variant = 'default',
  symbolPosition = 'end-space',
  withSI = false,
  siPrecision,
}: IFormatBalanceOptions): FormattedBalance {
  const balanceString = bnToBn(amountInBaseUnits).toString();

  if (balanceString.length === 0 || balanceString === '0') {
    return makeFormattedBalance({
      rawInteger: '0',
      rawFractional: '',
      variant,
      symbolPosition,
      tokenSymbol,
    });
  }

  const { fractional, integer } = getDecimal(balanceString, baseDecimals, precision);

  const si = withSI ? calcSI(integer, siPrecision) : null;

  if (!si) {
    return makeFormattedBalance({
      rawInteger: integer,
      rawFractional: fractional,
      variant,
      symbolPosition,
      tokenSymbol,
    });
  }

  const { integer: integerSI, fractional: fractionalSI } = getDecimal(
    balanceString,
    baseDecimals + si.power,
    precision,
  );

  return makeFormattedBalance({
    rawInteger: integerSI,
    rawFractional: fractionalSI,
    variant,
    symbolPosition,
    tokenSymbol,
    si,
  });
}

export function calcSI(baseNumber: string, siPrecision?: SiPrecision) {
  const digit = baseNumber.length;
  if (siPrecision) return precisions[siPrecision];
  if (digit > 9) return precisions.billion;
  if (digit > 6) return precisions.million;
  if (digit > 3) return precisions.thousand;
  return null;
}

export const precisions: Record<SiPrecision, SI> = {
  thousand: {
    power: 3,
    value: 'K',
  },
  million: {
    power: 6,
    value: 'M',
  },
  billion: {
    power: 9,
    value: 'B',
  },
};
