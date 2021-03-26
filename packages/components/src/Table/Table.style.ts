import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  (theme) => {
    const crossRowBorderStyleForFirstCell = {
      borderImage: `linear-gradient(to right, transparent 50px, ${theme.colors.jaguar} 50px) 1 / 0 0 1 0`,
      border: '1px solid',
    };

    const crossRowBorderStyleForLastCell = {
      borderImage: `linear-gradient(to right, ${theme.colors.jaguar} calc(100% - 50px), transparent calc(100% - 50px)) 1 / 0 0 1 0`,
      border: '1px solid',
    };

    const crossRowBorder = `1px solid ${theme.colors.jaguar}`;

    return {
      root: {
        width: '100%',
        borderSpacing: 0,

        '& $cell:first-child:not($subtableCell)': {
          paddingLeft: 0,
        },
        '& $cell:last-child:not($subtableCell)': {
          paddingRight: 0,
        },
      },

      subtableCell: {},

      withOuterPadding: {
        '& $cell:first-child': {
          paddingLeft: 50,
        },
        '& $cell:last-child': {
          paddingRight: 50,
        },

        '& $topLevelTitle': {
          '&:first-child': crossRowBorderStyleForFirstCell,
          '&:last-child': crossRowBorderStyleForLastCell,
        },
      },

      withStripes: {
        '& tr:not($rowWithExpandedContent):not(:last-child) $cellData': {
          borderBottom: crossRowBorder,
        },

        '&$withOuterPadding tr:not($rowWithExpandedContent):not(:last-child) $cellData': {
          '&:first-child': crossRowBorderStyleForFirstCell,
          '&:last-child': crossRowBorderStyleForLastCell,
        },
      },

      cell: {},

      subtablePaddingFromTitleMedium: {
        paddingTop: 30,
      },

      paddingFromTitleMedium: {
        '& tr:first-child > td': {
          paddingTop: 32,
        },
      },

      paddingFromTitleSmall: {
        '& tr:first-child > td': {
          paddingTop: 20,
        },
      },

      paddingFromTitleExtraSmall: {
        '& tr:first-child > td': {
          paddingTop: 12,
        },
      },

      title: {
        textAlign: 'left',
        fontWeight: 'normal',
        whiteSpace: 'nowrap',
      },

      titlePaddingMedium: {
        padding: '0 10px 20px',
      },

      titlePaddingSmall: {
        padding: '0 10px 20px',
      },

      titlePaddingExtraSmall: {
        padding: '0 10px 10px',
      },

      cellAlignLeft: {
        textAlign: 'left',
      },

      cellAlignRight: {
        textAlign: 'right',
      },

      cellAlignCenter: {
        textAlign: 'center',
      },

      cellVerticalAlignCenter: {
        verticalAlign: 'middle',
      },

      cellVerticalAlignTop: {
        verticalAlign: 'top',
      },

      cellVerticalAlignBottom: {
        verticalAlign: 'bottom',
      },

      topLevelTitle: {
        borderBottom: crossRowBorder,
      },

      subtableRow: {
        backgroundColor: theme.colors.jaguar,

        '&$subtableRowInactive': {
          opacity: 0,
          lineHeight: '0.001px',

          '& $cell': {
            paddingTop: '0px',
            paddingBottom: '0px',
          },
        },
      },

      subtableRowInactive: {},

      divideDown: {
        '& $cell': {
          paddingBottom: 25,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },

      divideUp: {
        '& $cell': {
          paddingTop: 25,
        },
      },

      lastSubtableRow: {
        '& $cell': {
          paddingBottom: 30,
        },
      },

      cellData: {
        fontWeight: 300,
      },

      cellPaddingMedium: {
        padding: '26px 10px',
      },

      cellPaddingSmall: {
        padding: '13px 10px',
      },

      cellPaddingExtraSmall: {
        padding: '6px 10px',
      },

      singleCellExpandedArea: {
        padding: '32px 50px 23px',
        backgroundColor: theme.colors.jaguar,
      },

      summaryCell: {
        paddingTop: 30,
      },

      rowBeforeSummary: {
        '&:not($rowWithExpandedContent) $cell': {
          borderBottom: crossRowBorder,

          '$withOuterPadding &:first-child': crossRowBorderStyleForFirstCell,
          '$withOuterPadding &:last-child': crossRowBorderStyleForLastCell,
        },
      },

      rowWithExpandedContent: {},
    };
  },
  { name: 'Table' },
);
