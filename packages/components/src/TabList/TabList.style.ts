import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  () => ({
    tabs: {
      '&$fullWidth': {
        display: 'flex',
      },

      '&$disabled': {
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: `rgba(255, 255, 255, 0.5)`,
        pointerEvents: 'none',

        '&:before': {
          opacity: 0,
        },

        '& .MuiTabs-indicator': {
          background: `rgba(255, 255, 255, 0.1)`,
        },

        '& .Mui-selected': {
          color: `rgba(255, 255, 255, 0.5)`,
        },
      },
    },
    fullWidth: {},
    disabled: {},
  }),
  { name: 'TabList' },
);
