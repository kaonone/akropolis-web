/* eslint-disable import/no-default-export */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from './Accordion';

const MetaData: ComponentMeta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  subcomponents: {
    Summary: Accordion.Summary,
    Details: Accordion.Details,
  },
  args: {
    elevation: 1,
    variant: 'elevation',
  },
  argTypes: {
    elevation: {
      table: { defaultValue: { summary: '1' } },
      control: { type: 'number', min: 0, max: 24 },
    },
    variant: {
      table: { defaultValue: { summary: 'elevation' } },
    },
  },
};

export const OneLineSummary: ComponentStory<typeof Accordion> = args => (
  <Accordion {...args}>
    <Accordion.Summary>Summary</Accordion.Summary>
    <Accordion.Details>Details</Accordion.Details>
  </Accordion>
);

export const MultiLineSummary: ComponentStory<typeof Accordion> = args => (
  <Accordion {...args}>
    <Accordion.Summary>
      Multiline
      <br />
      Summary
    </Accordion.Summary>
    <Accordion.Details>Details</Accordion.Details>
  </Accordion>
);

export default MetaData;
