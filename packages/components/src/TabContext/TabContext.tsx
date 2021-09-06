import React from 'react';
import { useTheme } from '@akropolis-web/styles';
import MuiTabContext, { TabContextProps } from '@material-ui/lab/TabContext';
import { createMuiTheme, MuiThemeProvider, Theme, ThemeOptions } from '@material-ui/core/styles';
import { mergeDeepRight } from 'ramda';

type ThemeVariant = 'default' | 'minimalistic';
type Props = TabContextProps & { variant?: ThemeVariant };

export function TabContext(props: Props) {
  const { variant = 'default', ...rest } = props;
  const theme = useTheme();

  const minimalisticTheme = generateTheme(theme);

  switch (variant) {
    case 'default':
      return <MuiTabContext {...rest} />;
    case 'minimalistic':
      return (
        <MuiThemeProvider theme={minimalisticTheme}>
          <MuiTabContext {...rest} />
        </MuiThemeProvider>
      );
  }
}

function generateTheme(theme: Theme) {
  return createMuiTheme(
    mergeDeepRight<ThemeOptions, ThemeOptions>(theme, {
      overrides: {
        MuiTabs: {
          root: {
            position: 'relative',
            display: 'inline-flex',
            overflow: 'hidden',
            minHeight: 28,
            background: '#30288D',
            // minHeight: sizes.tabs.height,
            // borderRadius: sizes.tabs.height / 2,
            // padding: sizes.tabs.indicatorSpace,
            // background: 'linear-gradient(to left, #5346e6, #ef359c)',

            // '&::before': {
            //   content: "''",
            //   position: 'absolute',
            //   top: 1,
            //   left: 1,
            //   right: 1,
            //   bottom: 1,
            //   borderRadius: sizes.tabs.height / 2,
            // },
          },

          indicator: {
            // top: 0,
            // bottom: 0,
            // height: '100%',
            // borderRadius:
            //   sizes.tabs.height / 2 - sizes.tabs.indicatorSpace - sizes.tabs.borderWidth,
            // zIndex: -1,
            // background: 'linear-gradient(to left, #5346e6, #ef359c)',
            background: 'linear-gradient(to bottom, #574cf2, #4236d0)',
          },

          // scroller: {
          //   zIndex: 1,
          //   overflow: 'hidden',
          //   borderRadius:
          //     sizes.tabs.height / 2 - sizes.tabs.indicatorSpace - sizes.tabs.borderWidth,
          // },

          // flexContainer: {
          //   height: '100%',
          // },
        },

        MuiTab: {
          root: {
            // position: 'relative',
            // overflow: 'visible',
            // minHeight: 'unset',
            // minWidth: 'unset !important',
            // textTransform: 'unset',
            // fontSize: 'inherit',
            // fontWeight: 300,
            // lineHeight: 1.5,
            // borderRadius:
            //   sizes.tabs.height / 2 - sizes.tabs.indicatorSpace - sizes.tabs.borderWidth,
            // padding: defaultTheme.spacing(0.2, 1.25),
            padding: '8px 10px',

            [theme.breakpoints.up('mobileMD')]: {
              padding: '8px 10px',
            },

            // '&::after': {
            //   content: "''",
            //   position: 'absolute',
            //   left: 0,
            //   width: 1,
            //   top: 3,
            //   bottom: 3,
            //   background: 'currentColor',
            //   opacity: 0,
            //   transition: theme.transitions.create('opacity'),
            // },

            // '&:not($selected)': {
            //   '& + &::after': {
            //     opacity: 0.2,
            //   },
            // },
          },

          // textColorInherit: {
          //   opacity: 1,

          //   '&$disabled': {
          //     opacity: 0.2,
          //   },
          // },
        },

        // MuiSkeleton: {
        //   root: {
        //     backgroundColor: '#20202d',
        //   },
        // },
        // MuiTabPanel: {
        //   root: {
        //     padding: 0,
        //   },
        // },
      },
    }) as any,
  );
}
