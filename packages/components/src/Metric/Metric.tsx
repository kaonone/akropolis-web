import * as React from 'react';
import cn from 'classnames';
import { makeStyles } from '@akropolis-web/styles';

type Props = {
  title: NonNullable<React.ReactNode>;
  value: NonNullable<React.ReactNode>;
  subValue?: React.ReactNode;
  chart?: React.ReactNode;
  titleSize?: 'small' | 'medium';
};

export function Metric(props: Props) {
  const { title, value, subValue, chart, titleSize = 'medium' } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={cn(classes.title, { [classes.titleSizeSmall]: titleSize === 'small' })}>
        {title}
      </div>
      <div className={classes.value}>
        {value}
        {chart && <div className={classes.chart}>{chart}</div>}
      </div>
      {subValue && <div className={classes.subValue}>{subValue}</div>}
    </div>
  );
}

const useStyles = makeStyles(
  () => ({
    root: {},
    title: {
      fontSize: 16,
      marginBottom: 12,
    },
    titleSizeSmall: {
      fontSize: 12,
      fontWeight: 300,
      marginBottom: 2,
    },
    value: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 32,
      fontWeight: 300,
      lineHeight: 'normal',
    },
    subValue: {
      marginTop: 8,
      fontSize: 16,
    },
    chart: {
      marginBottom: 5,
      marginLeft: 10,
      alignSelf: 'flex-end',
    },
  }),
  { name: 'Metric' },
);
