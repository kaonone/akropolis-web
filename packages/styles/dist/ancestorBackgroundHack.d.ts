import React from 'react';
export declare function useAncestorBackgroundHack(): string;
declare type Props = {
    backgroundColor: string | null;
    children: React.ReactNode;
};
export declare function AncestorBackgroundHackProvider(props: Props): JSX.Element;
export declare type ProvidedAncestorBackground = {
    backgroundColor: string;
};
export {};
