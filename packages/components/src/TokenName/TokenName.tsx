import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Token } from '@akropolis-web/primitives';
import { makeStyles } from '@akropolis-web/styles';

import { TokenIcon } from '../TokenIcon/TokenIcon';

type Props = {
  token: Token;
};

export function TokenName({ token }: Props) {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" wrap="nowrap">
      <TokenIcon tokenAddress={token.address} className={classes.icon} />
      {token.symbol}
    </Grid>
  );
}

const useStyles = makeStyles(
  {
    icon: {
      marginRight: 8,
    },
  },
  { name: 'TokenName' },
);
