import * as React from 'react';
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import FormHelperText, { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch, { SwitchProps } from '@material-ui/core/Switch';
import { A, B } from 'ts-toolbelt';
import { useAncestorBackgroundHack } from '@akropolis-web/styles';

import { useStyles } from './SwitchInput.style';

type Props = SwitchProps &
  Pick<FormControlProps, 'error' | 'required' | 'fullWidth'> & {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    formHelperTextProps?: FormHelperTextProps;
  };

interface NormalizedProps {
  formControlProps: FormControlProps;
  formHelperTextProps: FormHelperTextProps | null;
  switchProps: SwitchProps;
  other: {
    label: React.ReactNode | null;
    helperText: React.ReactNode;
  };
}

function SwitchInput(props: Props) {
  const { formControlProps, formHelperTextProps, switchProps, other } = normalizeProps(props);
  const { label, helperText } = other;

  const backgroundColor = useAncestorBackgroundHack();
  const classes = useStyles({ backgroundColor });

  return (
    <FormControl {...formControlProps}>
      <FormControlLabel
        classes={{ label: classes.label }}
        control={
          <Switch
            {...switchProps}
            classes={{
              root: classes.root,
              switchBase: classes.switchBase,
              checked: classes.checked,
              thumb: classes.thumb,
              track: classes.track,
            }}
          />
        }
        label={label}
      />
      {helperText && <FormHelperText {...formHelperTextProps}>{helperText}</FormHelperText>}
    </FormControl>
  );
}

function normalizeProps(props: Props): NormalizedProps {
  const { error, helperText = null, label, formHelperTextProps = null, fullWidth, ...rest } = props;

  const switchProps: A.Equals<SwitchProps, typeof rest> extends B.True
    ? SwitchProps
    : unknown = rest;
  const formControlProps: FormControlProps = { error, required: rest.required, fullWidth };

  return {
    formHelperTextProps,
    formControlProps,
    switchProps,
    other: { label, helperText },
  };
}

export { SwitchInput };
