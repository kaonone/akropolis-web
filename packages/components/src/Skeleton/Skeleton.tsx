import React, { useMemo } from 'react';
import cn from 'classnames';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import MuiSkeleton, { SkeletonProps, SkeletonTypeMap } from '@material-ui/lab/Skeleton';
import {
  useAncestorBackgroundHack,
  ProvidedAncestorBackground,
  makeStyles,
  lighten,
  useTheme,
} from '@akropolis-web/styles';

type WithRoundedBorders = {
  borderRadius?: number;
};

type StylesProps = ProvidedAncestorBackground & WithRoundedBorders;

export const Skeleton: OverridableComponent<SkeletonTypeMap<WithRoundedBorders>> = <
  P extends Record<string, unknown>,
  D extends React.ElementType = 'span'
>(
  props: SkeletonProps<D, P> & WithRoundedBorders,
) => {
  const { classes: muiClasses = {}, variant, borderRadius, ...rest } = props;
  const theme = useTheme();
  const ancestorBackground = useAncestorBackgroundHack();

  const backgroundColor = useMemo(() => {
    const skeletonColorsMap = {
      [theme.palette.background.default]: theme.palette.background.paperLight,
      [theme.palette.background.paper]: theme.palette.background.paperLight,
      [theme.palette.background.paperSecondary]: theme.palette.background.paperLight,
    };

    return skeletonColorsMap[ancestorBackground] || lighten(ancestorBackground, 0.1);
  }, [ancestorBackground, theme]);

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
      backgroundColor: ({ backgroundColor }: StylesProps) => backgroundColor,
      borderRadius: ({ borderRadius }: StylesProps) => borderRadius,
    },
  }),
  { name: 'Skeleton' },
);

export { SkeletonProps };
