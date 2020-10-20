import React, { useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import { Object as O } from 'ts-toolbelt';
import Grid, { GridProps, GridSpacing } from '@material-ui/core/Grid';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { useTheme, useBreakpointsMatch } from '@akropolis-web/styles';

type AdaptiveSpacing = O.Required<Partial<Record<Breakpoint, GridSpacing>>, 'xs'>;

type Props = {
  spacing?: GridSpacing | AdaptiveSpacing;
};

export function AdaptiveGrid<C extends React.ElementType>(
  props: Props & Omit<GridProps<C, { component?: C }>, 'spacing'>,
) {
  const theme = useTheme();
  const breakpoints = theme.breakpoints.values;
  const breakpointKeys = Object.keys(theme.breakpoints.values);
  const { className, children, spacing: spacingProp, ...rest } = props;

  const [spacing, setSpacing] = useState<GridSpacing | undefined>();

  const sortedSpacingProp: [Breakpoint, GridSpacing][] = useMemo(() => {
    if (typeof spacingProp === 'object') {
      return sortSpacingByBreakpointValues(spacingProp);
    }
    setSpacing(spacingProp);
    return [];
  }, [spacingProp]);

  const breakpointMatches = sortedSpacingProp.map(([key]) => useBreakpointsMatch({ from: key }));

  useEffect(() => {
    const lastMatchIndex = breakpointMatches.lastIndexOf(true);
    if (lastMatchIndex !== -1) {
      const [, spacingValue] = sortedSpacingProp[lastMatchIndex];
      setSpacing(spacingValue);
    }
  }, [breakpointMatches, sortedSpacingProp]);

  const breakpointClasses = (breakpointKeys as Breakpoint[]).reduce(
    addMuiBreakpointClass,
    [] as string[],
  );

  const gridProps = Object.entries(rest).reduce(excludeBreakpointProps, {});

  return (
    <Grid className={cn(className, breakpointClasses)} spacing={spacing} {...gridProps}>
      {children}
    </Grid>
  );

  // MUI generates css for custom breakpoints, but doesn't add classes to support them in Grids
  function addMuiBreakpointClass(classes: string[], breakpointKey: Breakpoint) {
    const breakpointValue = props[breakpointKey];
    return breakpointValue
      ? [...classes, `MuiGrid-grid-${breakpointKey}-${breakpointValue}`]
      : classes;
  }

  function excludeBreakpointProps(restProps: {}, [key, value]: [string, any]) {
    return breakpointKeys.includes(key) ? restProps : { ...restProps, [key]: value };
  }

  function sortSpacingByBreakpointValues(adaptiveSpacing: AdaptiveSpacing) {
    return (Object.entries(adaptiveSpacing) as [Breakpoint, GridSpacing][]).sort(
      ([keyA], [keyB]) => breakpoints[keyA] - breakpoints[keyB],
    );
  }
}
