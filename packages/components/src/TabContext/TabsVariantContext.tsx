import { ClassNameMap } from '@material-ui/styles';
import React from 'react';

export type ThemeVariant = 'default' | 'minimalistic';

const TabsVariantContext = React.createContext<ThemeVariant>('default');
export const TabsVariantContextProvider = TabsVariantContext.Provider;

export function useTabsVariant() {
  const variant = React.useContext(TabsVariantContext);
  return variant;
}

export function useGetVariantStyles(
  styles: Record<ThemeVariant, (props?: any) => ClassNameMap<any>>,
) {
  const variant = React.useContext(TabsVariantContext);

  return styles[variant];
}
