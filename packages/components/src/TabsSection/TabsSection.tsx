import React from 'react';
import cn from 'classnames';
import Tab, { TabTypeMap } from '@material-ui/core/Tab';
import { TabListProps } from '@material-ui/lab';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import { useBreakpointsMatch } from '@akropolis-web/styles';

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
  onChange?: (event: React.ChangeEvent<unknown>, tab?: string) => void;
  content?: {
    navigationBar?: {
      beforeTabs?: React.ReactNode;
      afterTabs?: React.ReactNode;
    };
  };
};

export function TabsSection<T extends React.ElementType = DefaultTabComponent>(props: Props<T>) {
  const {
    tabs,
    currentValue,
    onChange,
    tabComponent,
    tabListProps = {},
    content = { navigationBar: {} },
  } = props;
  const isSmallMobile = useBreakpointsMatch({ to: 'mobileMD' });
  const defaultVariant = isSmallMobile ? 'fullWidth' : 'standard';

  const {
    className: tabListClassName,
    variant = defaultVariant,
    ...restTabListProps
  } = tabListProps;
  const classes = useStyles();

  return (
    <TabContext value={currentValue}>
      <div className={classes.navigationBar}>
        {content.navigationBar?.beforeTabs}
        <TabList
          {...restTabListProps}
          value={currentValue}
          onChange={onChange}
          variant={variant}
          className={cn(tabListClassName, classes.tabList, {
            [classes.fullWidth]: variant === 'fullWidth',
          })}
        >
          {tabs.map(tabItem => renderTab(tabItem))}
        </TabList>
        {content.navigationBar?.afterTabs}
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
      <Tab {...restTabProps} label={label} value={value} key={value} component={tabComponent} />
    );
  }
}
