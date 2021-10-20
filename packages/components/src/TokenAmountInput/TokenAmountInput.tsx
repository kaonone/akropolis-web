import React from 'react';
import BN from 'bn.js';
import { TokenAmount, Token } from '@akropolis-web/primitives';

import { AmountInput, AmountInputProps } from '../AmountInput/AmountInput';

type TokenName = (props: {
  token: Token;
  iconSize?: 'small' | 'inherit' | 'default' | 'large' | 'extra-large';
  iconProps?: {
    image: {
      src: string;
      height: number;
      width: number;
      blurDataURL?: string;
    };
    alt?: string;
    className?: string;
  };
  badge?: string;
}) => JSX.Element;

export type TokenAmountInputProps = Omit<
  AmountInputProps<TokenAmount>,
  'makeAmount' | 'getCurrencyIdentifier' | 'getCurrencyLabel'
> & {
  getCurrencyLabel?: AmountInputProps<TokenAmount>['getCurrencyLabel'];
  TokenName: TokenName;
};

export function TokenAmountInput(props: TokenAmountInputProps) {
  const { currencies, TokenName, getCurrencyLabel: customGetCurrencyLabel, ...rest } = props;

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
    return <TokenName token={currency} />;
  }
}

function getCurrencyIdentifier(currency: Token) {
  return currency.address;
}

function makeAmount(value: BN, currency: Token) {
  return new TokenAmount(value, currency);
}
