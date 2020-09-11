import { makeStyles, ProvidedAncestorBackground } from '@akropolis-web/styles';

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
      background: theme.gradients.main.linear('to right'),

      '&:before': {
        display: 'block',
        content: "''",
        position: 'absolute',
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        borderRadius: borderRadius - 1,
        background: ({ backgroundColor }: ProvidedAncestorBackground) =>
          backgroundColor || theme.palette.background.paper,
        transition: theme.transitions.create('opacity'),
      },

      '$disabled &': {
        background: 'rgba(255, 255, 255, 0.1)',
      },
    },

    iconChecked: {
      '&:before': {
        opacity: 0,
      },

      // TODO: use SVG icon from UI kit
      '&:after': {
        width: 14,
        height: 7,
        display: 'block',
        content: "''",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -75%) rotate(-45deg)',
        borderLeft: '2px solid #fff',
        borderBottom: '2px solid #fff',
      },
    },

    disabled: {},
  }),
  { name: 'SwitchInput' },
);
