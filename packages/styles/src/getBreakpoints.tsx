import {
  Breakpoints as MuiBreakpoints,
  BreakpointValues,
  Breakpoint,
} from '@material-ui/core/styles/createBreakpoints';

type Breakpoints = Pick<MuiBreakpoints, 'values' | 'keys'>;

export function getBreakpoints(breakpoints: BreakpointValues): Breakpoints {
  return (Object.entries(breakpoints) as [Breakpoint, number][])
    .sort(([, valueA], [, valueB]) => valueA - valueB)
    .reduce(makeUniqueBreakpoints, {
      keys: [] as Breakpoint[],
      values: {} as BreakpointValues,
    });
}

// MUI doesn't generate media queries for duplicated breakpoints
function makeUniqueBreakpoints(
  { keys, values }: Breakpoints,
  [currentKey, currentValue]: [Breakpoint, number],
): Breakpoints {
  const isValueDuplicated = Object.values(values).includes(currentValue);
  const value = currentValue !== 0 && isValueDuplicated ? currentValue + 0.000001 : currentValue;

  return {
    keys: [...keys, currentKey],
    values: { ...values, [currentKey]: value },
  };
}
