import React from 'react';
import cn from 'classnames';
import Grid, { GridSpacing, GridTypeMap as MuiGridTypeMap } from '@material-ui/core/Grid';
import { OverridableComponent, OverrideProps } from '@material-ui/core/OverridableComponent';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { useTheme } from '@akropolis-web/styles';

import { useAdapativeSpacing, AdaptiveSpacing } from './useAdaptiveSpacing';

type MuiGridTypeProps = Omit<MuiGridTypeMap['props'], 'spacing'> & {
  spacing?: GridSpacing | AdaptiveSpacing;
};

interface GridTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & MuiGridTypeProps;
  defaultComponent: D;
  classKey: MuiGridTypeMap['classKey'];
}

type GridProps<
  D extends React.ElementType = GridTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<GridTypeMap<P, D>, D>;

export const AdaptiveGrid: OverridableComponent<GridTypeMap> = function ButtonFunc<
  P = {},
  D extends React.ElementType = 'div'
>(props: GridProps<D, P>) {
  const theme = useTheme();
  const breakpointKeys = Object.keys(theme.breakpoints.values);
  const { className, children, spacing: spacingProp, ...rest } = props;
  const spacing = useAdapativeSpacing(spacingProp);

  // MUI generates css for custom breakpoints, but doesn't add classes to support them in Grids
  const breakpointClasses = (breakpointKeys as Breakpoint[]).reduce((classes, breakpointKey) => {
    const breakpointValue = props[breakpointKey];
    return breakpointValue
      ? [...classes, `MuiGrid-grid-${breakpointKey}-${breakpointValue}`]
      : classes;
  }, [] as string[]);

  const gridProps = Object.entries(rest).reduce(excludeBreakpointProps, {});

  return (
    <Grid className={cn(className, breakpointClasses)} spacing={spacing} {...gridProps}>
      {children}
    </Grid>
  );

  function excludeBreakpointProps(restProps: {}, [key, value]: [string, any]) {
    return breakpointKeys.includes(key) ? restProps : { ...restProps, [key]: value };
  }
};
