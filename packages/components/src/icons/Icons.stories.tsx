/* eslint-disable import/no-default-export */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box from '@material-ui/core/Box';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import * as tokenIcons from './tokens';
import * as currenciesIcons from './currencies';
import { Arrow } from './Arrow';
import { CheckmarkIcon } from './CheckmarkIcon';
import { CopyIcon } from './CopyIcon';
import { HistoryIcon } from './HistoryIcon';
import { InfoIcon } from './InfoIcon';

type TemplateComponent = React.ComponentType<
  SvgIconProps & { icons: React.ComponentType<SvgIconProps>[] }
>;
const MetaData: ComponentMeta<TemplateComponent> = {
  title: 'Icons',
  component: tokenIcons.AKROIcon,
  parameters: {
    controls: { exclude: ['icons', 'children'] },
  },
  args: {
    color: 'inherit',
  },
  argTypes: {
    color: { table: { defaultValue: { summary: 'inherit' } } },
  },
};

const Template: ComponentStory<TemplateComponent> = ({ icons, ...args }) => (
  <Box display="grid" gridGap={10} gridTemplateColumns="repeat(auto-fit, 30px)" maxWidth={400}>
    {icons.map((Icon, index) => (
      <Icon key={index} {...args} />
    ))}
  </Box>
);

export const Tokens = Template.bind({});
Tokens.args = {
  icons: Object.values(tokenIcons),
};

export const Currencies = Template.bind({});
Currencies.args = {
  icons: Object.values(currenciesIcons),
};

export const Other = Template.bind({});
Other.args = {
  icons: [Arrow, CheckmarkIcon, CopyIcon, HistoryIcon, InfoIcon],
};
Other.parameters = {
  controls: { exclude: ['icons', 'children', 'inactive'] },
};

export default MetaData;
