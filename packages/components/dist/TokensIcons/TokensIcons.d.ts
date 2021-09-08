import { Token } from '@akropolis-web/primitives';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
declare type Props = {
    tokens: Token[];
    iconsProps?: SvgIconProps;
    classes?: {
        root?: string;
        iconWrapper?: string;
    };
};
export declare function TokensIcons(props: Props): JSX.Element;
export {};
