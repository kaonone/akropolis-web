import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  () => ({
    navigationBar: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: 40,
    },
    tab: {
      padding: '0 20px',
      minWidth: 'initial',
    },
    tabPanel: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  }),
  { name: 'TabsSection' },
);
