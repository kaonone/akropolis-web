import { O } from 'ts-toolbelt';
import { Theme, useTheme } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

import { Breakpoints } from './types';

export function useFromToQuery(
  points: O.Optional<Breakpoints, 'from'> | O.Optional<Breakpoints, 'to'>,
): string {
  const theme = useTheme();
  const { from, to } = points;

  const fromQuery = !isUndefined(from) && theme.breakpoints.up(from);
  const toQuery = !isUndefined(to) && down(to, theme);
  const betweenQuery = !isUndefined(from) && !isUndefined(to) && between(from, to, theme);
  return betweenQuery || fromQuery || toQuery || '';
}

function isUndefined<T>(value: T | undefined): value is undefined {
  return typeof value === 'undefined';
}

function down(key: Breakpoint | number, theme: Theme) {
  const maxBreakpoint: Breakpoint = Object.entries(theme.breakpoints.values).reduce((acc, cur) =>
    acc[1] > cur[1] ? cur : acc,
  )[0] as Breakpoint;

  if (key === maxBreakpoint) {
    // maxBreakpoint down applies to all sizes
    return theme.breakpoints.up('xs');
  }

  const value = typeof key === 'number' ? key : theme.breakpoints.values[key];

  return `@media (max-width:${value - 5 / 100}px)`;
}

function between(start: Breakpoint | number, end: Breakpoint | number, theme: Theme) {
  const maxBreakpoint: Breakpoint = Object.entries(theme.breakpoints.values).reduce((acc, cur) =>
    acc[1] > cur[1] ? cur : acc,
  )[0] as Breakpoint;

  if (end === maxBreakpoint) {
    // maxBreakpoint down applies to all sizes
    return theme.breakpoints.up(start);
  }

  const startValue = typeof start === 'number' ? start : theme.breakpoints.values[start];
  const endValue = typeof end === 'number' ? end : theme.breakpoints.values[end];

  return `@media (min-width:${startValue}px) and (max-width:${endValue - 5 / 100}px)`;
}
