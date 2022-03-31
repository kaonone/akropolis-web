/* eslint-disable import/no-default-export */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AKROIcon } from '../icons/tokens';
import { ETHIcon, BTCIcon, USDIcon } from '../icons/currencies';
import { Card } from './Card';

const MetaData: ComponentMeta<typeof Card> = {
  title: 'Card',
  component: Card,
  args: {
    label: 'Card label',
  },
  argTypes: {
    variant: { defaultValue: 'outlined', table: { defaultValue: { summary: 'outlined' } } },
    label: { control: { type: 'text' } },
    labelIcon: {
      defaultValue: 'on',
      options: ['on', 'off'],
      mapping: {
        on: <AKROIcon fontSize="inherit" />,
        off: null,
      },
    },
    icons: {
      defaultValue: 'on',
      options: ['on', 'off'],
      mapping: {
        on: [
          <ETHIcon fontSize="inherit" key="eth" />,
          <BTCIcon fontSize="inherit" key="btc" />,
          <USDIcon fontSize="inherit" key="usd" />,
        ],
        off: null,
      },
    },
  },
};

const Template: ComponentStory<typeof Card> = args => {
  return <Card {...args}>Card content</Card>;
};

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

export default MetaData;
