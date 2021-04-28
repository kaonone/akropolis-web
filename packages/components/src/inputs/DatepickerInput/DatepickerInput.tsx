import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import * as React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import cn from 'classnames';

import { useStyles } from './DatepickerInput.style';
import { HistoryIcon } from '../../icons';

type Props = React.ComponentProps<typeof KeyboardDatePicker> & {
  iconClassName: string;
};

function DatepickerInput(props: Props) {
  const { className, iconClassName, ...restProps } = props;
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={cn(classes.root, className)}
        format="MM/dd/yyyy"
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        keyboardIcon={<HistoryIcon className={cn(classes.datePickerIcon, iconClassName)} />}
        variant="inline"
        invalidDateMessage="Enter correct date"
        disableFuture
        autoOk
        {...restProps}
      />
    </MuiPickersUtilsProvider>
  );
}

export { DatepickerInput };
