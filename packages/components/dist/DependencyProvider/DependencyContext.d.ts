/// <reference types="react" />
declare type TokenSymbol = string;
declare type TokenAddress = string;
export declare type TokenAddresses = Record<TokenSymbol, TokenAddress>;
export declare const DependencyContext: import("react").Context<DependencyContext | null>;
export interface DependencyContext {
    supportedTokens: TokenAddresses;
}
export declare function useDependencyContext(): DependencyContext;
export {};
