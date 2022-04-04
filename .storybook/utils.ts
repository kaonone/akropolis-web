import { ViewportMap } from '@storybook/addon-viewport/dist/ts3.9/models';
import { StoryContextForEnhancers, StrictInputType } from '@storybook/csf';
import * as R from 'ramda';

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

export const customThemeControl = {
  name: 'Theme',
  description: 'Global theme for components',
  defaultValue: 'dark',
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
};

export function makeEnhancer(
  { argTypes }: StoryContextForEnhancers,
  filter: (argType: StrictInputType) => boolean,
  enhancedValue: any,
) {
  const mergeValues = (key: string, left: any, right: any) => key === 'defaultValue' ? right : left;
  return (baseObject: Record<string, unknown>) =>
    R.mergeDeepWithKey(
      mergeValues,
      baseObject,
      R.mapObjIndexed(() => enhancedValue, R.pickBy(filter, argTypes)),
    );
}

export function withControlFalse(argType: StrictInputType) {
  return (
    argType.name === 'classes' ||
    argType.name === 'children' ||
    /classname/i.test(argType.name) ||
    /^on[A-Z]/.test(argType.name)
  );
}

export function withDefaultType(argType: StrictInputType) {
  const { type } = argType;
  return type?.name === 'enum' && type.value.includes('default');
}

export function withBooleanType(argType: StrictInputType) {
  const { type } = argType;
  return type?.name === 'boolean';
}
