import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  () => ({
    navigationBar: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 40,
    },
  }),
  { name: 'TabsSection' },
);
