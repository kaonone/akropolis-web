import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  {
    root: {
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
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    decimalInput: {},
  },
  { name: 'AmountInput' },
);
