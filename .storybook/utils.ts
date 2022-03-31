import { ViewportMap } from '@storybook/addon-viewport/dist/ts3.9/models';
import { StrictInputType } from '@storybook/csf';

export const customViewports: ViewportMap = {
  desktop: {
    name: 'desktop',
    styles: { width: '1440px', height: '1080px' },
    type: 'desktop',
  },
  tablet: {
    name: 'tablet',
    styles: { width: '768px', height: '1024px' },
    type: 'tablet',
  },
  mobile: {
    name: 'mobile',
    styles: { width: '375px', height: '667px' },
    type: 'mobile',
  },
};

export const customThemeControl =  {
  name: 'Theme',
  description: 'Global theme for components',
  defaultValue: 'light',
  toolbar: {
    icon: 'paintbrush',
    items: [
      {
        value: 'light',
        title: 'light',
        right: '⚪',
      },
      {
        value: 'dark',
        title: 'dark',
        right: '⚫',
      },
    ],
    showName: true,
  },
}

export function makeEnhancer(
  filter: (value: StrictInputType, key: string) => any,
  map: (value: StrictInputType, key: string) => any,
) {
  return ({ argTypes }) => ({
    ...argTypes,
    ...(Object.entries(argTypes) as [string, StrictInputType][]).reduce(
      (acc, [key, value]) => (filter(value, key) ? { ...acc, [key]: map(value, key) } : acc),
      {} as any,
    ),
  });
}
