import React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import { TabList as MuiTabList, TabListProps as MuiTabListProps } from '@material-ui/lab';
import { useAncestorBackgroundHack } from '@akropolis-web/styles';
import TabScrollButton, { TabScrollButtonProps } from '@material-ui/core/TabScrollButton';

import { useGetVariantStyles } from '../TabContext/TabsVariantContext';
import { useDefaultStyles, useMinimalisticStyles } from './TabList.style';

export function TabList<T extends React.ElementType = 'div'>(props: MuiTabListProps<T>) {
  const backgroundColor = useAncestorBackgroundHack();

  const useStyles = useGetVariantStyles({
    default: useDefaultStyles,
    minimalistic: useMinimalisticStyles,
  });
  const classes = useStyles({ backgroundColor });

  const leftScrollButtonRef = React.useRef<HTMLDivElement | null>(null);
  const rightScrollButtonRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div className={classes.root}>
      <div ref={leftScrollButtonRef} className={classes.leftScrollButton} />

      <MuiTabList
        {...props}
        component="div"
        ScrollButtonComponent={CustomTabScrollButton}
        TabScrollButtonProps={{
          classes: { root: classes.scrollButton, disabled: classes.disabled },
        }}
        classes={{
          root: cn(classes.tabsListRoot, { [classes.fullWidth]: props.variant === 'fullWidth' }),
          indicator: classes.indicator,
          scroller: classes.scroller,
          flexContainer: classes.flexContainer,
        }}
      />

      <div ref={rightScrollButtonRef} className={classes.rightScrollButton} />
    </div>
  );

  function CustomTabScrollButton(tabProps: TabScrollButtonProps) {
    const parent = tabProps.direction === 'left' ? leftScrollButtonRef : rightScrollButtonRef;

    return (
      parent.current && ReactDOM.createPortal(<TabScrollButton {...tabProps} />, parent.current)
    );
  }
}
