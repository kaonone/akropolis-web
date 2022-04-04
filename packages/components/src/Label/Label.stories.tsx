/* eslint-disable import/no-default-export */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { Label } from './Label';

const MetaData: ComponentMeta<typeof Label> = {
  title: 'Label',
  component: Label,
  args: {
    children: 'Label',
    fontSize: 'inherit',
    icon: 'off',
  },
  argTypes: {
    fontSize: { table: { defaultValue: { summary: 'inherit' } } },
    hint: { control: { type: 'text' } },
    icon: { options: ['on', 'off'], mapping: { on: <AddCircleIcon />, off: null } },
  },
};

const Template: ComponentStory<typeof Label> = args => <Label {...args} />;

export const WithHint = Template.bind({});
WithHint.args = {
  hint: 'Hint text',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'on',
};

export const WithComingSoon = Template.bind({});
WithComingSoon.args = {
  withComingSoon: true,
};

export default MetaData;
