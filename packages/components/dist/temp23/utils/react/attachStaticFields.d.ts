export declare function attachStaticFields<T extends (...args: any[]) => void, I extends Record<string, unknown>>(target: T, staticFields: I): T & I;
