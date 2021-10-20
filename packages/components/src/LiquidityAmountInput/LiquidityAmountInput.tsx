import React from 'react';
import BN from 'bn.js';
import { LiquidityAmount, Currency } from '@akropolis-web/primitives';
import Grid from '@material-ui/core/Grid/Grid';

import { AmountInput, AmountInputProps } from '../AmountInput/AmountInput';
import { CurrencyIcon } from '../CurrencyIcon/CurrencyIcon';

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

const currenciesWithIcons = ['btc', 'eth'];

function getCurrencyLabel(currency: Currency) {
  return currenciesWithIcons.includes(currency.symbol.toLowerCase()) ? (
    <Grid container alignItems="center" wrap="nowrap">
      <CurrencyIcon currency={currency.symbol} />
      &nbsp;
      {currency.symbol}
    </Grid>
  ) : (
    currency.symbol
  );
}

function makeAmount(value: BN, currency: Currency) {
  return new LiquidityAmount(value, currency);
}
