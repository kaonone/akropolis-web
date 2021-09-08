import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Network } from '@akropolis-web/primitives';
declare type Props = React.ComponentProps<typeof SvgIcon> & {
    network: Network;
};
export declare function NetworkIcon(props: Props): JSX.Element;
export {};
