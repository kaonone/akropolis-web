import * as React from 'react';
import { FormControlProps } from '@material-ui/core/FormControl';
import { FormLabelProps } from '@material-ui/core/FormLabel';
import { RadioGroupProps } from '@material-ui/core/RadioGroup';
import { FormHelperTextProps } from '@material-ui/core/FormHelperText';
declare type Props = RadioGroupProps & Pick<FormControlProps, 'error' | 'required' | 'fullWidth'> & {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    formControlProps?: Omit<FormControlProps, 'error' | 'required' | 'fullWidth'>;
    formLabelProps?: FormLabelProps;
    formHelperTextProps?: FormHelperTextProps;
};
declare function RadioGroupInput(props: Props): JSX.Element;
export { RadioGroupInput };
