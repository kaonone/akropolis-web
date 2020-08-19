import * as React from 'react';
import cn from 'classnames';

import { useStyles } from './Metric.style';

type Props = {
  title: NonNullable<React.ReactNode>;
  value: NonNullable<React.ReactNode>;
  subValue?: React.ReactNode;
  chart?: React.ReactNode;
  size?: 'small' | 'medium';
};

export function Metric(props: Props) {
  const { title, value, subValue, chart, size = 'medium' } = props;
  const classes = useStyles();

  return (
    <div className={cn(classes.root, { [classes.sizeSmall]: size === 'small' })}>
      <div className={classes.title}>{title}</div>
      <div className={classes.value}>
        {value}
        {chart && <div className={classes.chart}>{chart}</div>}
      </div>
      {subValue && <div className={classes.subValue}>{subValue}</div>}
    </div>
  );
}
