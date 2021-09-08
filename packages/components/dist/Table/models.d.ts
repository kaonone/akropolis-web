import * as React from 'react';
export declare type AlignProperty = 'left' | 'right' | 'center';
export declare type RowPaddingSize = 'medium' | 'small' | 'extra-small';
export declare type SubtablePaddingFromTitle = 'medium' | 'unset';
export declare type VerticalAlignProperty = 'center' | 'top' | 'bottom';
export declare type ColSpanProperty = number | 'end' | undefined;
export declare type RowWithClassName = {
    className?: string;
    entryRowClassName?: string;
    subRowClassName?: string;
    headerRowClassName?: string;
    subHeaderRowClassName?: string;
};
export declare type ColumnWithClassName<T> = {
    className?: string | ((entry: T, entryIndex: number, entries: T[]) => string);
};
export declare type Column<T, U = null> = {
    cellContent: CellContent<T, U>;
    align?: AlignProperty;
    verticalAlign?: VerticalAlignProperty;
    renderTitle?(): React.ReactNode;
    titleClassName?: string;
} & ColumnWithClassName<T>;
export declare type CellContent<T, U> = SimpleCellContent<T> | CellContentForRowExpander<T, U>;
export declare type SimpleCellContent<T> = {
    kind: 'simple';
    render(entry: T, entryIndex: number, entries: T[]): React.ReactNode;
    colSpan?: ColSpanProperty | ((entry: T, entryIndex: number, entries: T[]) => ColSpanProperty);
};
export declare type CellContentForRowExpander<T, U> = {
    kind: 'for-row-expander';
    expandedArea: ExpandedArea<T, U>;
    colSpan?: ColSpanProperty | ((entry: T, entryIndex: number, entries: T[]) => ColSpanProperty);
};
export declare type ExpandedArea<T, U> = ExpandedAreaWithinSingleCell<T> | ExpandedAreaWithinSubtable<T, U>;
export declare type ExpandedAreaWithinSingleCell<T> = {
    kind: 'single-cell';
    renderContent(entry: T, entryIndex: number, entries: T[]): React.ReactNode;
} & ColumnWithClassName<T>;
export declare type ExpandedAreaWithinSubtable<T, U> = {
    kind: 'subtable';
    paddingFromTitle?: SubtablePaddingFromTitle;
    getSubtableEntries(entry: T, entryIndex: number, entries: T[]): U[];
    subtableColumns: Array<SubtableColumn<U>>;
};
export declare type SubtableColumn<T> = {
    renderTitle?(): React.ReactNode;
    renderCell(subtableEntry: T, subtableEntryIndex: number, subtableEntries: T[]): React.ReactNode;
    align?: AlignProperty;
    titleClassName?: string;
} & ColumnWithClassName<T>;
export declare type Summary = {
    renderLabel(): React.ReactNode;
    renderValue(): React.ReactNode;
    className?: string;
};
export declare type RowCellsRendererAccumulator = {
    cells: React.ReactNode[];
    cellsToSkip: number;
};
