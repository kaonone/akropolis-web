declare type Predicate<T> = (prevValue: T, value: T) => boolean;
declare type Handler<T> = (prevValue: T, value: T) => void;
export declare function useOnChangeState<T extends any>(value: T, needToRunEffect: Predicate<T>, effect: Handler<T>): void;
export {};
