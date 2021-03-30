import React from 'react';
import MuiTab, { TabProps } from '@material-ui/core/Tab';

import { useStyles } from './Tab.style';

export function Tab(props: TabProps) {
  const classes = useStyles();

  return (
    <MuiTab
      {...props}
      classes={{
        root: classes.root,
      }}
    />
  );
}

export { TabProps };
