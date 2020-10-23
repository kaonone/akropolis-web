import React from 'react';
import cn from 'classnames';
import Grid from '@material-ui/core/Grid';
import { Token } from '@akropolis-web/primitives';
import { makeStyles } from '@akropolis-web/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import { TokenIcon } from '../TokenIcon/TokenIcon';

type Props = {
  token: Token;
  iconProps?: SvgIconProps;
};

export function TokenName({ token, iconProps = {} }: Props) {
  const classes = useStyles();
  const { className, ...rest } = iconProps;

  return (
    <Grid container alignItems="center" wrap="nowrap">
      <TokenIcon tokenAddress={token.address} className={cn(className, classes.icon)} {...rest} />
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
