import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
    },
    tableCell: {
      border: 'none',
      padding: 0,
    },
    tableCellForInput: {
      width: '100%',
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
    inputAdornedStart: {
      fontSize: 13,
      fontWeight: 'normal',
      color: theme.palette.text.primary,
      paddingLeft: 10,

      [theme.breakpoints.up(767)]: {
        fontSize: 12,
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
    selectRoot: {
      '$tableCell &': {
        minWidth: 'unset',
      },
    },
    decimalInput: {},
  }),
  { name: 'AmountInput' },
);
