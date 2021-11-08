import * as React from 'react';
import cn from 'classnames';
import FormHelperText, { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import { A, B } from 'ts-toolbelt';

import { useStyles } from './RadioButton.style';

type Props = RadioProps & {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  formHelperTextProps?: FormHelperTextProps;
};

type NormalizedProps = {
  formHelperTextProps: FormHelperTextProps | null;
  radioProps: RadioProps;
  other: {
    label: React.ReactNode | null;
    helperText: React.ReactNode;
  };
};

function RadioButton(props: Props) {
  const { formHelperTextProps, radioProps, other } = normalizeProps(props);
  const { label, helperText } = other;
  const { classes: muiClasses, ...rest } = radioProps;
  const classes = useStyles();

  return (
    <>
      <FormControlLabel
        control={
          <Radio
            {...rest}
            classes={{
              ...muiClasses,
              disabled: cn(classes.disabled, muiClasses?.disabled),
            }}
            checkedIcon={
              <span
                className={cn(classes.icon, classes.iconChecked, {
                  [classes.colorSecondary]: radioProps.color === 'secondary',
                })}
              />
            }
            icon={
              <span
                className={cn(classes.icon, {
                  [classes.colorSecondary]: radioProps.color === 'secondary',
                })}
              />
            }
          />
        }
        label={label}
      />
      {helperText && <FormHelperText {...formHelperTextProps}>{helperText}</FormHelperText>}
    </>
  );
}

function normalizeProps(props: Props): NormalizedProps {
  const { helperText = null, label, formHelperTextProps = null, ...rest } = props;

  const radioProps: A.Equals<RadioProps, typeof rest> extends B.True ? RadioProps : unknown = rest;

  return {
    formHelperTextProps,
    radioProps,
    other: { label, helperText },
  };
}

export { RadioButton };
