import { TokenAmount } from '@akropolis-web/primitives';
import { AmountInputProps } from './AmountInput/AmountInput';
export declare type TokenAmountInputProps = Omit<AmountInputProps<TokenAmount>, 'makeAmount' | 'getCurrencyIdentifier' | 'getCurrencyLabel'> & {
    allowSelectAllToken?: boolean;
};
export declare function TokenAmountInput(props: TokenAmountInputProps): JSX.Element;
