import { DecoratorFn } from '@storybook/react';
import { ProjectAnnotations } from '@storybook/csf';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { darkTheme, lightTheme } from '@akropolis-web/styles';

import '@akropolis-web/styles/assets/fonts/AvenirNextLTPro/stylesheet.css';

import {
  customThemeControl,
  customViewports,
  makeEnhancer,
  withBooleanType,
  withControlFalse,
  withDefaultType,
} from './utils';

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

export const argsEnhancers: ProjectAnnotations['argsEnhancers'] = [
  context => makeEnhancer(context, withDefaultType, 'default')(context.initialArgs),
  context => makeEnhancer(context, withBooleanType, false)(context.initialArgs),
];

export const argTypesEnhancers: ProjectAnnotations['argTypesEnhancers'] = [
  context => makeEnhancer(context, withControlFalse, { control: false })(context.argTypes),
  context =>
    makeEnhancer(context, withDefaultType, {
      table: { defaultValue: { summary: 'default' } },
    })(context.argTypes),
  context =>
    makeEnhancer(context, withBooleanType, {
      table: { defaultValue: { summary: 'false' } },
    })(context.argTypes),
];

export const decorators: DecoratorFn[] = [
  (Story, context) => {
    const theme = context.globals.theme === 'light' ? lightTheme : darkTheme;
    const styleContent = `.docs-story {
      background-color: ${theme.palette.background.body}
    }`;

    return (
      <ThemeProvider theme={theme}>
        <style>{styleContent}</style>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    );
  },
];
