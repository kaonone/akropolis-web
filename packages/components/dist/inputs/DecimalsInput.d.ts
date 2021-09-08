import { ComponentPropsWithoutRef } from 'react';
import BN from 'bn.js';
import { IToBN } from '@akropolis-web/primitives';
import { TextInput } from './TextInput';
interface OwnProps {
    baseDecimals: number;
    baseUnitName?: string;
    value: string;
    maxValue?: BN | IToBN;
    onChange: (value: string) => void;
}
declare type Props = OwnProps & Omit<ComponentPropsWithoutRef<typeof TextInput>, 'onChange'>;
declare function DecimalsInput(props: Props): JSX.Element;
export { DecimalsInput };
