import React from 'react';
import cn from 'classnames';
import Grid, { GridProps } from '@material-ui/core/Grid';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { useTheme } from '@akropolis-web/styles';

export function AdaptiveGrid<C extends React.ElementType>(props: GridProps<C, { component?: C }>) {
  const theme = useTheme();
  const breakpoints = Object.keys(theme.breakpoints.values);

  const { className, children, ...rest } = props;

  const breakpointClasses = breakpoints.reduce((mqClasses, key) => {
    const breakpointValue = props[key as Breakpoint];
    return breakpointValue ? [...mqClasses, `MuiGrid-grid-${key}-${breakpointValue}`] : mqClasses;
  }, [] as string[]);

  const gridProps = Object.keys(rest).reduce(
    (acc, key) => (breakpoints.includes(key) ? acc : { ...acc, [key]: rest[key] }),
    {},
  );

  return (
    <Grid className={cn(className, breakpointClasses)} {...gridProps}>
      {children}
    </Grid>
  );
}
