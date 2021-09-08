import BN from 'bn.js';
interface ToBnOptions {
    isLe?: boolean;
    isNegative?: boolean;
}
export declare function hexToBn(value?: string | number | null, options?: ToBnOptions | boolean): BN;
export {};
