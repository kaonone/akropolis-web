/* eslint-disable import/no-default-export */
import React, { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SwitchInput } from './SwitchInput';

const MetaData: ComponentMeta<typeof SwitchInput> = {
  title: 'SwitchInput',
  component: SwitchInput,
  parameters: {
    controls: {
      exclude: ['icon', 'checkedIcon', 'classes', 'action'],
    },
  },
  args: {
    label: 'SwitchInput label',
    size: 'medium',
  },
  argTypes: {
    size: { table: { defaultValue: { summary: 'medium' } } },
    label: { control: 'text' },
    helperText: { control: 'text' },
  },
};

const Template: ComponentStory<typeof SwitchInput> = args => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    args.checked !== undefined && setChecked(args.checked);
  }, [args.checked]);

  return <SwitchInput {...args} checked={checked} onChange={(_, v) => setChecked(v)} />;
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
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export default MetaData;
