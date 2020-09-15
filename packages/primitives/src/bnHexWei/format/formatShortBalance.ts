import BN from 'bn.js';

import { IToBN } from '../types';
import { bnToBn, getDecimal } from '../utils';
import { formatInteger } from './formatInteger';

type SymbolPosition = 'start-space' | 'start' | 'end-space' | 'end';

interface IFormatBalanceOptions {
  amountInBaseUnits: string | BN | IToBN;
  baseDecimals: number;
  tokenSymbol?: string;
  symbolPosition?: SymbolPosition;
}

export function formatShortBalance({
  amountInBaseUnits,
  baseDecimals,
  tokenSymbol = '',
  symbolPosition = 'end-space',
}: IFormatBalanceOptions): string {
  const precision = 2;
  const balanceString = bnToBn(amountInBaseUnits).toString();

  if (balanceString.length === 0 || balanceString === '0') {
    return formatWithUnit({ symbolPosition, tokenSymbol, integer: '0' });
  }

  const { fractional, integer } = getDecimal(balanceString, baseDecimals, precision);

  const si = calcSI(integer);

  if (!si) {
    return formatWithUnit({ symbolPosition, tokenSymbol, integer, fractional }).trim();
  }

  const { integer: integerSI, fractional: fractionalSI } = getDecimal(
    balanceString,
    baseDecimals + si.power,
    precision,
  );

  return formatWithUnit({
    symbolPosition,
    tokenSymbol,
    integer: integerSI,
    fractional: fractionalSI,
    si,
  }).trim();
}

const unitsGetterByPosition: Record<SymbolPosition, (tokenSymbol: string) => string> = {
  'end-space': tokenSymbol => ` ${tokenSymbol}`,
  end: tokenSymbol => tokenSymbol,
  'start-space': tokenSymbol => `${tokenSymbol} `,
  start: tokenSymbol => tokenSymbol,
};

const startPositions: SymbolPosition[] = ['start', 'start-space'];

function formatWithUnit({
  symbolPosition,
  tokenSymbol,
  integer,
  fractional,
  si,
}: {
  tokenSymbol: string;
  symbolPosition: SymbolPosition;
  integer: string;
  fractional?: string;
  si?: SI;
}) {
  const value = `${formatInteger(integer || '0')}${fractional ? `.${fractional}` : ''}`;

  const isStartUnit = startPositions.includes(symbolPosition);
  const unit = unitsGetterByPosition[symbolPosition](tokenSymbol.trim());
  const raw = isStartUnit ? [unit, value, si ? si.value : ''] : [value, si ? si.value : '', unit];

  return raw.join('').trim();
}

export function calcSI(baseNumber: string) {
  const digit = baseNumber.length;
  if (digit > 8) return precisions.billion;
  if (digit > 5) return precisions.million;
  if (digit > 3) return precisions.thousand;
  return null;
}

type SI = {
  power: number;
  value: string;
};

export const precisions: Record<string, SI> = {
  thousand: {
    power: 3,
    value: 'k',
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
