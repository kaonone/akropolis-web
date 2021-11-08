import * as React from 'react';
import cn from 'classnames';
import MuiButton, { ButtonTypeMap as MuiButtonTypeMap } from '@material-ui/core/Button';
import { OverrideProps } from '@material-ui/core/OverridableComponent';
import { OverrideTypeMap } from '@akropolis-web/styles';

import { useStyles } from './Button.style';

type ButtonSizes = 'medium' | 'large' | 'small' | 'extra-small';

type WidthSize = 'default' | 'none';

type OwnProps = {
  size?: ButtonSizes;
  minWidthSize?: WidthSize;
};

type ButtonTypeMap = OverrideTypeMap<MuiButtonTypeMap, OwnProps>;

type ButtonProps<
  D extends React.ElementType = MuiButtonTypeMap['defaultComponent']
> = OverrideProps<ButtonTypeMap, D> & { component?: D };

function Button<D extends React.ElementType = MuiButtonTypeMap['defaultComponent']>(
  props: ButtonProps<D>,
) {
  const classes = useStyles();
  const { classes: muiClasses = {}, size, minWidthSize = 'default', ...rest } = props;

  return (
    <MuiButton
      {...rest}
      size={getSizeTypeToDefault(size)}
      classes={{
        ...muiClasses,
        root: cn(classes.root, muiClasses.root),
        disabled: cn(classes.disabled, muiClasses.disabled),
        focusVisible: cn(classes.focusVisible, muiClasses.focusVisible),
        containedPrimary: cn(classes.containedPrimary, muiClasses.containedPrimary),
        outlinedPrimary: cn(classes.outlinedPrimary, muiClasses.outlinedPrimary),
        textPrimary: cn(classes.textPrimary, muiClasses.textPrimary),
        ...getSizeClasses(),
      }}
      disableRipple={rest.variant !== 'text'}
    />
  );

  function getSizeClasses() {
    switch (size) {
      case 'large':
        return { sizeLarge: cn(classes.sizeLarge, muiClasses.sizeLarge, getMinWidthClasses()) };
      case 'small':
        return { sizeSmall: cn(classes.sizeSmall, muiClasses.sizeSmall, getMinWidthClasses()) };
      case 'extra-small':
        return {
          sizeSmall: cn(classes.sizeExtraSmall, muiClasses.sizeSmall, getMinWidthClasses()),
        };
      case 'medium':
      default:
        return null;
    }
  }

  function getMinWidthClasses() {
    switch (minWidthSize) {
      case 'none':
        return null;
      case 'default':
      default:
        return classes.defaultMinWidth;
    }
  }
}

function getSizeTypeToDefault(size: ButtonSizes | undefined) {
  switch (size) {
    case 'extra-small':
      return 'small';
    case 'small':
    case 'large':
    case 'medium':
    default:
      return size;
  }
}

export { Button, ButtonProps, ButtonTypeMap };
