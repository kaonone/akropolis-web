import React, { useMemo } from 'react';
import { makeStyles } from '@akropolis-web/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import * as icons from '../icons/tokens';
import * as inactiveIcons from '../icons/inactiveTokens';
import { AddressIcon } from '../AddressIcon/AddressIcon';
import { useDependencyContext } from '../DependencyProvider';

type Props = {
  tokenAddress: string;
  isInactive?: boolean;
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
};

const inactiveTokenIcons: Record<string, CoinComponent> = {
  ADEL: inactiveIcons.InactiveADELIcon,
  AKRO: inactiveIcons.InactiveAKROIcon,
  BAL: inactiveIcons.InactiveBALIcon,
  bUSD: inactiveIcons.InactiveBUSDIcon,
  COMP: inactiveIcons.InactiveCOMPIcon,
  CRV: inactiveIcons.InactiveCRVIcon,
  DAI: inactiveIcons.InactiveDAIIcon,
  MTA: inactiveIcons.InactiveMTAIcon,
  renBTC: inactiveIcons.InactiveRenBTCIcon,
  sBTC: inactiveIcons.InactiveSBTCIcon,
  SNX: inactiveIcons.InactiveSNXIcon,
  sUSD: inactiveIcons.InactiveSUSDIcon,
  TUSD: inactiveIcons.InactiveTUSDIcon,
  USDC: inactiveIcons.InactiveUSDCIcon,
  USDT: inactiveIcons.InactiveUSDTIcon,
  WBTC: inactiveIcons.InactiveWBTCIcon,
  WETH: inactiveIcons.InactiveWETHIcon,
  YFI: inactiveIcons.InactiveYFIIcon,
};

export function TokenIcon(props: Props & SvgIconProps) {
  const classes = useStyles();
  const { supportedTokens } = useDependencyContext();
  const { tokenAddress, isInactive, ...rest } = props;

  const Icon = useMemo(() => {
    const tokenSymbol = Object.keys(supportedTokens).find(
      key => supportedTokens[key].toLowerCase() === tokenAddress.toLowerCase(),
    );

    return tokenSymbol && (isInactive ? inactiveTokenIcons[tokenSymbol] : tokenIcons[tokenSymbol]);
  }, [tokenAddress, supportedTokens]);

  return Icon ? (
    <Icon {...rest} />
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
