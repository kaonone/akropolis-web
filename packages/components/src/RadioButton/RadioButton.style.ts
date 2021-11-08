import { makeStyles } from '@akropolis-web/styles';

const thumbSize = 10;
const borderOffset = 5;
const buttonSize = thumbSize + borderOffset * 2;

export const useStyles = makeStyles(
  theme => ({
    icon: {
      position: 'relative',
      borderRadius: '50%',
      width: buttonSize,
      height: buttonSize,
      padding: borderOffset,

      '&$colorSecondary': {
        '&:before': {
          border: '1px solid rgba(255, 255, 255, 0.5)',
          background: 'none',
          mask: 'none',
        },

        '&$iconChecked:after': {
          background: '#fff',
        },
      },

      '$disabled &': {
        '&:before': {
          border: '1px solid rgba(255, 255, 255, 0.2)',
          background: 'none',
          mask: 'none',
        },
      },

      '&:before': {
        content: "''",
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 'inherit',
        border: '1px solid transparent',
        background: theme.gradients.main.linear('to right'),
        backgroundOrigin: 'border-box',
        '-webkit-mask-composite': 'xor',
        '-webkit-mask': 'linear-gradient(red 0 0) padding-box, linear-gradient(red 0 0)',
        '&': {
          mask: 'linear-gradient(red 0 0) padding-box exclude, linear-gradient(red 0 0)',
        },
      },
    },

    iconChecked: {
      '&:after': {
        zIndex: 1,
        content: "''",
        display: 'block',
        position: 'relative',
        borderRadius: '50%',
        width: thumbSize,
        height: thumbSize,
        background: theme.gradients.main.linear('to right'),
      },
    },

    colorSecondary: {},
    disabled: {},
  }),
  { name: 'RadioButton' },
);
