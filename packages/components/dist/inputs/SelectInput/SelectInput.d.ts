import { ComponentPropsWithoutRef } from 'react';
import { TextInput } from '../TextInput';
export declare type Option = {
    id: string;
    label: string | JSX.Element;
};
declare type OwnProps = {
    options: Option[];
    disableVariant?: 'text' | 'default';
};
declare type SelectInputProps = OwnProps & ComponentPropsWithoutRef<typeof TextInput>;
export declare function SelectInput(props: SelectInputProps): JSX.Element;
export {};
