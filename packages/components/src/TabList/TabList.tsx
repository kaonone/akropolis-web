import React from 'react';
import cn from 'classnames';
import { TabList as MuiTabList, TabListProps as MuiTabListProps } from '@material-ui/lab';

import { useStyles } from './TabList.style';

export function TabList(props: MuiTabListProps) {
  const classes = useStyles();

  return (
    <MuiTabList
      {...props}
      classes={{
        root: cn(classes.tabs, {
          [classes.fullWidth]: props.variant === 'fullWidth',
          [classes.disabled]: props.disabled,
        }),
      }}
    />
  );
}
