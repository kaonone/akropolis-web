import * as React from 'react';
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import FormLabel, { FormLabelProps } from '@material-ui/core/FormLabel';
import RadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup';
import FormHelperText, { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { A, B } from 'ts-toolbelt';

type Props = RadioGroupProps &
  Pick<FormControlProps, 'error' | 'required' | 'fullWidth'> & {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    formLabelProps?: FormLabelProps;
    formHelperTextProps?: FormHelperTextProps;
  };

interface NormalizedProps {
  formControlProps: FormControlProps;
  formHelperTextProps: FormHelperTextProps | null;
  formLabelProps: FormLabelProps | null;
  radioGroupProps: RadioGroupProps;
  other: {
    label: React.ReactNode | null;
    helperText: React.ReactNode;
  };
}

function RadioGroupInput(props: Props) {
  const {
    formControlProps,
    radioGroupProps,
    formLabelProps,
    formHelperTextProps,
    other,
  } = normalizeProps(props);
  const { label, helperText } = other;

  return (
    <FormControl {...formControlProps}>
      {label && <FormLabel {...formLabelProps}>{label}</FormLabel>}
      <RadioGroup {...radioGroupProps} />
      {helperText && <FormHelperText {...formHelperTextProps}>{helperText}</FormHelperText>}
    </FormControl>
  );
}

function normalizeProps(props: Props): NormalizedProps {
  const {
    error,
    helperText = null,
    required,
    label,
    formLabelProps = null,
    formHelperTextProps = null,
    fullWidth,
    ...rest
  } = props;

  const radioGroupProps: A.Equals<RadioGroupProps, typeof rest> extends B.True
    ? RadioGroupProps
    : unknown = rest;
  const formControlProps: FormControlProps = { error, required, fullWidth };

  return {
    formHelperTextProps,
    formControlProps,
    radioGroupProps,
    formLabelProps,
    other: { label, helperText },
  };
}

export { RadioGroupInput };
