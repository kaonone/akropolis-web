module.exports = {
  stories: ['../packages/components/src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  features: { modernInlineRender: true, storyStoreV7: true },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop: any) => {
        const propsToOmit = [
          'component',
          'htmlColor',
          'innerRef',
          'ref',
          'shapeRendering',
          'style',
          'tabIndex',
          'titleAccess',
          'viewBox',
          'id',
        ];
        return (
          !propsToOmit.includes(prop.name) &&
          (prop.parent
            ? /@material-ui/.test(prop.parent.fileName) ||
              !/node_modules/.test(prop.parent.fileName)
            : true)
        );
      },
      compilerOptions: {
        allowSyntheticDefaultImports: false,
      },
    },
  },
  webpackFinal: (config: any) => {
    config.module.rules.push({
      test: /\.jsx?$/,
      include: [require('path').resolve(__dirname, 'packages'), require.resolve('color')],
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              [require('@babel/preset-react').default],
              require('@babel/preset-env').default,
            ],
          },
        },
      ],
    });
    return config;
  },
};
