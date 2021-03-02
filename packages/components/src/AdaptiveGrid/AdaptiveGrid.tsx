import React from 'react';
import cn from 'classnames';
import Grid, { GridProps, GridSpacing } from '@material-ui/core/Grid';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { useTheme } from '@akropolis-web/styles';

import { useAdapativeSpacing, AdaptiveSpacing } from './useAdaptiveSpacing';

type Props<C extends React.ElementType> = {
  component?: C;
  spacing?: GridSpacing | AdaptiveSpacing;
};

export function AdaptiveGrid<C extends React.ElementType>(props: GridProps<C, Props<C>>) {
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
}
