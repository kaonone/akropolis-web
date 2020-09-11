import * as React from 'react';
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import FormHelperText, { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { A, B } from 'ts-toolbelt';
import { useAncestorBackgroundHack } from '@akropolis-web/styles';

import { CheckmarkIcon } from '../../icons';
import { useStyles } from './CheckboxInput.style';

type Props = CheckboxProps &
  Pick<FormControlProps, 'error' | 'required' | 'fullWidth'> & {
    label: React.ReactNode;
    helperText?: React.ReactNode;
    formHelperTextProps?: FormHelperTextProps;
  };

interface NormalizedProps {
  checkboxProps: CheckboxProps;
  formControlProps: FormControlProps;
  formHelperTextProps: FormHelperTextProps | null;
  other: {
    label: React.ReactNode | null;
    helperText: React.ReactNode;
  };
}

function CheckboxInput(props: Props) {
  const { formControlProps, formHelperTextProps, checkboxProps, other } = normalizeProps(props);
  const { label, helperText } = other;

  const backgroundColor = useAncestorBackgroundHack();
  const classes = useStyles({ backgroundColor });

  return (
    <FormControl {...formControlProps}>
      <FormControlLabel
        control={
          <Checkbox
            {...checkboxProps}
            classes={{
              root: classes.root,
              disabled: classes.disabled,
              checked: classes.checked,
            }}
            icon={<span className={classes.icon} />}
            checkedIcon={
              <span className={classes.icon}>
                <CheckmarkIcon fontSize="inherit" />
              </span>
            }
          />
        }
        label={
          checkboxProps.required ? (
            <>
              {label}
              {' *'}
            </>
          ) : (
            label
          )
        }
      />
      {helperText && <FormHelperText {...formHelperTextProps}>{helperText}</FormHelperText>}
    </FormControl>
  );
}

function normalizeProps(props: Props): NormalizedProps {
  const { error, helperText = null, label, formHelperTextProps = null, fullWidth, ...rest } = props;

  const checkboxProps: A.Equals<CheckboxProps, typeof rest> extends B.True
    ? CheckboxProps
    : unknown = rest;
  const formControlProps: FormControlProps = { error, required: rest.required, fullWidth };

  return {
    formHelperTextProps,
    formControlProps,
    checkboxProps,
    other: { label, helperText },
  };
}

export { CheckboxInput };
