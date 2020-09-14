/* eslint-disable react/require-default-props */
import React, { useMemo } from 'react';
import cn from 'classnames';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
  useTheme,
  rgba,
  Theme,
  AncestorBackgroundHackProvider,
} from '@akropolis-web/styles';

interface CardProps {
  className?: string;
  variant?: 'outlined' | 'contained';
  isActive?: boolean;
  labelIcon?: React.ReactNode;
  label?: React.ReactNode;
  children: React.ReactNode;
  icons?: React.ReactNode[];
}

export function Card(props: CardProps) {
  const { labelIcon, label, variant = 'outlined', isActive, children, icons, className } = props;

  const theme = useTheme();
  const classes = useStyles();

  const backgroundColor = useMemo(() => {
    if (variant === 'contained') {
      return isActive ? getActiveBackgroundColor(theme) : theme.palette.background.paper;
    }

    return null;
  }, [variant, isActive, theme]);

  return (
    <AncestorBackgroundHackProvider backgroundColor={backgroundColor}>
      <div
        className={cn(className, classes.root, {
          [classes.outlined]: variant === 'outlined',
          [classes.contained]: variant === 'contained',
          [classes.isActive]: isActive,
        })}
      >
        {children}
        {labelIcon && <span className={classes.labelIcon}>{labelIcon}</span>}
        {label && (
          <Typography
            component="div"
            className={cn(classes.label, { [classes.isActive]: isActive })}
          >
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
    </AncestorBackgroundHackProvider>
  );
}

function getActiveBackgroundColor(currentTheme: Theme) {
  return currentTheme.palette.type === 'light'
    ? currentTheme.colors.zumthor
    : currentTheme.colors.darkSpace;
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

  labelIcon: {
    position: 'absolute',
    top: 0,
    left: theme.spacing(2.5),
    transform: 'translateY(-50%)',
    display: 'flex',
    backgroundColor: '#191925',
    borderRadius: '50%',
  },

  label: {
    position: 'absolute',
    top: 0,
    left: theme.spacing(7.5),
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: theme.spacing(2.75),
    borderRadius: theme.spacing(1.25),
    color: theme.colors.white,
    backgroundColor: '#13131b',

    padding: theme.spacing(0.125, 0.75, 0.375),
    fontSize: theme.spacing(1.25),
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(0.25, 1.25),
      fontSize: theme.spacing(1.5),
    },

    '&$isActive': {
      background: theme.gradients.main.linear('to right'),
    },
  },

  icons: {
    position: 'absolute',
    top: 0,
    right: theme.spacing(2.5),
    transform: 'translateY(-50%)',
    display: 'flex',
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
