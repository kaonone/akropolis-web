import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(() => {
  return {
    root: {
      display: 'inline-flex',
    },
    shortAddress: {
      fontSize: 'inherit',
      color: 'inherit',

      '&$variantFilled': {
        display: 'inline-block',
        padding: '1px 8px 1px 6px',
        borderRadius: 6,
        backgroundColor: '#494972',
      },
    },
    addressIcon: {
      width: 'auto',
      height: 'auto',
      marginRight: 10,
    },
    copyItem: {
      marginLeft: 13,
      display: 'flex',
      alignItems: 'center',
    },
    copyButton: {
      fontSize: 16,
      padding: 5,
      borderRadius: 6,
      backgroundColor: '#494972',

      '&:hover': {
        backgroundColor: '#57577c',
      },

      '& .MuiTouchRipple-root span': {
        transform: 'scale(1.5)',
      },
    },
    tooltip: {
      padding: 8,
      textTransform: 'capitalize',
    },
    variantFilled: {},
  };
});
