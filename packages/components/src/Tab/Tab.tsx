import React from 'react';
import MuiTab, { TabProps } from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/styles/makeStyles';
import cn from 'classnames';

import { CloseIcon } from '../icons/CloseIcon';

type Props = TabProps & {
  onClose?: () => void;
};

const hardClasses = {
  icon: 'TabIcon',
  iconButton: 'TabIconButton',
};

export function Tab(props: Props) {
  const { onClose, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiTab {...rest} />
      {onClose && (
        <IconButton
          className={cn(classes.iconButton, hardClasses.iconButton)}
          size="small"
          key="close"
          aria-label="close"
          onClick={onClose}
        >
          <CloseIcon className={cn(classes.icon, hardClasses.icon)} />
        </IconButton>
      )}
    </div>
  );
}

const useStyles = makeStyles(
  () => ({
    root: {
      position: 'relative',
    },

    iconButton: {
      position: 'absolute',
      top: 0,
      right: 0,
    },

    icon: {
      fontSize: 13,
    },
  }),
  { name: 'GlobalTxStatusTabTitle' },
);
