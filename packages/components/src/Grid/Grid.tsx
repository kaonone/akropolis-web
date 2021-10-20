import React from 'react';
import cn from 'classnames';
import Grid, { GridSpacing, GridTypeMap as MuiGridTypeMap } from '@material-ui/core/Grid';
import { OverrideProps } from '@material-ui/core/OverridableComponent';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { useTheme, OverrideTypeMap } from '@akropolis-web/styles';

import { useAdapativeSpacing, AdaptiveSpacing } from './useAdaptiveSpacing';

type OwnProps = {
  spacing?: GridSpacing | AdaptiveSpacing;
};

type GridTypeMap = OverrideTypeMap<MuiGridTypeMap, OwnProps>;

type GridProps<D extends React.ElementType = MuiGridTypeMap['defaultComponent']> = OverrideProps<
  GridTypeMap,
  D
> & { component?: D };

function AdaptiveGrid<D extends React.ElementType = MuiGridTypeMap['defaultComponent']>(
  props: GridProps<D>,
) {
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

  function excludeBreakpointProps(restProps: Record<string, unknown>, [key, value]: [string, any]) {
    return breakpointKeys.includes(key) ? restProps : { ...restProps, [key]: value };
  }
}

export { AdaptiveGrid, GridProps, GridTypeMap };
