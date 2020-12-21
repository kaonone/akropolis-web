import React, { useMemo } from 'react';
import { makeStyles } from '@akropolis-web/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import * as icons from '../icons/tokens';
import { AddressIcon } from '../AddressIcon/AddressIcon';
import { useDependencyContext } from '../DependencyProvider';

type Props = {
  tokenAddress: string;
  inactive?: boolean;
};

type CoinComponent = typeof icons.DAIIcon;

const tokenIcons: Record<string, CoinComponent> = {
  ADEL: icons.ADELIcon,
  AKRO: icons.AKROIcon,
  BAL: icons.BALIcon,
  bUSD: icons.BUSDIcon,
  COMP: icons.COMPIcon,
  CRV: icons.CRVIcon,
  DAI: icons.DAIIcon,
  MTA: icons.MTAIcon,
  renBTC: icons.RenBTCIcon,
  sBTC: icons.SBTCIcon,
  SNX: icons.SNXIcon,
  sUSD: icons.SUSDIcon,
  TUSD: icons.TUSDIcon,
  USDC: icons.USDCIcon,
  USDT: icons.USDTIcon,
  WBTC: icons.WBTCIcon,
  WETH: icons.WETHIcon,
  YFI: icons.YFIIcon,
  '3Crv': icons.ThreeCrvIcon,
  crvSBTC: icons.CrvSBTCIcon,
  crvBUSD: icons.CrvBUSDIcon,
  crvCOMP: icons.CrvCOMPIcon,
};

export function TokenIcon(props: Props & SvgIconProps) {
  const { tokenAddress, inactive, ...rest } = props;

  const classes = useStyles();
  const { supportedTokens } = useDependencyContext();

  const Icon = useMemo(() => {
    const tokenSymbol = Object.keys(supportedTokens).find(
      key => supportedTokens[key].toLowerCase() === tokenAddress.toLowerCase(),
    );

    return tokenSymbol && tokenIcons[tokenSymbol];
  }, [tokenAddress, supportedTokens]);

  return Icon ? (
    <Icon {...rest} inactive={inactive} />
  ) : (
    <div className={classes.addressIcon}>
      <AddressIcon address={tokenAddress} {...rest} />
    </div>
  );
}

const useStyles = makeStyles(
  {
    addressIcon: {
      display: 'inline-flex',
    },
  },
  { name: 'TokenIcon' },
);
