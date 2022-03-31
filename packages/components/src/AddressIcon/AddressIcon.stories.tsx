/* eslint-disable import/no-default-export */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AddressIcon } from './AddressIcon';

const MetaData: ComponentMeta<typeof AddressIcon> = {
  title: 'AddressIcon',
  component: AddressIcon,
  args: {
    address: '0x725B239fc80194Ffe10af8A584BcCF234BF340Fa',
  },
  parameters: {
    controls: { include: ['address', 'fontSize', 'className'] },
  },
};

export const Default: ComponentStory<typeof AddressIcon> = args => <AddressIcon {...args} />;

export default MetaData;
