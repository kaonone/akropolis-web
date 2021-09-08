import { Token } from './Token';
export declare class AllCoinsToken extends Token {
    readonly tokens?: Token[] | undefined;
    constructor(tokens?: Token[] | undefined, symbol?: string);
}
