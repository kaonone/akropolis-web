/* eslint-disable import/no-default-export */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ComingSoon } from './ComingSoon';

const MetaData: ComponentMeta<typeof ComingSoon> = {
  title: 'ComingSoon',
  component: ComingSoon,
  argTypes: {
    text: { defaultValue: 'Coming soon', table: { defaultValue: { summary: 'Coming soon' } } },
  },
};

const Template: ComponentStory<typeof ComingSoon> = args => {
  return <ComingSoon {...args} />;
};

export const Default = Template.bind({});

export const Label = Template.bind({});
Label.args = {
  variant: 'label',
};

export default MetaData;
