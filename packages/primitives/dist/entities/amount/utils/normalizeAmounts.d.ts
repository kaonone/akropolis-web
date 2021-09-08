import { Amount, NormalizedAmount } from '../Amount';
export declare function normalizeAmounts<T extends Amount>(amounts: T[], decimals?: number): NormalizedAmount<T>[];
