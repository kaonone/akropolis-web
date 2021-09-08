import { Breakpoints as MuiBreakpoints, BreakpointValues } from '@material-ui/core/styles/createBreakpoints';
declare type Breakpoints = Pick<MuiBreakpoints, 'values' | 'keys'>;
export declare function getBreakpoints(breakpoints: BreakpointValues): Breakpoints;
export {};
