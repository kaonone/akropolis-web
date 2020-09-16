import { O } from 'ts-toolbelt';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Breakpoints } from './types';
import { useFromToQuery } from './useFromToQuery';

export function useBreakpointsMatch(
  points: O.Optional<Breakpoints, 'from'> | O.Optional<Breakpoints, 'to'>,
): boolean {
  const query = useFromToQuery(points);
  const matched = useMediaQuery(query);

  return !!matched;
}
