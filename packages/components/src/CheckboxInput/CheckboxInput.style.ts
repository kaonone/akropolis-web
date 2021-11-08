import { makeStyles } from '@akropolis-web/styles';

const checkboxSize = 20;
const borderRadius = 4;

export const useStyles = makeStyles(
  theme => ({
    root: {
      '&$checked': {
        color: theme.palette.text.primary,
      },
    },

    icon: {
      borderRadius,
      position: 'relative',
      width: checkboxSize,
      height: checkboxSize,

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

      '$disabled &': {
        background: 'rgba(255, 255, 255, 0.1)',

        '&:before': {
          opacity: 0,
        },
      },

      '$checked &': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
      },
    },

    disabled: {},
    checked: {},
  }),
  { name: 'CheckboxInput' },
);
