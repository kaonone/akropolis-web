import { useCallback, useEffect, useMemo, useRef } from 'react';
import * as R from 'ramda';
import { Object as O } from 'ts-toolbelt';
import { GridSpacing } from '@material-ui/core/Grid';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { useTheme, useBreakpointsMatch } from '@akropolis-web/styles';

export type AdaptiveSpacing = O.Required<Partial<Record<Breakpoint, GridSpacing>>, 'xs'>;

export function useAdapativeSpacing(spacing?: GridSpacing | AdaptiveSpacing) {
  const theme = useTheme();
  const breakpoints = theme.breakpoints.values;

  const adaptiveSpacing = useRef<AdaptiveSpacing | null>(
    typeof spacing === 'object' ? spacing : null,
  ).current;

  const spacingString = R.toString(spacing);

  useEffect(() => {
    if (
      typeof spacing === 'object' &&
      adaptiveSpacing &&
      R.toString(adaptiveSpacing) !== spacingString
    ) {
      console.error('Error: Cannot update spacing prop in AdaptiveGrid. Object must be immutable.');
    }
  }, [spacingString, adaptiveSpacing]);

  const sortSpacingByBreakpointValues = useCallback(
    (spacingObject: AdaptiveSpacing) => {
      return (Object.entries(spacingObject) as [Breakpoint, GridSpacing][]).sort(
        ([keyA], [keyB]) => breakpoints[keyA] - breakpoints[keyB],
      );
    },
    [R.toString(breakpoints)],
  );

  const sortedSpacing: [Breakpoint, GridSpacing][] = useMemo(
    () => (adaptiveSpacing ? sortSpacingByBreakpointValues(adaptiveSpacing) : []),
    [adaptiveSpacing, sortSpacingByBreakpointValues],
  );

  const breakpointMatches = sortedSpacing.map(([key]) => useBreakpointsMatch({ from: key }));

  const currentSpacing = useMemo(() => {
    if (typeof spacing === 'object') {
      const index = breakpointMatches.lastIndexOf(true);
      const [, spacingValue] = index !== -1 ? sortedSpacing[index] : [];

      return spacingValue;
    }
    return spacing;
  }, [breakpointMatches.toString(), sortedSpacing.toString(), spacingString]);

  return currentSpacing;
}
