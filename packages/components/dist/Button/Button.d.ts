import * as React from 'react';
import { ButtonTypeMap as MuiButtonTypeMap } from '@material-ui/core/Button';
import { OverrideProps } from '@material-ui/core/OverridableComponent';
import { OverrideTypeMap } from '@akropolis-web/styles';
declare type ButtonSizes = 'medium' | 'large' | 'small' | 'extra-small';
declare type WidthSize = 'default' | 'none';
declare type OwnProps = {
    size?: ButtonSizes;
    minWidthSize?: WidthSize;
};
declare type ButtonTypeMap = OverrideTypeMap<MuiButtonTypeMap, OwnProps>;
declare type ButtonProps<D extends React.ElementType = MuiButtonTypeMap['defaultComponent']> = OverrideProps<ButtonTypeMap, D> & {
    component?: D;
};
declare function Button<D extends React.ElementType = MuiButtonTypeMap['defaultComponent']>(props: ButtonProps<D>): JSX.Element;
export { Button, ButtonProps, ButtonTypeMap };
