/* eslint-disable import/no-default-export */
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { toBaseUnit, Token, TokenAmount } from '@akropolis-web/primitives';
import BN from 'bn.js';
import Box from '@material-ui/core/Box';

import { TokenAmountInput } from './TokenAmountInput';

const MetaData: ComponentMeta<typeof TokenAmountInput> = {
  title: 'TokenAmountInput',
  component: TokenAmountInput,
  args: {
    currencies: [
      new Token('0x0', 'Token 1', 6, 'eth'),
      new Token('0x1', 'Token 2', 6, 'eth'),
      new Token('0x2', 'Token 3', 6, 'eth'),
    ],
    maxValue: new BN('1000000000'),
    placeholder: 'Enter amount',
  },
  argTypes: {
    size: { table: { defaultValue: { summary: 'medium' } } },
    label: { control: 'text' },
    helperText: { control: 'text' },
    allowedMax: {
      description: `Entered value is ignored if it's greater than allowedMax`,
      table: { type: { summary: 'BN' } },
      control: { type: 'text' },
    },
  },
};

const Template: ComponentStory<typeof TokenAmountInput> = args => {
  const [value, setValue] = useState<TokenAmount | ''>(args.value || '');

  return (
    <Box maxWidth={500}>
      <TokenAmountInput
        {...args}
        onChange={setValue}
        value={value}
        allowedMax={args.allowedMax && toBaseUnit(args.allowedMax.toString(), 6)}
      />
    </Box>
  );
};

export const GeneralUsage = Template.bind({});

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

export const WithSingleOptions = Template.bind({});
WithSingleOptions.args = {
  currencies: [new Token('0x0', 'Token 1', 6, 'eth')],
  value: new TokenAmount(0, new Token('0x0', 'Token 1', 6, 'eth')),
};

export const WithCustomCurrencyLabel = Template.bind({});
WithCustomCurrencyLabel.args = {
  getCurrencyLabel: (currency: Token) => `${currency.symbol} (${currency.address})`,
};

export const WithHiddenSelect = Template.bind({});
WithHiddenSelect.args = {
  currencies: [new Token('0x0', 'Token 1', 6, 'eth')],
  value: new TokenAmount(0, new Token('0x0', 'Token 1', 6, 'eth')),
  hideCurrencySelect: true,
};

export default MetaData;
