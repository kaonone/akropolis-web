import React from 'react';
import cn from 'classnames';
import Grid from '@material-ui/core/Grid';
import { Token } from '@akropolis-web/primitives';
import { makeStyles } from '@akropolis-web/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import { TokenIcon } from '../TokenIcon/TokenIcon';

type IconSizes = 'small' | 'inherit' | 'default' | 'large' | 'extra-large';

type Props = {
  token: Token;
  iconSize?: IconSizes;
  iconProps?: Omit<SvgIconProps, 'fontSize'>;
};

export function TokenName({ token, iconSize = 'default', iconProps = {} }: Props) {
  const classes = useStyles();
  const { className, ...rest } = iconProps;

  return (
    <Grid container alignItems="center" wrap="nowrap">
      <TokenIcon
        tokenAddress={token.address}
        className={cn(className, classes.icon, getIconSizeClass(iconSize))}
        {...rest}
      />
      {token.symbol}
    </Grid>
  );

  function getIconSizeClass(size?: IconSizes) {
    switch (size) {
      case 'extra-large':
        return size && classes.extraLarge;
      default:
        return size && classes[size];
    }
  }
}

const useStyles = makeStyles(
  {
    icon: {
      marginRight: 8,
    },
    default: {
      fontSize: 20,
    },
    small: {
      fontSize: 16,
    },
    large: {
      fontSize: 24,
    },
    extraLarge: {
      fontSize: 30,
    },
    inherit: {
      fontSize: 'inherit',
    },
  },
  { name: 'TokenName' },
);
