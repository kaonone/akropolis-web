import * as React from 'react';
import { TooltipClassKey } from '@material-ui/core/Tooltip/Tooltip';
declare type Props = {
    hint?: React.ReactNode;
    fontSize?: 'inherit' | 'medium' | 'large';
    icon?: React.ReactNode;
    classes?: {
        tooltipClasses?: Partial<Record<TooltipClassKey, string>>;
        title?: string;
        tooltipIcon?: string;
        comingSoonLabel?: string;
    };
    inline?: boolean;
    withComingSoon?: boolean;
};
export declare const Label: React.FC<Props>;
export {};
