/* eslint-disable import/no-default-export */
import React, { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RadioButton } from './RadioButton';

const MetaData: ComponentMeta<typeof RadioButton> = {
  title: 'RadioButton',
  component: RadioButton,
  parameters: {
    controls: {
      exclude: ['icon', 'checkedIcon', 'classes', 'action'],
    },
  },
  args: {
    label: 'RadioButton label',
    size: 'medium',
  },
  argTypes: {
    size: { table: { defaultValue: { summary: 'medium' } } },
    label: { control: 'text' },
    helperText: { control: 'text' },
  },
};

const Template: ComponentStory<typeof RadioButton> = args => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    args.checked !== undefined && setChecked(args.checked);
  }, [args.checked]);

  return <RadioButton {...args} checked={checked} onChange={(_, v) => setChecked(v)} />;
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  checked: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  helperText: 'Helper text',
};

export const WithErrorText = Template.bind({});
WithErrorText.args = {
  helperText: 'Error text',
  formHelperTextProps: {
    error: true,
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export default MetaData;
