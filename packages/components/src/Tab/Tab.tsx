import React from 'react';
import MuiTab, { TabProps } from '@material-ui/core/Tab';
import { useAncestorBackgroundHack } from '@akropolis-web/styles';

import { useStyles } from './Tab.style';

export function Tab(props: TabProps) {
  const backgroundColor = useAncestorBackgroundHack();
  const classes = useStyles({ backgroundColor });

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
