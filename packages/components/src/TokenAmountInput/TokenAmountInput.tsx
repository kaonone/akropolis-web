import React from 'react';
import BN from 'bn.js';
import { TokenAmount, Token } from '@akropolis-web/primitives';

import { AmountInput, AmountInputProps } from '../AmountInput/AmountInput';

export type TokenAmountInputProps = Omit<
  AmountInputProps<TokenAmount>,
  'makeAmount' | 'getCurrencyIdentifier' | 'getCurrencyLabel'
> & {
  getCurrencyLabel?: AmountInputProps<TokenAmount>['getCurrencyLabel'];
};

export function TokenAmountInput(props: TokenAmountInputProps) {
  const { currencies, getCurrencyLabel: customGetCurrencyLabel, ...rest } = props;

  return (
    <AmountInput<TokenAmount>
      {...rest}
      currencies={currencies}
      makeAmount={makeAmount}
      getCurrencyIdentifier={getCurrencyIdentifier}
      getCurrencyLabel={customGetCurrencyLabel || getCurrencyLabel}
    />
  );

  function getCurrencyLabel(currency: Token) {
    return currency.symbol;
  }
}

function getCurrencyIdentifier(currency: Token) {
  return currency.address;
}

function makeAmount(value: BN, currency: Token) {
  return new TokenAmount(value, currency);
}
