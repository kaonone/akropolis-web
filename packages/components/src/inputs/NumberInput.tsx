import * as React from 'react';
import * as R from 'ramda';
import NumberFormat, { NumberFormatProps, NumberFormatValues } from 'react-number-format';
import { InputBaseComponentProps } from '@material-ui/core/InputBase';
import { Object as O } from 'ts-toolbelt';

import { TextInput, TextInputProps } from '.';

type CustomProps = {
  value: number;
  defaultValue?: number;
  onChange(value: NumberFormatValues): void;
};

type NumberProps = {
  allowNegative?: boolean;
  decimalSeparator?: string;
  thousandSeparator?: boolean | string;
  prefix?: string;
  suffix?: string;
  decimalScale?: number;
};

type Props = O.Overwrite<TextInputProps, CustomProps> & CustomProps & NumberProps;

const makeNumberInput = R.memoizeWith(R.toString, (ownProps: NumberFormatProps) => {
  return function NumberFormatCustom(
    props: O.Overwrite<InputBaseComponentProps, CustomProps> & CustomProps,
  ): JSX.Element {
    const { inputRef, onChange, ...other } = props;

    return (
      <NumberFormat {...ownProps} {...other} getInputRef={inputRef} onValueChange={onChange} />
    );
  };
});

class NumberInput extends React.PureComponent<Props> {
  public render() {
    const {
      thousandSeparator,
      decimalSeparator,
      allowNegative,
      prefix,
      suffix,
      decimalScale,
      ...rest
    } = this.props;
    return (
      <TextInput
        {...rest}
        onChange={rest.onChange as any}
        InputLabelProps={{
          ...rest.InputLabelProps,
          shrink: prefix ? true : rest.InputLabelProps && rest.InputLabelProps.shrink,
        }}
        InputProps={{
          ...rest.InputProps,
          inputComponent: makeNumberInput({
            prefix,
            suffix,
            thousandSeparator,
            decimalSeparator,
            allowNegative,
            decimalScale,
          }) as any,
        }}
      />
    );
  }
}

export { NumberInput };
