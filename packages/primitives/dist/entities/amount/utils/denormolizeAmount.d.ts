import { TokenAmount } from '../../TokenAmount';
import { Token } from '../../Token';
import { Amount } from '../Amount';
export declare function denormolizeAmount<T extends Amount>(amount: T, token: Token): TokenAmount;
