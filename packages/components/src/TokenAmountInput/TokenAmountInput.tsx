import React, { useMemo } from 'react';
import BN from 'bn.js';
import Grid from '@material-ui/core/Grid';
import { TokenAmount, Token, AllCoinsToken } from '@akropolis-web/primitives';

import { TokensIcons } from '../TokensIcons/TokensIcons';
import { TokenName } from '../TokenName/TokenName';
import { AmountInput, AmountInputProps } from '../AmountInput/AmountInput';

export type TokenAmountInputProps = Omit<
  AmountInputProps<TokenAmount>,
  'makeAmount' | 'getCurrencyIdentifier' | 'getCurrencyLabel'
> & { allowSelectAllToken?: boolean };

export function TokenAmountInput(props: TokenAmountInputProps) {
  const { allowSelectAllToken, currencies, ...rest } = props;

  const tokens = useMemo(
    () =>
      allowSelectAllToken && currencies.length > 1
        ? [...currencies, new AllCoinsToken(currencies)]
        : currencies,
    [allowSelectAllToken, currencies],
  );

  return (
    <AmountInput<TokenAmount>
      {...rest}
      currencies={tokens}
      makeAmount={makeAmount}
      getCurrencyIdentifier={getCurrencyIdentifier}
      getCurrencyLabel={getCurrencyLabel}
    />
  );

  function getCurrencyLabel(currency: Token) {
    return currency instanceof AllCoinsToken && currency.tokens ? (
      <Grid container alignItems="center" wrap="nowrap">
        <TokensIcons tokens={currency.tokens} />
        &nbsp;
        {currency.symbol}
      </Grid>
    ) : (
      <TokenName token={currency} />
    );
  }
}

function getCurrencyIdentifier(currency: Token) {
  return currency.address;
}

function makeAmount(value: BN, currency: Token) {
  return new TokenAmount(value, currency);
}
