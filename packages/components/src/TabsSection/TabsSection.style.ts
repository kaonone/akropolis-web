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
      width: '100%',
      [theme.breakpoints.up(375)]: {
        width: 'initial',
      },
    },
    tab: {
      padding: '0 20px',
      minWidth: 'initial',
    },
    tabPanel: {
      padding: 0,
    },
  }),
  { name: 'TabsSection' },
);
