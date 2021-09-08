import { IBrand } from '../bnHexWei';
declare const uniqType: unique symbol;
export interface ICurrency {
    readonly symbol: string;
    readonly decimals: number;
    toJSON(): {
        _type: string;
    };
    equals(a: this): boolean;
}
export declare class Currency implements ICurrency, IBrand {
    readonly symbol: string;
    readonly decimals: number;
    _type: typeof uniqType;
    constructor(symbol: string, decimals: number);
    toJSON(): {
        _type: string;
    };
    equals(a: Currency): boolean;
}
export {};
