import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  () => {
    return {
      root: {
        display: 'flex',
        justifyContent: 'space-between',
      },

      label: {},
      value: {},
    };
  },
  { name: 'Summary' },
);
