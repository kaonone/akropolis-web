import { makeStyles, ProvidedAncestorBackground } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  theme => ({
    tabs: {
      '&::before': {
        background: ({ backgroundColor }: ProvidedAncestorBackground) => backgroundColor,
      },

      '& .MuiTab-root': {
        fontSize: 13,

        [theme.breakpoints.up('mobileMD')]: {
          fontSize: 16,
        },
      },
    },
  }),
  { name: 'TabList' },
);
