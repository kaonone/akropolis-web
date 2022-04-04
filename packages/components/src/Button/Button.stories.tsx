/* eslint-disable import/no-default-export */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Add from '@material-ui/icons/Add';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Button } from './Button';

const MetaData: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    color: 'primary',
    size: 'medium',
    children: 'Button',
    startIcon: 'off',
    endIcon: 'off',
    variant: 'text',
  },
  argTypes: {
    action: { table: { disable: true } },
    variant: { table: { defaultValue: { summary: 'text' } } },
    children: {
      control: {
        type: 'text',
      },
    },
    startIcon: {
      options: ['on', 'off'],
      mapping: {
        on: <Add />,
        off: null,
      },
    },
    endIcon: {
      options: ['on', 'off'],
      mapping: {
        on: <ArrowForwardIosIcon />,
        off: null,
      },
    },
  },
};

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
};

export default MetaData;
