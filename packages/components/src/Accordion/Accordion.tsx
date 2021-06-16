import React from 'react';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordion from '@material-ui/core/Accordion';
import { makeStyles } from '@akropolis-web/styles';
import cn from 'classnames';

import { attachStaticFields } from '../temp23/utils/react';
import { Arrow } from '../icons/Arrow';

function AccordionComponent(props: React.ComponentProps<typeof MuiAccordion>) {
  const { children, ...rest } = props;

  return <MuiAccordion {...rest}>{children}</MuiAccordion>;
}

function Summary(props: React.ComponentProps<typeof MuiAccordionSummary>) {
  const classes = useStyles();
  const { classes: muiClasses = {}, children, ...rest } = props;

  return (
    <MuiAccordionSummary
      expandIcon={<Arrow fontSize="inherit" />}
      classes={{
        ...muiClasses,
        root: cn(classes.summary, muiClasses.root),
        content: cn(classes.summaryContent, muiClasses.content),
        expanded: cn(classes.expanded, muiClasses.expanded),
        expandIcon: cn(classes.expandIcon, muiClasses.expandIcon),
      }}
      {...rest}
    >
      {children}
    </MuiAccordionSummary>
  );
}

function Details(props: React.ComponentProps<typeof MuiAccordionDetails>) {
  const classes = useStyles();
  const { classes: muiClasses = {}, children, ...rest } = props;

  return (
    <MuiAccordionDetails
      classes={{ ...muiClasses, root: cn(classes.details, muiClasses.root) }}
      {...rest}
    >
      {children}
    </MuiAccordionDetails>
  );
}

export const Accordion = attachStaticFields(AccordionComponent, {
  Summary,
  Details,
});

const useStyles = makeStyles(
  () => ({
    summary: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: '0 20px',
      fontSize: 16,
    },

    summaryContent: {
      flexGrow: 0,

      '&': {
        margin: '20px 0',
      },

      '&, &$expanded': {
        margin: '20px 0',
      },
    },

    expandIcon: {
      margin: '12px 0',
      fontSize: 16,

      '&$expanded': {
        transform: 'rotate(-90deg)',
      },
    },

    details: {
      padding: '0 20px 20px',
      lineHeight: 1.5,
    },

    expanded: {},
  }),
  { name: 'Accordion' },
);
