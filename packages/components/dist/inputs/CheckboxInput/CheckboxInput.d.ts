import * as React from 'react';
import { FormControlProps } from '@material-ui/core/FormControl';
import { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
import { CheckboxProps } from '@material-ui/core/Checkbox';
declare type Props = CheckboxProps & Pick<FormControlProps, 'error' | 'required' | 'fullWidth'> & {
    label: React.ReactNode;
    helperText?: React.ReactNode;
    formHelperTextProps?: FormHelperTextProps;
    formControlLabelProps?: Omit<FormControlLabelProps, 'label' | 'control'>;
};
declare function CheckboxInput(props: Props): JSX.Element;
export { CheckboxInput };
