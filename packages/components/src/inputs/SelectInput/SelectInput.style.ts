import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  theme => ({
    root: {
      minWidth: 129,
      fontSize: 12,

      [theme.breakpoints.up('tabletSM')]: {
        minWidth: 144,
        fontSize: 16,
      },

      '&$isOpen': {
        '&$hasBottomSpace $input': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },

        '&$hasTopSpace $input': {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        },

        '& $arrowIcon': {
          transform: 'rotate(180deg)',
        },
      },

      '&$disableVariantText': {
        minWidth: 100,

        '& $input': {
          borderColor: 'transparent',
          color: '#fff',
        },

        '& $select': {
          paddingRight: 0,
        },

        '& $arrowIcon': {
          display: 'none',
        },
      },
    },
    input: {
      fontSize: 'inherit',
    },
    paper: {
      fontSize: 12,
      borderColor: theme.colors.darkMist,
      borderRadius: 6,

      '&$hasBottomSpace': {
        borderRadius: '0 0 6px 6px',
        borderTop: 'none',
      },

      '&$hasTopSpace': {
        borderRadius: '6px 6px 0 0',
        borderBottom: 'none',
      },

      [theme.breakpoints.up('tabletSM')]: {
        fontSize: 16,
      },
    },
    menuItem: {
      minHeight: 'auto',
      fontSize: 'inherit',
    },
    arrowIcon: {
      position: 'absolute',
      right: 0,
      padding: 12,
      fontSize: 12,
      pointerEvents: 'none',
    },
    isOpen: {},
    disableVariantText: {},
    hasBottomSpace: {},
    hasTopSpace: {},
    select: {},
  }),
  { name: 'SelectInput' },
);
