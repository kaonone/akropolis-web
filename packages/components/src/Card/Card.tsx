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

import { ResizeObserverComponent } from './ResizeObserverComponent';

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

  const backgroundColor = useMemo(() => {
    if (variant === 'contained') {
      return isActive ? getActiveBackgroundColor(theme) : theme.palette.background.paper;
    }

    return null;
  }, [variant, isActive, theme]);

  const classes = useStyles({ backgroundColor });

  return (
    <AncestorBackgroundHackProvider backgroundColor={backgroundColor}>
      <div
        className={cn(className, classes.root, {
          [classes.outlined]: variant === 'outlined',
          [classes.contained]: variant === 'contained',
          [classes.isActive]: isActive,
        })}
      >
        <div className={classes.paddingContainer}>
          {children}
          <div className={classes.header}>
            <div className={classes.labelContainer}>
              {labelIcon && <span className={classes.labelIcon}>{labelIcon}</span>}
              {label && (
                <Typography component="div" className={classes.label}>
                  <span>{label}</span>
                </Typography>
              )}
            </div>

            {icons && (
              <ResizeObserverComponent>
                {size => (
                  <div className={classes.icons}>
                    {icons.map((icon, index) => (
                      <div
                        className={cn(classes.icon, {
                          [classes.compressed]: size === 'compressed',
                        })}
                        key={index}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                )}
              </ResizeObserverComponent>
            )}
          </div>
        </div>
      </div>
    </AncestorBackgroundHackProvider>
  );
}

function getActiveBackgroundColor(currentTheme: Theme) {
  return currentTheme.palette.type === 'light'
    ? currentTheme.colors.zumthor
    : currentTheme.colors.darkSpace;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: theme.spacing(0.5),
      transition: theme.transitions.create(['border-color', 'background-color']),
      padding: '0 10px',

      [theme.breakpoints.up(375)]: {
        padding: '0 15px',
      },

      [theme.breakpoints.up('tabletSM')]: {
        padding: '0 20px',
      },

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

    paddingContainer: {
      position: 'relative',
      padding: '40px 0 20px',

      [theme.breakpoints.up('tabletSM')]: {
        padding: '50px 0 20px',
      },
    },

    header: {
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
      transform: 'translateY(-50%)',
      display: 'flex',
      alignItems: 'center',
    },

    labelContainer: {
      display: 'flex',
      alignItems: 'center',
      height: 30,
      borderRadius: 15,
      backgroundColor: ({ backgroundColor }: { backgroundColor: string | null }) =>
        backgroundColor || 'transparent',
    },

    labelIcon: {
      borderRadius: '50%',
      fontSize: 30,
      marginRight: 10,
    },

    label: {
      padding: theme.spacing(0.25, 1.25, 0.25, 0),
      fontSize: theme.spacing(2),
      lineHeight: 1,
      color: theme.colors.white,

      [theme.breakpoints.up('tabletXS')]: {
        fontSize: theme.spacing(1.5),
      },
    },

    icons: {
      display: 'flex',
      marginLeft: 'auto',
    },

    icon: {
      display: 'flex',
      fontSize: 30,
      marginRight: theme.spacing(1),

      [theme.breakpoints.up('tabletXS')]: {
        marginRight: theme.spacing(1.5),
      },

      '&:last-child': {
        marginRight: 0,
      },

      '&$compressed': {
        marginRight: '-12.5px',

        [theme.breakpoints.up('tabletXS')]: {
          marginRight: '-15px',
        },

        '&:last-child': {
          marginRight: 0,
        },
      },
    },
    outlined: {},
    contained: {},
    isActive: {},
    isWithIcon: {},
    compressed: {},
  }),
  { name: 'Card' },
);
