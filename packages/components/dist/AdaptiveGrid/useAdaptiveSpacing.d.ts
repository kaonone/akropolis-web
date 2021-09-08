import { Object as O } from 'ts-toolbelt';
import { GridSpacing } from '@material-ui/core/Grid';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
export declare type AdaptiveSpacing = O.Required<Partial<Record<Breakpoint, GridSpacing>>, 'xs'>;
export declare function useAdapativeSpacing(spacing?: GridSpacing | AdaptiveSpacing): 0 | 2 | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined;
