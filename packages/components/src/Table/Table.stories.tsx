/* eslint-disable import/no-default-export */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Props } from './Table';

import { Table } from '.';

type TableEntry = { name: string; content: string; amount: number };
type SubtableEntry = { subAmount: number; stage: string };

type TableComponent = React.ComponentType<Props<TableEntry, SubtableEntry>>;

const columns: Table.models.Column<TableEntry>[] = [
  { renderTitle: () => 'Name', cellContent: { kind: 'simple', render: entry => entry.name } },
  { renderTitle: () => 'Content', cellContent: { kind: 'simple', render: entry => entry.content } },
  { renderTitle: () => 'Amount', cellContent: { kind: 'simple', render: entry => entry.amount } },
];

const entries: TableEntry[] = [
  { name: 'A', content: 'Content A', amount: 1000 },
  { name: 'B', content: 'Content B', amount: 2000 },
  { name: 'C', content: 'Content C', amount: 3000 },
  { name: 'D', content: 'Content D', amount: 4000 },
];

const MetaData: ComponentMeta<TableComponent> = {
  title: 'Table',
  component: Table.Component,
  args: {
    columns: columns as any,
    entries,
    rowPadding: 'medium',
    titlePadding: 'medium',
    indentFromHeader: 'medium',
  },
  argTypes: {
    rowPadding: { table: { defaultValue: { summary: 'medium' } } },
    titlePadding: { table: { defaultValue: { summary: 'medium' } } },
    indentFromHeader: { table: { defaultValue: { summary: 'medium' } } },
  },
};

const Template: ComponentStory<TableComponent> = args => <Table.Component {...args} />;

export const GeneralUsage = Template.bind({});

export const WithSummary = Template.bind({});
WithSummary.args = {
  summary: {
    renderLabel: () => 'Summary Label',
    renderValue: () => 'Summary Value',
  },
};

export const WithSubtable = Template.bind({});
const getSubtableEntries = (entry: TableEntry): SubtableEntry[] =>
  [1, 2, 3].map(x => ({ subAmount: Math.floor(entry.amount / 3), stage: x.toString() }));
const subtableColumns: Table.models.SubtableColumn<SubtableEntry>[] = [
  { renderTitle: () => 'Stage', renderCell: subtableEntry => subtableEntry.stage },
  { renderTitle: () => 'Subamount', renderCell: subtableEntry => subtableEntry.subAmount },
];
WithSubtable.args = {
  columns: [
    {
      renderTitle: () => 'Name',
      cellContent: {
        kind: 'for-row-expander',
        expandedArea: {
          kind: 'subtable',
          getSubtableEntries,
          subtableColumns,
        },
      },
    },
    {
      renderTitle: () => 'Content',
      cellContent: { kind: 'simple', render: entry => entry.content },
    },
    { renderTitle: () => 'Amount', cellContent: { kind: 'simple', render: entry => entry.amount } },
  ],
};

export const WithColspan = Template.bind({});
const colSpanColumns: Table.models.Column<TableEntry, SubtableEntry>[] = [
  {
    renderTitle: () => 'Name',
    cellContent: {
      kind: 'simple',
      render: (entry, i, arr) => (i === arr.length - 1 ? `ColSpan cell ${entry.name}` : entry.name),
      colSpan: (_, i, arr) => (i === arr.length - 1 ? 2 : 1),
    },
  },
  { renderTitle: () => 'Amount', cellContent: { kind: 'simple', render: entry => entry.amount } },
];
WithColspan.args = {
  columns: colSpanColumns,
};

export const Divided = Template.bind({});
Divided.args = {
  divideBy: (_, i) => i % 2 === 0,
};

export const WithStripes = Template.bind({});
WithStripes.args = {
  withStripes: true,
};

export default MetaData;
