/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import * as R from 'ramda';
import cn from 'classnames';

import { useStyles } from './Table.style';
import * as views from './components';
import * as M from './models';
import { SubtableColumn } from './models';

type Props<T, U> = {
  entries: T[];
  columns: Array<M.Column<T, U>>;
  withStripes?: boolean;
  withOuterPadding?: boolean;
  summary?: M.Summary;
  rowPadding?: M.RowPaddingSize;
  titlePadding?: M.RowPaddingSize;
  indentFromHeader?: M.RowPaddingSize;
  divideBy?: (entry: T, entryIndex: number, entries: T[]) => boolean;
};

type RowToExpandedState = Record<number, boolean>;

export function Table<T, U = null>(props: Props<T, U>) {
  const classes = useStyles();

  const alignPropertyToClass: Record<M.AlignProperty, string> = {
    center: classes.cellAlignCenter,
    left: classes.cellAlignLeft,
    right: classes.cellAlignRight,
  };

  const verticalAlignPropertyClass: Record<M.VerticalAlignProperty, string> = {
    center: classes.cellVerticalAlignCenter,
    top: classes.cellVerticalAlignTop,
    bottom: classes.cellVerticalAlignBottom,
  };

  const rowPaddingToClass: Record<M.RowPaddingSize, string> = {
    medium: classes.cellPaddingMedium,
    small: classes.cellPaddingSmall,
    'extra-small': classes.cellPaddingExtraSmall,
  };

  const titlePaddingToClass: Record<M.RowPaddingSize, string> = {
    medium: classes.titlePaddingMedium,
    small: classes.titlePaddingSmall,
    'extra-small': classes.titlePaddingExtraSmall,
  };

  const indentFromHeaderClass: Record<M.RowPaddingSize, string> = {
    medium: classes.paddingFromTitleMedium,
    small: classes.paddingFromTitleSmall,
    'extra-small': classes.paddingFromTitleExtraSmall,
  };

  const subtableIndentFromHeaderClass: Record<M.SubtablePaddingFromTitle, string> = {
    medium: classes.subtablePaddingFromTitleMedium,
    unset: '',
  };

  const {
    columns,
    entries,
    summary,
    withStripes,
    withOuterPadding,
    rowPadding = 'medium',
    titlePadding = 'medium',
    indentFromHeader,
    divideBy,
  } = props;

  const [rowToExpanded, setRowToExpanded] = React.useState<RowToExpandedState>(() =>
    entries.reduce(
      (acc, _, index) => ({
        ...acc,
        [index]: false,
      }),
      {},
    ),
  );

  const expandedArea: M.ExpandedArea<T, U> | null = (() => {
    const contentWithRowExpander = columns.find(x => x.cellContent.kind === 'for-row-expander')
      ?.cellContent as M.CellContentForRowExpander<T, U> | undefined;

    return contentWithRowExpander?.expandedArea || null;
  })();

  return (
    <table
      className={cn([
        classes.root,
        {
          [classes.withStripes]: withStripes,
          [classes.withOuterPadding]: withOuterPadding,
        },
      ])}
    >
      {columns.find(x => x.renderTitle) && (
        <thead>
          <tr>{columns.map(renderTitle)}</tr>
        </thead>
      )}
      <tbody className={cn(getPaddingFromTitleClass(indentFromHeader))}>
        {renderEntriesAndSummary()}
      </tbody>
    </table>
  );

  function renderEntriesAndSummary() {
    if (summary) {
      return (
        <>
          {entries.map((entry, entryIndex) =>
            renderEntry(entry, entryIndex, entryIndex === entries.length - 1),
          )}
          {renderSummary(summary)}
        </>
      );
    }

    return entries.map((entry, entryIndex) => renderEntry(entry, entryIndex));
  }

  function renderSummary(x: M.Summary) {
    return (
      <tr key="summary">
        <td colSpan={columns.length} className={cn(classes.cell, classes.summaryCell)}>
          <views.Summary summary={x} />
        </td>
      </tr>
    );
  }

  function getAlignClass({ align }: M.Column<T, U> | SubtableColumn<U>) {
    return align && alignPropertyToClass[align];
  }

  function getVerticalAlignClass({ verticalAlign }: M.Column<T, U>) {
    return verticalAlign && verticalAlignPropertyClass[verticalAlign];
  }

  function getPaddingClass(paddingSize: M.RowPaddingSize) {
    return paddingSize && rowPaddingToClass[paddingSize];
  }

  function getTitlePaddingClass(paddingSize: M.RowPaddingSize) {
    return paddingSize && titlePaddingToClass[paddingSize];
  }

  function getPaddingFromTitleClass(paddingSize: M.RowPaddingSize | undefined) {
    return paddingSize && indentFromHeaderClass[paddingSize];
  }

  function getSubtablePaddingFromTitleClass(
    paddingSize: M.SubtablePaddingFromTitle | undefined = 'medium',
  ) {
    return paddingSize && subtableIndentFromHeaderClass[paddingSize];
  }

  function getSubtableRowInactiveClass(entryIndex: number) {
    return !rowToExpanded[entryIndex] ? classes.subtableRowInactive : null;
  }

  function renderTitle(column: M.Column<T, U>, columnIndex: number) {
    return (
      <th
        className={cn(
          classes.title,
          classes.cell,
          classes.topLevelTitle,
          getAlignClass(column),
          getTitlePaddingClass(titlePadding),
          getVerticalAlignClass(column),
        )}
        key={columnIndex}
      >
        {column.renderTitle && column.renderTitle()}
      </th>
    );
  }

  function renderEntry(entry: T, entryIndex: number, beforeSummary?: boolean) {
    if (expandedArea === null) {
      return (
        <React.Fragment key={entryIndex}>
          {renderEntryRow(entry, entryIndex, beforeSummary)}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment key={entryIndex}>
        {renderEntryRow(entry, entryIndex, beforeSummary)}
        {renderEntryExpandedArea(expandedArea, entry, entryIndex)}
      </React.Fragment>
    );
  }

  function renderEntryExpandedArea(area: M.ExpandedArea<T, U>, entry: T, entryIndex: number) {
    switch (area.kind) {
      case 'single-cell':
        return renderAreaWithinSingleCell(area, entry, entryIndex);
      case 'subtable':
        return renderAreaWithinSubtable(area, entry, entryIndex);
    }
  }

  function renderAreaWithinSingleCell(
    area: M.ExpandedAreaWithinSingleCell<T>,
    entry: T,
    entryIndex: number,
  ) {
    return (
      <tr>
        <td
          className={cn(classes.singleCellExpandedArea, classes.cellData, classes.cell)}
          colSpan={columns.length}
        >
          {area.renderContent(entry, entryIndex, entries)}
        </td>
      </tr>
    );
  }

  function renderAreaWithinSubtable(
    area: M.ExpandedAreaWithinSubtable<T, U>,
    entry: T,
    entryIndex: number,
  ) {
    const subtableEntries = area.getSubtableEntries(entry, entryIndex, entries);

    const adjustedSubtableColumns = (() => {
      const subtableCols = area.subtableColumns;

      const subtableColsNumber = area.subtableColumns.length;
      const tableColsNumber = columns.length;

      if (subtableColsNumber < tableColsNumber) {
        const colsToAdd = R.repeat<M.SubtableColumn<U>>(
          {
            renderCell: () => null,
            renderTitle: () => null,
          },
          tableColsNumber - subtableColsNumber,
        );

        return subtableCols.concat(colsToAdd);
      }

      if (subtableColsNumber > tableColsNumber) {
        console.warn('unexpected subtable columns number > table columns number');

        return subtableCols.slice(0, subtableColsNumber);
      }

      return subtableCols;
    })();

    return (
      <>
        {adjustedSubtableColumns.find(x => x.renderTitle) ? (
          <tr
            key="subtable-header"
            className={cn(classes.subtableRow, getSubtableRowInactiveClass(entryIndex))}
          >
            {adjustedSubtableColumns.map(renderSubtableHeader)}
          </tr>
        ) : null}
        {subtableEntries.map((subtableEntry, subtableEntryIndex) =>
          renderSubtableEntry(
            adjustedSubtableColumns,
            subtableEntry,
            subtableEntryIndex,
            subtableEntries,
            area.paddingFromTitle,
            entryIndex,
          ),
        )}
      </>
    );
  }

  function renderSubtableHeader(x: M.SubtableColumn<U>, columnIndex: number) {
    return (
      <th className={cn(classes.title, classes.cell)} key={columnIndex}>
        {x.renderTitle && x.renderTitle()}
      </th>
    );
  }

  function renderSubtableEntry(
    subtableColumns: Array<M.SubtableColumn<U>>,
    subtableEntry: U,
    subtableEntryIndex: number,
    subtableEntries: U[],
    paddingFromTitle: M.SubtablePaddingFromTitle | undefined,
    entryIndex: number,
  ) {
    const last = subtableEntryIndex === subtableEntries.length - 1;
    const first = subtableEntryIndex === 0;

    return (
      <tr
        key={subtableEntryIndex}
        className={cn([
          classes.subtableRow,
          getSubtableRowInactiveClass(entryIndex),
          {
            [classes.lastSubtableRow]: last,
            [getSubtablePaddingFromTitleClass(paddingFromTitle)]: first,
          },
        ])}
      >
        {subtableColumns.map(makeSubtableCellRenderer(subtableEntry, entryIndex, subtableEntries))}
      </tr>
    );
  }

  function makeSubtableCellRenderer(
    subtableEntry: U,
    subtableEntryIndex: number,
    subtableEntries: U[],
  ) {
    return (column: M.SubtableColumn<U>, columnIndex: number) => {
      return (
        <td
          className={cn(
            classes.cell,
            classes.cellData,
            classes.subtableCell,
            getAlignClass(column),
            getPaddingClass(rowPadding),
          )}
          key={columnIndex}
        >
          <div>{column.renderCell(subtableEntry, subtableEntryIndex, subtableEntries)}</div>
        </td>
      );
    };
  }

  function getColSpan(
    { colSpan }: M.SimpleCellContent<T> | M.CellContentForRowExpander<T, U>,
    columnIndex: number,
    entry: T,
    entryIndex: number,
  ) {
    const colSpanValue =
      typeof colSpan === 'function' ? colSpan(entry, entryIndex, entries) : colSpan;

    return colSpanValue === 'end' ? columns.length - columnIndex : colSpanValue;
  }

  function renderEntryRow(entry: T, entryIndex: number, beforeSummary?: boolean) {
    return (
      <tr
        key={entryIndex}
        className={cn({
          [classes.rowBeforeSummary]: beforeSummary,
          [classes.rowWithExpandedContent]: rowToExpanded[entryIndex],
          [classes.divideDown]: divideBy?.(entry, entryIndex, entries),
          [classes.divideUp]:
            entryIndex > 0 && divideBy?.(entries[entryIndex - 1], entryIndex - 1, entries),
        })}
      >
        {columns
          .reduce<M.RowCellsRendererAccumulator>(makeRowCellsRenderer(entry, entryIndex), {
            cells: [],
            cellsToSkip: 0,
          } as M.RowCellsRendererAccumulator)
          .cells.map(cell => cell)}
      </tr>
    );
  }

  function makeRowCellsRenderer(entry: T, entryIndex: number) {
    return (
      cellsAccumulator: M.RowCellsRendererAccumulator,
      column: M.Column<T, U>,
      columnIndex: number,
    ): M.RowCellsRendererAccumulator => {
      const { cells: previousCells, cellsToSkip } = cellsAccumulator;
      const shouldSkipCurrentCell = cellsToSkip > 0;

      const nextSkipCounter = () => {
        if (shouldSkipCurrentCell) {
          return cellsToSkip - 1;
        }
        const colSpanValue = getColSpan(column.cellContent, columnIndex, entry, entryIndex) || 1;
        return Math.max(0, colSpanValue - 1);
      };

      return {
        cells: shouldSkipCurrentCell
          ? previousCells
          : [...previousCells, makeCellRenderer(entry, entryIndex)(column, columnIndex)],
        cellsToSkip: nextSkipCounter(),
      };
    };
  }

  function makeCellRenderer(entry: T, entryIndex: number) {
    return (column: M.Column<T, U>, columnIndex: number) => {
      switch (column.cellContent.kind) {
        case 'simple':
          return renderCellWithSimpleContent(
            entry,
            entryIndex,
            column.cellContent,
            columnIndex,
            column,
          );

        case 'for-row-expander':
          return renderCellWithContentForRowExpander(
            entry,
            entryIndex,
            column.cellContent,
            columnIndex,
            column,
          );
      }
    };
  }

  function renderCellWithSimpleContent(
    entry: T,
    entryIndex: number,
    content: M.SimpleCellContent<T>,
    columnIndex: number,
    column: M.Column<T, U>,
  ) {
    return (
      <td
        className={cn(
          classes.cell,
          classes.cellData,
          getAlignClass(column),
          getPaddingClass(rowPadding),
          getVerticalAlignClass(column),
        )}
        key={columnIndex}
        colSpan={getColSpan(content, columnIndex, entry, entryIndex)}
      >
        {content.render(entry, entryIndex, entries)}
      </td>
    );
  }

  function renderCellWithContentForRowExpander(
    entry: T,
    entryIndex: number,
    content: M.CellContentForRowExpander<T, U>,
    columnIndex: number,
    column: M.Column<T, U>,
  ) {
    const handleToggle = (newValue: boolean) =>
      setRowToExpanded({
        ...rowToExpanded,
        [entryIndex]: newValue,
      });

    return (
      <td
        className={cn(
          classes.cell,
          classes.cellData,
          getAlignClass(column),
          getPaddingClass(rowPadding),
          getVerticalAlignClass(column),
        )}
        key="row-expander"
        colSpan={getColSpan(content, columnIndex, entry, entryIndex)}
      >
        <views.RowExpander expanded={rowToExpanded[entryIndex]} onToggle={handleToggle} />
      </td>
    );
  }
}
