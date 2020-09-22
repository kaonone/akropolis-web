import { makeStyles, ProvidedAncestorBackground } from '@akropolis-web/styles';

const thumbSize = 14;
const borderOffset = 3;
const controlWidth = 34;
const borderRadius = 24;

export const useStyles = makeStyles(
  theme => ({
    root: {
      width: controlWidth,
      height: thumbSize + 2 * borderOffset,
      padding: 0,
      marginRight: 10,
      marginLeft: 11,
      overflow: 'visible',
    },
    switchBase: {
      padding: borderOffset,

      '&$checked': {
        transform: 'translateX(14px)',

        '& + $track, & + $track:after, & $thumb:after': {
          opacity: 1,
        },
      },

      '&$disabled': {
        opacity: 0.4,
      },
    },
    thumb: {
      position: 'relative',
      width: thumbSize,
      height: thumbSize,
      background: theme.colors.independence,

      '&:after': {
        display: 'block',
        content: "''",
        position: 'absolute',
        borderRadius: '50%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        background: theme.gradients.main.linear('to right'),
        transition: theme.transitions.create(['opacity']),
      },
    },
    track: {
      borderRadius,
      border: 'none',
      position: 'relative',
      opacity: 1,
      background: theme.colors.independence,
      zIndex: 0,

      '&:before': {
        zIndex: 1,
        display: 'block',
        content: "''",
        position: 'absolute',
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        borderRadius,
        background: ({ backgroundColor }: ProvidedAncestorBackground) => backgroundColor,
      },

      '&:after': {
        zIndex: 0,
        display: 'block',
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        borderRadius,
        background: theme.gradients.main.linear('to right'),
        transition: theme.transitions.create(['opacity']),
      },

      '$disabled + &': {
        opacity: 0.4,
      },
    },
    label: {
      fontSize: 'inherit',
    },
    checked: {},
    disabled: {},
  }),
  { name: 'SwitchInput' },
);
