import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { InactiveTUSDIcon } from './InactiveTUSDIcon';

export function InactiveUSDTIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return <InactiveTUSDIcon {...props} />;
}
