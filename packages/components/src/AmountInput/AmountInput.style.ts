import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  () => ({
    inputs: {
      display: 'flex',
    },
    decimalInputWrapper: {
      flexGrow: 1,
      position: 'relative',
      zIndex: 1,
    },
    withCurrencySelect: {
      '& $decimalInput': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
    select: {
      flexShrink: 0,

      // Hint to merge select left border with the right border of the text input
      marginLeft: -1,
    },
    selectInput: {
      backgroundImage: 'linear-gradient(to bottom, #3b3b51, #1e1e28)',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    decimalInput: {},
  }),
  { name: 'AmountInput' },
);
