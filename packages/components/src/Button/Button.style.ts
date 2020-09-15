import { makeStyles, ProvidedAncestorBackground } from '@akropolis-web/styles';

const shadowOffset = 3;
const largeShadowOffset = 3;
const backgroundGradientSize = '300%';

const extraSmallHeightTabletXS = 2.75;

const smallHeightTabletXS = 3.75;

const heightTabletXS = 4.5;

const largeHeightTabletXS = 6;

export const useStyles = makeStyles(theme => ({
  root: {
    textTransform: 'none',
    fontWeight: 400,
    lineHeight: 1,

    padding: theme.spacing(1.25, 2.5),
    fontSize: theme.spacing(2),
    minWidth: theme.spacing(8.25),
    minHeight: theme.spacing(heightTabletXS),
    borderRadius: theme.spacing(heightTabletXS / 2),
  },

  sizeExtraSmall: {
    padding: theme.spacing(0.5, 1),
    fontSize: theme.spacing(1.5),
    minWidth: theme.spacing(13.25),
    minHeight: theme.spacing(extraSmallHeightTabletXS),
    borderRadius: theme.spacing(extraSmallHeightTabletXS / 2),

    '&$outlinedPrimary': {
      minWidth: theme.spacing(12.25),
    },
  },

  sizeSmall: {
    padding: theme.spacing(0.875, 2),
    fontSize: theme.spacing(2),
    minWidth: theme.spacing(13.25),
    minHeight: theme.spacing(smallHeightTabletXS),
    borderRadius: theme.spacing(smallHeightTabletXS / 2),

    '&$outlinedPrimary': {
      minWidth: theme.spacing(12.25),
    },
  },

  sizeLarge: {
    minWidth: theme.spacing(10),
    padding: theme.spacing(1.85, 4),
    fontSize: theme.spacing(2.5),
    minHeight: theme.spacing(largeHeightTabletXS),
    borderRadius: theme.spacing(largeHeightTabletXS / 2),
  },

  outlinedPrimary: {
    borderWidth: 0,
    backgroundImage: theme.gradients.outlinedButton.linear('to right'),
    backgroundSize: backgroundGradientSize,
    opacity: 0.99,
    color: theme.palette.text.primary,
    transition: 'background-position 1s',

    '&$disabled': {
      background: `rgba(255, 255, 255, 0.2)`,
      color: `rgba(255, 255, 255, 0.5)`,
      border: 'none',
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
      color: theme.colors.heliotrope,
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
    background: theme.gradients.button.linear('to right'),
    backgroundSize: backgroundGradientSize,
    opacity: 0.99,
    transition: 'background-position 1s',

    '&$disabled': {
      background: `rgba(255, 255, 255, 0.1)`,
      color: `rgba(255, 255, 255, 0.5)`,
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
      background: theme.gradients.button.linear('to right'),
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
    color: theme.colors.heliotrope,
    minWidth: 'unset',
    minHeight: 'unset',
    justifyContent: 'flex-start',
    background: theme.gradients.outlinedButton.linear('to right'),
    backgroundSize: '150%',
    '-webkit-text-fill-color': 'transparent',
    '-webkit-background-clip': 'text',
    backgroundClip: 'text',
    borderRadius: 0,
    transition: 'background-size 1s',

    '&:hover, &$focusVisible': {
      backgroundColor: 'transparent',
      backgroundSize: '500%',
    },
  },

  disabled: {},
  focusVisible: {},

  '@keyframes animate': {
    '0%': {
      backgroundPosition: '0%',
    },
    '100%': {
      backgroundPosition: backgroundGradientSize,
    },
  },
}));
