import { OverridableTypeMap } from '@material-ui/core/OverridableComponent';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
export interface Breakpoints {
    from: Breakpoint | number;
    to: Breakpoint | number;
}
export declare type OverrideTypeMap<M extends OverridableTypeMap, P extends Record<string, unknown>> = Omit<M, 'props'> & {
    props: P & Omit<M['props'], keyof P>;
};
