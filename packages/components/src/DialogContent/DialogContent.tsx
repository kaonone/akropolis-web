import React from 'react';
import MuiDialogContent, {
  DialogContentProps as MuiDialogContentProps,
} from '@material-ui/core/DialogContent';
import { makeStyles, useTheme, AncestorBackgroundHackProvider } from '@akropolis-web/styles';

export function DialogContent(props: MuiDialogContentProps) {
  const { children, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AncestorBackgroundHackProvider backgroundColor={theme.palette.background.paper}>
      <MuiDialogContent {...rest} classes={{ root: classes.root }}>
        {children}
      </MuiDialogContent>
    </AncestorBackgroundHackProvider>
  );
}

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: theme.palette.background.paper,
      padding: '40px 10px 20px !important',
      overflowX: 'hidden',

      [theme.breakpoints.up('mobileMD')]: {
        padding: '40px 20px 30px !important',
      },

      [theme.breakpoints.up('tabletXS')]: {
        padding: '50px !important',
      },
    },
  }),
  { name: 'DialogContent' },
);
