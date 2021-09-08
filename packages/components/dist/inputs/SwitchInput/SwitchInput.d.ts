import * as React from 'react';
import { FormControlProps } from '@material-ui/core/FormControl';
import { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { SwitchProps } from '@material-ui/core/Switch';
declare type Props = SwitchProps & Pick<FormControlProps, 'error' | 'required' | 'fullWidth'> & {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    formHelperTextProps?: FormHelperTextProps;
};
declare function SwitchInput(props: Props): JSX.Element;
export { SwitchInput };
