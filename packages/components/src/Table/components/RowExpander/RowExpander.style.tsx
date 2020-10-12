import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: theme.colors.blackRussian,
      minWidth: 0,
      opacity: 0.7,

      fontSize: 9,
      width: 30,
      height: 20,
      borderRadius: 18,
      [theme.breakpoints.up('tabletSM')]: {
        width: 58,
        height: 30,
        borderRadius: 23,
        fontSize: 13,
      },
    },

    expanded: {
      transform: 'rotate(180deg)',
      backgroundColor: theme.colors.grayishNavy,
    },
  };
});
