import React from 'react';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import MuiSkeleton, { SkeletonProps, SkeletonTypeMap } from '@material-ui/lab/Skeleton';
import {
  useAncestorBackgroundHack,
  ProvidedAncestorBackground,
  makeStyles,
} from '@akropolis-web/styles';

export const Skeleton: OverridableComponent<SkeletonTypeMap> = <
  P extends Record<string, unknown>,
  D extends React.ElementType = 'span'
>(
  props: SkeletonProps<D, P>,
) => {
  const { classes: muiClasses, ...rest } = props;
  const backgroundColors = useAncestorBackgroundHack();
  const classes = useStyles(backgroundColors);

  return <MuiSkeleton classes={{ root: classes.root }} {...rest} />;
};

const useStyles = makeStyles(
  () => ({
    root: {
      backgroundColor: ({ loaderBackgroundColor }: ProvidedAncestorBackground) =>
        loaderBackgroundColor,
    },
  }),
  { name: 'Skeleton' },
);

export { SkeletonProps };
