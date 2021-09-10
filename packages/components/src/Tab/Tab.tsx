import React from 'react';
import MuiTab, { TabProps } from '@material-ui/core/Tab';

import { useGetVariantStyles } from '../TabContext/TabsVariantContext';
import { useDefaultStyles, useMinimalisticStyles } from './Tab.styles';

export function Tab(props: TabProps) {
  const useStyles = useGetVariantStyles({
    default: useDefaultStyles,
    minimalistic: useMinimalisticStyles,
  });
  const classes = useStyles();

  return (
    <MuiTab
      {...props}
      classes={{
        root: classes.tabRoot,
        textColorInherit: classes.textColorInherit,
      }}
    />
  );
}
