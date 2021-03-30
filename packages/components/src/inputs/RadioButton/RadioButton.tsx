import * as React from 'react';
import cn from 'classnames';
import FormHelperText, { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import { A, B } from 'ts-toolbelt';
import { useAncestorBackgroundHack } from '@akropolis-web/styles';

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
  const backgroundColors = useAncestorBackgroundHack();
  const classes = useStyles(backgroundColors);

  return (
    <>
      <FormControlLabel
        control={
          <Radio
            {...radioProps}
            checkedIcon={<span className={cn(classes.icon, classes.iconChecked)} />}
            icon={<span className={classes.icon} />}
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
