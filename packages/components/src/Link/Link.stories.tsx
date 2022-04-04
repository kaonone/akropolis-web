/* eslint-disable import/no-default-export */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Link } from '.';

const MetaData: ComponentMeta<typeof Link> = {
  title: 'Link',
  component: Link,
  args: {
    children: 'Link Label',
    color: 'inherit',
    underline: 'hover',
  },
  argTypes: {
    underline: {
      options: ['none', 'hover', 'always'],
      control: { type: 'radio' },
      table: { defaultValue: { summary: 'hover' } },
    },
    color: {
      options: [
        'initial',
        'inherit',
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary',
        'error',
      ],
      table: { defaultValue: { summary: 'primary' } },
      control: { type: 'radio' },
    },
  },
};

const Template: ComponentStory<typeof Link> = args => <Link {...args} href="/" />;

export const UnderlineHover = Template.bind({});

export const UnderlineAlways = Template.bind({});
UnderlineAlways.args = {
  underline: 'always',
};

export const UnderlineNone = Template.bind({});
UnderlineNone.args = {
  underline: 'none',
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  underline: 'always',
  children: (
    <>
      Multiline
      <br />
      link
    </>
  ),
};
MultiLine.argTypes = {
  children: { control: false },
};

export default MetaData;
