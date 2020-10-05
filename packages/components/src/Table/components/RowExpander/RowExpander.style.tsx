import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: theme.colors.blackRussian,
      minWidth: 0,
      fontSize: 9,

      width: 30,
      height: 20,
      borderRadius: 18,
      [theme.breakpoints.up('tabletSM')]: {
        width: 58,
        height: 30,
        borderRadius: 23,
        fontSize: 'inherit',
      },
    },

    expanded: {
      transform: 'rotate(180deg)',
      backgroundColor: theme.colors.grayishNavy,
    },
  };
});
