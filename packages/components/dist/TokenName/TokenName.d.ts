import { Token } from '@akropolis-web/primitives';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
declare type IconSizes = 'small' | 'inherit' | 'default' | 'large' | 'extra-large';
declare type Props = {
    token: Token;
    iconSize?: IconSizes;
    iconProps?: Omit<SvgIconProps, 'fontSize'>;
    badge?: string;
};
export declare function TokenName({ token, badge, iconSize, iconProps }: Props): JSX.Element;
export {};
