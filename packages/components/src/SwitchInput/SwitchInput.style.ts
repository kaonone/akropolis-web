import { makeStyles } from '@akropolis-web/styles';

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

        '$checked &': {
          opacity: 1,
        },
      },
    },
    track: {
      position: 'relative',
      borderRadius,
      border: `1px solid ${theme.colors.independence}`,
      background: 'none',
      opacity: 1,

      '&:after': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        transition: theme.transitions.create(['opacity']),
        borderRadius,
        border: '1px solid transparent',
        background: theme.gradients.main.linear('to right'),
        backgroundOrigin: 'border-box',
        '-webkit-mask-composite': 'xor',
        '-webkit-mask': 'linear-gradient(red 0 0) padding-box, linear-gradient(red 0 0)',
        '&': {
          mask: 'linear-gradient(red 0 0) padding-box exclude, linear-gradient(red 0 0)',
        },

        '$checked + &': {
          opacity: 1,
        },
      },

      '$switchBase$checked + &': {
        border: 'none',
        background: 'none',
        opacity: 1,
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
