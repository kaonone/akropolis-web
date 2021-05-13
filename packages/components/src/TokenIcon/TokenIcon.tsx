import React, { useMemo } from 'react';
import { makeStyles } from '@akropolis-web/styles';
import { Network } from '@akropolis-web/primitives';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import cn from 'classnames';

import * as icons from '../icons/tokens';
import { AddressIcon } from '../AddressIcon/AddressIcon';
import { useDependencyContext } from '../DependencyProvider';
import { NetworkIcon } from '../NetworkIcon/NetworkIcon';

type Props = {
  tokenAddress: string;
  network?: Network;
  networkIconProps?: SvgIconProps;
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
  yCRV: icons.YCRVIcon,
  HEGIC: icons.HEGICIcon,
  steCRV: icons.SteCRVIcon,
};

export function TokenIcon(props: Props & SvgIconProps) {
  const { tokenAddress, network, networkIconProps, inactive, ...rest } = props;

  const classes = useStyles();
  const { supportedTokens } = useDependencyContext();

  const Icon = useMemo(() => {
    const tokenSymbol = Object.keys(supportedTokens).find(
      key => supportedTokens[key].toLowerCase() === tokenAddress.toLowerCase(),
    );

    return tokenSymbol && tokenIcons[tokenSymbol];
  }, [tokenAddress, supportedTokens]);

  return Icon ? (
    <div className={classes.iconContainer}>
      <Icon {...rest} inactive={inactive} />
      {network && (
        <NetworkIcon
          {...networkIconProps}
          network={network}
          className={cn(networkIconProps?.className, classes.networkIcon)}
        />
      )}
    </div>
  ) : (
    <div className={cn(classes.iconContainer, classes.addressIcon)}>
      <AddressIcon address={tokenAddress} {...rest} />
      {network && (
        <NetworkIcon
          {...networkIconProps}
          network={network}
          className={cn(networkIconProps?.className, classes.networkIcon)}
        />
      )}
    </div>
  );
}

const useStyles = makeStyles(
  {
    addressIcon: {
      display: 'inline-flex',
    },
    iconContainer: {
      position: 'relative',
    },
    networkIcon: {
      position: 'absolute',
      fontSize: '0.45em',
      top: '-50%',
      right: '-50%',
    },
  },
  { name: 'TokenIcon' },
);
