import * as React from 'react';
import { useCallback } from 'react';
import cn from 'classnames';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@akropolis-web/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { ComingSoon } from '../ComingSoon/ComingSoon';
import { InfoIcon } from '../icons';

type Props = {
  hint?: React.ReactNode;
  fontSize?: 'inherit' | 'medium' | 'large';
  icon?: React.ReactNode;
  iconClass?: string;
  inline?: boolean;
  withComingSoon?: boolean;
};

export const Label: React.FC<Props> = props => {
  const { hint, inline, icon, iconClass, children, withComingSoon, fontSize = 'inherit' } = props;
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
      className={cn(classes.title, classes[fontSize], { [classes.inline]: inline })}
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
        <span className={classes.comingSoonLabel}>
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
              onClose={handleTooltipClose}
              open={isOpen}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={<div className={classes.hint}>{hint}</div>}
              placement="right"
            >
              <span>
                <InfoIcon
                  className={cn(classes.icon, iconClass)}
                  fontSize="small"
                  onMouseOver={handleTooltipOpen}
                  onMouseLeave={handleTooltipClose}
                  onClick={handleTooltipOpen}
                />
              </span>
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

    icon: {
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
