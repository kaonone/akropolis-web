import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { BSCIcon } from '../icons/BSCIcon';
import { ETHIcon } from '../icons/currencies';

type Props = React.ComponentProps<typeof SvgIcon> & {
  network: 'bsc' | 'eth';
};

export function NetworkIcon(props: Props): JSX.Element {
  const { network, ...rest } = props;

  switch (network) {
    case 'bsc':
      return <BSCIcon {...rest} />;
    case 'eth':
      return <ETHIcon {...rest} />;
  }
}
