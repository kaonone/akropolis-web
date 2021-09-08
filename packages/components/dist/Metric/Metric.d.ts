import * as React from 'react';
declare type Props = {
    title: NonNullable<React.ReactNode>;
    value: NonNullable<React.ReactNode>;
    subValue?: React.ReactNode;
    chart?: React.ReactNode;
    size?: 'small' | 'medium';
    variant?: 'condensed' | 'default';
};
export declare function Metric(props: Props): JSX.Element;
export {};
