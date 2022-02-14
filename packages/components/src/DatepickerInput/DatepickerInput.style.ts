import { colors, makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  theme => ({
    root: {
      padding: '1px 0px 1px 8px',
      border: `1px solid ${theme.palette.type === 'light' ? colors.darkMist : colors.obsidian}`,
      borderRadius: 6,
      backgroundColor: theme.palette.type === 'light' ? 'transparent' : colors.charadeLight,

      '& .MuiInputBase-input': {
        padding: '7px 0',
      },

      '& .MuiIconButton-root': {
        padding: 3,
      },

      '& .MuiInputAdornment-root': {
        marginLeft: 2,
      },

      '& .MuiFormHelperText-root.Mui-error': {
        position: 'absolute',
        top: 32,
        left: 3,
        lineHeight: 1,
      },
    },

    datePickerIcon: {
      fontSize: 24,
      marginTop: -1,
    },
  }),
  { name: 'DatepickerInput' },
);
