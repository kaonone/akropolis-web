import React from 'react';
import cn from 'classnames';
import Grid from '@material-ui/core/Grid';
import { AllCoinsToken, Token } from '@akropolis-web/primitives';
import { makeStyles } from '@akropolis-web/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import { TokenIcon } from '../TokenIcon/TokenIcon';

type IconSizes = 'small' | 'inherit' | 'default' | 'large' | 'extra-large';

type Props = {
  token: Token;
  iconSize?: IconSizes;
  iconProps?: Omit<SvgIconProps, 'fontSize'>;
  badge?: string;
};

export function TokenName({ token, badge, iconSize = 'default', iconProps = {} }: Props) {
  const classes = useStyles();
  const { className, ...rest } = iconProps;

  return (
    <Grid container alignItems="center" wrap="nowrap">
      <Grid item>
        {token instanceof AllCoinsToken && token.tokens?.length ? (
          token.tokens.map(({ address }) => (
            <TokenIcon
              key={address}
              tokenAddress={address}
              className={cn(className, classes.icon, getIconSizeClass(iconSize))}
              {...rest}
            />
          ))
        ) : (
          <TokenIcon
            tokenAddress={token.address}
            className={cn(className, classes.icon, getIconSizeClass(iconSize))}
            {...rest}
          />
        )}
      </Grid>

      <Grid item container>
        <Grid item className={classes.tokenSymbol}>
          {token.symbol}
        </Grid>
        {badge && (
          <Grid item className={classes.badge}>
            {badge}
          </Grid>
        )}
      </Grid>
    </Grid>
  );

  function getIconSizeClass(size?: IconSizes) {
    switch (size) {
      case 'extra-large':
        return classes.extraLarge;
      default:
        return size && classes[size];
    }
  }
}

const useStyles = makeStyles(
  () => ({
    icon: {
      marginRight: 8,

      '& + &': {
        marginLeft: -16,
      },
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
    badge: {
      padding: '1px 6px 0px',
      borderRadius: '9.5px',
      backgroundColor: '#494972',
      fontSize: 12,
    },
    tokenSymbol: {
      display: 'flex',
      alignItems: 'center',
      marginRight: 4,
    },
  }),
  { name: 'TokenName' },
);
