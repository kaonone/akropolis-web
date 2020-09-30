import React from 'react';
import Tab, { TabTypeMap } from '@material-ui/core/Tab';
import { TabListProps } from '@material-ui/lab';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import { useBreakpointsMatch } from '@akropolis-web/styles';
import cn from 'classnames';

import { TabList } from '../TabList/TabList';
import { useStyles } from './TabsSection.style';

type DefaultTabComponent = TabTypeMap['defaultComponent'];

type TabContent = {
  value: string;
  label: React.ReactNode;
  renderContent: () => React.ReactNode;
};

type TabItem<T extends React.ElementType> = Omit<React.ComponentProps<T>, keyof TabContent> &
  TabContent;

type Props<T extends React.ElementType> = {
  currentValue: string;
  tabs: TabItem<T>[];
  tabListProps?: Partial<TabListProps>;
  tabComponent?: T;
  withoutMargin?: boolean;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<{}>, tab?: string) => void;
};

export function TabsSection<T extends React.ElementType = DefaultTabComponent>(props: Props<T>) {
  const {
    withoutMargin,
    tabs,
    currentValue,
    children,
    onChange,
    tabComponent,
    tabListProps,
  } = props;
  const isSmallMobile = useBreakpointsMatch({ to: 'mobileMD' });
  const classes = useStyles();

  return (
    <TabContext value={currentValue}>
      <div className={cn(classes.navigationBar, { [classes.withMargin]: !withoutMargin })}>
        <TabList
          {...tabListProps}
          value={currentValue}
          onChange={onChange}
          variant={isSmallMobile ? 'fullWidth' : 'standard'}
          className={classes.tabList}
        >
          {tabs.map(tabItem => renderTab(tabItem))}
        </TabList>
        {children}
      </div>
      {tabs.map(({ value, renderContent }) => (
        <TabPanel classes={{ root: classes.tabPanel }} value={value} key={value}>
          {renderContent()}
        </TabPanel>
      ))}
    </TabContext>
  );

  function renderTab(tabItem: TabItem<T>) {
    const { value, label, renderContent, ...restTabProps } = tabItem;
    return (
      <Tab
        {...restTabProps}
        className={classes.tab}
        label={label}
        value={value}
        key={value}
        component={tabComponent}
      />
    );
  }
}
