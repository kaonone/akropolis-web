import React from 'react';
import MuiTabContext, { TabContextProps } from '@material-ui/lab/TabContext';

import { ThemeVariant, TabsVariantContextProvider } from './TabsVariantContext';

type Props = TabContextProps & { variant?: ThemeVariant };

export function TabContext(props: Props) {
  const { variant = 'default', ...rest } = props;

  return (
    <TabsVariantContextProvider value={variant}>
      <MuiTabContext {...rest} />
    </TabsVariantContextProvider>
  );
}
