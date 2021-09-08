import { makeStyles, Theme } from '@akropolis-web/styles';
import * as R from 'ramda';

const sizes = {
  tabs: {
    height: 36,
    indicatorSpace: 3,
    borderWidth: 1,
  },
};

const getBaseOverrides = (theme: Theme) =>
  ({
    tabRoot: {
      position: 'relative',
      overflow: 'visible',
      minHeight: 'unset',
      minWidth: 'unset !important',
      textTransform: 'unset',
      fontSize: 'inherit',
      fontWeight: 300,
      lineHeight: 1.5,
      borderRadius: sizes.tabs.height / 2 - sizes.tabs.indicatorSpace - sizes.tabs.borderWidth,
      padding: theme.spacing(0.2, 1.25),

      [theme.breakpoints.up('mobileMD')]: {
        padding: theme.spacing(0.2, 2.5),
      },

      '&::after': {
        content: "''",
        position: 'absolute',
        left: 0,
        width: 1,
        top: 3,
        bottom: 3,
        background: 'currentColor',
        opacity: 0,
        transition: theme.transitions.create('opacity'),
      },

      '&:not($selected)': {
        '& + &::after': {
          opacity: 0.2,
        },
      },

      '&$selected': {
        color: theme.colors.white,
      },
    },

    textColorInherit: {
      opacity: 1,

      '&$disabled': {
        opacity: 0.2,
      },
    },
  } as const);

const getDefaultVariantOverrides = (theme: Theme) =>
  R.mergeDeepRight(getBaseOverrides(theme), {
    root: {
      position: 'relative',

      '&$withCloseButtonIndent': {
        paddingRight: 13,
        [theme.breakpoints.up('tabletXS')]: {
          paddingRight: 10,
        },
      },
    },

    iconButton: {
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
    },

    icon: {
      fontSize: 16,
      [theme.breakpoints.up('tabletXS')]: {
        fontSize: 13,
      },
    },

    withCloseButtonIndent: {},
  } as const);

const getMinimalisticVariantOverrides = (theme: Theme) =>
  R.mergeDeepRight(getDefaultVariantOverrides(theme), {
    root: {
      lineHeight: 1,
    } as any,

    tabRoot: {
      padding: theme.spacing(0.2, 1),

      [theme.breakpoints.up('mobileMD')]: {
        padding: theme.spacing(0.25, 1),
      },
    } as any,
  } as const);

export const useDefaultStyles = makeStyles(theme => getDefaultVariantOverrides(theme), {
  name: 'Tab',
});

export const useMinimalisticStyles = makeStyles(theme => getMinimalisticVariantOverrides(theme), {
  name: 'Tab',
});
