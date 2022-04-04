/* eslint-disable import/no-default-export */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box from '@material-ui/core/Box';
import { useTheme } from '@akropolis-web/styles';

import { Skeleton } from './Skeleton';

const MetaData: ComponentMeta<typeof Skeleton> = {
  title: 'Skeleton',
  component: Skeleton,
  args: {
    animation: 'pulse',
    variant: 'text',
  },
  argTypes: {
    animation: { table: { defaultValue: { summary: 'pulse' } } },
    variant: { table: { defaultValue: { summary: 'text' } } },
    height: { control: { type: 'number' } },
    width: { control: { type: 'number' } },
  },
};

const Template: ComponentStory<typeof Skeleton> = args => {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.background.modal} p={2} width={200} height={200}>
      <Skeleton {...args} />
    </Box>
  );
};

export const Text = Template.bind({});

export const Rectangle = Template.bind({});
Rectangle.args = {
  variant: 'rect',
  width: 80,
  height: 80,
};

export const Circle = Template.bind({});
Circle.args = {
  variant: 'circle',
  width: 80,
  height: 80,
};

export default MetaData;
