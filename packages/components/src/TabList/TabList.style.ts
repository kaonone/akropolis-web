import { makeStyles, ProvidedAncestorBackground } from '@akropolis-web/styles';
import * as R from 'ramda';

const sizes = {
  tabs: {
    height: 36,
    indicatorSpace: 3,
    borderWidth: 1,
  },
};

const getBaseOverrides = () =>
  ({
    tabsListRoot: {
      position: 'relative',
      display: 'inline-flex',
      overflow: 'hidden',
      minHeight: sizes.tabs.height,
      borderRadius: sizes.tabs.height / 2,
      padding: sizes.tabs.indicatorSpace,
      background: 'linear-gradient(to left, #5346e6, #ef359c)',

      '&::before': {
        content: "''",
        position: 'absolute',
        top: 1,
        left: 1,
        right: 1,
        bottom: 1,
        borderRadius: sizes.tabs.height / 2,
      },
    },

    indicator: {
      top: 0,
      bottom: 0,
      height: '100%',
      borderRadius: sizes.tabs.height / 2 - sizes.tabs.indicatorSpace - sizes.tabs.borderWidth,
      zIndex: -1,
      background: 'linear-gradient(to left, #5346e6, #ef359c)',
    },

    scroller: {
      zIndex: 1,
      overflow: 'hidden',
      borderRadius: sizes.tabs.height / 2 - sizes.tabs.indicatorSpace - sizes.tabs.borderWidth,
    },

    flexContainer: {
      height: '100%',
    },
  } as const);

const getDefaultVariantOverrides = () =>
  R.mergeDeepRight(getBaseOverrides(), {
    root: {
      overflow: 'hidden',
    },

    tabsListRoot: {
      '&::before': {
        background: ({ backgroundColor }: ProvidedAncestorBackground) => backgroundColor,
      },

      '&$fullWidth': {
        display: 'flex',
      },
    },
    fullWidth: {},
  } as const);

const getMinimalisticVariantOverrides = () =>
  R.mergeDeepRight(getDefaultVariantOverrides(), {
    root: {
      display: 'flex',
    },

    tabsListRoot: {
      minHeight: 28,
      background: '#30288D',

      '&::before': {
        background: 'none',
      },
    },

    indicator: {
      background: 'linear-gradient(to bottom, #574cf2, #4236d0)',
    },

    scrollButton: {
      background: '#30288D',
      width: 28,
      height: 28,
      borderRadius: 14,

      '&$disabled': {
        opacity: 0.5,
      },

      // TODO: fix buttons hide on mobile
      '&.MuiTabs-scrollButtonsDesktop': {
        display: 'inline-flex',
      },
    },

    leftScrollButton: {
      '& > $scrollButton': {
        marginRight: 5,
      },
    },
    rightScrollButton: {
      '& > $scrollButton': {
        marginLeft: 5,
      },
    },

    disabled: {},
  } as const);

export const useDefaultStyles = makeStyles(() => getDefaultVariantOverrides(), {
  name: 'TabList',
});

export const useMinimalisticStyles = makeStyles(() => getMinimalisticVariantOverrides(), {
  name: 'TabList',
});
