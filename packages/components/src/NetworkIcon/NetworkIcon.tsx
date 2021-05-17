import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Network } from '@akropolis-web/primitives';

import { BSCIcon } from '../icons/BSCIcon';
import { ETHIcon } from '../icons/currencies';

type Props = React.ComponentProps<typeof SvgIcon> & {
  network: Network;
};

export function NetworkIcon(props: Props): JSX.Element {
  const { network, ...rest } = props;

  switch (network) {
    case 'bsc':
      return <BSCIcon {...rest} />;
    case 'eth':
    default:
      return <ETHIcon {...rest} />;
  }
}
