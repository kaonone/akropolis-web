import { makeStyles, ProvidedAncestorBackground } from '@akropolis-web/styles';

const tabsHeight = 36;
const tabsIndicatorSpace = 3;
const tabsBorderWidth = 1;
const tabMinWidth = 112;

export const useStyles = makeStyles(
  theme => ({
    navigationBar: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 40,
    },
    tabs: {
      position: 'relative',
      display: 'inline-flex',
      overflow: 'hidden',
      minHeight: tabsHeight,
      borderRadius: tabsHeight / 2,
      padding: tabsIndicatorSpace,
      background: 'linear-gradient(to left, #544cf2, #d93cef)',

      '&::before': {
        content: "''",
        position: 'absolute',
        top: 1,
        left: 1,
        right: 1,
        bottom: 1,
        borderRadius: tabsHeight / 2,
        background: ({ backgroundColor }: ProvidedAncestorBackground) => backgroundColor,
      },
    },

    indicator: {
      top: 0,
      bottom: 0,
      height: '100%',
      borderRadius: tabsHeight / 2 - tabsIndicatorSpace - tabsBorderWidth,
      zIndex: -1,
      background: 'linear-gradient(to left, #544cf2, #d93cef)',
    },

    scroller: {
      zIndex: 1,
      overflow: 'hidden',
      borderRadius: tabsHeight / 2 - tabsIndicatorSpace - tabsBorderWidth,
    },

    flexContainer: {
      height: '100%',
    },

    tab: {
      minWidth: tabMinWidth,
      position: 'relative',
      overflow: 'visible',
      minHeight: 'unset',
      padding: theme.spacing(0.2, 1.5),
      textTransform: 'unset',
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.5,
      borderRadius: tabsHeight / 2 - tabsIndicatorSpace - tabsBorderWidth,

      '&::after': {
        content: "''",
        position: 'absolute',
        left: 0,
        width: 1,
        top: 3,
        bottom: 3,
        background: 'currentColor',
        opacity: 0,
        transition: theme.transitions.create('opacity'),
      },

      '&:not($selected)': {
        '& + &::after': {
          opacity: 0.2,
        },
      },

      '&$selected': {
        color: theme.colors.white,
      },
    },

    tabPanel: {
      padding: 0,
    },

    selected: {},
  }),
  { name: 'Tabs' },
);
