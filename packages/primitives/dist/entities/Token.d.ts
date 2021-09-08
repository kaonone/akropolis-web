import { IBrand } from '../bnHexWei';
import { ICurrency } from './Currency';
declare const uniqType: unique symbol;
export declare type Network = 'eth' | 'bsc';
export declare class Token implements ICurrency, IBrand {
    readonly address: string;
    readonly symbol: string;
    readonly decimals: number;
    readonly network: Network;
    _type: typeof uniqType;
    constructor(address: string, symbol: string, decimals: number, network: Network);
    toJSON(): TokenJSONView;
    equals(a: Token): boolean;
}
interface TokenJSONView {
    _type: 'Token';
    address: string;
    symbol: string;
    decimals: number;
    network: Network;
}
export {};
