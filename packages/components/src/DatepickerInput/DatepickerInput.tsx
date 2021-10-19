import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import * as React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import cn from 'classnames';

import { useStyles } from './DatepickerInput.style';
import { HistoryIcon } from '../icons/HistoryIcon';

type KeyboardDatePickerProps = React.ComponentProps<typeof KeyboardDatePicker>;

type Props = Omit<KeyboardDatePickerProps, 'KeyboardButtonProps'> & {
  iconClassName?: string;
  KeyboardButtonProps: KeyboardDatePickerProps['KeyboardButtonProps'] & {
    'aria-label': string;
  };
};

function DatepickerInput(props: Props) {
  const { className, iconClassName, ...restProps } = props;
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={cn(classes.root, className)}
        format="MM/dd/yyyy"
        keyboardIcon={<HistoryIcon className={cn(classes.datePickerIcon, iconClassName)} />}
        variant="inline"
        invalidDateMessage="Enter correct date"
        autoOk
        {...restProps}
      />
    </MuiPickersUtilsProvider>
  );
}

export { DatepickerInput };
