import React from 'react';
import { TabList as MuiTabList, TabListProps as MuiTabListProps } from '@material-ui/lab';
import { useAncestorBackgroundHack } from '@akropolis-web/styles';

import { useStyles } from './TabList.style';

export function TabList(props: MuiTabListProps) {
  const backgroundColor = useAncestorBackgroundHack();
  const classes = useStyles({ backgroundColor });

  return (
    <MuiTabList
      {...props}
      classes={{
        root: classes.tabs,
      }}
    />
  );
}
