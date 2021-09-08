import React from 'react';
import { TokenAddresses } from './DependencyContext';
declare type Props = {
    supportedTokens?: TokenAddresses;
    children: React.ReactNode;
};
export declare function DependencyProvider(props: Props): JSX.Element;
export {};
