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

export const Skeleton: OverridableComponent<SkeletonTypeMap> = <
  P extends Record<string, unknown>,
  D extends React.ElementType = 'span'
>(
  props: SkeletonProps<D, P>,
) => {
  const { classes: muiClasses = {}, ...rest } = props;

  const backgroundColor = useAncestorBackgroundHack();
  const classes = useStyles({ backgroundColor });

  return (
    <MuiSkeleton classes={{ ...muiClasses, root: cn(classes.root, muiClasses.root) }} {...rest} />
  );
};

const useStyles = makeStyles(
  () => ({
    root: {
      backgroundColor: ({ backgroundColor }: ProvidedAncestorBackground) =>
        lighten(backgroundColor, 0.15),
    },
  }),
  { name: 'Skeleton' },
);

export { SkeletonProps };
