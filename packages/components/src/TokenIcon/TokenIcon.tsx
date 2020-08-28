import React, { useMemo } from 'react';
import cn from 'classnames';
import { makeStyles } from '@akropolis-web/styles';

import * as icons from '../icons/tokens';
import { AddressIcon } from '../AddressIcon/AddressIcon';
import { useDependencyContext } from '../DependencyProvider';

type Props = {
  tokenAddress: string;
  className?: string;
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
  renBTC: icons.renBTCIcon,
  sBTC: icons.sBTCIcon,
  SNX: icons.SNXIcon,
  sUSD: icons.sUSDIcon,
  TUSD: icons.TUSDIcon,
  USDC: icons.USDCIcon,
  USDT: icons.USDTIcon,
  WBTC: icons.WBTCIcon,
  WETH: icons.ETHIcon,
  YFI: icons.YFIIcon,
};

export function TokenIcon({ tokenAddress, className }: Props) {
  const classes = useStyles();
  const { supportedTokens } = useDependencyContext();

  const Icon = useMemo(() => {
    const tokenSymbol = Object.keys(supportedTokens).find(
      key => supportedTokens[key].toLowerCase() === tokenAddress.toLowerCase(),
    );

    return tokenSymbol && tokenIcons[tokenSymbol];
  }, [tokenAddress, supportedTokens]);

  return Icon ? (
    <Icon className={className} />
  ) : (
    <div className={cn(classes.addressIcon, className)}>
      <AddressIcon address={tokenAddress} />
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
