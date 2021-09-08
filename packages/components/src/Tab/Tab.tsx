import React from 'react';
import MuiTab, { TabProps } from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import cn from 'classnames';

import { CloseIcon } from '../icons/CloseIcon';
import { useGetVariantStyles } from '../TabContext/TabsVariantContext';
import { useDefaultStyles, useMinimalisticStyles } from './Tab.styles';

type Props = TabProps & {
  onClose?: () => void;
};

export function Tab(props: Props) {
  const { onClose, selected, ...rest } = props;

  const useStyles = useGetVariantStyles({
    default: useDefaultStyles,
    minimalistic: useMinimalisticStyles,
  });
  const classes = useStyles();

  return (
    <div className={cn(classes.root, { [classes.withCloseButtonIndent]: onClose })}>
      <MuiTab
        {...rest}
        classes={{
          root: classes.tabRoot,
          textColorInherit: classes.textColorInherit,
        }}
      />
      {onClose && selected && (
        <IconButton
          className={classes.iconButton}
          size="small"
          key="close"
          aria-label="close"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      )}
    </div>
  );
}
