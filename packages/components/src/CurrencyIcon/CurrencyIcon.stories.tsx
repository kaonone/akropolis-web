/* eslint-disable import/no-default-export */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CurrencyIcon } from './CurrencyIcon';

const MetaData: ComponentMeta<typeof CurrencyIcon> = {
  title: 'CurrencyIcon',
  component: CurrencyIcon,
};

const Template: ComponentStory<typeof CurrencyIcon> = args => {
  return <CurrencyIcon {...args} />;
};

export const ETH = Template.bind({});
ETH.args = {
  currency: 'eth',
};

export const BTC = Template.bind({});
BTC.args = {
  currency: 'btc',
};

export const Inactive = Template.bind({});
Inactive.args = {
  currency: 'eth',
  inactive: true,
};

export default MetaData;
