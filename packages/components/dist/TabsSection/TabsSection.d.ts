import React from 'react';
import { TabTypeMap } from '@material-ui/core/Tab';
import { TabListProps } from '@material-ui/lab';
import { ClassKeyOfStyles, StyledComponentProps } from '@material-ui/styles';
import { styles } from './TabsSection.style';
declare type DefaultTabComponent = TabTypeMap['defaultComponent'];
declare type TabContent = {
    value: string;
    label: React.ReactNode;
    renderContent: () => React.ReactNode;
};
declare type TabItem<T extends React.ElementType> = Omit<React.ComponentProps<T>, keyof TabContent> & TabContent;
declare type Props<T extends React.ElementType> = {
    currentValue: string;
    tabs: TabItem<T>[];
    tabListProps?: Partial<TabListProps>;
    tabComponent?: T;
    onChange?: (event: React.ChangeEvent<unknown>, tab?: string) => void;
    content?: {
        navigationBar?: {
            beforeTabs?: React.ReactNode;
            afterTabs?: React.ReactNode;
        };
    };
};
export declare function TabsSection<T extends React.ElementType = DefaultTabComponent>(props: Props<T> & StyledComponentProps<ClassKeyOfStyles<typeof styles>>): JSX.Element;
export {};
