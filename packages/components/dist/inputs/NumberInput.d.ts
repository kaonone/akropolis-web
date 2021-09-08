import * as React from 'react';
import { NumberFormatValues } from 'react-number-format';
import { Object as O } from 'ts-toolbelt';
import { TextInputProps } from './TextInput';
declare type CustomProps = {
    value: number;
    defaultValue?: number;
    onChange(value: NumberFormatValues): void;
};
declare type NumberProps = {
    allowNegative?: boolean;
    decimalSeparator?: string;
    thousandSeparator?: boolean | string;
    prefix?: string;
    suffix?: string;
    decimalScale?: number;
};
declare type Props = O.Overwrite<TextInputProps, CustomProps> & CustomProps & NumberProps;
declare class NumberInput extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export { NumberInput };
