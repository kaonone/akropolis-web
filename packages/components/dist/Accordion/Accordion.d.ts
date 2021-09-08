import React from 'react';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordion from '@material-ui/core/Accordion';
declare function AccordionComponent(props: React.ComponentProps<typeof MuiAccordion>): JSX.Element;
declare function Summary(props: React.ComponentProps<typeof MuiAccordionSummary>): JSX.Element;
declare function Details(props: React.ComponentProps<typeof MuiAccordionDetails>): JSX.Element;
export declare const Accordion: typeof AccordionComponent & {
    Summary: typeof Summary;
    Details: typeof Details;
};
export {};
