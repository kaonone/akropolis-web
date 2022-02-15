import { makeStyles, ProvidedAncestorBackground, rgba } from '@akropolis-web/styles';

const shadowOffset = 3;
const largeShadowOffset = 3;
const backgroundGradientSize = '300%';

const extraSmallHeightTabletXS = 2.75;

const smallHeightTabletXS = 3.75;

const heightTabletXS = 4.5;

const largeHeightTabletXS = 6;

export const useStyles = makeStyles(
  theme => ({
    root: {
      textTransform: 'none',
      fontWeight: 400,
      lineHeight: 1,
      whiteSpace: 'nowrap',

      padding: theme.spacing(1.25, 2.5),
      fontSize: theme.spacing(2),
      minHeight: theme.spacing(heightTabletXS),
      borderRadius: theme.spacing(heightTabletXS / 2),

      '&$defaultMinWidth': {
        minWidth: theme.spacing(8.25),
      },
    },

    sizeExtraSmall: {
      padding: theme.spacing(0.5, 1),
      fontSize: theme.spacing(1.5),
      minHeight: theme.spacing(extraSmallHeightTabletXS),
      borderRadius: theme.spacing(extraSmallHeightTabletXS / 2),

      '&$defaultMinWidth': {
        minWidth: theme.spacing(13.25),
      },

      '&$outlinedPrimary': {
        '&$defaultMinWidth': {
          minWidth: theme.spacing(12.25),
        },
      },
    },

    sizeSmall: {
      fontSize: theme.spacing(2),
      minHeight: theme.spacing(smallHeightTabletXS),
      borderRadius: theme.spacing(smallHeightTabletXS / 2),

      padding: '7px 16px',
      [theme.breakpoints.up('desktopXS')]: {
        padding: '7px 20px',
      },

      '&$defaultMinWidth': {
        minWidth: theme.spacing(13.25),
      },

      '&$outlinedPrimary': {
        '&$defaultMinWidth': {
          minWidth: theme.spacing(12.25),
        },
      },
    },

    sizeLarge: {
      padding: theme.spacing(1.85, 4),
      fontSize: theme.spacing(2.5),
      minHeight: theme.spacing(largeHeightTabletXS),
      borderRadius: theme.spacing(largeHeightTabletXS / 2),

      '&$defaultMinWidth': {
        minWidth: theme.spacing(10),
      },
    },

    outlinedPrimary: {
      borderWidth: 0,
      backgroundImage: theme.gradients.outlinedButton.linear('-270deg'),
      backgroundSize: backgroundGradientSize,
      opacity: 0.99,
      color: theme.palette.text.primary,
      transition: 'background-position 1s',

      '&$disabled': {
        background: `rgba(255, 255, 255, 0.2)`,
        color: `rgba(255, 255, 255, 0.5)`,
        border: 'none',

        '&:hover:not(:active), &$focusVisible': {
          background: `rgba(255, 255, 255, 0.2)`,
          color: `rgba(255, 255, 255, 0.5)`,
          border: 'none',
        },
      },

      '&:before': {
        zIndex: -1,
        display: 'block',
        // tslint:disable-next-line: quotemark
        content: "''",
        position: 'absolute',
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        backgroundColor: ({ backgroundColor }: ProvidedAncestorBackground) => backgroundColor,
        transition: theme.transitions.create(['opacity', 'background-color']),

        borderRadius: theme.spacing(heightTabletXS / 2) - 1,

        '$sizeExtraSmall&': {
          borderRadius: theme.spacing(smallHeightTabletXS / 2) - 1,
        },

        '$sizeSmall&': {
          borderRadius: theme.spacing(smallHeightTabletXS / 2) - 1,
        },

        '$sizeLarge&': {
          borderRadius: theme.spacing(largeHeightTabletXS / 2) - 1,
        },
      },

      '&:hover:not(:active), &$focusVisible': {
        border: 'none',
        color: theme.colors.violetRed,
      },

      '&:active': {
        border: 'none',
        backgroundPosition: '50%',
      },
    },

    containedPrimary: {
      boxShadow: 'none',
      color: theme.colors.white,
      marginBottom: 'auto',
      alignSelf: 'center',
      background: theme.gradients.button.linear('-270deg'),
      backgroundSize: backgroundGradientSize,
      opacity: 0.99,
      transition: 'background-position 1s',

      '&$disabled': {
        background:
          theme.palette.type === 'light'
            ? rgba(theme.colors.alto, 0.5)
            : rgba(theme.colors.white, 0.1),
        color:
          theme.palette.type === 'light'
            ? rgba(theme.colors.obsidian, 0.5)
            : rgba(theme.colors.white, 0.5),

        '&:hover:not(:active), &$focusVisible': {
          background:
            theme.palette.type === 'light'
              ? rgba(theme.colors.alto, 0.5)
              : rgba(theme.colors.white, 0.1),
          color:
            theme.palette.type === 'light'
              ? rgba(theme.colors.obsidian, 0.5)
              : rgba(theme.colors.white, 0.5),
        },
      },

      '&:before': {
        // tslint:disable-next-line: quotemark
        content: "''",
        display: 'block',
        position: 'absolute',
        top: -shadowOffset,
        left: -shadowOffset,
        right: -shadowOffset,
        bottom: -shadowOffset,
        zIndex: '-1',
        background: theme.gradients.button.linear('-270deg'),
        backgroundSize: backgroundGradientSize,
        filter: 'blur(8px)',
        opacity: 0,
        transition: '1s',

        borderRadius: theme.spacing(heightTabletXS / 2 + 2 * shadowOffset),

        '&$sizeLarge': {
          filter: 'blur(8px)',
          top: -largeShadowOffset,
          left: -largeShadowOffset,
          right: -largeShadowOffset,
          bottom: -largeShadowOffset,
          borderRadius: theme.spacing(largeHeightTabletXS / 2 + 2 * largeShadowOffset),
        },
      },

      '&:hover:not(:active), &$focusVisible': {
        animation: '$animate 8s linear infinite',

        '&:before': {
          opacity: 0.7,
          animation: '$animate 8s linear infinite',
        },
      },

      '&:active': {
        boxShadow: 'none',
        backgroundPosition: '50%',
      },
    },

    textPrimary: {
      padding: 0,
      color: theme.colors.violetRed,
      minWidth: 'unset',
      minHeight: 'unset',
      justifyContent: 'flex-start',
      borderRadius: 0,
      transition: theme.transitions.create('color'),

      '&:hover, &$focusVisible': {
        color: '#EB67FE',
      },
    },

    disabled: {},
    focusVisible: {},
    defaultMinWidth: {},

    '@keyframes animate': {
      '0%': {
        backgroundPosition: '0%',
      },
      '100%': {
        backgroundPosition: backgroundGradientSize,
      },
    },
  }),
  { name: 'Button' },
);
