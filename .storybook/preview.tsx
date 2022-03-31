import { DecoratorFn } from '@storybook/react';
import { ProjectAnnotations } from '@storybook/csf';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { darkTheme, lightTheme } from '@akropolis-web/styles';

import '@akropolis-web/styles/assets/fonts/AvenirNextLTPro/stylesheet.css';

import { customThemeControl, customViewports, makeEnhancer } from './utils';

export const parameters: ProjectAnnotations['parameters'] = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  viewport: {
    defaultViewport: 'desktop',
    viewports: customViewports,
  },
  controls: {
    sort: 'requiredFirst',
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes: ProjectAnnotations['globalTypes'] = {
  theme: customThemeControl,
};

export const argTypesEnhancers: ProjectAnnotations['argTypesEnhancers'] = [
  makeEnhancer(
    (_, key) =>
      key === 'classes' || key === 'children' || /classname/i.test(key) || /^on[A-Z]/.test(key),
    argType => ({ control: false, ...argType }),
  ),
  makeEnhancer(
    ({ type }) => type?.name === 'enum' && type.value.includes('default'),
    argType => ({
      ...argType,
      defaultValue: 'default',
      table: { ...argType.table, defaultValue: { summary: 'default' } },
    }),
  ),
  makeEnhancer(
    ({ type }) => type?.name === 'boolean',
    argType => ({
      ...argType,
      defaultValue: false,
      table: { ...argType.table, defaultValue: { summary: 'false' } },
    }),
  ),
];

export const decorators: DecoratorFn[] = [
  (Story, context) => (
    <ThemeProvider theme={context.globals.theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>
  ),
];
