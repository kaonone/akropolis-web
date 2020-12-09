import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  theme => ({
    navigationBar: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: 20,

      [theme.breakpoints.up('mobileLG')]: {
        marginBottom: 30,
      },

      [theme.breakpoints.up('desktopXS')]: {
        marginBottom: 45,
      },
    },
    tabList: {
      fontSize: 13,

      [theme.breakpoints.up('mobileMD')]: {
        fontSize: 16,
      },

      '&$fullWidth': {
        width: '100%',
      },
    },
    tabPanel: {
      padding: 0,
    },
    fullWidth: {},
  }),
  { name: 'TabsSection' },
);
