import * as React from 'react';
import { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { RadioProps } from '@material-ui/core/Radio';
declare type Props = RadioProps & {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    formHelperTextProps?: FormHelperTextProps;
};
declare function RadioButton(props: Props): JSX.Element;
export { RadioButton };
