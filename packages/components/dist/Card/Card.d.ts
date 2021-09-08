import React from 'react';
interface CardProps {
    className?: string;
    variant?: 'outlined' | 'contained';
    isActive?: boolean;
    labelIcon?: React.ReactNode;
    label?: React.ReactNode;
    children: React.ReactNode;
    icons?: React.ReactNode[];
}
export declare function Card(props: CardProps): JSX.Element;
export {};
