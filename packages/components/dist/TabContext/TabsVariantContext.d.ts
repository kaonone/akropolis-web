import { ClassNameMap } from '@material-ui/styles';
import React from 'react';
export declare type ThemeVariant = 'default' | 'minimalistic';
export declare const TabsVariantContextProvider: React.Provider<ThemeVariant>;
export declare function useTabsVariant(): ThemeVariant;
export declare function useGetVariantStyles(styles: Record<ThemeVariant, (props?: any) => ClassNameMap<any>>): (props?: any) => ClassNameMap<any>;
