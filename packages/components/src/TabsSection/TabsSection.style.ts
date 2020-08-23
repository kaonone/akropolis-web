import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  () => ({
    navigationBar: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: 45,
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
