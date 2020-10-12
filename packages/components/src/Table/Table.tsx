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
  divideBy?: (entry: T, index: number, entries: T[]) => boolean;
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
          {entries.map((x, index) => renderEntry(x, index, index === entries.length - 1))}
          {renderSummary(summary)}
        </>
      );
    }

    return entries.map((x, index) => renderEntry(x, index));
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

  function renderEntry(entry: T, rowIndex: number, beforeSummary?: boolean) {
    if (expandedArea === null) {
      return (
        <React.Fragment key={rowIndex}>
          {renderEntryRow(entry, rowIndex, beforeSummary)}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment key={rowIndex}>
        {renderEntryRow(entry, rowIndex, beforeSummary)}
        {renderEntryExpandedArea(entry, expandedArea, rowIndex)}
      </React.Fragment>
    );
  }

  function renderEntryExpandedArea(entry: T, area: M.ExpandedArea<T, U>, rowIndex: number) {
    switch (area.kind) {
      case 'single-cell':
        return renderAreaWithinSingleCell(entry, area);
      case 'subtable':
        return renderAreaWithinSubtable(entry, area, rowIndex);
    }
  }

  function renderAreaWithinSingleCell(entry: T, area: M.ExpandedAreaWithinSingleCell<T>) {
    return (
      <tr>
        <td
          className={cn(classes.singleCellExpandedArea, classes.cellData, classes.cell)}
          colSpan={columns.length}
        >
          {area.renderContent(entry)}
        </td>
      </tr>
    );
  }

  function renderAreaWithinSubtable(
    entry: T,
    area: M.ExpandedAreaWithinSubtable<T, U>,
    rowIndex: number,
  ) {
    const subtableEntries = area.getSubtableEntries(entry);

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
            className={cn(classes.subtableRow, {
              [classes.subtableRowInactive]: !rowToExpanded[rowIndex],
            })}
          >
            {adjustedSubtableColumns.map(renderSubtableHeader)}
          </tr>
        ) : null}
        {subtableEntries.map((x, index) =>
          renderSubtableEntry(
            adjustedSubtableColumns,
            x,
            index,
            index === subtableEntries.length - 1,
            index === 0,
            area.paddingFromTitle,
            rowIndex,
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
    subtableRowIndex: number,
    last: boolean,
    first: boolean,
    paddingFromTitle: M.SubtablePaddingFromTitle | undefined,
    rowIndex: number,
  ) {
    return (
      <tr
        key={subtableRowIndex}
        className={cn([
          classes.subtableRow,
          {
            [classes.lastSubtableRow]: last,
            [getSubtablePaddingFromTitleClass(paddingFromTitle)]: first,
            [classes.subtableRowInactive]: !rowToExpanded[rowIndex],
          },
        ])}
      >
        {subtableColumns.map(makeSubtableCellRenderer(subtableEntry))}
      </tr>
    );
  }

  function makeSubtableCellRenderer(entry: U) {
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
          <div>{column.renderCell(entry)}</div>
        </td>
      );
    };
  }

  function getColSpan(
    { colSpan }: M.SimpleCellContent<T> | M.CellContentForRowExpander<T, U>,
    columnIndex: number,
    entry: T,
  ) {
    const colSpanValue = typeof colSpan === 'function' ? colSpan(entry) : colSpan;

    return colSpanValue === 'end' ? columns.length - columnIndex : colSpanValue;
  }

  function renderEntryRow(entry: T, rowIndex: number, beforeSummary?: boolean) {
    return (
      <tr
        key={rowIndex}
        className={cn({
          [classes.rowBeforeSummary]: beforeSummary,
          [classes.rowWithExpandedContent]: rowToExpanded[rowIndex],
          [classes.divideDown]: divideBy?.(entry, rowIndex, entries),
          [classes.divideUp]: divideBy?.(entries?.[rowIndex - 1], rowIndex - 1, entries),
        })}
      >
        {columns
          .reduce<M.RowCellsRendererAccumulator>(makeRowCellsRenderer(entry, rowIndex), {
            cells: [],
            cellsToSkip: 0,
          } as M.RowCellsRendererAccumulator)
          .cells.map(cell => cell)}
      </tr>
    );
  }

  function makeRowCellsRenderer(entry: T, rowIndex: number) {
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
        const colSpanValue = getColSpan(column.cellContent, columnIndex, entry) || 1;
        return Math.max(0, colSpanValue - 1);
      };

      return {
        cells: shouldSkipCurrentCell
          ? previousCells
          : [...previousCells, makeCellRenderer(entry, rowIndex)(column, columnIndex)],
        cellsToSkip: nextSkipCounter(),
      };
    };
  }

  function makeCellRenderer(entry: T, rowIndex: number) {
    return (column: M.Column<T, U>, columnIndex: number) => {
      switch (column.cellContent.kind) {
        case 'simple':
          return renderCellWithSimpleContent(entry, column.cellContent, columnIndex, column);

        case 'for-row-expander':
          return renderCellWithContentForRowExpander(
            rowIndex,
            entry,
            column.cellContent,
            columnIndex,
            column,
          );
      }
    };
  }

  function renderCellWithSimpleContent(
    entry: T,
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
        colSpan={getColSpan(content, columnIndex, entry)}
      >
        {content.render(entry)}
      </td>
    );
  }

  function renderCellWithContentForRowExpander(
    rowIndex: number,
    entry: T,
    content: M.CellContentForRowExpander<T, U>,
    columnIndex: number,
    column: M.Column<T, U>,
  ) {
    const handleToggle = (newValue: boolean) =>
      setRowToExpanded({
        ...Object.fromEntries(R.keys(rowToExpanded).map(key => [key, false])),
        [rowIndex]: newValue,
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
        colSpan={getColSpan(content, columnIndex, entry)}
      >
        <views.RowExpander expanded={rowToExpanded[rowIndex]} onToggle={handleToggle} />
      </td>
    );
  }
}
