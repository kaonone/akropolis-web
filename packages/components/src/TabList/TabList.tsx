import React from 'react';
import cn from 'classnames';
import { TabList as MuiTabList, TabListProps as MuiTabListProps } from '@material-ui/lab';
import { useAncestorBackgroundHack } from '@akropolis-web/styles';

import { useStyles } from './TabList.style';

export function TabList(props: MuiTabListProps) {
  const backgroundColors = useAncestorBackgroundHack();
  const classes = useStyles(backgroundColors);

  return (
    <MuiTabList
      {...props}
      classes={{
        // eslint-disable-next-line react/destructuring-assignment
        root: cn(classes.tabs, { [classes.fullWidth]: props.variant === 'fullWidth' }),
      }}
    />
  );
}
