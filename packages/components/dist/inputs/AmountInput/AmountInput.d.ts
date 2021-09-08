import { ComponentPropsWithoutRef } from 'react';
import BN from 'bn.js';
import { Amount, IToBN } from '@akropolis-web/primitives';
import { TextInput } from '../TextInput';
interface IOwnProps<A extends Amount> {
    currencies: Array<A['currency']>;
    value: A | null | '';
    maxValue?: BN | IToBN;
    allowedMax?: BN;
    hideCurrencySelect?: boolean;
    displayVariant?: 'default' | 'table-cell';
    disabledAlert?: string;
    onChange: (value: A) => void;
    makeAmount(value: BN, currency: A['currency']): A;
    getCurrencyIdentifier(currency: A['currency']): string;
    getCurrencyLabel(currency: A['currency']): JSX.Element | string;
}
export declare type AmountInputProps<A extends Amount> = IOwnProps<A> & Omit<ComponentPropsWithoutRef<typeof TextInput>, 'onChange'>;
export declare function AmountInput<A extends Amount>(props: AmountInputProps<A>): JSX.Element;
export {};
