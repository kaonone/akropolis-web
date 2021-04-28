import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  () => ({
    root: {
      padding: '1px 0px 1px 8px',
      border: '1px solid #40404b',
      borderRadius: 6,

      '& .MuiInputBase-input': {
        padding: '6px 0',
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
