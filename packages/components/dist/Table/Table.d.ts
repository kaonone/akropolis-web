import * as M from './models';
declare type Props<T, U> = {
    entries: T[];
    columns: Array<M.Column<T, U>>;
    withStripes?: boolean;
    withOuterPadding?: boolean;
    summary?: M.Summary;
    rowPadding?: M.RowPaddingSize;
    titlePadding?: M.RowPaddingSize;
    indentFromHeader?: M.RowPaddingSize;
    rowClassNames?: M.RowWithClassName;
    divideBy?: (entry: T, entryIndex: number, entries: T[]) => boolean;
};
export declare function Table<T, U = null>(props: Props<T, U>): JSX.Element;
export {};
