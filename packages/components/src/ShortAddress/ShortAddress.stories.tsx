/* eslint-disable import/no-default-export */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ShortAddress } from './ShortAddress';

const MetaData: ComponentMeta<typeof ShortAddress> = {
  title: 'ShortAddress',
  component: ShortAddress,
  args: {
    address: '0x6887DF2f4296e8B772cb19479472A16E836dB9e0',
    variant: 'text',
  },
  argTypes: {
    variant: { table: { defaultValue: { summary: 'text' } } },
  },
};

const Template: ComponentStory<typeof ShortAddress> = args => <ShortAddress {...args} />;

export const Text = Template.bind({});

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
};

export default MetaData;
