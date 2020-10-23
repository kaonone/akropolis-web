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
      '&$fullWidth': {
        width: '100%',
      },
    },
    tab: {
      padding: '0 10px',
      minWidth: 'initial',

      [theme.breakpoints.up('mobileMD')]: {
        padding: '0 20px',
      },
    },
    tabPanel: {
      padding: 0,
    },
    fullWidth: {},
  }),
  { name: 'TabsSection' },
);
