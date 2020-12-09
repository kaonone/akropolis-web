import React, { useMemo } from 'react';

import * as icons from '../icons/currencies';

type Props = {
  currency: string;
  className?: string;
  inactive?: boolean;
};

type CoinComponent = typeof icons.BTCIcon;

const tokenIcons: Record<string, CoinComponent> = {
  btc: icons.BTCIcon,
  eth: icons.ETHIcon,
};

export function CurrencyIcon({ currency, className, inactive }: Props) {
  const Icon = useMemo(() => {
    return tokenIcons[currency.toLowerCase()];
  }, [currency, inactive]);

  return Icon ? <Icon className={className} inactive={inactive} /> : null;
}
