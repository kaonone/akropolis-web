import BN from 'bn.js';
export declare function roundWei(value: string | BN, decimals: number, variant: 'ceil' | 'floor' | 'half-away-from-zero', significant: number): BN;
