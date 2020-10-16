import React, { useMemo } from 'react';

import * as icons from '../icons/currencies';
import * as inactiveIcons from '../icons/inactiveTokens';

type Props = {
  currency: string;
  className?: string;
  isInactive?: boolean;
};

type CoinComponent = typeof icons.BTCIcon;

const tokenIcons: Record<string, CoinComponent> = {
  btc: icons.BTCIcon,
  eth: icons.ETHIcon,
};

const inactiveTokenIcons: Record<string, CoinComponent> = {
  btc: inactiveIcons.InactiveRenBTCIcon,
  eth: inactiveIcons.InactiveWETHIcon,
};

export function CurrencyIcon({ currency, className, isInactive }: Props) {
  const Icon = useMemo(() => {
    return isInactive
      ? inactiveTokenIcons[currency.toLowerCase()]
      : tokenIcons[currency.toLowerCase()];
  }, [currency, isInactive]);

  return Icon ? <Icon className={className} /> : null;
}
