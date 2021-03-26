import { makeStyles, ProvidedAncestorBackground } from '@akropolis-web/styles';

const thumbSize = 10;
const borderOffset = 5;
const buttonSize = thumbSize + borderOffset * 2;

export const useStyles = makeStyles(
  (theme) => ({
    icon: {
      position: 'relative',
      borderRadius: '50%',
      width: buttonSize,
      height: buttonSize,
      padding: borderOffset,
      background: theme.gradients.main.linear('to right'),

      '&:before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        borderRadius: '50%',
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        background: ({ backgroundColor }: ProvidedAncestorBackground) => backgroundColor,
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
  }),
  { name: 'RadioButton' },
);
