import React from 'react';
import cn from 'classnames';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import MuiSkeleton, { SkeletonProps, SkeletonTypeMap } from '@material-ui/lab/Skeleton';
import {
  useAncestorBackgroundHack,
  ProvidedAncestorBackground,
  makeStyles,
  lighten,
} from '@akropolis-web/styles';

type WithRoundedBorders = {
  borderRadius?: number;
};

type StylesProps = ProvidedAncestorBackground & WithRoundedBorders;

export const Skeleton: OverridableComponent<SkeletonTypeMap> = <
  P extends Record<string, unknown>,
  D extends React.ElementType = 'span'
>(
  props: SkeletonProps<D, P> & WithRoundedBorders,
) => {
  const { classes: muiClasses = {}, variant, borderRadius, ...rest } = props;

  const backgroundColor = useAncestorBackgroundHack();
  const classes = useStyles({
    backgroundColor,
    borderRadius,
  });

  return (
    <MuiSkeleton
      classes={{ ...muiClasses, root: cn(classes.root, muiClasses.root) }}
      variant={variant}
      {...rest}
    />
  );
};

const useStyles = makeStyles(
  () => ({
    root: {
      backgroundColor: ({ backgroundColor }: StylesProps) => lighten(backgroundColor, 0.1),
      borderRadius: ({ borderRadius }: StylesProps) => borderRadius,
    },
  }),
  { name: 'Skeleton' },
);

export { SkeletonProps };
