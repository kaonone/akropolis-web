import * as React from 'react';
import { makeStyles } from '@akropolis-web/styles';

type Props = {
  children: React.ReactNode;
};

export function HiddenSvgDefs(props: Props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <svg className={classes.root}>
      <defs>{children}</defs>
    </svg>
  );
}

const useStyles = makeStyles(
  {
    root: {
      position: 'absolute',
      width: 0,
      height: 0,
      visibility: 'hidden',
      zIndex: -100,
    },
  },
  { name: 'HiddenSvgDefs' },
);
