import { makeStyles } from '@akropolis-web/styles';
import { lighten } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'inline-flex',
    },
    shortAddress: {
      fontSize: 'inherit',
      color: theme.colors.white,

      '&$variantFilled': {
        display: 'inline-block',
        padding: '1px 8px 1px 6px',
        borderRadius: 6,
        backgroundColor: theme.palette.background.badge,
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
      backgroundColor: theme.palette.background.badge,

      '&:hover': {
        backgroundColor:
          theme.palette.type === 'light' ? lighten(theme.colors.cadetBlue, 0.2) : '#57577c',
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
