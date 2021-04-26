import * as React from 'react';
import { useCallback } from 'react';
import cn from 'classnames';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@akropolis-web/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { TooltipClassKey } from '@material-ui/core/Tooltip/Tooltip';

import { ComingSoon } from '../ComingSoon/ComingSoon';
import { InfoIcon } from '../icons';

type Props = {
  hint?: React.ReactNode;
  fontSize?: 'inherit' | 'medium' | 'large';
  icon?: React.ReactNode;
  classes?: {
    tooltipClasses?: Partial<Record<TooltipClassKey, string>>;
    title?: string;
    tooltipIcon?: string;
    comingSoonLabel?: string;
  };
  inline?: boolean;
  withComingSoon?: boolean;
};

export const Label: React.FC<Props> = props => {
  const {
    hint,
    inline,
    icon,
    classes: propsClasses,
    children,
    withComingSoon,
    fontSize = 'inherit',
  } = props;
  const classes = useStyles(props);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleTooltipClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleTooltipOpen = useCallback((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setIsOpen(true);
    event.preventDefault();
  }, []);

  return (
    <Typography
      variant="h6"
      component="h6"
      className={cn(propsClasses?.title, classes.title, classes[fontSize], {
        [classes.inline]: inline,
      })}
    >
      {icon && (
        <>
          {icon}
          &nbsp;
        </>
      )}
      {children}
      {renderTooltip()}
      {withComingSoon && (
        <span className={cn(propsClasses?.comingSoonLabel, classes.comingSoonLabel)}>
          <ComingSoon variant="label" />
        </span>
      )}
    </Typography>
  );

  function renderTooltip() {
    return (
      hint && (
        <>
          &nbsp;
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
              classes={propsClasses?.tooltipClasses}
              onClose={handleTooltipClose}
              open={isOpen}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={<div className={classes.hint}>{hint}</div>}
              placement="right"
            >
              <InfoIcon
                className={cn(propsClasses?.tooltipIcon, classes.tooltipIcon)}
                fontSize="small"
                onMouseOver={handleTooltipOpen}
                onMouseLeave={handleTooltipClose}
                onClick={handleTooltipOpen}
              />
            </Tooltip>
          </ClickAwayListener>
        </>
      )
    );
  }
};

const useStyles = makeStyles(
  () => ({
    title: {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 'normal',

      '&$inherit': {
        fontSize: 'inherit',
        fontWeight: 400,
      },
      '&$medium': {
        fontSize: 16,
        fontWeight: 400,
      },
      '&$large': {
        fontSize: 22,
        fontWeight: 300,
      },
    },

    inline: {
      display: 'inline-flex',
    },

    comingSoonLabel: {
      marginLeft: 10,
    },

    hint: {
      fontSize: 12,
    },

    tooltipIcon: {
      fontSize: '1.125em',

      opacity: '50%',
      '&:hover': {
        opacity: '100%',
      },
    },

    inherit: {},
    medium: {},
    large: {},
  }),
  { name: 'Label' },
);
