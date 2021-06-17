import React from 'react';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordion from '@material-ui/core/Accordion';
import { makeStyles } from '@akropolis-web/styles';
import cn from 'classnames';

import { attachStaticFields } from '../temp23/utils/react';
import { Arrow } from '../icons/Arrow';

function AccordionComponent(props: React.ComponentProps<typeof MuiAccordion>) {
  const classes = useStyles();
  const { classes: muiClasses = {}, ...rest } = props;

  return (
    <MuiAccordion
      classes={{
        ...muiClasses,
        root: cn(classes.root, muiClasses.root),
        rounded: cn(classes.rounded, muiClasses.rounded),
        expanded: cn(classes.expanded, muiClasses.expanded),
      }}
      {...rest}
    />
  );
}

function Summary(props: React.ComponentProps<typeof MuiAccordionSummary>) {
  const classes = useStyles();
  const { classes: muiClasses = {}, ...rest } = props;

  return (
    <MuiAccordionSummary
      expandIcon={<Arrow fontSize="inherit" />}
      classes={{
        ...muiClasses,
        root: cn(classes.summary, muiClasses.root),
        content: cn(classes.summaryContent, muiClasses.content),
        expanded: cn(classes.summaryExpanded, muiClasses.expanded),
        expandIcon: cn(classes.expandIcon, muiClasses.expandIcon),
      }}
      {...rest}
    />
  );
}

function Details(props: React.ComponentProps<typeof MuiAccordionDetails>) {
  const classes = useStyles();
  const { classes: muiClasses = {}, ...rest } = props;

  return (
    <MuiAccordionDetails
      classes={{ ...muiClasses, root: cn(classes.details, muiClasses.root) }}
      {...rest}
    />
  );
}

export const Accordion = attachStaticFields(AccordionComponent, {
  Summary,
  Details,
});

const useStyles = makeStyles(
  () => ({
    root: {
      boxShadow: 'none',

      '&$expanded': {
        margin: 0,
      },

      '&:before': {
        display: 'none',
      },
    },

    rounded: {
      borderRadius: '6px !important',
      overflow: 'hidden',
    },

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

      '&, &$summaryExpanded': {
        margin: '20px 0',
      },
    },

    expandIcon: {
      margin: '12px 0',
      fontSize: 16,
      transform: 'rotate(-90deg)',

      '&$summaryExpanded': {
        transform: 'rotate(0deg)',
      },
    },

    details: {
      padding: '0 20px 20px',
      lineHeight: 1.5,
    },

    expanded: {},
    summaryExpanded: {},
  }),
  { name: 'Accordion' },
);
