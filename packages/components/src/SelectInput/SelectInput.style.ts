import { makeStyles, ProvidedAncestorBackground, rgba } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  theme => ({
    root: {
      minWidth: 129,
      fontSize: 12,

      [theme.breakpoints.up('tabletSM')]: {
        minWidth: 144,
        fontSize: 16,
      },

      '&$isOpen': {
        '&$hasBottomSpace $input:not($filled)': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },

        '&$hasTopSpace $input:not($filled)': {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        },

        '& $arrowIcon': {
          transform: 'rotate(180deg)',
        },
      },

      '&$disableVariantText': {
        minWidth: 'auto',

        '& $input': {
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          color: theme.palette.type === 'light' ? theme.colors.obsidian : theme.colors.white,
        },

        '& $select': {
          paddingRight: 0,
        },

        '& $arrowIcon': {
          display: 'none',
        },
      },

      '&$withoutOutline': {
        verticalAlign: 'baseline',

        '& $arrowIcon': {
          padding: 0,
        },
      },

      '&$withoutOutline$filled': {
        '& $arrowIcon': {
          padding: 12,
        },
      },
    },
    input: {
      fontSize: 'inherit',

      '&$filled': {
        border: `solid 1px ${
          theme.palette.type === 'light' ? theme.colors.darkMist : theme.colors.obsidian
        }`,
        background: 'none',
        backgroundImage:
          theme.palette.type === 'light' ? 'none' : 'linear-gradient(to bottom, #3b3b51, #1e1e28)',
      },
    },
    paper: {
      fontSize: 12,
      borderColor: theme.colors.darkMist,
      borderRadius: 6,
      backgroundColor: ({ backgroundColor }: ProvidedAncestorBackground) => backgroundColor,

      '&$hasBottomSpace': {
        borderRadius: '0 0 6px 6px',
        borderTop: 'none',
      },

      '&$hasTopSpace': {
        borderRadius: '6px 6px 0 0',
      },

      '&$withCheckmark': {
        backgroundColor:
          theme.palette.type === 'light' ? theme.colors.white : theme.colors.blackRussian,

        '& $menuItem': {
          paddingRight: 34,
        },

        '& $menuItem.Mui-selected': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath fill='%2313131b' fill-opacity='.01' d='M0 0H16V16H0z' transform='translate(-643 -399) translate(638 397) translate(5 2)'/%3E%3Cpath fill='%23${
            theme.palette.type === 'light' ? '0a0a0e' : 'fff'
          }' fill-rule='nonzero' d='M7.052 11.94c.215.0.38-.093.503-.274l4.355-6.831c.088-.142.127-.254.127-.366.0-.279-.19-.469-.474-.469-.195.0-.307.073-.43.264l-4.1 6.523-2.12-2.759c-.122-.166-.244-.234-.425-.234-.288.0-.488.195-.488.474.0.117.049.244.146.366l2.398 3.032c.146.186.298.273.508.273z' transform='translate(-643 -399) translate(638 397) translate(5 2)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '16px 16px',
          backgroundPosition: 'right 10px center',
          backgroundRepeat: 'no-repeat',
        },
      },

      '&$withoutOutline': {
        borderColor:
          theme.palette.type === 'light' ? rgba(theme.colors.obsidian, 0.2) : theme.colors.darkMist,

        '&$hasBottomSpace': {
          marginTop: 10,
          borderRadius: 6,
          borderTop: `1px solid ${
            theme.palette.type === 'light'
              ? rgba(theme.colors.obsidian, 0.2)
              : theme.colors.darkMist
          }`,
        },

        '&$hasTopSpace': {
          marginTop: -10,
          borderRadius: 6,
          borderBottom: `1px solid ${
            theme.palette.type === 'light'
              ? rgba(theme.colors.obsidian, 0.2)
              : theme.colors.darkMist
          }`,
        },

        '&$filled': {
          borderColor:
            theme.palette.type === 'light'
              ? rgba(theme.colors.obsidian, 0.2)
              : rgba(theme.colors.white, 0.1),
          borderTop: `1px solid ${
            theme.palette.type === 'light'
              ? rgba(theme.colors.obsidian, 0.2)
              : rgba(theme.colors.white, 0.1)
          }`,
          borderBottom: `1px solid ${
            theme.palette.type === 'light'
              ? rgba(theme.colors.obsidian, 0.2)
              : rgba(theme.colors.white, 0.1)
          }`,
        },
      },

      [theme.breakpoints.up('tabletSM')]: {
        fontSize: 16,
      },
    },
    menuItem: {
      minHeight: 'auto',
      fontSize: 'inherit',
    },
    arrowIcon: {
      position: 'absolute',
      right: 0,
      padding: 12,
      fontSize: 14,
      pointerEvents: 'none',
    },

    isOpen: {},
    disableVariantText: {},
    hasBottomSpace: {},
    hasTopSpace: {},
    withoutOutline: {},
    filled: {},
    withCheckmark: {},
    select: {},
  }),
  { name: 'SelectInput' },
);
