import { LiquidityAmount } from '@akropolis-web/primitives';
import { AmountInputProps } from './AmountInput/AmountInput';
export declare type LiquidityAmountInputProps = Omit<AmountInputProps<LiquidityAmount>, 'makeAmount' | 'getCurrencyIdentifier' | 'getCurrencyLabel'>;
export declare function LiquidityAmountInput(props: LiquidityAmountInputProps): JSX.Element;
