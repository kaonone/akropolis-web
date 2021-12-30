import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import * as React from 'react';
import DateFnsUtils from '@date-io/dayjs';
import cn from 'classnames';

import { useStyles } from './DatepickerInput.style';
import { HistoryIcon } from '../icons/HistoryIcon';

type KeyboardDatePickerProps = React.ComponentProps<typeof KeyboardDatePicker>;

type Props = Omit<KeyboardDatePickerProps, 'KeyboardButtonProps'> & {
  iconClassName?: string;
  KeyboardButtonProps: KeyboardDatePickerProps['KeyboardButtonProps'] & {
    'aria-label': string;
  };
  locale?: React.ComponentProps<typeof MuiPickersUtilsProvider>['locale'];
  format?: string;
  invalidDateMessage?: string;
};

function DatepickerInput(props: Props) {
  const {
    className,
    iconClassName,
    locale = 'en',
    format = 'MM/DD/YY',
    invalidDateMessage = 'Enter correct date',
    ...restProps
  } = props;
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
      <KeyboardDatePicker
        className={cn(classes.root, className)}
        format={format}
        keyboardIcon={<HistoryIcon className={cn(classes.datePickerIcon, iconClassName)} />}
        variant="inline"
        invalidDateMessage={invalidDateMessage}
        autoOk
        {...restProps}
      />
    </MuiPickersUtilsProvider>
  );
}

export { DatepickerInput };
