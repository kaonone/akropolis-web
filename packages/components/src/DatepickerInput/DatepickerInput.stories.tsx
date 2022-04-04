/* eslint-disable import/no-default-export */
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DatepickerInput } from './DatepickerInput';

const MetaData: ComponentMeta<typeof DatepickerInput> = {
  title: 'DatepickerInput',
  component: DatepickerInput,
};

const Template: ComponentStory<typeof DatepickerInput> = args => {
  const { clearable, open, showTodayButton, ...rest } = args;
  const [value, setValue] = useState(args.value);

  return (
    <DatepickerInput
      {...rest}
      value={value}
      onChange={setValue}
      KeyboardButtonProps={{
        'aria-label': 'Change date',
      }}
    />
  );
};

export const Default = Template.bind({});

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
