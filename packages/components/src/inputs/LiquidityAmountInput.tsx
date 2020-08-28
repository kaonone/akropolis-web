import React from 'react';
import BN from 'bn.js';
import { LiquidityAmount, Currency } from '@akropolis-web/primitives';

import { AmountInput, AmountInputProps } from './AmountInput/AmountInput';

export type LiquidityAmountInputProps = Omit<
  AmountInputProps<LiquidityAmount>,
  'makeAmount' | 'getCurrencyIdentifier' | 'getCurrencyLabel'
>;

export function LiquidityAmountInput(props: LiquidityAmountInputProps) {
  return (
    <AmountInput<LiquidityAmount>
      {...props}
      makeAmount={makeAmount}
      getCurrencyIdentifier={getCurrencyIdentifier}
      getCurrencyLabel={getCurrencyLabel}
    />
  );
}

function getCurrencyIdentifier(currency: Currency) {
  return currency.symbol;
}

function getCurrencyLabel(currency: Currency) {
  return currency.symbol;
}

function makeAmount(value: BN, currency: Currency) {
  return new LiquidityAmount(value, currency);
}
