import { makeStyles, ProvidedAncestorBackground } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  () => ({
    tabs: {
      '&::before': {
        background: ({ backgroundColor }: ProvidedAncestorBackground) => backgroundColor,
      },
    },
  }),
  { name: 'TabList' },
);
