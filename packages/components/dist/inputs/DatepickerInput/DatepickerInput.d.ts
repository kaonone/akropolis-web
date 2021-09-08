import { KeyboardDatePicker } from '@material-ui/pickers';
import * as React from 'react';
declare type KeyboardDatePickerProps = React.ComponentProps<typeof KeyboardDatePicker>;
declare type Props = Omit<KeyboardDatePickerProps, 'KeyboardButtonProps'> & {
    iconClassName?: string;
    KeyboardButtonProps: KeyboardDatePickerProps['KeyboardButtonProps'] & {
        'aria-label': string;
    };
};
declare function DatepickerInput(props: Props): JSX.Element;
export { DatepickerInput };
