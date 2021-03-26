import * as React from 'react';

import * as M from '../../models';
import { useStyles } from './Summary.style';

type Props = {
  summary: Omit<M.Summary, 'className'>;
};

export const Summary: React.FC<Props> = (props) => {
  const {
    summary: { renderLabel, renderValue },
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.label}>{renderLabel()}</div>
      <div className={classes.value}>{renderValue()}</div>
    </div>
  );
};
