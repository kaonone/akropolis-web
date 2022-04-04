/* eslint-disable import/no-default-export */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DonutIcon from '@material-ui/icons/DonutLarge';

import { Metric } from './Metric';

const MetaData: ComponentMeta<typeof Metric> = {
  title: 'Metric',
  component: Metric,
  args: {
    title: 'Metric Title',
    value: '178.23$',
    chart: 'off',
    size: 'medium',
  },
  argTypes: {
    title: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
    subValue: { control: { type: 'text' } },
    chart: { options: ['on', 'off'], mapping: { on: <DonutIcon />, off: null } },
    size: { table: { defaultValue: { summary: 'medium' } } },
  },
};

const Template: ComponentStory<typeof Metric> = args => <Metric {...args} />;

export const Default = Template.bind({});

export const WithSubvalue = Template.bind({});
WithSubvalue.args = {
  subValue: 'Subvalue',
};

export const WithChart = Template.bind({});
WithChart.args = {
  chart: 'on',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  size: 'small',
  subValue: 'Subvalue',
  chart: 'on',
};

export default MetaData;
