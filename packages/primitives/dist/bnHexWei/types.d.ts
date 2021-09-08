import BN from 'bn.js';
export declare type Decimal = {
    integer: string;
    fractional: string;
};
export interface IBrand {
    _type: symbol;
}
export interface IToBN {
    toBN(): BN;
}
