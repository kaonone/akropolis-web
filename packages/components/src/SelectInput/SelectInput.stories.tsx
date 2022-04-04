/* eslint-disable import/no-default-export */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SelectInput } from './SelectInput';

const MetaData: ComponentMeta<typeof SelectInput> = {
  title: 'SelectInput',
  component: SelectInput,
  parameters: {
    controls: {
      exclude: ['icon', 'checkedIcon', 'classes', 'action'],
    },
  },
  args: {
    size: 'medium',
    defaultValue: '1',
    options: [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2', disabled: true },
      { id: '3', label: 'Option 3' },
      { id: '4', label: 'Option 4' },
    ],
  },
  argTypes: {
    size: { table: { defaultValue: { summary: 'medium' } } },
    label: { control: 'text' },
    helperText: { control: 'text' },
  },
};

const Template: ComponentStory<typeof SelectInput> = args => {
  return <SelectInput {...args} />;
};

export const Outlined = Template.bind({});
Outlined.args = {};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
};

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  color: 'secondary',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  helperText: 'Helper text',
};

export const WithErrorText = Template.bind({});
WithErrorText.args = {
  helperText: 'Error text',
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export default MetaData;
