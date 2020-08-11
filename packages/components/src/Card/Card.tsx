/* eslint-disable react/require-default-props */
import React, { useMemo } from 'react';
import cn from 'classnames';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, rgba, Theme } from '@akropolis-web/styles';

import { InheritBackgroundHackProvider } from '../temp23/InheritBackgroundHackProvider';

interface CardProps {
  className?: string;
  variant?: 'outlined' | 'contained';
  isActive?: boolean;
  label?: string;
  children: React.ReactNode;
  icons?: React.ReactNode[];
}

export function Card(props: CardProps) {
  const { label, variant = 'outlined', isActive, children, icons, className } = props;

  const theme = useTheme();
  const classes = useStyles();

  const backgroundColor = useMemo(() => {
    if (variant === 'contained') {
      return isActive ? getActiveBackgroundColor(theme) : theme.palette.background.paper;
    }

    return null;
  }, [variant, isActive, theme]);

  return (
    <InheritBackgroundHackProvider backgroundColor={backgroundColor}>
      <div
        className={cn(className, classes.root, {
          [classes.outlined]: variant === 'outlined',
          [classes.contained]: variant === 'contained',
          [classes.isActive]: isActive,
        })}
      >
        {children}
        {label && (
          <Typography component="div" className={classes.label}>
            <span>{label}</span>
          </Typography>
        )}
        {icons && (
          <div className={classes.icons}>
            {icons.map((icon, index) => (
              <div className={classes.icon} key={index}>
                {icon}
              </div>
            ))}
          </div>
        )}
      </div>
    </InheritBackgroundHackProvider>
  );
}

function getActiveBackgroundColor(currentTheme: Theme) {
  return currentTheme.palette.type === 'light'
    ? currentTheme.colors.zumthor
    : currentTheme.colors.steelGray;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    borderRadius: theme.spacing(0.5),
    transition: theme.transitions.create(['border-color', 'background-color']),

    '&$outlined': {
      border: `1px solid ${rgba(
        theme.palette.type === 'light' ? theme.colors.shark : theme.colors.white,
        theme.palette.type === 'light' ? 0.2 : 0.25,
      )}`,
      WebkitBackgroundClip: 'padding-box',
      backgroundClip: 'padding-box',
    },
    '&$contained': {
      backgroundColor: theme.palette.background.paper,
    },
    '&$contained$isActive': {
      backgroundColor: getActiveBackgroundColor(theme),
    },
  },

  label: {
    position: 'absolute',
    top: 0,
    left: theme.spacing(2),
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: theme.spacing(2.5),
    borderRadius: theme.spacing(1.25),
    color: theme.colors.white,
    background: theme.gradients.main.linear('to right'),

    padding: theme.spacing(0.125, 0.75, 0.375),
    fontSize: theme.spacing(1.25),
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(0.25, 1.25),
      fontSize: theme.spacing(1.5),
    },
  },

  icons: {
    position: 'absolute',
    top: 0,
    right: theme.spacing(1.5),
    transform: 'translateY(-50%)',
    display: 'flex',
    fontSize: theme.spacing(3.75),
  },

  icon: {
    display: 'flex',
    marginRight: theme.spacing(1.5),

    '&:last-child': {
      marginRight: 0,
    },
  },
  outlined: {},
  contained: {},
  isActive: {},
}));
