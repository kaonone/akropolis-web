import { makeStyles } from '@akropolis-web/styles';

export const useStyles = makeStyles(
  () => ({
    root: {},
    title: {
      fontSize: 16,
      marginBottom: 12,

      '$sizeSmall &': {
        fontSize: 12,
        fontWeight: 300,
        marginBottom: 0,
      },
    },
    value: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 32,
      fontWeight: 300,
      lineHeight: 'normal',

      '$sizeSmall &': {
        fontSize: 22,
      },
    },
    subValue: {
      marginTop: 8,
      fontSize: 16,
    },
    chart: {
      marginBottom: 5,
      marginLeft: 10,
      alignSelf: 'flex-end',
    },
    sizeSmall: {},
  }),
  { name: 'Metric' },
);
