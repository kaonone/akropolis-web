/* eslint-disable import/no-default-export */
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box from '@material-ui/core/Box';

import { TabsSection } from './TabsSection';

const MetaData: ComponentMeta<typeof TabsSection> = {
  title: 'TabsSection',
  component: TabsSection,
  args: {
    currentValue: 'tab1',
    tabs: [
      {
        value: 'tab1',
        label: 'Tab 1',
        renderContent: () => <>Tab 1 content</>,
      },
      {
        value: 'tab2',
        label: 'Tab 2',
        renderContent: () => <>Tab 2 content</>,
      },
      {
        value: 'tab3',
        label: 'Tab 3',
        renderContent: () => <>Tab 3 content</>,
      },
    ],
  },
  argTypes: {
    tabs: { control: false },
    currentValue: { control: false },
    tabComponent: { control: false },
    content: { control: false },
  },
};

const Template: ComponentStory<typeof TabsSection> = args => {
  const [currentValue, setCurrentValue] = useState(args.currentValue);

  return (
    <TabsSection
      {...args}
      currentValue={currentValue}
      onChange={(_, tab) => {
        tab && setCurrentValue(tab);
      }}
    />
  );
};

export const Default = Template.bind({});

export const WithContent = Template.bind({});
WithContent.args = {
  content: {
    navigationBar: {
      beforeTabs: <Box mr={1}>Content Before Tabs</Box>,
      afterTabs: <Box ml={1}>Content After Tabs</Box>,
    },
  },
};

export default MetaData;
