import React from 'react';
import cn from 'classnames';
import Tab, { TabTypeMap } from '@material-ui/core/Tab';
import { TabListProps } from '@material-ui/lab';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import { useBreakpointsMatch, withStyles, WithStyles } from '@akropolis-web/styles';

import { TabList } from '../TabList/TabList';
import { styles } from './TabsSection.style';

type DefaultTabComponent = TabTypeMap['defaultComponent'];
const defaultTabComponent: DefaultTabComponent = 'div';

type TabContent = {
  value: string;
  label: React.ReactNode;
  renderContent: () => React.ReactNode;
};

type TabItem<T extends React.ElementType> = Omit<React.ComponentProps<T>, keyof TabContent> &
  TabContent;

interface Props<T extends React.ElementType> extends WithStyles<typeof styles> {
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
}

const TabsSectionComponent = withStyles(styles, { name: 'TabsSection' })(
  (props: Props<React.ElementType>) => {
    const {
      tabs,
      currentValue,
      onChange,
      tabComponent,
      tabListProps = {},
      content = { navigationBar: {} },
      classes,
    } = props;
    const isSmallMobile = useBreakpointsMatch({ to: 'mobileMD' });
    const defaultVariant = isSmallMobile ? 'fullWidth' : 'standard';

    const {
      className: tabListClassName,
      variant = defaultVariant,
      ...restTabListProps
    } = tabListProps;

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

    function renderTab(tabItem: TabItem<React.ElementType>) {
      const { value, label, renderContent, ...restTabProps } = tabItem;
      return (
        <Tab
          {...restTabProps}
          label={label}
          value={value}
          key={value}
          component={tabComponent || defaultTabComponent}
        />
      );
    }
  },
);

export function TabsSection<T extends React.ElementType = DefaultTabComponent>(props: Props<T>) {
  return <TabsSectionComponent {...props} />;
}
