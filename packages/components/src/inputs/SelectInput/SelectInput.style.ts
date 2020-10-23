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

      '&$withSingleOption': {
        minWidth: 100,

        '& $input': {
          borderColor: 'transparent',
          color: '#fff',
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
      '&$hasBottomSpace': {
        borderRadius: '0 0 8px 8px',
        borderTop: 'none',
      },

      '&$hasTopSpace': {
        borderRadius: '8px 8px 0 0',
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
      transition: '1s',
    },
    isOpen: {},
    withSingleOption: {},
    hasBottomSpace: {},
    hasTopSpace: {},
  }),
  { name: 'SelectInput' },
);
