'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var R = require('ramda');
var cn = _interopDefault(require('classnames'));
var styles$2 = require('@akropolis-web/styles');
var Button$1 = _interopDefault(require('@material-ui/core/Button'));
var SvgIcon = _interopDefault(require('@material-ui/core/SvgIcon'));
var Box = _interopDefault(require('@material-ui/core/Box'));
var ButtonBase = _interopDefault(require('@material-ui/core/ButtonBase'));
var CircularProgress = _interopDefault(require('@material-ui/core/CircularProgress'));
var CssBaseline = _interopDefault(require('@material-ui/core/CssBaseline'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var Link = _interopDefault(require('@material-ui/core/Link'));
var Divider = _interopDefault(require('@material-ui/core/Divider'));
var ReactDOM = _interopDefault(require('react-dom'));
var lab = require('@material-ui/lab');
var TabScrollButton = _interopDefault(require('@material-ui/core/TabScrollButton'));
var Tab$1 = _interopDefault(require('@material-ui/core/Tab'));
var TabContext$1 = _interopDefault(require('@material-ui/lab/TabContext'));
var TabPanel = _interopDefault(require('@material-ui/lab/TabPanel'));
var Tooltip = _interopDefault(require('@material-ui/core/Tooltip'));
var ClickAwayListener = _interopDefault(require('@material-ui/core/ClickAwayListener'));
var MersenneTwister = _interopDefault(require('mersenne-twister'));
var Color = _interopDefault(require('color'));
var CopyToClipboard = _interopDefault(require('react-copy-to-clipboard'));
var Grid = _interopDefault(require('@material-ui/core/Grid'));
var Avatar = _interopDefault(require('@material-ui/core/Avatar'));
var styles$3 = require('@material-ui/styles');
var primitives = require('@akropolis-web/primitives');
var MuiDialogContent = _interopDefault(require('@material-ui/core/DialogContent'));
var MuiSkeleton = _interopDefault(require('@material-ui/lab/Skeleton'));
var MuiAccordionSummary = _interopDefault(require('@material-ui/core/AccordionSummary'));
var MuiAccordionDetails = _interopDefault(require('@material-ui/core/AccordionDetails'));
var MuiAccordion = _interopDefault(require('@material-ui/core/Accordion'));
var TextInput = _interopDefault(require('@material-ui/core/TextField'));
var NumberFormat = _interopDefault(require('react-number-format'));
var BN = _interopDefault(require('bn.js'));
var FormControl = _interopDefault(require('@material-ui/core/FormControl'));
var FormHelperText = _interopDefault(require('@material-ui/core/FormHelperText'));
var FormControlLabel = _interopDefault(require('@material-ui/core/FormControlLabel'));
var Checkbox = _interopDefault(require('@material-ui/core/Checkbox'));
var FormLabel = _interopDefault(require('@material-ui/core/FormLabel'));
var RadioGroup = _interopDefault(require('@material-ui/core/RadioGroup'));
var Radio = _interopDefault(require('@material-ui/core/Radio'));
var Switch = _interopDefault(require('@material-ui/core/Switch'));
var MenuItem = _interopDefault(require('@material-ui/core/MenuItem'));
var Grid$1 = _interopDefault(require('@material-ui/core/Grid/Grid'));
var pickers = require('@material-ui/pickers');
var DateFnsUtils = _interopDefault(require('@date-io/date-fns'));



var models = {
  __proto__: null
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var useStyles = /*#__PURE__*/styles$2.makeStyles(function (theme) {
  var crossRowBorderStyleForFirstCell = {
    borderImage: "linear-gradient(to right, transparent 50px, " + theme.colors.jaguar + " 50px) 1 / 0 0 1 0",
    border: '1px solid'
  };
  var crossRowBorderStyleForLastCell = {
    borderImage: "linear-gradient(to right, " + theme.colors.jaguar + " calc(100% - 50px), transparent calc(100% - 50px)) 1 / 0 0 1 0",
    border: '1px solid'
  };
  var crossRowBorder = "1px solid " + theme.colors.jaguar;
  return {
    root: {
      width: '100%',
      borderSpacing: 0,
      '& $cell:first-child:not($subtableCell)': {
        paddingLeft: 0
      },
      '& $cell:last-child:not($subtableCell)': {
        paddingRight: 0
      }
    },
    subtableCell: {},
    withOuterPadding: {
      '& $cell:first-child': {
        paddingLeft: 50
      },
      '& $cell:last-child': {
        paddingRight: 50
      },
      '& $topLevelTitle': {
        '&:first-child': crossRowBorderStyleForFirstCell,
        '&:last-child': crossRowBorderStyleForLastCell
      }
    },
    withStripes: {
      '& tr:not($rowWithExpandedContent):not(:last-child) $cellData': {
        borderBottom: crossRowBorder
      },
      '&$withOuterPadding tr:not($rowWithExpandedContent):not(:last-child) $cellData': {
        '&:first-child': crossRowBorderStyleForFirstCell,
        '&:last-child': crossRowBorderStyleForLastCell
      }
    },
    cell: {},
    subtablePaddingFromTitleMedium: {
      paddingTop: 30
    },
    paddingFromTitleMedium: {
      '& tr:first-child > td': {
        paddingTop: 32
      }
    },
    paddingFromTitleSmall: {
      '& tr:first-child > td': {
        paddingTop: 20
      }
    },
    paddingFromTitleExtraSmall: {
      '& tr:first-child > td': {
        paddingTop: 12
      }
    },
    title: {
      textAlign: 'left',
      fontWeight: 'normal',
      whiteSpace: 'nowrap'
    },
    titlePaddingMedium: {
      padding: '0 10px 20px'
    },
    titlePaddingSmall: {
      padding: '0 10px 20px'
    },
    titlePaddingExtraSmall: {
      padding: '0 10px 10px'
    },
    cellAlignLeft: {
      textAlign: 'left'
    },
    cellAlignRight: {
      textAlign: 'right'
    },
    cellAlignCenter: {
      textAlign: 'center'
    },
    cellVerticalAlignCenter: {
      verticalAlign: 'middle'
    },
    cellVerticalAlignTop: {
      verticalAlign: 'top'
    },
    cellVerticalAlignBottom: {
      verticalAlign: 'bottom'
    },
    topLevelTitle: {
      borderBottom: crossRowBorder
    },
    subtableRow: {
      backgroundColor: theme.colors.jaguar,
      '&$subtableRowInactive': {
        opacity: 0,
        lineHeight: '0.001px',
        '& $cell': {
          paddingTop: '0px',
          paddingBottom: '0px'
        }
      }
    },
    subtableRowInactive: {},
    divideDown: {
      '& $cell': {
        paddingBottom: 25,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }
    },
    divideUp: {
      '& $cell': {
        paddingTop: 25
      }
    },
    lastSubtableRow: {
      '& $cell': {
        paddingBottom: 30
      }
    },
    cellData: {
      fontWeight: 300
    },
    cellPaddingMedium: {
      padding: '26px 10px'
    },
    cellPaddingSmall: {
      padding: '13px 10px'
    },
    cellPaddingExtraSmall: {
      padding: '6px 10px'
    },
    singleCellExpandedArea: {
      padding: '32px 50px 23px',
      backgroundColor: theme.colors.jaguar
    },
    summaryCell: {
      paddingTop: 30
    },
    rowBeforeSummary: {
      '&:not($rowWithExpandedContent) $cell': {
        borderBottom: crossRowBorder,
        '$withOuterPadding &:first-child': crossRowBorderStyleForFirstCell,
        '$withOuterPadding &:last-child': crossRowBorderStyleForLastCell
      }
    },
    rowWithExpandedContent: {}
  };
}, {
  name: 'Table'
});

function InfoIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "nonzero",
    d: "M10 18c4.38 0 8-3.62 8-8s-3.63-8-8-8-8 3.62-8 8 3.63 8 8 8zM9.94 7.27c-.57 0-1.03-.47-1.03-1.04 0-.58.46-1.04 1.03-1.04.58 0 1.03.46 1.03 1.04 0 .57-.45 1.04-1.03 1.04zm1.86 7H8.63a.57.57 0 0 1-.59-.57c0-.31.26-.56.59-.56h.95V9.67h-.81a.57.57 0 0 1-.59-.57c0-.32.26-.56.59-.56h1.47c.4 0 .63.28.63.72v3.88h.93c.33 0 .6.25.6.56 0 .34-.27.58-.6.58z"
  })));
}

function Arrow(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 13 7"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M6.504 7c.212 0 .408-.09.558-.239l5.718-5.553c.141-.135.22-.306.22-.5C13 .306 12.678 0 12.254 0c-.197 0-.393.075-.534.209L6.504 5.278 1.28.208C1.14.076.958 0 .746 0 .33 0 0 .306 0 .708c0 .194.079.365.22.5L5.938 6.76c.165.157.346.239.566.239z"
  }));
}

function CheckmarkIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 15 14"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "nonzero",
    d: "M5.98 13.29c.43 0 .76-.17.99-.52L13.9 2.04c.17-.26.24-.49.24-.7 0-.57-.41-.98-1-.98-.4 0-.64.14-.89.53l-6.3 9.98-3.22-4.1a.97.97 0 0 0-.84-.43c-.58 0-1 .42-1 .99 0 .25.08.49.29.74l3.83 4.73c.27.33.57.49.97.49z"
  }));
}

function AlertIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      props = _objectWithoutPropertiesLoose(_ref, ["color"]);

  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 16 15"
  }), React.createElement("path", {
    fill: getColor(color),
    d: "M13.945 14.406c1.117 0 1.828-.812 1.828-1.836 0-.304-.078-.61-.242-.898L9.72 1.273C9.383.664 8.766.343 8.14.343c-.618 0-1.243.313-1.579.93L.758 11.68c-.172.28-.25.586-.25.89 0 1.024.71 1.836 1.828 1.836h11.61zM8.141 9.32c-.399 0-.625-.226-.641-.64l-.11-3.563c-.015-.414.305-.719.743-.719.437 0 .765.313.75.727l-.11 3.555c-.015.422-.242.64-.632.64zm0 2.742c-.446 0-.852-.335-.852-.812 0-.469.399-.813.852-.813.453 0 .851.336.851.813 0 .477-.406.813-.851.813z"
  }));
}

function getColor(color) {
  switch (color) {
    case 'secondary':
      return '#FED798';

    case 'inherit':
      return 'inherit';

    default:
      return '#FF5959';
  }
}

function HistoryIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 24 24"
  }), React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    fill: "#0A0A0E",
    fillOpacity: ".01",
    d: "M0 0H24V24H0z",
    transform: "translate(-622 -305) translate(521 279) translate(0 20) translate(101 6)"
  }), React.createElement("path", {
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M17.975 19.188c.85 0 1.486-.211 1.911-.633.425-.422.637-1.05.637-1.881V6.514c0-.832-.212-1.46-.637-1.881C19.461 4.21 18.824 4 17.975 4H6.549c-.85 0-1.487.21-1.912.628C4.212 5.048 4 5.676 4 6.514v10.16c0 .838.212 1.466.637 1.885.425.419 1.062.628 1.912.628h11.426zm.096-1.213H6.443c-.398 0-.701-.104-.91-.312-.207-.208-.311-.517-.311-.928V9.001c0-.416.104-.728.312-.936.208-.208.51-.312.91-.312H18.07c.393 0 .698.104.914.312.217.208.326.52.326.936v7.734c0 .41-.109.72-.326.928-.216.208-.521.312-.914.312zm-6.952-7.251c.14 0 .236-.024.286-.07.05-.048.074-.141.074-.282V9.88c0-.14-.024-.236-.074-.286-.05-.05-.145-.074-.286-.074h-.492c-.14 0-.237.024-.29.074-.053.05-.08.145-.08.286v.492c0 .14.027.234.08.281.053.047.15.07.29.07h.492zm2.777 0c.141 0 .236-.024.286-.07.05-.048.075-.141.075-.282V9.88c0-.14-.025-.236-.075-.286-.05-.05-.145-.074-.286-.074h-.492c-.14 0-.236.024-.285.074-.05.05-.075.145-.075.286v.492c0 .14.025.234.075.281.05.047.145.07.285.07h.492zm2.778 0c.14 0 .239-.024.294-.07.056-.048.084-.141.084-.282V9.88c0-.14-.028-.236-.084-.286-.055-.05-.154-.074-.294-.074h-.484c-.14 0-.235.024-.285.074-.05.05-.075.145-.075.286v.492c0 .14.025.234.075.281.05.047.145.07.285.07h.484zm-8.35 2.742c.14 0 .239-.025.295-.075.055-.05.083-.145.083-.286v-.483c0-.14-.028-.234-.083-.281-.056-.047-.154-.07-.295-.07h-.483c-.14 0-.236.023-.286.07-.05.047-.075.14-.075.281v.483c0 .141.025.236.075.286.05.05.145.075.286.075h.483zm2.795 0c.14 0 .236-.025.286-.075.05-.05.074-.145.074-.286v-.483c0-.14-.024-.234-.074-.281-.05-.047-.145-.07-.286-.07h-.492c-.14 0-.237.023-.29.07-.053.047-.08.14-.08.281v.483c0 .141.027.236.08.286.053.05.15.075.29.075h.492zm2.777 0c.141 0 .236-.025.286-.075.05-.05.075-.145.075-.286v-.483c0-.14-.025-.234-.075-.281-.05-.047-.145-.07-.286-.07h-.492c-.14 0-.236.023-.285.07-.05.047-.075.14-.075.281v.483c0 .141.025.236.075.286.05.05.145.075.285.075h.492zm2.778 0c.14 0 .239-.025.294-.075.056-.05.084-.145.084-.286v-.483c0-.14-.028-.234-.084-.281-.055-.047-.154-.07-.294-.07h-.484c-.14 0-.235.023-.285.07-.05.047-.075.14-.075.281v.483c0 .141.025.236.075.286.05.05.145.075.285.075h.484zm-8.35 2.742c.14 0 .239-.025.295-.075.055-.05.083-.142.083-.277v-.492c0-.14-.028-.236-.083-.285-.056-.05-.154-.075-.295-.075h-.483c-.14 0-.236.025-.286.075-.05.05-.075.145-.075.285v.492c0 .135.025.227.075.277.05.05.145.075.286.075h.483zm2.795 0c.14 0 .236-.025.286-.075.05-.05.074-.142.074-.277v-.492c0-.14-.024-.236-.074-.285-.05-.05-.145-.075-.286-.075h-.492c-.14 0-.237.025-.29.075-.053.05-.08.145-.08.285v.492c0 .135.027.227.08.277.053.05.15.075.29.075h.492zm2.777 0c.141 0 .236-.025.286-.075.05-.05.075-.142.075-.277v-.492c0-.14-.025-.236-.075-.285-.05-.05-.145-.075-.286-.075h-.492c-.14 0-.236.025-.285.075-.05.05-.075.145-.075.285v.492c0 .135.025.227.075.277.05.05.145.075.285.075h.492z",
    opacity: ".5",
    transform: "translate(-622 -305) translate(521 279) translate(0 20) translate(101 6)"
  }))));
}

function BSCIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", null, React.createElement("g", {
    transform: "translate(-1172 -32) translate(1172.5 32.5)"
  }, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "#4D4D4D"
  }), React.createElement("path", {
    fill: "#F3BA2F",
    d: "M6.868 8.713L10 5.58l3.132 3.135 1.823-1.822L10 1.935 5.045 6.89l1.823 1.823zM1.935 10l1.823-1.823L5.581 10l-1.823 1.823L1.935 10zm4.933 1.287L10 14.42l3.132-3.135 1.826 1.822L10 18.065 5.045 13.11l-.003-.004 1.826-1.819zM14.419 10l1.823-1.823L18.065 10l-1.823 1.823L14.419 10z"
  }), React.createElement("path", {
    fill: "#F3BA2F",
    d: "M12.032 10L12.032 10 10 7.961 8.497 9.468 8.497 9.468 8.323 9.642 7.965 10 7.961 10.003 7.965 10.006 9.997 12.039 12.032 10.003 12.032 10.003 12.032 10.003z"
  })))));
}

function makeRandomID(label) {
  return label + "_" + Math.floor(Math.random() * 1000000000);
}

function ADELIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var gradientId = React.useMemo(function () {
    return makeRandomID('ADELIcon');
  }, []);
  var fillColor = inactive ? '#191924' : "url(#" + gradientId + ")";
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientId,
    x1: "91.693%",
    x2: "0%",
    y1: "50%",
    y2: "50%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#4136DE"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#8183FF"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M0 0H20V20H0z"
  }), React.createElement("path", {
    fill: fillColor,
    d: "M9.991.015c.347 0 .724.091 1.04.274l7.147 3.99c.63.365 1.04 1.005 1.04 1.735v8.009c0 .7-.41 1.37-1.04 1.736l-7.148 3.958c-.314.183-.673.277-1.039.274-.365 0-.723-.095-1.039-.274l-7.147-3.989c-.63-.366-1.04-1.005-1.04-1.736V6.014c0-.7.41-1.37 1.04-1.735L8.984.289C9.288.111 9.636.016 9.99.015z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M15.396 9.517c0 .328-.14.627-.367.853v2.039c0 1.227-.602 2.171-1.117 2.715-.378.399-1.123.939-1.963 1.198l-.004.074c-.052.7-.345 1.074-.877 1.124l-.127.005h-.605v1.942h-.523v-1.942h-.54c-.66 0-1.012-.4-1.053-1.202-.749-.192-1.478-.536-1.993-1.032-.715-.688-1.131-1.618-1.187-2.55l-.007-.214v-2.123c-.25-.23-.403-.542-.403-.887 0-.661.564-1.205 1.284-1.266l.085-.006h2.668v-.524H6.001c.002-.285.005-.5.01-.606l.008-.142h2.648V6.45H6.083c.19-1.053.762-2.062 2.083-2.484v.838h.524l-.001-.966c.232-.042.483-.068.754-.077l.214-.002.154-.002v1.047h.523V3.756l.12.001.184.002c.295.009.568.041.819.095l-.001.95h.523l.002-.799c1.199.45 1.779 1.444 1.973 2.444h-2.595v.524h2.663l.007.142.001.598-2.671.008v.524h2.616c.785 0 1.42.57 1.42 1.272zm-6.679 6.898l.012.094c.067.383.27.543.714.543h1.327c.318 0 .53-.06.651-.293.048-.09.043-.198.045-.324-.15.025-.303.038-.455.038-.306 0-.38-.007-.892 0-.063 0-.353.016-.798 0-.197-.007-.4-.027-.604-.058zm-2.714-5.101l2.664-.002v-.523H6.001v-.003l-.124-.007c-.114-.012-.224-.037-.328-.072v1.702c0 .733.291 1.675.97 2.353.68.679 1.786 1.18 2.694 1.176.908-.005.849 0 .906 0 .464-.007.712-.005.989-.021.871-.05 1.842-.577 2.372-1.155.53-.577 1.045-1.332 1.045-2.353v-1.72c-.127.049-.263.08-.405.093l-.088.006H11.36v.524h2.673v.748H11.36v.524h2.653c-.129 1.05-.852 2.05-2.032 2.53v-.66h-.524v.83c-.283.07-.586.114-.91.125l-.21.002-.002-.956h-.523v.957H9.8c-.121 0-.252-.002-.29-.003-.292-.009-.565-.041-.82-.094v-.86h-.524v.715c-1.294-.455-2.018-1.492-2.142-2.585h2.643v-.524l-2.662.001-.002-.748zm4.038-2.639c-.044 0-.085.01-.123.033l-.582.333-.051.038c-.046.045-.072.106-.072.171v.663l.009.063c.016.061.057.114.114.146l.582.33.04.019c.026.01.054.014.083.014.044 0 .085-.01.123-.033l.582-.33.051-.038c.045-.045.072-.106.072-.171V9.25l-.009-.063c-.016-.061-.057-.114-.114-.146l-.582-.333-.04-.017c-.026-.01-.054-.016-.083-.016zm3.99.095v.522h-1.626v.524h1.626l.001.436.156-.011c.358-.085.623-.377.623-.724 0-.397-.345-.72-.78-.747zm-8.06-.001c-.479 0-.867.335-.867.748 0 .347.274.64.647.724l.22-.001v-.424H7.7v-.524H5.97v-.523z"
  })));
}

function AKROIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var theme = styles$2.useTheme();
  var gradientId = React.useMemo(function () {
    return makeRandomID('AKROIcon');
  }, []);
  var fillColor = inactive ? '#191924' : "url(#" + gradientId + ")";
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 20 20"
  }), theme.gradients.main.svgLinear(gradientId), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M0 0H20V20H0z"
  }), React.createElement("path", {
    fill: fillColor,
    d: "M9.972 0c.346 0 .724.091 1.038.274l7.145 3.99c.629.366 1.038 1.005 1.038 1.736v8.01c0 .7-.409 1.371-1.038 1.737l-7.145 3.959c-.314.182-.673.277-1.038.274-.365 0-.723-.095-1.039-.274l-7.144-3.99C1.159 15.35.75 14.711.75 13.98V6c0-.7.41-1.37 1.039-1.736L8.964.274C9.27.096 9.617.001 9.972 0z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M9.945 1.632c.409 0 .793.117 1.154.304l5.453 3.086c.714.395 1.154 1.137 1.153 1.94v6.148c.001.804-.44 1.545-1.153 1.94l-5.453 3.063c-.36.21-.745.304-1.154.304-.408 0-.792-.093-1.153-.304L3.34 15.051c-.714-.396-1.154-1.137-1.153-1.94V6.961c-.001-.803.44-1.545 1.153-1.94l5.453-3.086c.36-.21.745-.304 1.153-.304zm0 .724c-.27.001-.536.074-.768.211L3.699 5.63c-.48.28-.793.794-.793 1.332v6.125c0 .561.313 1.052.793 1.332l5.454 3.063c.24.137.514.21.792.21.28.003.554-.07.793-.21l5.454-3.04c.48-.28.793-.794.793-1.332V6.962c0-.56-.313-1.052-.793-1.332l-5.454-3.063c-.24-.14-.528-.21-.793-.21zm.039 1.996c.216 0 .432.046.624.186l3.912 2.187c.384.21.624.605.624 1.047v4.373c0 .42-.24.838-.624 1.047l-3.912 2.187c-.192.117-.408.163-.624.163-.216 0-.432-.046-.624-.163l-3.912-2.187c-.384-.21-.624-.604-.624-1.047V7.75c0-.42.24-.838.624-1.048L9.36 4.515c.192-.117.408-.163.624-.163zm0 .605c-.096 0-.216.023-.312.093L5.784 7.237c-.192.116-.312.326-.312.535v4.397c0 .232.12.418.312.535l3.912 2.187c.096.07.192.093.312.093s.216-.047.312-.093l3.913-2.187c.19-.116.307-.317.311-.535V7.772c0-.233-.12-.419-.312-.535L10.296 5.05c-.096-.07-.192-.093-.312-.093zm.04 2.115c.119 0 .215.023.31.093l2.016 1.117c.19.115.307.317.311.535v2.259c0 .233-.12.419-.311.535l-2.015 1.118c-.096.07-.192.093-.312.093-.096 0-.216-.047-.312-.093L7.696 11.61c-.192-.116-.311-.326-.311-.535V8.817c0-.232.12-.418.311-.535l2.015-1.117c.096-.07.192-.093.312-.093zm.023.558h-.048L7.984 8.747l-.024 2.305L10 12.217l2.062-1.118.024-2.305-2.04-1.164z"
  })));
}

function BALIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var Icon = inactive ? InactiveBALIcon : ActiveBALIcon;
  return React.createElement(Icon, Object.assign({}, svgProps));
}

function ActiveBALIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "#21222B"
  }), React.createElement("g", {
    fill: "#FFF",
    fillRule: "nonzero",
    transform: "translate(2.5 3.5)"
  }, React.createElement("path", {
    d: "M10.598 7.477c2.648.392 4.496 1.278 4.496 2.308 0 1.392-3.379 2.521-7.547 2.521C3.379 12.306 0 11.177 0 9.785c0-1.03 1.848-1.916 4.496-2.308.91.185 1.948.29 3.051.29 1.075 0 2.09-.1 2.983-.276l.068-.014zM9.457 3.33c2.398.268 4.128 1.024 4.128 1.915 0 1.115-2.704 2.018-6.038 2.018S1.509 6.36 1.509 5.245c0-.89 1.73-1.647 4.128-1.914.587.096 1.233.15 1.91.15.654 0 1.277-.05 1.848-.14l.062-.01z"
  }), React.createElement("ellipse", {
    cx: "4.528",
    cy: "1.513",
    rx: "4.528",
    ry: "1.513",
    transform: "translate(3.019 .05)"
  }))));
}

function InactiveBALIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "#191924"
  }), React.createElement("path", {
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M13.098 10.977c2.648.392 4.496 1.278 4.496 2.308 0 1.392-3.379 2.521-7.547 2.521-4.168 0-7.547-1.129-7.547-2.521 0-1.03 1.848-1.916 4.496-2.308.91.185 1.948.29 3.051.29 1.075 0 2.09-.1 2.983-.276l.068-.014zM11.957 6.83c2.398.268 4.128 1.024 4.128 1.915 0 1.115-2.704 2.018-6.038 2.018S4.009 9.86 4.009 8.745c0-.89 1.73-1.647 4.128-1.914.587.096 1.233.15 1.91.15.654 0 1.277-.05 1.848-.14l.062-.01z"
  }), React.createElement("ellipse", {
    cx: "10.047",
    cy: "5.064",
    fill: "#FFF",
    fillRule: "nonzero",
    rx: "4.528",
    ry: "1.513"
  })));
}

function BUSDIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var gradientId = React.useMemo(function () {
    return makeRandomID('BUSDIcon');
  }, []);
  var fillColor0 = inactive ? '#191924' : "url(#" + gradientId + ")";
  var fillColor1 = inactive ? '#FFF' : '#000';
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientId,
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FFEEB8"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#FECB27"
  }))), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: fillColor0,
    d: "M9.987 0c5.517 0 9.988 4.472 9.988 9.987 0 5.517-4.471 9.988-9.988 9.988C4.472 19.975 0 15.503 0 9.987 0 4.472 4.472 0 9.987 0z"
  }), React.createElement("g", {
    fill: fillColor1
  }, React.createElement("path", {
    d: "M6.7 0L8.348 1.71 4.199 5.913 2.551 4.244zM9.148 2.551L10.783 4.217 4.185 10.783 2.551 9.156zM1.681 4.986L3.362 6.687 1.681 8.348 0 6.687zM11.699 5.101L13.333 6.767 6.736 13.333 5.101 11.707z",
    transform: "translate(3.394 3.394)"
  }))));
}

function COMPIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var Icon = inactive ? InactiveCOMPIcon : ActiveCOMPIcon;
  return React.createElement(Icon, Object.assign({}, svgProps));
}

function ActiveCOMPIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "#191B1F"
  }), React.createElement("path", {
    fill: "#00D395",
    d: "M5.06 13.866c-.348-.212-.56-.59-.56-.996v-2.268c0-.087.023-.17.067-.245.135-.232.434-.311.666-.175l5.118 2.984c.3.175.484.494.484.841v2.35c0 .107-.03.214-.085.306-.17.275-.529.362-.805.193l-4.885-2.99zm7.629-4.306c.299.176.483.495.483.842v4.768c0 .141-.076.271-.198.34l-1.12.63c-.015.008-.03.014-.046.019V13.51c0-.342-.18-.66-.474-.837L6.84 9.985V6.997c0-.087.023-.17.067-.245.134-.233.434-.312.666-.175L12.69 9.56zm2.24-3.521c.3.173.485.496.485.843v6.964c0 .143-.08.275-.205.343l-1.062.573V9.914c0-.343-.18-.659-.472-.836L9.08 6.322V3.487c0-.086.024-.17.065-.245.135-.232.434-.311.667-.176l5.117 2.973z"
  })));
}

function InactiveCOMPIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("g", null, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "#191924"
  }), React.createElement("g", {
    fill: "#FFF"
  }, React.createElement("path", {
    d: "M.56 10.866c-.348-.212-.56-.59-.56-.996V7.602c0-.087.023-.17.067-.245.135-.232.434-.311.666-.175l5.118 2.984c.3.175.484.494.484.841v2.35c0 .107-.03.214-.085.306-.17.275-.529.362-.805.193L.56 10.866zM8.189 6.56c.299.176.483.495.483.842v4.768c0 .141-.076.271-.198.34l-1.12.63c-.015.008-.03.014-.046.019V10.51c0-.342-.18-.66-.474-.837L2.34 6.985V3.997c0-.087.023-.17.067-.245.134-.233.434-.312.666-.175L8.19 6.56zm2.24-3.521c.3.173.485.496.485.843v6.964c0 .143-.08.275-.205.343l-1.062.573V6.914c0-.343-.18-.659-.472-.836L4.58 3.322V.487c0-.086.024-.17.065-.245.135-.232.434-.311.667-.176l5.117 2.973z",
    transform: "translate(4.5 3)"
  }))));
}

function CRVIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var Icon = inactive ? InactiveCRVIcon : ActiveCRVIcon;
  return React.createElement(Icon, Object.assign({}, svgProps));
}

function InactiveCRVIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "#191924"
  }), React.createElement("g", {
    fill: "#FFF",
    stroke: "#FFF"
  }, React.createElement("path", {
    d: "M.328 2.587C.992.735 2.058-.164 3.873.122 5.687.408 8.13 1.397 9.262 2.293c1.132.897 2.064 2.373 1.496 3.91-.26.704-.987 1.191-2.91 1.687-.517.134-1.495.417-2.934.85h0v-.034l-.013.073c-.299 1.444-.857 1.887-1.424 2.113l-.078.03c-.321.117-.86.031-1.387-.35C-.091 9.053-.278 4.278.328 2.587zm2.064 2.821c-.774.081-1.158.98-1.016 2.329.143 1.35.813 2.283 1.587 2.202.774-.08 1.288-1.037 1.145-2.387-.143-1.35-.942-2.224-1.716-2.144zm2.614.27l-.091 3.028.025-.13c.05-.28.09-.593.121-.946.045-.518.021-1.136-.032-1.717l-.023-.235zM7.992 3.12c-.871-.582-3.067-1.39-3.563-1.077-.397.25-.01.381.37 2.235.064.313.146.823.206 1.39v.01l.012-.328c1.328.047 2.379-.116 3.15-.488l.187-.097c.764-.429.508-1.063-.362-1.645z",
    transform: "translate(5 4.5)"
  }))));
}

function ActiveCRVIcon(props) {
  var gradientIds = React.useMemo(function () {
    return [1, 2, 3, 4, 5, 6].map(function () {
      return makeRandomID('CRVIcon');
    });
  }, []);
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 32 32"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    x1: "58.2660023%",
    y1: "53.9877105%",
    x2: "64.0169252%",
    y2: "74.0838674%",
    id: gradientIds[0]
  }, React.createElement("stop", {
    stopColor: "#F2E62B",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#B1FF46",
    offset: "48.6481565%"
  }), React.createElement("stop", {
    stopColor: "#05A2FB",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "45.0951087%",
    y1: "27.8821778%",
    x2: "50%",
    y2: "67.5173339%",
    id: gradientIds[1]
  }, React.createElement("stop", {
    stopColor: "#800000",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#FA0F00",
    offset: "18.7423576%"
  }), React.createElement("stop", {
    stopColor: "#FFCD0C",
    offset: "43.0928911%"
  }), React.createElement("stop", {
    stopColor: "#EEEB32",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "33.9331595%",
    y1: "24.7327615%",
    x2: "26.6530302%",
    y2: "61.5783185%",
    id: gradientIds[2]
  }, React.createElement("stop", {
    stopColor: "#FF9800",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#E4FF13",
    offset: "55.7691538%"
  }), React.createElement("stop", {
    stopColor: "#50FFA7",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "60.8253255%",
    y1: "-11.0703355%",
    x2: "50%",
    y2: "100%",
    id: gradientIds[3]
  }, React.createElement("stop", {
    stopColor: "#FA1000",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#FA1000",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#800000",
    offset: "17.007102%"
  }), React.createElement("stop", {
    stopColor: "#FA1801",
    offset: "39.0616555%"
  }), React.createElement("stop", {
    stopColor: "#F67A08",
    offset: "54.4421756%"
  }), React.createElement("stop", {
    stopColor: "#B1FF46",
    offset: "62.73309%"
  }), React.createElement("stop", {
    stopColor: "#75FF82",
    offset: "75.3792682%"
  }), React.createElement("stop", {
    stopColor: "#05A2FB",
    offset: "85.3998375%"
  }), React.createElement("stop", {
    stopColor: "#1212EE",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "40.7539593%",
    y1: "8.65073208%",
    x2: "29.998155%",
    y2: "78.218339%",
    id: gradientIds[4]
  }, React.createElement("stop", {
    stopColor: "#FA2401",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#F5DF22",
    offset: "42.8688999%"
  }), React.createElement("stop", {
    stopColor: "#00E4F8",
    offset: "77.4181047%"
  }), React.createElement("stop", {
    stopColor: "#0010FF",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "50%",
    y1: "-35.4571096%",
    x2: "50.6590533%",
    y2: "95.2246082%",
    id: gradientIds[5]
  }, React.createElement("stop", {
    stopColor: "#F76D08",
    offset: "0.0218531469%"
  }), React.createElement("stop", {
    stopColor: "#F1E62B",
    offset: "33.8142605%"
  }), React.createElement("stop", {
    stopColor: "#75F583",
    offset: "50.6985216%"
  }), React.createElement("stop", {
    stopColor: "#00E0FB",
    offset: "69.542734%"
  }), React.createElement("stop", {
    stopColor: "#0023FF",
    offset: "100%"
  }))), React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    fillRule: "nonzero"
  }, React.createElement("rect", {
    fill: "#0A0A0E",
    opacity: "0",
    x: "5.552e-07",
    y: "0",
    width: "32",
    height: "32"
  }), React.createElement("path", {
    d: "M10.5612531,6.68228042 C14.1521644,4.51957256 27.3641946,10.9521509 27.1714726,15.1619454 C26.9787506,19.3717398 24.8703226,20.0130462 23.2043136,20.4677795 C21.5383048,20.9225126 16.2905648,21.902579 16.0115898,22.661109 C15.7326147,23.4196387 14.8543957,27.1850877 12.0512636,26.7012026 C9.2481315,26.2173176 6.91473045,20.9254235 6.73786915,17.1815429 C6.56100784,13.4376622 6.9703417,8.84498827 10.5612531,6.68228042 Z",
    fill: "url(#" + gradientIds[0] + ")"
  }), React.createElement("path", {
    d: "M10.5612531,6.68228042 C13.865852,4.69201069 25.177485,9.28815974 26.9140862,13.9841662 C27.0645464,14.3910309 26.6717997,14.7524411 26.2250109,15.0261605 C24.7884045,15.9062793 23.2398194,16.1304446 21.5738106,16.5851779 C19.9078018,17.0399112 14.6600617,18.0199776 14.3810866,18.7785074 C14.1021115,19.5370371 6.91473045,20.9254235 6.73786915,17.1815429 C6.56100784,13.4376622 6.9703417,8.84498827 10.5612531,6.68228042 Z",
    fill: "url(#" + gradientIds[1] + ")"
  }), React.createElement("path", {
    d: "M15.9515792,16.2280024 C15.9521304,14.8531048 15.8185002,13.8319601 15.5506883,13.1645682 C15.1489706,12.1634804 15.5744498,10.5856509 16.4070264,10.3145056 C17.2396032,10.0433602 19.2606941,11.2096629 21.0476011,11.9771781 C22.8345083,12.7446932 24.1145246,13.7256 23.6913674,14.4529342 C23.2682102,15.1802684 21.1419808,15.6656262 20.1827614,15.8092653 C19.5432819,15.9050247 18.1328877,16.0446037 15.9515792,16.2280024 Z",
    fill: "url(#" + gradientIds[2] + ")"
  }), React.createElement("path", {
    d: "M12.5473655,27.0041445 C14.9842774,26.4262763 16.1948971,22.3127018 16.1948971,16.6324421 C16.1948971,14.5479179 15.2972893,11.1609493 14.7016779,9.26366508 C14.060247,7.22042604 16.732596,7.01180013 16.3515061,6.90164901 C14.8349258,6.46329296 14.0844955,6.10598436 12.5258611,6.11793856 C9.36123961,6.14213496 6.33833345,10.3924409 6.67072614,16.8953197 C7.00311885,23.3981986 10.1104536,27.5820127 12.5473655,27.0041445 Z",
    fill: "url(#" + gradientIds[3] + ")",
    transform: "rotate(-4.000000)"
  }), React.createElement("path", {
    d: "M12.6748931,27.0058576 C14.6110809,26.5467267 15.778316,23.8559971 16.1762453,19.9206358 C16.2225629,19.4625733 16.6119611,16.1596422 15.9384247,13.5306321 C15.9155997,13.4415391 15.6866061,14.8588694 15.1410642,16.0045477 C14.5955223,17.1502261 13.8292467,17.9373998 13.7225119,17.9542109 C11.848605,18.2493571 10.8487963,17.5910792 9.11304857,16.7961448 C7.27331726,15.9535881 8.91802595,7.66081988 7.81427073,10.2773026 C7.07285921,12.0348393 6.7005335,14.2789042 6.79825377,16.8970328 C7.04318956,23.4593704 10.2379812,27.5837257 12.6748931,27.0058576 Z",
    fill: "url(#" + gradientIds[4] + ")",
    transform: "rotate(-4.000000) "
  }), React.createElement("ellipse", {
    fill: "url(#" + gradientIds[5] + ")",
    transform: "rotate(-12.000000)",
    cx: "10.9347569",
    cy: "20.5258462",
    rx: "3.16462149",
    ry: "5.01065069"
  }))));
}

function DAIIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var gradientId = React.useMemo(function () {
    return makeRandomID('DAIIcon');
  }, []);
  var fillColor = inactive ? '#191924' : "url(#" + gradientId + ")";
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientId,
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#EFD68B"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#F5AC37"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    fill: fillColor,
    d: "M9.987 0c5.517 0 9.988 4.472 9.988 9.987 0 5.517-4.471 9.988-9.988 9.988C4.472 19.975 0 15.503 0 9.987 0 4.472 4.472 0 9.987 0z"
  }), React.createElement("path", {
    fill: "#FEFEFD",
    d: "M10.356 10.693h3.795c.08 0 .119 0 .125-.106.03-.387.03-.775 0-1.161 0-.075-.038-.106-.12-.106H6.605c-.093 0-.119.03-.119.118v1.111c0 .144 0 .144.15.144h3.72zm3.496-2.672c.01-.028.01-.06 0-.087-.064-.138-.139-.27-.226-.393-.131-.212-.286-.406-.462-.581-.083-.106-.18-.2-.287-.28-.54-.46-1.183-.786-1.873-.95-.348-.078-.704-.115-1.061-.112H6.59c-.093 0-.106.037-.106.119v2.215c0 .094 0 .119.119.119h7.203s.062-.013.075-.05h-.03zm0 3.97c-.106-.012-.213-.012-.32 0H6.61c-.093 0-.125 0-.125.125v2.166c0 .1 0 .125.125.125h3.196c.153.012.306.001.456-.03.463-.034.92-.135 1.355-.3.158-.055.31-.127.455-.213h.044c.749-.39 1.357-1.002 1.741-1.753 0 0 .044-.094-.005-.12zm-8.621 3.54v-3.452c0-.082 0-.094-.1-.094H3.777c-.075 0-.106 0-.106-.1V10.7h1.448c.08 0 .112 0 .112-.106V9.42c0-.075 0-.094-.1-.094H3.777c-.075 0-.106 0-.106-.1V8.129c0-.069 0-.087.1-.087h1.341c.094 0 .119 0 .119-.119V4.558c0-.1 0-.125.125-.125h4.681c.34.013.678.05 1.012.112.688.127 1.349.373 1.953.724.401.236.77.521 1.099.85.247.256.47.534.668.83.196.3.36.62.487.954.016.088.1.146.187.132h1.117c.143 0 .143 0 .15.137v1.024c0 .1-.038.125-.138.125h-.861c-.088 0-.113 0-.107.112.035.38.035.762 0 1.142 0 .106 0 .119.12.119h.985c.044.056 0 .112 0 .169.007.072.007.146 0 .218v.755c0 .106-.03.138-.125.138h-1.18c-.082-.016-.162.037-.18.119-.282.73-.731 1.385-1.312 1.91-.212.19-.435.37-.668.536-.25.144-.493.294-.749.412-.471.213-.966.369-1.473.468-.482.087-.97.126-1.46.119H5.228v-.006l.002-.002z"
  })));
}

function MTAIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var Icon = inactive ? InactiveMTAIcon : ActiveMTAIcon;
  return React.createElement(Icon, Object.assign({}, svgProps));
}

function ActiveMTAIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "#000"
  }), React.createElement("path", {
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M5.061 7.301c0-.385-.024-.76-.061-1.146h1.743l.06.785c.195-.266.668-.918 1.897-.918 1.413 0 1.814.858 1.933 1.147.51-.978 1.34-1.134 1.973-1.134 1.241 0 1.74.736 1.874.977.329.531.305 1.267.305 1.798v3.338h-1.812v-3.48c0-.652-.098-1.376-1.035-1.376-1.083 0-1.108 1.002-1.108 1.907v2.949H9.017v-3.52c0-.47-.012-1.339-1.01-1.339-1.132 0-1.132.966-1.132 1.379v3.48H5.06V7.3zM5 13.488h9.787v1.484H5v-1.484z"
  })));
}

function InactiveMTAIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "#191924"
  }), React.createElement("g", {
    fill: "#FFF",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M.061 1.301C.061.916.037.541 0 .155h1.743l.06.785C1.999.674 2.472.022 3.7.022c1.413 0 1.814.858 1.933 1.147C6.143.19 6.973.035 7.606.035c1.241 0 1.74.736 1.874.977.329.531.305 1.267.305 1.798v3.338H7.973v-3.48c0-.652-.098-1.376-1.035-1.376-1.083 0-1.108 1.002-1.108 1.907v2.949H4.017v-3.52c0-.47-.012-1.339-1.01-1.339-1.132 0-1.132.966-1.132 1.379v3.48H.06V1.3zM0 7.488h9.787v1.484H0V7.488z",
    transform: "translate(5 6)"
  }))));
}

function RenBTCIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var gradientId = React.useMemo(function () {
    return makeRandomID('RenBTCIcon');
  }, []);
  var fillColor = inactive ? '#191924' : "url(#" + gradientId + ")";
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientId,
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#9B9B9B"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#626262"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: fillColor
  }), React.createElement("path", {
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M14.545 8.656c.214-1.44-.876-2.215-2.365-2.732l.483-1.952-1.18-.296-.47 1.9c-.31-.078-.629-.151-.945-.224l.474-1.913-1.18-.296-.483 1.951c-.256-.059-.508-.117-.753-.178l.001-.006L6.5 4.5l-.313 1.27s.875.202.856.214c.478.12.565.439.55.691L7.043 8.9c.033.009.075.02.122.04l-.124-.031-.772 3.115c-.058.146-.206.365-.54.282.012.017-.858-.215-.858-.215l-.585 1.36 1.535.385c.285.072.565.148.84.219l-.487 1.974 1.178.296.483-1.953c.322.088.635.17.94.246l-.481 1.944 1.18.296.487-1.97c2.012.383 3.525.228 4.161-1.604.513-1.476-.025-2.327-1.084-2.882.771-.18 1.352-.69 1.507-1.745zm-2.584 3.862c-.369 1.54-2.866.707-3.675.498l.655-2.73c.81.21 3.406.625 3.02 2.232zm.286-3.867c-.338 1.281-2.427.63-3.104.47l.597-2.264c.678.16 2.86.458 2.507 1.794z"
  })));
}

function SBTCIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var gradientId = React.useMemo(function () {
    return makeRandomID('SBTCIcon');
  }, []);
  var fillColor0 = inactive ? '#191924' : "url(#" + gradientId + ")";
  var fillColor1 = inactive ? '#FFF' : '#1E1A31';
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientId,
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#A7C8FF"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#6E97FF"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    fill: fillColor0,
    fillRule: "nonzero",
    d: "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
  }), React.createElement("path", {
    fill: fillColor1,
    fillRule: "nonzero",
    d: "M11.933 12.362c0-.325.064-.577.192-.756.128-.179.31-.268.544-.268.174 0 .314.048.42.144.107.096.176.232.208.408.027-.208.094-.368.2-.48.107-.115.256-.172.448-.172.246 0 .439.093.58.28.139.187.208.45.208.792v1.116h-2.8v-1.064zm1.152.464v-.48c0-.128-.03-.228-.092-.3-.061-.072-.144-.108-.248-.108-.104 0-.186.036-.248.108-.061.072-.092.172-.092.3v.48h.68zm1.172 0v-.52c0-.144-.03-.255-.092-.332-.061-.08-.146-.12-.256-.12-.114 0-.202.04-.264.12-.064.08-.096.19-.096.332v.52h.708zm-2.324-1.639V8.971h.516v.808h2.284v.6H12.45v.808h-.516zm1.4-2.239c-.285 0-.534-.055-.748-.164-.216-.112-.382-.27-.5-.476-.117-.208-.176-.452-.176-.732 0-.219.043-.415.128-.588.086-.173.206-.313.36-.42.155-.107.334-.17.536-.192v.6c-.16.035-.285.108-.376.22-.093.11-.14.247-.14.412 0 .224.084.401.252.532.168.13.39.196.664.196.272 0 .494-.065.664-.196.168-.13.252-.308.252-.532 0-.165-.045-.303-.136-.412-.093-.112-.22-.185-.38-.22v-.6c.203.021.382.085.536.192.155.107.275.247.36.42.086.173.128.37.128.588 0 .28-.058.524-.176.732-.117.205-.282.364-.496.476-.216.11-.466.164-.752.164z"
  }), React.createElement("path", {
    fill: fillColor1,
    d: "M5.428 13.902L4.596 13.308 9.83 6.035 10.663 6.629z",
    opacity: ".5"
  }), React.createElement("path", {
    fill: fillColor1,
    d: "M8.225 9.49h.279c1.286 0 2.33 1.04 2.33 2.322s-1.044 2.321-2.33 2.321H5.078c-.282 0-.511-.228-.511-.51 0-.281.229-.51.511-.51h3.426c.721 0 1.306-.582 1.306-1.301 0-.72-.585-1.302-1.306-1.302H6.896c-1.286 0-2.33-1.04-2.33-2.322s1.044-2.321 2.33-2.321h3.426c.282 0 .511.228.511.51 0 .281-.229.51-.511.51H6.896c-.721 0-1.306.582-1.306 1.301 0 .72.585 1.302 1.306 1.302h1.329z"
  })));
}

function SNXIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var gradientId = React.useMemo(function () {
    return makeRandomID('SNXIcon');
  }, []);
  var fillColor = inactive ? '#191924' : "url(#" + gradientId + ")";
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientId,
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#40385F"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#1E1A31"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    fill: fillColor,
    d: "M19.984 9.992C19.984 4.474 15.51 0 9.992 0 4.474 0 0 4.474 0 9.992c0 5.518 4.474 9.992 9.992 9.992 5.518 0 9.992-4.474 9.992-9.992z"
  }), React.createElement("g", {
    fill: "#FFF"
  }, React.createElement("path", {
    d: "M1.041 8.697L0.14 8.054 5.806 0.182 6.706 0.825z",
    opacity: ".5",
    transform: "translate(6.6 5.2)"
  }), React.createElement("path", {
    d: "M3.96 3.922h.302c1.392 0 2.52 1.125 2.52 2.513 0 1.387-1.128 2.512-2.52 2.512H.554C.248 8.947 0 8.7 0 8.395c0-.304.248-.552.554-.552h3.708c.78 0 1.413-.63 1.413-1.408 0-.778-.633-1.41-1.413-1.41h-1.74C1.128 5.026 0 3.902 0 2.514S1.129 0 2.521 0H6.23c.306 0 .554.247.554.552 0 .305-.248.552-.554.552H2.52c-.78 0-1.413.63-1.413 1.409 0 .778.632 1.409 1.413 1.409H3.96z",
    transform: "translate(6.6 5.2)"
  }))));
}

function SUSDIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var gradientId = React.useMemo(function () {
    return makeRandomID('SUSDIcon');
  }, []);
  var fillColor = inactive ? '#191924' : "url(#" + gradientId + ")";
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientId,
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#40385F"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#1E1A31"
  }))), React.createElement("g", {
    fill: "none"
  }, React.createElement("ellipse", {
    cx: "10",
    cy: "9.99",
    fill: fillColor,
    rx: "10",
    ry: "9.99"
  }), React.createElement("g", {
    fill: "#FFF"
  }, React.createElement("path", {
    d: "M3.563 3.64c.268 0 .485.223.485.498 0 .274-.217.497-.485.497h-1.26C1.085 4.635.096 3.622.096 2.373c0-1.25.989-2.262 2.209-2.262h3.248c.268 0 .485.223.485.497s-.217.497-.485.497H2.303c-.683 0-1.238.568-1.238 1.268 0 .7.555 1.268 1.238 1.268h1.26z",
    transform: "translate(5 5.692)"
  }), React.createElement("path", {
    d: "M2.569 4.635c-.268 0-.485-.223-.485-.497 0-.275.217-.497.485-.497h1.26c1.219 0 2.208 1.013 2.208 2.262s-.989 2.262-2.209 2.262H.58c-.268 0-.485-.223-.485-.497 0-.275.217-.497.485-.497h3.248c.684 0 1.238-.568 1.238-1.268 0-.7-.554-1.268-1.238-1.268h-1.26.001z",
    transform: "translate(5 5.692)"
  }), React.createElement("path", {
    fillOpacity: ".5",
    d: "M0.964 7.964L0.175 7.385 5.136 0.295 5.925 0.874z",
    transform: "translate(5 5.692)"
  })), React.createElement("g", null, React.createElement("path", {
    fill: "#000",
    d: "M.662.061v1.59c0 .22.042.388.126.5.084.112.217.168.397.168.181 0 .314-.056.4-.168.085-.112.128-.28.128-.5V.06h.573V1.62c0 .391-.094.69-.28.896-.188.206-.461.31-.82.31-.36 0-.632-.104-.818-.31-.186-.206-.28-.504-.28-.896V.061h.574zM3.18 1.91c.01.135.064.244.162.326.098.082.23.123.392.123.135 0 .245-.029.33-.087.083-.053.132-.147.129-.245 0-.073-.024-.132-.07-.174-.048-.043-.114-.077-.2-.102-.13-.035-.262-.066-.395-.092-.176-.034-.324-.077-.444-.131-.117-.052-.218-.134-.292-.239-.075-.105-.113-.246-.113-.42 0-.16.043-.302.128-.427.09-.13.213-.231.356-.295.151-.072.323-.108.514-.108.196 0 .372.037.53.111.156.075.28.177.37.308.09.13.138.284.14.442h-.563C4.145.789 4.093.687 4.01.615 3.925.543 3.814.508 3.677.508c-.128 0-.23.027-.306.082-.077.055-.115.133-.115.234 0 .074.023.13.07.17.045.041.11.074.194.098.084.025.214.055.39.089.178.033.328.076.45.127.123.05.222.128.297.23.075.104.113.241.113.413 0 .167-.045.317-.134.449-.09.131-.214.235-.373.31-.168.078-.351.117-.536.114-.215 0-.405-.04-.572-.12-.158-.071-.293-.186-.391-.33-.094-.14-.145-.304-.146-.473l.562.008zM5.113.06h.93c.266 0 .502.058.708.175.2.112.366.28.474.485.11.207.166.444.166.71 0 .266-.056.503-.166.71-.108.205-.273.374-.474.485-.205.117-.442.175-.709.175h-.929V.06zm.93 2.25c.241 0 .43-.08.562-.24.134-.16.201-.374.201-.64s-.067-.48-.2-.64c-.134-.16-.322-.24-.564-.24h-.355v1.76h.355z",
    transform: "rotate(-90 12.639 .896)"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M.662.061v1.59c0 .22.042.388.126.5.084.112.217.168.397.168.181 0 .314-.056.4-.168.085-.112.128-.28.128-.5V.06h.573V1.62c0 .391-.094.69-.28.896-.188.206-.461.31-.82.31-.36 0-.632-.104-.818-.31-.186-.206-.28-.504-.28-.896V.061h.574zM3.18 1.91c.01.135.064.244.162.326.098.082.23.123.392.123.135 0 .245-.029.33-.087.083-.053.132-.147.129-.245 0-.073-.024-.132-.07-.174-.048-.043-.114-.077-.2-.102-.13-.035-.262-.066-.395-.092-.176-.034-.324-.077-.444-.131-.117-.052-.218-.134-.292-.239-.075-.105-.113-.246-.113-.42 0-.16.043-.302.128-.427.09-.13.213-.231.356-.295.151-.072.323-.108.514-.108.196 0 .372.037.53.111.156.075.28.177.37.308.09.13.138.284.14.442h-.563C4.145.789 4.093.687 4.01.615 3.925.543 3.814.508 3.677.508c-.128 0-.23.027-.306.082-.077.055-.115.133-.115.234 0 .074.023.13.07.17.045.041.11.074.194.098.084.025.214.055.39.089.178.033.328.076.45.127.123.05.222.128.297.23.075.104.113.241.113.413 0 .167-.045.317-.134.449-.09.131-.214.235-.373.31-.168.078-.351.117-.536.114-.215 0-.405-.04-.572-.12-.158-.071-.293-.186-.391-.33-.094-.14-.145-.304-.146-.473l.562.008zM5.113.06h.93c.266 0 .502.058.708.175.2.112.366.28.474.485.11.207.166.444.166.71 0 .266-.056.503-.166.71-.108.205-.273.374-.474.485-.205.117-.442.175-.709.175h-.929V.06zm.93 2.25c.241 0 .43-.08.562-.24.134-.16.201-.374.201-.64s-.067-.48-.2-.64c-.134-.16-.322-.24-.564-.24h-.355v1.76h.355z",
    transform: "rotate(-90 12.639 .896)"
  }))));
}

function TUSDIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var Icon = inactive ? InactiveTUSDIcon : ActiveTUSDIcon;
  return React.createElement(Icon, Object.assign({}, svgProps));
}

function ActiveTUSDIcon(props) {
  var gradientIds = React.useMemo(function () {
    return [1, 2].map(function () {
      return makeRandomID('TUSDIcon');
    });
  }, []);
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientIds[0],
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#0051A1"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#002868"
  })), React.createElement("linearGradient", {
    id: gradientIds[1],
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#0051A1"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#003B82"
  }))), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "url(#" + gradientIds[0] + ")",
    d: "M10 20C4.5 20 0 15.5 0 10S4.5 0 10 0s10 4.5 10 10-4.5 10-10 10z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M15.04 16H4.96c-.528 0-.96-.432-.96-.96V4.96c0-.528.432-.96.96-.96h10.08c.528 0 .96.432.96.96v10.08c0 .528-.432.96-.96.96z"
  }), React.createElement("g", {
    fill: "#002868"
  }, React.createElement("path", {
    d: "M.782 2.192c-.032 0-.058-.029-.058-.06V.519C.724.488.7.46.667.46H.098C.066.459.038.433.038.402V.09c0-.032.028-.06.06-.06H1.85c.032 0 .06.028.06.06v.312c0 .031-.028.057-.06.057h-.566c-.032 0-.06.028-.06.06v1.613c0 .031-.026.06-.058.06H.782zM3.66.09c0-.032.025-.06.056-.06h.382c.032 0 .06.028.06.06v1.1c0 .652-.368 1.03-.954 1.03-.582 0-.947-.378-.947-1.03V.09c0-.032.025-.06.057-.06h.382c.031 0 .06.028.06.06v1.116c0 .321.165.55.452.55.286 0 .451-.229.451-.55V.09zM5.91.736c-.05 0-.066-.02-.085-.058-.067-.156-.213-.254-.436-.254-.2 0-.369.07-.369.204 0 .146.156.206.5.248.521.06.82.22.82.632 0 .465-.407.71-.928.71-.452 0-.84-.22-.9-.68-.007-.045.016-.061.06-.061h.35c.044 0 .07.019.083.054.047.153.21.27.445.27.207 0 .388-.076.388-.238 0-.194-.19-.229-.572-.277-.44-.057-.744-.184-.744-.588 0-.404.346-.694.89-.694.49 0 .83.264.9.659.01.044-.003.073-.05.073H5.91zM6.772 2.192c-.031 0-.057-.029-.057-.06V.09c0-.032.026-.06.057-.06h.865C8.28.03 8.78.472 8.78 1.117c0 .636-.493 1.075-1.142 1.075h-.865zm.865-.43c.347 0 .617-.273.617-.652 0-.378-.27-.652-.62-.652h-.36c-.03 0-.056.029-.056.06v1.187c0 .031.025.057.057.057h.362z",
    transform: "translate(5.56 12.6)"
  })), React.createElement("path", {
    fill: "url(#" + gradientIds[0] + ")",
    d: "M15.68 11.44H4.32c-.088 0-.16-.072-.16-.16V4.96c0-.44.36-.8.8-.8h10.08c.44 0 .8.36.8.8v6.32c0 .088-.072.16-.16.16z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M10.59 10.142H9.55c-.067 0-.12-.054-.12-.12v-4.4c0-.066.053-.12.12-.12h1.04c.065 0 .12.054.12.12v4.4c0 .066-.055.12-.12.12z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M12.36 6.782H7.64c-.066 0-.12-.054-.12-.12v-1.04c0-.066.054-.12.12-.12h4.72c.066 0 .12.054.12.12v1.04c0 .066-.054.12-.12.12z"
  })));
}

function InactiveTUSDIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "#191924",
    d: "M10 0c5.522 0 10 4.478 10 10s-4.478 10-10 10S0 15.525 0 10 4.478 0 10 0z"
  }), React.createElement("g", {
    fill: "#FFF"
  }, React.createElement("path", {
    d: "M7.309 3.762v-1.49h3.402V.007H1.448v2.267H4.85v1.489C2.086 3.89.006 4.437.006 5.092c0 .656 2.08 1.203 4.844 1.33v4.765h2.461V6.423c2.762-.128 4.837-.675 4.837-1.33-.003-.656-2.078-1.203-4.84-1.331zM7.31 6.02c-.069.003-.425.025-1.219.025-.636 0-1.08-.017-1.239-.025v.003C2.411 5.915.586 5.49.586 4.98c0-.508 1.823-.933 4.267-1.041v1.655c.161.011.617.039 1.25.039.758 0 1.139-.03 1.211-.039V3.934c2.44.108 4.259.533 4.259 1.042-.006.508-1.825.933-4.262 1.044",
    transform: "translate(4.1 5.123)"
  }))));
}

function USDCIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var gradientId = React.useMemo(function () {
    return makeRandomID('USDCIcon');
  }, []);
  var fillColor = inactive ? '#191924' : "url(#" + gradientId + ")";
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientId,
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#67BFF4"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#2775CA"
  }))), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: fillColor,
    d: "M10 20c5.542 0 10-4.458 10-10S15.542 0 10 0 0 4.458 0 10s4.458 10 10 10z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M12.75 11.583c0-1.458-.875-1.958-2.625-2.166-1.25-.167-1.5-.5-1.5-1.084 0-.583.417-.958 1.25-.958.75 0 1.167.25 1.375.875.042.125.167.208.292.208h.666c.167 0 .292-.125.292-.291v-.042c-.167-.917-.917-1.625-1.875-1.708v-1c0-.167-.125-.292-.333-.334h-.625c-.167 0-.292.125-.334.334v.958c-1.25.167-2.041 1-2.041 2.042 0 1.375.833 1.916 2.583 2.125 1.167.208 1.542.458 1.542 1.125 0 .666-.584 1.125-1.375 1.125-1.084 0-1.459-.459-1.584-1.084-.041-.166-.166-.25-.291-.25h-.709c-.166 0-.291.125-.291.292v.042c.166 1.041.833 1.791 2.208 2v1c0 .166.125.291.333.333h.625c.167 0 .292-.125.334-.333v-1c1.25-.209 2.083-1.084 2.083-2.209z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M7.875 15.958c-3.25-1.166-4.917-4.791-3.708-8 .625-1.75 2-3.083 3.708-3.708.167-.083.25-.208.25-.417V3.25c0-.167-.083-.292-.25-.333-.042 0-.125 0-.167.041-3.958 1.25-6.125 5.459-4.875 9.417.75 2.333 2.542 4.125 4.875 4.875.167.083.334 0 .375-.167.042-.041.042-.083.042-.166v-.584c0-.125-.125-.291-.25-.375zm4.417-13c-.167-.083-.334 0-.375.167-.042.042-.042.083-.042.167v.583c0 .167.125.333.25.417 3.25 1.166 4.917 4.791 3.708 8-.625 1.75-2 3.083-3.708 3.708-.167.083-.25.208-.25.417V17c0 .167.083.292.25.333.042 0 .125 0 .167-.041 3.958-1.25 6.125-5.459 4.875-9.417-.75-2.375-2.584-4.167-4.875-4.917z"
  })));
}

function USDTIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  return inactive ? React.createElement(TUSDIcon, Object.assign({}, props)) : React.createElement(ActiveUSDTIcon, Object.assign({}, svgProps));
}

function ActiveUSDTIcon(props) {
  var gradientId = React.useMemo(function () {
    return makeRandomID('USDTIcon');
  }, []);
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientId,
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#79F8DC"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#26A17B"
  }))), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "url(#" + gradientId + ")",
    d: "M10 0c5.522 0 10 4.478 10 10s-4.478 10-10 10S0 15.525 0 10 4.478 0 10 0z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M11.408 8.885V7.396h3.403V5.13H5.547v2.267H8.95v1.489c-2.764.128-4.845.675-4.845 1.33 0 .656 2.08 1.203 4.845 1.331v4.764h2.46v-4.764c2.762-.128 4.837-.675 4.837-1.33-.003-.656-2.078-1.203-4.839-1.331zm.003 2.258c-.07.003-.425.025-1.22.025-.636 0-1.08-.016-1.238-.025v.003c-2.442-.108-4.267-.533-4.267-1.042 0-.508 1.822-.933 4.267-1.041v1.655c.16.011.616.04 1.25.04.758 0 1.138-.031 1.21-.04v-1.66c2.44.108 4.259.533 4.259 1.04-.006.51-1.825.934-4.261 1.045"
  })));
}

function WBTCIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var gradientIds = React.useMemo(function () {
    return [1, 2].map(function () {
      return makeRandomID('WBTCIcon');
    });
  }, []);
  var fillColor0 = inactive ? '#FFF' : "url(#" + gradientIds[0] + ")";
  var fillColor1 = inactive ? '#FFF' : "url(#" + gradientIds[1] + ")";
  var fillColor2 = inactive ? '#191924' : '#FFF';
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientIds[0],
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FCC538"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#F7931A"
  })), React.createElement("linearGradient", {
    id: gradientIds[1],
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#928E9C"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#595563"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: fillColor2
  }), React.createElement("path", {
    fill: fillColor0,
    fillRule: "nonzero",
    d: "M14.298 8.96c.194-1.296-.793-1.993-2.143-2.458l.438-1.756-1.07-.267-.426 1.71c-.28-.07-.57-.136-.856-.201l.429-1.722L9.601 4l-.438 1.756c-.232-.053-.46-.106-.682-.16V5.59l-1.474-.368-.284 1.142s.793.181.776.193c.433.108.512.394.499.622l-.5 2c.03.008.07.019.112.036l-.113-.028-.7 2.803c-.052.132-.186.329-.49.254.012.016-.776-.194-.776-.194L5 13.274l1.391.347c.26.065.513.133.763.196l-.443 1.777 1.068.266.438-1.757c.292.079.575.152.852.22l-.436 1.75 1.069.267.442-1.773c1.823.345 3.194.205 3.771-1.443.465-1.328-.023-2.094-.982-2.593.698-.162 1.225-.621 1.365-1.57zm-2.443 3.426c-.33 1.328-2.566.61-3.29.43l.587-2.353c.724.18 3.049.539 2.703 1.923zm.33-3.444c-.3 1.207-2.161.594-2.765.443l.533-2.134c.603.15 2.547.43 2.233 1.69z",
    transform: "rotate(-14 9.661 10.17)"
  }), React.createElement("path", {
    fill: fillColor1,
    d: "M10 18c2.024 0 3.872-.752 5.281-1.99l.709.707C14.399 18.137 12.3 19 10 19c-2.3 0-4.4-.863-5.99-2.283l.708-.709C6.127 17.248 7.976 18 10 18zm9-8c0 2.3-.863 4.4-2.283 5.99l-.709-.708C17.248 13.873 18 12.024 18 10s-.752-3.873-1.992-5.282l.709-.709C18.137 5.6 19 7.7 19 10zM3.283 4.01l.708.709C2.75 6.128 2 7.976 2 10c0 2.024.752 3.872 1.99 5.281l-.707.709C1.863 14.399 1 12.3 1 10c0-2.3.863-4.399 2.283-5.99zM10 1c2.3 0 4.399.863 5.99 2.283l-.709.708C13.872 2.75 12.024 2 10 2c-2.024 0-3.873.752-5.282 1.992l-.708-.71C5.601 1.863 7.7 1 10 1z"
  })));
}

function YFIIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var circleFillColor = inactive ? '#191924' : '#2c68db';
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 30 30"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "15",
    fill: circleFillColor
  }), React.createElement("path", {
    fill: "#fff",
    fillRule: "nonzero",
    d: "M14.348 8.576H15.799000000000001V21.248H14.348z"
  }), React.createElement("path", {
    fill: "#fff",
    fillRule: "nonzero",
    d: "M10.706 17.851c-.39.688-.58 1.47-.55 2.26.0 2.56 1.964 4.69 4.514 4.9 2.55.21 4.835-1.57 5.254-4.095.42-2.524-1.168-4.947-3.649-5.573v1.468c1.675.61 2.628 2.376 2.217 4.11-.411 1.734-2.056 2.886-3.826 2.679-1.77-.207-3.104-1.706-3.105-3.488.002-.673.207-1.328.59-1.881l.255 2.326 1.403-.181-.679-4.435-4.412.883.249 1.47 1.74-.443zm8.939-6.161c.288-.626.345-1.086.345-1.82.0-2.56-1.963-4.69-4.513-4.9-2.55-.21-4.835 1.57-5.254 4.095-.42 2.524 1.168 4.948 3.649 5.573v-1.467c-1.35-.493-2.264-1.758-2.307-3.194-.043-1.436.794-2.754 2.112-3.326 1.318-.572 2.852-.283 3.871.73 1.02 1.012 1.32 2.544.757 3.866l-.78-2.063-1.29.403 1.25 4.355 4.274-1.572-.52-1.226-1.594.546z"
  })));
}

function MUSDIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var fillColor = inactive ? '#191924' : '#000';
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("ellipse", {
    cx: "10",
    cy: "10",
    fill: fillColor,
    fillRule: "nonzero",
    rx: "10",
    ry: "9.818"
  }), React.createElement("g", {
    fill: "#FFF"
  }, React.createElement("path", {
    fillRule: "nonzero",
    d: "M5.698 8.186c-1.423-.123-2.459-.853-2.511-2.177H5.09c.041.42.25.677.606.79V5.177c-1.119-.288-2.52-.596-2.52-2.209 0-1.283 1.098-2.044 2.52-2.136V0h.67v.832C7.8.945 8.72 1.664 8.815 2.968H6.9c-.041-.38-.24-.616-.533-.719v1.592c1.12.308 2.552.606 2.552 2.198 0 1.11-.9 2.085-2.552 2.157v.832h-.67v-.842zm0-4.56V2.198c-.388.062-.628.288-.628.688 0 .36.25.575.628.74zm.669 1.746V6.83c.418-.072.68-.35.68-.73 0-.369-.272-.574-.68-.728z",
    transform: "translate(4.074 3.455)"
  }), React.createElement("path", {
    d: "M0 10.317L11.962 10.317 11.962 12.087 0 12.087z",
    transform: "translate(4.074 3.455)"
  }))));
}

function AAVEIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var gradientId = React.useMemo(function () {
    return makeRandomID('AAVEIcon');
  }, []);
  var fillColor = inactive ? '#191924' : "url(#" + gradientId + ")";
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientId,
    x1: "8.586%",
    x2: "100%",
    y1: "96.414%",
    y2: "26.414%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#50B5AC"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#B22F92"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("rect", {
    width: "20",
    height: "20",
    fill: fillColor,
    rx: "10"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M5.698 7.924l-.001.033v7.852c0 .062.012.125.036.183.024.058.06.11.104.155.045.044.097.08.155.104.058.024.12.036.183.036.265 0 .479-.214.479-.478v-1.392c0-.264.214-.478.478-.478.127 0 .249.05.339.14.09.09.14.211.14.338v.66c0 .127.05.248.14.338.09.09.211.14.338.14.063 0 .125-.012.183-.036.059-.024.111-.06.156-.104.044-.044.08-.097.103-.155.025-.058.037-.12.037-.183v-.66c0-.264.214-.478.478-.478.265 0 .479.214.479.478v.18c0 .127.05.249.14.338.09.09.211.14.338.14.127 0 .249-.05.339-.14.09-.09.14-.21.14-.338v-.18c0-.264.214-.478.478-.478.265 0 .479.214.479.478v.66c0 .063.012.125.036.183.024.058.06.11.104.155.044.044.097.08.155.104.058.024.12.036.183.036s.125-.012.183-.036c.058-.024.111-.06.156-.104.044-.044.08-.097.103-.155.024-.058.037-.12.037-.183v-.66c0-.127.05-.249.14-.338.09-.09.211-.14.338-.14.264 0 .479.214.479.478v1.392c0 .264.214.478.478.478.127 0 .249-.05.339-.14.09-.09.14-.212.14-.338V7.957c0-.01 0-.022-.002-.033-.052-2.332-1.96-4.207-4.305-4.207-2.345 0-4.252 1.875-4.305 4.207zm5.127-.19c0-.485.343-.878.766-.878s.766.393.766.879c0 .485-.343.878-.766.878s-.766-.393-.766-.878zm-3.176 0c0-.485.343-.878.766-.878.424 0 .767.393.767.879 0 .485-.343.878-.767.878-.423 0-.766-.393-.766-.878zm3.084 1.608c0 .283-.311.512-.695.512-.384 0-.696-.23-.696-.512 0-.282.312-.112.696-.112.384 0 .695-.17.695.112z"
  })));
}

function RENIcon(props) {
  var svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M0 0H20V20H0z"
  }), React.createElement("path", {
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M3.772 4.206L5.263 3.361 5.464 3.701 10.961.574 10.559.346 10.155.114 9.955 0 1 5.103 1 5.331 3.571 3.864zM3.772 7.419L8.081 4.963 8.281 5.308 13.778 2.179 13.376 1.948 12.973 1.72 12.772 1.607 1 8.312 1 8.54 3.571 7.073zM3.772 9.024L9.488 5.768 9.691 6.11 15.186 2.978 14.784 2.753 14.383 2.521 14.18 2.407 1 9.914 1 10.146 3.571 8.68zM3.772 10.628L10.938 6.548 11.141 6.89 16.596 3.783 16.194 3.551 15.79 3.323 15.589 3.209 1 11.521 1 11.75 3.571 10.282zM3.772 12.23L12.348 7.348 12.548 7.693 18.003 4.583 17.602 4.357 17.2 4.125 16.997 4.011 1 13.123 1 13.351 3.571 11.888zM18.608 4.929L18.407 4.813 1 14.731 1 14.959 3.571 13.495 3.772 13.837 12.348 8.955 12.548 9.297 18.909 5.677 18.909 5.217 18.909 5.103zM2.103 15.933L3.545 15.112 3.745 15.454 12.306 10.579 12.507 10.925 18.909 7.279 18.909 6.819 18.909 6.359 18.909 6.131 1.906 15.819zM12.306 12.187L12.507 12.533 18.909 8.886 18.909 8.426 18.909 7.966 18.909 7.738 3.313 16.621 3.516 16.735 4.979 15.899 5.182 16.245M4.924 17.538L6.389 16.701 6.589 17.047 12.306 13.789 12.507 14.135 18.909 10.488 18.909 10.028 18.909 9.572 18.909 9.342 4.719 17.421zM6.332 18.34L7.796 17.507 7.999 17.849 12.306 15.396 12.507 15.738 18.909 12.092 18.909 11.636 18.909 11.176 18.909 10.948 6.131 18.226zM7.541 19.028L7.741 19.142 9.21 18.307 9.407 18.652 12.306 16.998 12.507 17.344 18.909 13.697 18.909 13.237 18.909 12.778 18.909 12.55zM9.149 19.948L10.614 19.108 10.815 19.454 12.306 18.602 12.507 18.948 18.909 15.305 18.909 14.845 18.909 14.385 18.909 14.157 8.948 19.834zM12.37 1.376L11.967 1.148 11.967 1.148 11.565.92 11.364.802 1 6.705 1 6.933 3.571 5.471 3.772 5.811 6.671 4.161 6.877 4.507z"
  })));
}

function DelphiPoolIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var _React$useMemo = React.useMemo(function () {
    return [1, 2, 3, 4, 5].map(function () {
      return makeRandomID('DelphiPoolIcon');
    });
  }, []),
      radialGradientID = _React$useMemo[0],
      circleID = _React$useMemo[1],
      maskID = _React$useMemo[2];

  var fillColor = inactive ? '#FFF' : "url(#" + radialGradientID + ")";
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("radialGradient", {
    id: radialGradientID,
    cx: "31.236%",
    cy: "42.426%",
    r: "85.29%",
    fx: "31.236%",
    fy: "42.426%",
    gradientTransform: "matrix(.53631 -.7067 .5357 .7075 -.082 .345)"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#594AFF"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#3B2ECE"
  })), React.createElement("circle", {
    id: circleID,
    cx: "10.313",
    cy: "10.375",
    r: "9.375"
  })), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0, -1.5)"
  }, React.createElement("path", {
    d: "M0 0H20V20H0z"
  }), React.createElement("path", {
    fill: fillColor,
    stroke: "#0A0A0E",
    strokeWidth: ".1",
    d: "M10.022 4.245c1.98 0 4.235-1.071 5.27-1.653 1.035-.583 2.876-.486 2.876.8 0 1.113-.356 2.202.197 2.917.086.11.175.987.228 1.136.27.752.27 2.235 0 3.562s-4.324 4.386-8.467 4.386c-4.143 0-8.087-2.26-8.087-4.393 0-2.134-.1-3.014-.1-3.7 0-.687-1.149-3.14.1-4.406 1.248-1.266 3.494.64 4.32.846.826.207 1.683.505 3.663.505z"
  }), React.createElement("mask", {
    id: maskID,
    fill: "#fff"
  }, React.createElement("use", {
    xlinkHref: "#" + circleID
  })), React.createElement("path", {
    fill: fillColor,
    stroke: "#0A0A0E",
    strokeWidth: ".1",
    d: "M10.022 4.245c1.98 0 4.235-1.071 5.27-1.653 1.035-.583 2.876-.486 2.876.8 0 1.182-.401 2.337.311 3.046.063.062.133.12.214.175.999.682 2.245 2.081 2.62 4.611.374 2.53-1.547 5.304-1.837 5.545-.15.124-4.986 3.266-9.35 3.231-4.106-.033-7.76-3.232-7.76-3.43 0-.407-2.225-.669-2.36-4.217C-.128 8.805 1.94 7.986 1.94 7.3c0-.687-1.149-3.14.1-4.406 1.248-1.266 3.494.64 4.32.846.826.207 1.683.505 3.663.505z",
    mask: "url(#" + maskID + ")"
  }), React.createElement("path", {
    stroke: "#0A0A0E",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M10.873 12.29c.704 1.438 1.823 1.96 3.359 1.57 1.143-.291 2.098-1.175 2.324-2.366",
    mask: "url(#" + maskID + ")",
    transform: "rotate(1 13.715 12.74)"
  }), React.createElement("path", {
    stroke: "#0A0A0E",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M10.512 12.177c-.865 1.436-1.954 2.068-3.266 1.895-1.312-.172-2.279-.912-2.9-2.221",
    mask: "url(#" + maskID + ")",
    transform: "rotate(1 7.43 12.976)"
  }), React.createElement("path", {
    fill: "#0A0A0E",
    d: "M9.583 11.393c0-.363.222-.743 1.028-.858.807-.115 1.027.116 1.173.43.147.312-.213.727-.496.839-.284.112-.19.53-.456.53-.177 0-.356-.177-.538-.53-.474-.032-.711-.17-.711-.411z",
    mask: "url(#" + maskID + ")",
    transform: "rotate(1 10.7 11.42)"
  }), React.createElement("path", {
    fill: "#FED798",
    stroke: "#0A0A0E",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M12.986 8.294c.246-.052.565-.048.977-.008.841.083 1.446.36 1.59.574.164.242.223.427.223.628 0 .486-.209.788-.524.979-.35.21-.859.27-1.382.27-.52 0-.944-.079-1.23-.29-.268-.199-.439-.509-.439-1.01 0-.228.045-.569.174-.758.14-.203.335-.327.611-.385z",
    mask: "url(#" + maskID + ")",
    transform: "rotate(1 13.989 9.496)"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.734 10.693c.119 0 .307-.017.41-.08.34-.202.513-.595.513-1.178 0-.31-.069-.598-.184-.829-.167-.334-1.236-.379-1.403-.106-.15.246-.242.574-.242.935 0 .453.129.766.352 1.017.153.172.35.24.554.24z",
    mask: "url(#" + maskID + ")",
    transform: "rotate(1 13.742 9.507)"
  }), React.createElement("path", {
    fill: "#FED798",
    stroke: "#0A0A0E",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M6.563 8.46c.298 0 .68.088.995.21.406.156.657.384.696.537.044.705-.123 1.089-.38 1.326-.316.294-.803.366-1.35.366-.524 0-.976-.062-1.28-.266-.278-.188-.46-.488-.46-.99 0-.197.092-.452.176-.624.058-.118.308-.299.69-.415.275-.084.608-.143.913-.143z",
    mask: "url(#" + maskID + ")",
    transform: "rotate(1 6.557 9.68)"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.45 10.811c.184 0 .363.045.506-.098.25-.25.417-.685.417-1.18 0-.306-.064-.589-.172-.82-.166-.354-1.318-.355-1.484-.002-.109.231-.173.515-.173.822 0 .49.163.922.41 1.174.145.146.31.104.497.104z",
    mask: "url(#" + maskID + ")",
    transform: "rotate(1 6.458 9.632)"
  }), React.createElement("path", {
    stroke: "#0A0A0E",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M15.483 11.86c1.384.064 2.613-.33 3.686-1.184",
    mask: "url(#" + maskID + ")",
    transform: "rotate(1 17.326 11.271)"
  }), React.createElement("path", {
    stroke: "#0A0A0E",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M14.572 12.227c1.253 1.035 2.59 1.336 4.012.903",
    mask: "url(#" + maskID + ")",
    transform: "rotate(1 16.578 12.774)"
  }), React.createElement("path", {
    stroke: "#0A0A0E",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M5.894 12.315c-1.564.314-2.675.143-3.334-.515",
    mask: "url(#" + maskID + ")",
    transform: "rotate(1 4.227 12.134)"
  }), React.createElement("path", {
    stroke: "#0A0A0E",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M5.433 11.02c-.048 1.662-.75 2.937-2.107 3.825",
    mask: "url(#" + maskID + ")",
    transform: "rotate(57 4.38 12.932)"
  }), React.createElement("path", {
    stroke: "#0A0A0E",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M16.134 3.4c-1.016.965-1.27 1.913-.762 2.846",
    mask: "url(#" + maskID + ")",
    transform: "rotate(1 15.626 4.823)"
  }), React.createElement("path", {
    stroke: "#0A0A0E",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M2.354 3.904c1.113-.482 1.876.02 2.288 1.504"
  })));
}

function WETHIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var Icon = inactive ? InactiveWETHIcon : ActiveWETHIcon;
  return React.createElement(Icon, Object.assign({}, svgProps));
}

function ActiveWETHIcon(props) {
  var gradientId = React.useMemo(function () {
    return makeRandomID('ETHIcon');
  }, []);
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientId,
    x1: "50%",
    x2: "50%",
    y1: "100%",
    y2: "0%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FB0178"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#424242"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    fillRule: "nonzero"
  }, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "#FFF"
  }), React.createElement("path", {
    fill: "url(#" + gradientId + ")",
    d: "M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z"
  }), React.createElement("g", null, React.createElement("path", {
    fill: "#424242",
    fillOpacity: ".9",
    d: "M3.751 0L3.751 4.437 7.501 6.113zM3.751 0L0 6.113 3.751 4.437z",
    transform: "translate(6.2 4)"
  }), React.createElement("path", {
    fill: "#FF0079",
    d: "M3.751 8.989L3.751 12.004 7.504 6.811zM3.751 12.004L3.751 8.988 0 6.811z",
    transform: "translate(6.2 4)"
  }), React.createElement("path", {
    fill: "#424242",
    d: "M3.751 8.291L7.501 6.113 3.751 4.438zM0 6.113L3.751 8.291 3.751 4.438z",
    transform: "translate(6.2 4)"
  })))));
}

function InactiveWETHIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "#191924"
  }), React.createElement("g", {
    fill: "#FFF"
  }, React.createElement("path", {
    fillOpacity: ".602",
    d: "M4.686 0L4.686 5.544 9.372 7.638z",
    transform: "translate(5.625 2.5)"
  }), React.createElement("path", {
    d: "M4.686 0L0 7.638 4.686 5.544z",
    transform: "translate(5.625 2.5)"
  }), React.createElement("path", {
    fillOpacity: ".602",
    d: "M4.686 11.23L4.686 14.997 9.375 8.51z",
    transform: "translate(5.625 2.5)"
  }), React.createElement("path", {
    d: "M4.686 14.997L4.686 11.229 0 8.51z",
    transform: "translate(5.625 2.5)"
  }), React.createElement("path", {
    fillOpacity: ".2",
    d: "M4.686 10.358L9.372 7.638 4.686 5.545z",
    transform: "translate(5.625 2.5)"
  }), React.createElement("path", {
    fillOpacity: ".602",
    d: "M0 7.638L4.686 10.358 4.686 5.545z",
    transform: "translate(5.625 2.5)"
  }))));
}

function ThreeCrvIcon(props) {
  var gradientIds = React.useMemo(function () {
    return [1, 2, 3, 4, 5, 6].map(function () {
      return makeRandomID('ThreeCrvIcon');
    });
  }, []);
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientIds[0],
    x1: "58.266%",
    x2: "64.017%",
    y1: "53.988%",
    y2: "74.084%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#F2E62B"
  }), React.createElement("stop", {
    offset: "48.648%",
    stopColor: "#B1FF46"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#05A2FB"
  })), React.createElement("linearGradient", {
    id: gradientIds[1],
    x1: "45.095%",
    x2: "50%",
    y1: "27.882%",
    y2: "67.517%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "maroon"
  }), React.createElement("stop", {
    offset: "18.742%",
    stopColor: "#FA0F00"
  }), React.createElement("stop", {
    offset: "43.093%",
    stopColor: "#FFCD0C"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#EEEB32"
  })), React.createElement("linearGradient", {
    id: gradientIds[2],
    x1: "33.933%",
    x2: "26.653%",
    y1: "24.733%",
    y2: "61.578%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FF9800"
  }), React.createElement("stop", {
    offset: "55.769%",
    stopColor: "#E4FF13"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#50FFA7"
  })), React.createElement("linearGradient", {
    id: gradientIds[3],
    x1: "60.825%",
    x2: "50%",
    y1: "-11.07%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA1000"
  }), React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA1000"
  }), React.createElement("stop", {
    offset: "17.007%",
    stopColor: "maroon"
  }), React.createElement("stop", {
    offset: "39.062%",
    stopColor: "#FA1801"
  }), React.createElement("stop", {
    offset: "54.442%",
    stopColor: "#F67A08"
  }), React.createElement("stop", {
    offset: "62.733%",
    stopColor: "#B1FF46"
  }), React.createElement("stop", {
    offset: "75.379%",
    stopColor: "#75FF82"
  }), React.createElement("stop", {
    offset: "85.4%",
    stopColor: "#05A2FB"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#1212EE"
  })), React.createElement("linearGradient", {
    id: gradientIds[4],
    x1: "40.754%",
    x2: "29.998%",
    y1: "8.651%",
    y2: "78.218%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA2401"
  }), React.createElement("stop", {
    offset: "42.869%",
    stopColor: "#F5DF22"
  }), React.createElement("stop", {
    offset: "77.418%",
    stopColor: "#00E4F8"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#0010FF"
  })), React.createElement("linearGradient", {
    id: gradientIds[5],
    x1: "50%",
    x2: "50.659%",
    y1: "-35.457%",
    y2: "95.225%"
  }, React.createElement("stop", {
    offset: ".022%",
    stopColor: "#F76D08"
  }), React.createElement("stop", {
    offset: "33.814%",
    stopColor: "#F1E62B"
  }), React.createElement("stop", {
    offset: "50.699%",
    stopColor: "#75F583"
  }), React.createElement("stop", {
    offset: "69.543%",
    stopColor: "#00E0FB"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#0023FF"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1"
  }, React.createElement("g", {
    id: "3crv"
  }, React.createElement("path", {
    id: "placeholder",
    fill: "#D8D8D8",
    fillOpacity: "0",
    d: "M0 0h20v20H0z"
  }), React.createElement("g", null, React.createElement("path", {
    fill: "url(#" + gradientIds[0] + ")",
    d: "M4.144.786C7.355-1.148 19.17 4.604 18.998 8.369c-.172 3.765-2.058 4.338-3.548 4.745-1.49.407-6.182 1.283-6.432 1.961-.25.679-1.035 4.046-3.541 3.613C2.97 18.256.883 13.523.725 10.175.567 6.827.933 2.72 4.145.786z"
  }), React.createElement("path", {
    fill: "url(#" + gradientIds[1] + ")",
    d: "M4.144.786c2.955-1.78 13.071 2.33 14.624 6.53.135.364-.217.687-.616.932-1.285.787-2.67.987-4.16 1.394-1.49.407-6.182 1.283-6.432 1.961-.25.679-6.677 1.92-6.835-1.428C.567 6.827.933 2.72 4.145.786z"
  }), React.createElement("path", {
    fill: "url(#" + gradientIds[2] + ")",
    d: "M8.965 9.322c0-1.23-.12-2.142-.359-2.74-.36-.894.021-2.305.766-2.548.744-.242 2.552.8 4.15 1.487 1.598.686 2.742 1.564 2.364 2.214-.378.65-2.28 1.085-3.138 1.213-.572.086-1.833.21-3.783.374z"
  }), React.createElement("path", {
    fill: "url(#" + gradientIds[3] + ")",
    d: "M5.92 18.96c2.18-.518 3.262-4.196 3.262-9.276 0-1.864-.803-4.893-1.335-6.59C7.273 1.267 9.663 1.081 9.322.982 7.966.59 7.295.271 5.901.282 3.071.302.368 4.103.665 9.918c.297 5.816 3.076 9.557 5.255 9.04z",
    transform: "rotate(-4 5 9.644)"
  }), React.createElement("path", {
    fill: "url(#" + gradientIds[4] + ")",
    d: "M6.034 18.96c1.732-.41 2.776-2.816 3.131-6.335.042-.41.39-3.364-.212-5.715-.02-.08-.225 1.188-.713 2.213-.488 1.024-1.173 1.728-1.269 1.743-1.676.264-2.57-.325-4.122-1.035C1.204 9.077 2.675 1.66 1.688 4 1.025 5.573.692 7.579.779 9.92c.219 5.868 3.076 9.557 5.255 9.04z",
    transform: "rotate(-4 5.034 11.278)"
  }), React.createElement("ellipse", {
    cx: "4.478",
    cy: "13.166",
    fill: "url(#" + gradientIds[5] + ")",
    rx: "2.83",
    ry: "4.481",
    transform: "rotate(-12 4.478 13.166)"
  })), React.createElement("g", {
    transform: "translate(6.48 6.5)"
  }, React.createElement("circle", {
    cx: "3.676",
    cy: "9.132",
    r: "3.676",
    fill: "#FFF",
    fillRule: "nonzero",
    stroke: "#FFF"
  }), React.createElement("circle", {
    cx: "6.362",
    cy: "3.676",
    r: "3.676",
    fill: "#FFF",
    fillRule: "nonzero",
    stroke: "#FFF"
  }), React.createElement("path", {
    fill: "#54AE94",
    d: "M7.068 9.132a3.403 3.403 0 00-.993-2.399 3.4 3.4 0 00-2.4-.993A3.399 3.399 0 00.542 7.834a3.403 3.403 0 000 2.597 3.405 3.405 0 001.836 1.836 3.399 3.399 0 002.597 0A3.4 3.4 0 006.81 10.43c.17-.41.258-.855.258-1.299z"
  }), React.createElement("path", {
    id: "Shape",
    fill: "#FFF",
    d: "M2.195 7.436h3.13v.757H4.176v.426h.003c.47.021.883.078 1.182.158.15.041.272.086.362.141a.415.415 0 01.11.092.2.2 0 01.048.124.2.2 0 01-.047.123.415.415 0 01-.111.092c-.09.054-.212.1-.362.14-.3.08-.711.137-1.182.159h-.003v1.52h-.831v-1.52H3.34a5.813 5.813 0 01-1.182-.159 1.43 1.43 0 01-.361-.14.415.415 0 01-.11-.092.2.2 0 01-.048-.123.2.2 0 01.047-.124.415.415 0 01.11-.092c.09-.055.213-.1.362-.14.3-.081.712-.138 1.182-.158l.004-.001v-.426h-1.15v-.757zm1.151 1.967l.414.01.415-.01c.41-.018.767-.062 1.02-.123.126-.03.227-.064.292-.1a.271.271 0 00.07-.05c.014-.015.018-.026.018-.035 0-.01-.004-.02-.018-.036a.272.272 0 00-.07-.05 1.274 1.274 0 00-.292-.1 5.708 5.708 0 00-1.019-.123v.426h-.008c-.01.002-.048.005-.116.008-.034.001-.075.003-.125.003l-.08.002h-.173l-.08-.002c-.05 0-.091-.002-.125-.003a2.859 2.859 0 01-.116-.007h-.009v-.427c-.409.018-.766.063-1.018.123-.127.03-.227.065-.292.1a.271.271 0 00-.07.05c-.014.015-.018.026-.018.036 0 .01.004.02.018.035a.27.27 0 00.07.05c.065.036.165.07.292.1.252.06.61.105 1.02.123z"
  }), React.createElement("path", {
    fill: "#F4B731",
    d: "M9.754 3.676a3.403 3.403 0 00-.993-2.4 3.4 3.4 0 00-2.4-.993 3.399 3.399 0 00-3.134 2.094 3.403 3.403 0 000 2.597A3.405 3.405 0 005.063 6.81a3.399 3.399 0 002.597 0 3.4 3.4 0 001.836-1.836c.17-.41.258-.855.258-1.298z"
  }), React.createElement("path", {
    id: "Shape",
    fill: "#FFF",
    d: "M4.746 4.405V5.57c.49-.007.98-.007 1.47 0a2.43 2.43 0 00.497-.04 2.21 2.21 0 00.5-.158 2.33 2.33 0 00.202-.108l.053-.03c.08-.056.155-.116.227-.18.197-.177.35-.397.445-.643a.053.053 0 01.062-.04h.4c.033 0 .043-.01.043-.046V4.07a.41.41 0 000-.074l.003-.019c.004-.012.007-.025-.003-.037H8.31c-.04 0-.04-.005-.04-.04a2.661 2.661 0 000-.384c-.002-.038.006-.038.036-.038h.293c.034 0 .045-.009.046-.042a3.76 3.76 0 000-.345c0-.023-.001-.034-.007-.04-.007-.006-.019-.006-.044-.006h-.38a.055.055 0 01-.063-.044 1.602 1.602 0 00-.165-.321 1.835 1.835 0 00-.227-.28 1.832 1.832 0 00-.373-.285c-.206-.118-.43-.2-.664-.244a1.948 1.948 0 00-.343-.038h-1.59c-.043 0-.043.009-.043.043v1.131c0 .04-.009.04-.04.04H4.25c-.034 0-.034.006-.034.03v.369c0 .033.01.033.036.033h.46c.034 0 .034.007.034.032v.395c0 .035-.01.035-.038.035h-.492v.399c0 .034.01.034.036.034h.46c.034 0 .034.004.034.031zm3.03-.466H5.223c-.026 0-.039 0-.045-.006-.006-.006-.006-.019-.006-.042v-.374c0-.03.008-.04.04-.04h2.566c.028 0 .04.01.04.036.01.13.008.26 0 .39-.002.036-.015.036-.042.036zm-.102-.898a.04.04 0 000-.03.839.839 0 00-.076-.132 1.067 1.067 0 00-.157-.195.5.5 0 00-.098-.095 1.532 1.532 0 00-.636-.32 1.545 1.545 0 00-.36-.037c-.38.003-.76.003-1.14 0-.031 0-.035.013-.035.04v.745c0 .031 0 .04.04.04H7.66c.001 0 .021-.004.026-.016h-.01zm-.108 1.335a.496.496 0 01.108 0c.017.008.003.038.002.04a1.37 1.37 0 01-.591.59H7.07a1.027 1.027 0 01-.155.071c-.148.056-.303.09-.46.101a.546.546 0 01-.155.01H5.214c-.042 0-.042-.008-.042-.042v-.728c0-.042.01-.042.042-.042h2.352z"
  }), React.createElement("circle", {
    cx: "9.048",
    cy: "9.132",
    r: "3.676",
    fill: "#FFF",
    fillRule: "nonzero",
    stroke: "#FFF"
  }), React.createElement("path", {
    fill: "#2775CA",
    d: "M12.44 9.132a3.403 3.403 0 00-.993-2.399 3.4 3.4 0 00-2.4-.993 3.399 3.399 0 00-3.134 2.094 3.403 3.403 0 000 2.597 3.405 3.405 0 001.836 1.836 3.399 3.399 0 002.597 0 3.4 3.4 0 001.836-1.836c.17-.41.258-.855.258-1.299z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M8.426 11.483c0 .083-.057.11-.141.11-1.047-.335-1.782-1.287-1.782-2.407s.735-2.072 1.782-2.407c.084-.027.141.028.141.112v.196c0 .057-.03.112-.085.14-.82.307-1.386 1.064-1.386 1.96 0 .896.593 1.679 1.386 1.96a.155.155 0 01.085.139v.197z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M9.275 10.783c0 .055-.058.11-.114.11h-.227c-.056 0-.113-.055-.113-.11v-.337c-.452-.055-.677-.308-.763-.672 0-.056.028-.11.086-.11h.253c.057 0 .085.027.113.082.058.197.17.365.538.365.282 0 .48-.14.48-.365 0-.223-.112-.308-.508-.362-.594-.084-.876-.253-.876-.73 0-.363.282-.643.677-.7v-.335c0-.055.057-.112.113-.112h.227c.056 0 .114.057.114.112v.335c.338.057.565.253.62.56 0 .057-.027.112-.085.112h-.225c-.058 0-.085-.027-.113-.083-.056-.197-.197-.28-.452-.28-.283 0-.424.14-.424.336 0 .195.083.307.507.364.596.08.878.25.878.728 0 .363-.282.672-.706.755v.337z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M9.81 11.593c-.083.03-.141-.027-.141-.11v-.197c0-.056.03-.113.085-.14.82-.308 1.386-1.063 1.386-1.96 0-.895-.593-1.68-1.386-1.96a.155.155 0 01-.085-.14v-.195c0-.084.058-.112.141-.112 1.02.335 1.782 1.288 1.782 2.407 0 1.12-.735 2.072-1.782 2.407z"
  })))));
}

function CrvSBTCIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 32 32"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "sc037yydea",
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FCC538"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#F7931A"
  })), React.createElement("linearGradient", {
    id: "aoiuzdr1nb",
    x1: "58.266%",
    x2: "64.017%",
    y1: "53.988%",
    y2: "74.084%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#F2E62B"
  }), React.createElement("stop", {
    offset: "48.648%",
    stopColor: "#B1FF46"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#05A2FB"
  })), React.createElement("linearGradient", {
    id: "x28qakpi8c",
    x1: "45.095%",
    x2: "50%",
    y1: "27.882%",
    y2: "67.517%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "maroon"
  }), React.createElement("stop", {
    offset: "18.742%",
    stopColor: "#FA0F00"
  }), React.createElement("stop", {
    offset: "43.093%",
    stopColor: "#FFCD0C"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#EEEB32"
  })), React.createElement("linearGradient", {
    id: "ctmuzcaubd",
    x1: "33.933%",
    x2: "26.653%",
    y1: "24.733%",
    y2: "61.578%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FF9800"
  }), React.createElement("stop", {
    offset: "55.769%",
    stopColor: "#E4FF13"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#50FFA7"
  })), React.createElement("linearGradient", {
    id: "zkiff52age",
    x1: "60.825%",
    x2: "50%",
    y1: "-11.07%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA1000"
  }), React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA1000"
  }), React.createElement("stop", {
    offset: "17.007%",
    stopColor: "maroon"
  }), React.createElement("stop", {
    offset: "39.062%",
    stopColor: "#FA1801"
  }), React.createElement("stop", {
    offset: "54.442%",
    stopColor: "#F67A08"
  }), React.createElement("stop", {
    offset: "62.733%",
    stopColor: "#B1FF46"
  }), React.createElement("stop", {
    offset: "75.379%",
    stopColor: "#75FF82"
  }), React.createElement("stop", {
    offset: "85.4%",
    stopColor: "#05A2FB"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#1212EE"
  })), React.createElement("linearGradient", {
    id: "47ie0h0cif",
    x1: "40.754%",
    x2: "29.998%",
    y1: "8.651%",
    y2: "78.218%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA2401"
  }), React.createElement("stop", {
    offset: "42.869%",
    stopColor: "#F5DF22"
  }), React.createElement("stop", {
    offset: "77.418%",
    stopColor: "#00E4F8"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#0010FF"
  })), React.createElement("linearGradient", {
    id: "q3y0takcqg",
    x1: "50%",
    x2: "50.659%",
    y1: "-35.457%",
    y2: "95.225%"
  }, React.createElement("stop", {
    offset: ".022%",
    stopColor: "#F76D08"
  }), React.createElement("stop", {
    offset: "33.814%",
    stopColor: "#F1E62B"
  }), React.createElement("stop", {
    offset: "50.699%",
    stopColor: "#75F583"
  }), React.createElement("stop", {
    offset: "69.543%",
    stopColor: "#00E0FB"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#0023FF"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("path", {
    fill: "url(#sc037yydea)",
    fillRule: "nonzero",
    d: "M29 14.5c0-1.898-.378-3.796-1.104-5.549-.726-1.753-1.8-3.362-3.143-4.704-1.342-1.342-2.95-2.417-4.704-3.143C18.296.378 16.398 0 14.5 0c-1.898 0-3.796.378-5.549 1.104-1.753.726-3.362 1.801-4.704 3.143C2.905 5.589 1.83 7.198 1.104 8.951.378 10.704 0 12.602 0 14.5c0 1.898.378 3.796 1.104 5.549.726 1.753 1.8 3.362 3.143 4.704 1.342 1.342 2.95 2.417 4.704 3.143C10.704 28.622 12.602 29 14.5 29c1.898 0 3.796-.378 5.549-1.104 1.753-.726 3.362-1.801 4.704-3.143 1.342-1.342 2.417-2.951 3.143-4.704C28.622 18.296 29 16.398 29 14.5z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M20.893 12.567c.289-1.911-1.18-2.937-3.188-3.625l.651-2.587-1.59-.392-.636 2.519c-.417-.103-.847-.201-1.274-.297l.637-2.535-1.588-.393-.654 2.587-.217-.05c-.27-.062-.537-.123-.798-.186l.002-.009-2.195-.543-.422 1.683.012.003c.138.032 1.167.267 1.142.282.644.159.762.582.743.916L9.73 17.031c-.078.194-.278.484-.73.374.018.023-1.097-.27-1.156-.286l-.79 1.802 1.036.256 1.036.256c.222.055.44.112.658.168l.475.122-.658 2.617 1.59.393.652-2.59c.434.117.854.225 1.268.325l-.65 2.578 1.591.393.659-2.613c2.712.509 4.754.304 5.613-2.127.691-1.956-.036-3.084-1.464-3.821 1.04-.236 1.822-.913 2.032-2.311zm-3.635 5.046c-.452 1.795-3.284 1.055-4.583.716-.119-.031-.224-.059-.314-.081l.873-3.468c.11.027.243.057.395.09 1.344.299 4.09.909 3.63 2.743zm-3.363-4.355c1.081.287 3.443.912 3.854-.719.42-1.67-1.874-2.173-2.995-2.419-.126-.028-.237-.052-.328-.075l-.79 3.146c.074.018.161.042.26.067z"
  })), React.createElement("g", null, React.createElement("path", {
    fill: "#FFF",
    d: "M7.24 11.273c.716-.268 1.46-.461 2.203-.638.595-.14 1.19-.269 1.784-.422.37-.096.74-.2 1.086-.365.276-.132.537-.3.751-.516.214-.216.382-.476.508-.753.157-.346.249-.716.312-1.093.076-.451.111-.91.056-1.36-.055-.448-.2-.888-.398-1.301-.198-.413-.448-.798-.745-1.143-.396-.46-.876-.848-1.384-1.189-.636-.426-1.315-.778-2.01-1.09-.697-.314-1.41-.59-2.139-.822C6.681.396 6.089.237 5.483.15 5.029.083 4.568.056 4.111.102c-.457.047-.91.166-1.32.37-.409.205-.774.495-1.086.83-.312.335-.57.714-.785 1.116-.215.403-.386.827-.516 1.264-.131.435-.22.884-.274 1.336C.059 5.62.052 6.23.102 6.834c.063.755.215 1.5.39 2.24.174.741.37 1.477.668 2.175.239.558.543 1.093.944 1.554.25.287.538.545.863.746.259.162.541.288.838.36.223.053.454.075.683.064.23-.01.458-.052.674-.129.288-.1.554-.259.788-.454.292-.246.534-.548.733-.874.24-.389.42-.81.557-1.243z",
    transform: "translate(18 18)"
  }), React.createElement("g", {
    transform: "translate(18 18) translate(.412 .618)"
  }, React.createElement("path", {
    fill: "url(#aoiuzdr1nb)",
    d: "M2.934.645c2.12-1.277 9.918 2.52 9.805 5.005-.114 2.485-1.359 2.863-2.342 3.132-.984.268-4.081.847-4.246 1.295-.164.447-.683 2.67-2.338 2.384C2.16 12.176.782 9.052.677 6.842.573 4.632.814 1.922 2.934.645z"
  }), React.createElement("path", {
    fill: "url(#x28qakpi8c)",
    d: "M2.934.645c1.95-1.175 8.628 1.538 9.653 4.31.089.24-.143.453-.407.615-.848.52-1.762.652-2.746.92-.983.269-4.08.847-4.245 1.295-.165.448-4.407 1.267-4.512-.943-.104-2.21.137-4.92 2.257-6.197z"
  }), React.createElement("path", {
    fill: "url(#ctmuzcaubd)",
    d: "M6.116 6.28c0-.812-.079-1.415-.237-1.809-.237-.59.014-1.522.506-1.682.491-.16 1.684.528 2.739.981 1.055.453 1.81 1.032 1.56 1.461-.25.43-1.504.716-2.07.801-.378.057-1.21.139-2.498.247z"
  }), React.createElement("path", {
    fill: "url(#zkiff52age)",
    d: "M4.106 12.64C5.545 12.3 6.26 9.87 6.26 6.518c0-1.23-.53-3.23-.881-4.35C4.999.962 6.577.84 6.352.774 5.457.515 5.014.304 4.094.312 2.226.326.44 2.835.637 6.673c.197 3.839 2.03 6.308 3.47 5.967z",
    transform: "rotate(-4 3.498 6.491)"
  }), React.createElement("path", {
    fill: "url(#47ie0h0cif)",
    d: "M4.182 12.641c1.143-.27 1.831-1.86 2.066-4.182.028-.27.258-2.22-.14-3.772-.013-.053-.149.784-.47 1.46-.323.677-.775 1.141-.838 1.151-1.106.174-1.696-.214-2.72-.683-1.087-.498-.116-5.393-.768-3.848-.437 1.037-.657 2.362-.6 3.907.145 3.874 2.031 6.308 3.47 5.967z",
    transform: "rotate(-4 3.521 7.57)"
  }), React.createElement("ellipse", {
    cx: "3.154",
    cy: "8.816",
    fill: "url(#q3y0takcqg)",
    rx: "1.868",
    ry: "2.958",
    transform: "rotate(-12 3.154 8.816)"
  })))))));
}

function CrvBUSDIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 33 33"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "ksu9s994ha",
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FFEEB8"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#FECB27"
  })), React.createElement("linearGradient", {
    id: "109n2dp2gb",
    x1: "58.266%",
    x2: "64.017%",
    y1: "53.988%",
    y2: "74.084%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#F2E62B"
  }), React.createElement("stop", {
    offset: "48.648%",
    stopColor: "#B1FF46"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#05A2FB"
  })), React.createElement("linearGradient", {
    id: "xme85ytwgc",
    x1: "45.095%",
    x2: "50%",
    y1: "27.882%",
    y2: "67.517%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "maroon"
  }), React.createElement("stop", {
    offset: "18.742%",
    stopColor: "#FA0F00"
  }), React.createElement("stop", {
    offset: "43.093%",
    stopColor: "#FFCD0C"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#EEEB32"
  })), React.createElement("linearGradient", {
    id: "bryqguhtgd",
    x1: "33.933%",
    x2: "26.653%",
    y1: "24.733%",
    y2: "61.578%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FF9800"
  }), React.createElement("stop", {
    offset: "55.769%",
    stopColor: "#E4FF13"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#50FFA7"
  })), React.createElement("linearGradient", {
    id: "396vmvocte",
    x1: "60.825%",
    x2: "50%",
    y1: "-11.07%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA1000"
  }), React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA1000"
  }), React.createElement("stop", {
    offset: "17.007%",
    stopColor: "maroon"
  }), React.createElement("stop", {
    offset: "39.062%",
    stopColor: "#FA1801"
  }), React.createElement("stop", {
    offset: "54.442%",
    stopColor: "#F67A08"
  }), React.createElement("stop", {
    offset: "62.733%",
    stopColor: "#B1FF46"
  }), React.createElement("stop", {
    offset: "75.379%",
    stopColor: "#75FF82"
  }), React.createElement("stop", {
    offset: "85.4%",
    stopColor: "#05A2FB"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#1212EE"
  })), React.createElement("linearGradient", {
    id: "7ol4zg0g3f",
    x1: "40.754%",
    x2: "29.998%",
    y1: "8.651%",
    y2: "78.218%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA2401"
  }), React.createElement("stop", {
    offset: "42.869%",
    stopColor: "#F5DF22"
  }), React.createElement("stop", {
    offset: "77.418%",
    stopColor: "#00E4F8"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#0010FF"
  })), React.createElement("linearGradient", {
    id: "vv9vk0gygg",
    x1: "50%",
    x2: "50.659%",
    y1: "-35.457%",
    y2: "95.225%"
  }, React.createElement("stop", {
    offset: ".022%",
    stopColor: "#F76D08"
  }), React.createElement("stop", {
    offset: "33.814%",
    stopColor: "#F1E62B"
  }), React.createElement("stop", {
    offset: "50.699%",
    stopColor: "#75F583"
  }), React.createElement("stop", {
    offset: "69.543%",
    stopColor: "#00E0FB"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#0023FF"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("path", {
    fill: "url(#ksu9s994ha)",
    fillRule: "nonzero",
    d: "M25.332 10.843l3.582 3.657-14.457 14.414-3.582-3.571 14.457-14.5zm-5.437-5.422l3.582 3.658L9.02 23.493l-3.582-3.572 14.457-14.5zM3.582 10.843L7.164 14.5l-3.582 3.571L0 14.5l3.582-3.657zM14.457 0l3.582 3.657L9.02 12.65 5.438 9.079 14.457 0z",
    transform: "translate(-540 -883) translate(540.06 883.061) translate(1 1)"
  }), React.createElement("g", null, React.createElement("path", {
    fill: "#FFF",
    d: "M7.24 11.273c.716-.268 1.46-.461 2.203-.638.595-.14 1.19-.269 1.784-.422.37-.096.74-.2 1.086-.365.276-.132.537-.3.751-.516.214-.216.382-.476.508-.753.157-.346.249-.716.312-1.093.076-.451.111-.91.056-1.36-.055-.448-.2-.888-.398-1.301-.198-.413-.448-.798-.745-1.143-.396-.46-.876-.848-1.384-1.189-.636-.426-1.315-.778-2.01-1.09-.697-.314-1.41-.59-2.139-.822C6.681.396 6.089.237 5.483.15 5.029.083 4.568.056 4.111.102c-.457.047-.91.166-1.32.37-.409.205-.774.495-1.086.83-.312.335-.57.714-.785 1.116-.215.403-.386.827-.516 1.264-.131.435-.22.884-.274 1.336C.059 5.62.052 6.23.102 6.834c.063.755.215 1.5.39 2.24.174.741.37 1.477.668 2.175.239.558.543 1.093.944 1.554.25.287.538.545.863.746.259.162.541.288.838.36.223.053.454.075.683.064.23-.01.458-.052.674-.129.288-.1.554-.259.788-.454.292-.246.534-.548.733-.874.24-.389.42-.81.557-1.243z",
    transform: "translate(-540 -883) translate(540.06 883.061) translate(1 1) translate(16 16)"
  }), React.createElement("g", {
    transform: "translate(-540 -883) translate(540.06 883.061) translate(1 1) translate(16 16) translate(.412 .618)"
  }, React.createElement("path", {
    fill: "url(#109n2dp2gb)",
    d: "M2.934.645c2.12-1.277 9.918 2.52 9.805 5.005-.114 2.485-1.359 2.863-2.342 3.132-.984.268-4.081.847-4.246 1.295-.164.447-.683 2.67-2.338 2.384C2.16 12.176.782 9.052.677 6.842.573 4.632.814 1.922 2.934.645z"
  }), React.createElement("path", {
    fill: "url(#xme85ytwgc)",
    d: "M2.934.645c1.95-1.175 8.628 1.538 9.653 4.31.089.24-.143.453-.407.615-.848.52-1.762.652-2.746.92-.983.269-4.08.847-4.245 1.295-.165.448-4.407 1.267-4.512-.943-.104-2.21.137-4.92 2.257-6.197z"
  }), React.createElement("path", {
    fill: "url(#bryqguhtgd)",
    d: "M6.116 6.28c0-.812-.079-1.415-.237-1.809-.237-.59.014-1.522.506-1.682.491-.16 1.684.528 2.739.981 1.055.453 1.81 1.032 1.56 1.461-.25.43-1.504.716-2.07.801-.378.057-1.21.139-2.498.247z"
  }), React.createElement("path", {
    fill: "url(#396vmvocte)",
    d: "M4.106 12.64C5.545 12.3 6.26 9.87 6.26 6.518c0-1.23-.53-3.23-.881-4.35C4.999.962 6.577.84 6.352.774 5.457.515 5.014.304 4.094.312 2.226.326.44 2.835.637 6.673c.197 3.839 2.03 6.308 3.47 5.967z",
    transform: "rotate(-4 3.498 6.491)"
  }), React.createElement("path", {
    fill: "url(#7ol4zg0g3f)",
    d: "M4.182 12.641c1.143-.27 1.831-1.86 2.066-4.182.028-.27.258-2.22-.14-3.772-.013-.053-.149.784-.47 1.46-.323.677-.775 1.141-.838 1.151-1.106.174-1.696-.214-2.72-.683-1.087-.498-.116-5.393-.768-3.848-.437 1.037-.657 2.362-.6 3.907.145 3.874 2.031 6.308 3.47 5.967z",
    transform: "rotate(-4 3.521 7.57)"
  }), React.createElement("ellipse", {
    cx: "3.154",
    cy: "8.816",
    fill: "url(#vv9vk0gygg)",
    rx: "1.868",
    ry: "2.958",
    transform: "rotate(-12 3.154 8.816)"
  }))))))));
}

function CrvCOMPIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 32 32"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "0kt2u27aha",
    x1: "58.266%",
    x2: "64.017%",
    y1: "53.988%",
    y2: "74.084%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#F2E62B"
  }), React.createElement("stop", {
    offset: "48.648%",
    stopColor: "#B1FF46"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#05A2FB"
  })), React.createElement("linearGradient", {
    id: "cn4ojmq06b",
    x1: "45.095%",
    x2: "50%",
    y1: "27.882%",
    y2: "67.517%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "maroon"
  }), React.createElement("stop", {
    offset: "18.742%",
    stopColor: "#FA0F00"
  }), React.createElement("stop", {
    offset: "43.093%",
    stopColor: "#FFCD0C"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#EEEB32"
  })), React.createElement("linearGradient", {
    id: "1x0qjvd2pc",
    x1: "33.933%",
    x2: "26.653%",
    y1: "24.733%",
    y2: "61.578%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FF9800"
  }), React.createElement("stop", {
    offset: "55.769%",
    stopColor: "#E4FF13"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#50FFA7"
  })), React.createElement("linearGradient", {
    id: "d5erek9rpd",
    x1: "60.825%",
    x2: "50%",
    y1: "-11.07%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA1000"
  }), React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA1000"
  }), React.createElement("stop", {
    offset: "17.007%",
    stopColor: "maroon"
  }), React.createElement("stop", {
    offset: "39.062%",
    stopColor: "#FA1801"
  }), React.createElement("stop", {
    offset: "54.442%",
    stopColor: "#F67A08"
  }), React.createElement("stop", {
    offset: "62.733%",
    stopColor: "#B1FF46"
  }), React.createElement("stop", {
    offset: "75.379%",
    stopColor: "#75FF82"
  }), React.createElement("stop", {
    offset: "85.4%",
    stopColor: "#05A2FB"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#1212EE"
  })), React.createElement("linearGradient", {
    id: "97vg4f5ufe",
    x1: "40.754%",
    x2: "29.998%",
    y1: "8.651%",
    y2: "78.218%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA2401"
  }), React.createElement("stop", {
    offset: "42.869%",
    stopColor: "#F5DF22"
  }), React.createElement("stop", {
    offset: "77.418%",
    stopColor: "#00E4F8"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#0010FF"
  })), React.createElement("linearGradient", {
    id: "yodmruwx2f",
    x1: "50%",
    x2: "50.659%",
    y1: "-35.457%",
    y2: "95.225%"
  }, React.createElement("stop", {
    offset: ".022%",
    stopColor: "#F76D08"
  }), React.createElement("stop", {
    offset: "33.814%",
    stopColor: "#F1E62B"
  }), React.createElement("stop", {
    offset: "50.699%",
    stopColor: "#75F583"
  }), React.createElement("stop", {
    offset: "69.543%",
    stopColor: "#00E0FB"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#0023FF"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", null, React.createElement("g", null, React.createElement("path", {
    fill: "#191B1F",
    d: "M14.5 29C22.508 29 29 22.508 29 14.5S22.508 0 14.5 0 0 6.492 0 14.5 6.492 29 14.5 29z",
    transform: "translate(-582 -883) translate(582 883)"
  }), React.createElement("path", {
    fill: "#00D395",
    d: "M8.377 19.362c-.434-.266-.699-.737-.699-1.244v-2.834c0-.336.274-.609.61-.607.107 0 .213.029.306.083l6.393 3.727c.374.218.605.618.605 1.052v2.935c.001.403-.325.73-.728.73-.135 0-.268-.037-.383-.107l-6.104-3.735zm9.529-5.378c.374.217.603.619.605 1.051v5.957c0 .175-.095.337-.248.423l-1.4.787c-.017.011-.036.018-.056.024v-3.308c0-.428-.225-.825-.593-1.045l-5.615-3.359v-3.733c0-.337.275-.609.611-.608.107 0 .213.029.306.083l6.39 3.728zm2.799-4.4c.375.218.606.62.606 1.053v8.7c-.002.179-.1.342-.257.428l-1.327.716v-6.056c0-.428-.225-.824-.59-1.044l-5.739-3.443V6.397c0-.107.029-.213.081-.306.17-.29.543-.388.833-.22l6.393 3.713z",
    transform: "translate(-582 -883) translate(582 883)"
  }), React.createElement("g", null, React.createElement("path", {
    fill: "#FFF",
    d: "M7.24 11.273c.716-.268 1.46-.461 2.203-.638.595-.14 1.19-.269 1.784-.422.37-.096.74-.2 1.086-.365.276-.132.537-.3.751-.516.214-.216.382-.476.508-.753.157-.346.249-.716.312-1.093.076-.451.111-.91.056-1.36-.055-.448-.2-.888-.398-1.301-.198-.413-.448-.798-.745-1.143-.396-.46-.876-.848-1.384-1.189-.636-.426-1.315-.778-2.01-1.09-.697-.314-1.41-.59-2.139-.822C6.681.396 6.089.237 5.483.15 5.029.083 4.568.056 4.111.102c-.457.047-.91.166-1.32.37-.409.205-.774.495-1.086.83-.312.335-.57.714-.785 1.116-.215.403-.386.827-.516 1.264-.131.435-.22.884-.274 1.336C.059 5.62.052 6.23.102 6.834c.063.755.215 1.5.39 2.24.174.741.37 1.477.668 2.175.239.558.543 1.093.944 1.554.25.287.538.545.863.746.259.162.541.288.838.36.223.053.454.075.683.064.23-.01.458-.052.674-.129.288-.1.554-.259.788-.454.292-.246.534-.548.733-.874.24-.389.42-.81.557-1.243z",
    transform: "translate(-582 -883) translate(582 883) translate(18 18)"
  }), React.createElement("g", {
    transform: "translate(-582 -883) translate(582 883) translate(18 18) translate(.412 .618)"
  }, React.createElement("path", {
    fill: "url(#0kt2u27aha)",
    d: "M2.934.645c2.12-1.277 9.918 2.52 9.805 5.005-.114 2.485-1.359 2.863-2.342 3.132-.984.268-4.081.847-4.246 1.295-.164.447-.683 2.67-2.338 2.384C2.16 12.176.782 9.052.677 6.842.573 4.632.814 1.922 2.934.645z"
  }), React.createElement("path", {
    fill: "url(#cn4ojmq06b)",
    d: "M2.934.645c1.95-1.175 8.628 1.538 9.653 4.31.089.24-.143.453-.407.615-.848.52-1.762.652-2.746.92-.983.269-4.08.847-4.245 1.295-.165.448-4.407 1.267-4.512-.943-.104-2.21.137-4.92 2.257-6.197z"
  }), React.createElement("path", {
    fill: "url(#1x0qjvd2pc)",
    d: "M6.116 6.28c0-.812-.079-1.415-.237-1.809-.237-.59.014-1.522.506-1.682.491-.16 1.684.528 2.739.981 1.055.453 1.81 1.032 1.56 1.461-.25.43-1.504.716-2.07.801-.378.057-1.21.139-2.498.247z"
  }), React.createElement("path", {
    fill: "url(#d5erek9rpd)",
    d: "M4.106 12.64C5.545 12.3 6.26 9.87 6.26 6.518c0-1.23-.53-3.23-.881-4.35C4.999.962 6.577.84 6.352.774 5.457.515 5.014.304 4.094.312 2.226.326.44 2.835.637 6.673c.197 3.839 2.03 6.308 3.47 5.967z",
    transform: "rotate(-4 3.498 6.491)"
  }), React.createElement("path", {
    fill: "url(#97vg4f5ufe)",
    d: "M4.182 12.641c1.143-.27 1.831-1.86 2.066-4.182.028-.27.258-2.22-.14-3.772-.013-.053-.149.784-.47 1.46-.323.677-.775 1.141-.838 1.151-1.106.174-1.696-.214-2.72-.683-1.087-.498-.116-5.393-.768-3.848-.437 1.037-.657 2.362-.6 3.907.145 3.874 2.031 6.308 3.47 5.967z",
    transform: "rotate(-4 3.521 7.57)"
  }), React.createElement("ellipse", {
    cx: "3.154",
    cy: "8.816",
    fill: "url(#yodmruwx2f)",
    rx: "1.868",
    ry: "2.958",
    transform: "rotate(-12 3.154 8.816)"
  })))))));
}

function YCRVIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 32 32"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "np5bf8i53a",
    x1: "58.266%",
    x2: "64.017%",
    y1: "53.988%",
    y2: "74.084%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#F2E62B"
  }), React.createElement("stop", {
    offset: "48.648%",
    stopColor: "#B1FF46"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#05A2FB"
  })), React.createElement("linearGradient", {
    id: "xvkt2batvb",
    x1: "45.095%",
    x2: "50%",
    y1: "27.882%",
    y2: "67.517%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "maroon"
  }), React.createElement("stop", {
    offset: "18.742%",
    stopColor: "#FA0F00"
  }), React.createElement("stop", {
    offset: "43.093%",
    stopColor: "#FFCD0C"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#EEEB32"
  })), React.createElement("linearGradient", {
    id: "9m34b1k3qc",
    x1: "33.933%",
    x2: "26.653%",
    y1: "24.733%",
    y2: "61.578%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FF9800"
  }), React.createElement("stop", {
    offset: "55.769%",
    stopColor: "#E4FF13"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#50FFA7"
  })), React.createElement("linearGradient", {
    id: "g5gti2qhed",
    x1: "60.825%",
    x2: "50%",
    y1: "-11.07%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA1000"
  }), React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA1000"
  }), React.createElement("stop", {
    offset: "17.007%",
    stopColor: "maroon"
  }), React.createElement("stop", {
    offset: "39.062%",
    stopColor: "#FA1801"
  }), React.createElement("stop", {
    offset: "54.442%",
    stopColor: "#F67A08"
  }), React.createElement("stop", {
    offset: "62.733%",
    stopColor: "#B1FF46"
  }), React.createElement("stop", {
    offset: "75.379%",
    stopColor: "#75FF82"
  }), React.createElement("stop", {
    offset: "85.4%",
    stopColor: "#05A2FB"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#1212EE"
  })), React.createElement("linearGradient", {
    id: "5sm35ssvse",
    x1: "40.754%",
    x2: "29.998%",
    y1: "8.651%",
    y2: "78.218%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA2401"
  }), React.createElement("stop", {
    offset: "42.869%",
    stopColor: "#F5DF22"
  }), React.createElement("stop", {
    offset: "77.418%",
    stopColor: "#00E4F8"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#0010FF"
  })), React.createElement("linearGradient", {
    id: "i74362sdsf",
    x1: "50%",
    x2: "50.659%",
    y1: "-35.457%",
    y2: "95.225%"
  }, React.createElement("stop", {
    offset: ".022%",
    stopColor: "#F76D08"
  }), React.createElement("stop", {
    offset: "33.814%",
    stopColor: "#F1E62B"
  }), React.createElement("stop", {
    offset: "50.699%",
    stopColor: "#75F583"
  }), React.createElement("stop", {
    offset: "69.543%",
    stopColor: "#00E0FB"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#0023FF"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("path", {
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M14.5 1.209c-1.739 0-3.48.346-5.086 1.011C7.807 2.886 6.33 3.872 5.1 5.102c-1.23 1.229-2.215 2.705-2.88 4.312-.666 1.606-1.012 3.347-1.012 5.086 0 1.739.346 3.48 1.011 5.086.666 1.607 1.652 3.083 2.882 4.312 1.23 1.23 2.705 2.216 4.312 2.882 1.606.665 3.347 1.011 5.086 1.011 1.739 0 3.48-.346 5.086-1.011 1.607-.666 3.083-1.652 4.313-2.882 1.23-1.229 2.215-2.705 2.88-4.312.666-1.606 1.012-3.347 1.012-5.086 0-1.739-.346-3.48-1.011-5.086-.666-1.607-1.652-3.083-2.882-4.312-1.23-1.23-2.705-2.216-4.312-2.882-1.606-.665-3.347-1.011-5.086-1.011z",
    transform: "translate(-373 -841) translate(373 841)"
  }), React.createElement("path", {
    fill: "#000",
    d: "M20.049 1.104C18.296.378 16.398 0 14.5 0c-1.898 0-3.796.378-5.549 1.104-1.753.726-3.362 1.801-4.704 3.143C2.905 5.589 1.83 7.198 1.104 8.951.378 10.704 0 12.602 0 14.5c0 1.898.378 3.796 1.104 5.549.726 1.753 1.8 3.362 3.143 4.704 1.342 1.342 2.95 2.417 4.704 3.143C10.704 28.622 12.602 29 14.5 29c1.898 0 3.796-.378 5.549-1.104 1.753-.726 3.362-1.801 4.704-3.143 1.342-1.342 2.417-2.951 3.143-4.704C28.622 18.296 29 16.398 29 14.5c0-1.898-.378-3.796-1.104-5.549-.726-1.753-1.8-3.362-3.143-4.704-1.342-1.342-2.95-2.417-4.704-3.143zM9.656 2.805c1.53-.634 3.188-.964 4.844-.964 1.656 0 3.314.33 4.844.964 1.53.634 2.936 1.573 4.107 2.744 1.171 1.171 2.11 2.577 2.744 4.107.634 1.53.963 3.188.963 4.844 0 1.656-.33 3.314-.963 4.844-.634 1.53-1.573 2.936-2.744 4.107-1.171 1.171-2.577 2.11-4.107 2.744-1.53.634-3.188.963-4.844.963-1.656 0-3.314-.329-4.844-.963-1.53-.634-2.936-1.573-4.107-2.744-1.171-1.171-2.11-2.577-2.744-4.107-.634-1.53-.964-3.188-.964-4.844 0-1.656.33-3.314.964-4.844.634-1.53 1.573-2.936 2.744-4.107 1.171-1.171 2.577-2.11 4.107-2.744z",
    transform: "translate(-373 -841) translate(373 841)"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.751 7.953L15.249 7.953 15.249 21.047 13.751 21.047z",
    transform: "translate(-373 -841) translate(373 841)"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.9 14.113v-1.565c-1.202-.591-2.03-1.828-2.03-3.259 0-2.004 1.626-3.629 3.63-3.629 2.25 0 3.876 1.625 3.876 3.629 0 .505-.104.987-.353 1.558l-.64-2.081-1.283.401 1.138 4.331 4.416-1.625-.537-1.267-1.647.564c.299-.646.357-1.122.357-1.881 0-2.806-2.275-5.081-5.327-5.081-2.806 0-5.08 2.275-5.08 5.081 0 2.247 1.458 4.153 3.48 4.824zM16.1 14.888v1.565c1.202.591 2.03 1.828 2.03 3.258 0 2.004-1.625 3.629-3.63 3.629-2.25 0-3.876-1.625-3.876-3.629 0-.505.104-.986.353-1.558l.64 2.081 1.283-.401-1.138-4.33-4.416 1.625.537 1.266 1.647-.564c-.298.647-.357 1.122-.357 1.881 0 2.806 2.275 5.081 5.327 5.081 2.806 0 5.08-2.275 5.08-5.081 0-2.247-1.458-4.153-3.48-4.823z",
    transform: "translate(-373 -841) translate(373 841)"
  })), React.createElement("g", null, React.createElement("path", {
    fill: "#FFF",
    d: "M7.447 11.595c.736-.275 1.5-.474 2.266-.656.612-.144 1.224-.277 1.835-.434.38-.1.76-.206 1.116-.376.285-.136.553-.31.773-.53.22-.222.394-.49.523-.775.162-.356.256-.737.32-1.124.078-.464.115-.936.058-1.399-.056-.461-.206-.913-.41-1.338-.203-.425-.46-.821-.765-1.176-.408-.473-.902-.872-1.424-1.222-.654-.438-1.352-.8-2.068-1.123-.716-.322-1.45-.605-2.2-.844-.6-.19-1.208-.354-1.831-.445C5.173.086 4.699.058 4.228.105c-.47.048-.936.17-1.357.38-.42.211-.797.51-1.117.853-.32.345-.586.735-.807 1.149-.221.414-.398.85-.532 1.3-.134.448-.226.91-.281 1.374-.074.62-.08 1.247-.029 1.868.065.776.222 1.543.4 2.305.18.762.382 1.518.688 2.237.246.574.558 1.124.97 1.598.258.295.555.56.888.768.267.166.558.296.863.37.229.054.466.077.703.066.236-.01.47-.055.693-.133.295-.103.57-.267.81-.468.3-.252.549-.563.754-.898.247-.4.431-.834.573-1.279z",
    transform: "translate(-373 -841) translate(373 841) translate(16 16)"
  }), React.createElement("g", {
    transform: "translate(-373 -841) translate(373 841) translate(16 16) translate(.424 .635)"
  }, React.createElement("path", {
    fill: "url(#np5bf8i53a)",
    d: "M3.018.663C5.198-.65 13.22 3.255 13.103 5.811c-.117 2.556-1.398 2.946-2.41 3.222-1.01.276-4.197.87-4.366 1.331-.17.461-.703 2.747-2.405 2.453C2.221 12.524.804 9.311.696 7.037.59 4.766.838 1.978 3.018.664z"
  }), React.createElement("path", {
    fill: "url(#xvkt2batvb)",
    d: "M3.018.663c2.006-1.208 8.874 1.582 9.928 4.433.092.247-.147.467-.418.633-.872.534-1.812.67-2.824.947-1.012.276-4.198.87-4.367 1.331-.17.46-4.533 1.304-4.64-.97-.108-2.272.14-5.06 2.32-6.374z"
  }), React.createElement("path", {
    fill: "url(#9m34b1k3qc)",
    d: "M6.29 6.459c0-.835-.08-1.455-.243-1.86-.244-.608.015-1.566.52-1.73.506-.165 1.733.543 2.818 1.009 1.084.466 1.862 1.061 1.605 1.503-.257.442-1.548.736-2.13.823-.389.059-1.245.143-2.57.255z"
  }), React.createElement("path", {
    fill: "url(#g5gti2qhed)",
    d: "M4.224 13.001c1.48-.35 2.214-2.848 2.214-6.297 0-1.265-.545-3.322-.906-4.474C5.142.99 6.765.863 6.533.796 5.613.53 5.157.313 4.211.32 2.289.335.454 2.916.656 6.864.858 10.812 2.744 13.352 4.224 13z",
    transform: "rotate(-4 3.598 6.677)"
  }), React.createElement("path", {
    fill: "url(#5sm35ssvse)",
    d: "M4.301 13.002c1.176-.278 1.884-1.912 2.126-4.301.028-.278.264-2.284-.144-3.88-.014-.054-.153.806-.485 1.502-.33.696-.796 1.174-.86 1.184-1.139.179-1.746-.22-2.8-.703-1.116-.512-.118-5.547-.788-3.958C.9 3.913.674 5.276.733 6.865c.149 3.984 2.089 6.488 3.568 6.137z",
    transform: "rotate(-4 3.622 7.786)"
  }), React.createElement("ellipse", {
    cx: "3.245",
    cy: "9.068",
    fill: "url(#i74362sdsf)",
    rx: "1.921",
    ry: "3.042",
    transform: "rotate(-12 3.245 9.068)"
  })))))));
}

function HEGICIcon(props) {
  var svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  var linearGradientId = React.useMemo(function () {
    return makeRandomID('HEGICIcon');
  }, []);
  return React.createElement(SvgIcon, Object.assign({}, svgProps, {
    viewBox: "0 0 32 32"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    x1: "50%",
    y1: "-19.9111328%",
    x2: "50%",
    y2: "100%",
    id: linearGradientId
  }, React.createElement("stop", {
    stopColor: "#2D3C65",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#141C35",
    offset: "100%"
  }))), React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    id: "Oval",
    fill: "url(#" + linearGradientId + ")",
    cx: "16",
    cy: "16",
    r: "16"
  }), React.createElement("path", {
    d: "M9.04896,18.5625959 C9.12576,18.5625959 9.19232,18.5344359 9.24864,18.4781159 C9.30496,18.4217959 9.33312,18.3552359 9.33312,18.2784359 L9.33312,18.2784359 L9.33312,13.7241959 C9.33312,13.6473959 9.30496,13.5808359 9.24864,13.5245159 C9.19232,13.4681959 9.12576,13.4400359 9.04896,13.4400359 C8.9696,13.4400359 8.90304,13.4681959 8.84928,13.5245159 C8.79552,13.5808359 8.76864,13.6473959 8.76864,13.7241959 L8.76864,13.7241959 L8.76864,15.6864359 L5.60448,15.6864359 L5.60448,13.7241959 C5.60448,13.6473959 5.57696,13.5808359 5.52192,13.5245159 C5.46688,13.4681959 5.40096,13.4400359 5.32416,13.4400359 C5.24736,13.4400359 5.1808,13.4681959 5.12448,13.5245159 C5.06816,13.5808359 5.04,13.6473959 5.04,13.7241959 L5.04,13.7241959 L5.04,18.2784359 C5.04,18.3552359 5.06816,18.4217959 5.12448,18.4781159 C5.1808,18.5344359 5.24736,18.5625959 5.32416,18.5625959 C5.40096,18.5625959 5.46688,18.5344359 5.52192,18.4781159 C5.57696,18.4217959 5.60448,18.3552359 5.60448,18.2784359 L5.60448,18.2784359 L5.60448,16.2509159 L8.76864,16.2509159 L8.76864,18.2784359 C8.76864,18.3552359 8.79552,18.4217959 8.84928,18.4781159 C8.90304,18.5344359 8.9696,18.5625959 9.04896,18.5625959 Z M14.06656,18.5625959 C14.256,18.5625959 14.35072,18.4678759 14.35072,18.2784359 C14.35072,18.0915559 14.256,17.9981159 14.06656,17.9981159 L14.06656,17.9981159 L11.55136,17.9981159 L11.55136,16.2585959 L13.16032,16.2585959 C13.34976,16.2585959 13.44448,16.1638759 13.44448,15.9744359 C13.44448,15.7875559 13.34976,15.6941159 13.16032,15.6941159 L13.16032,15.6941159 L11.55136,15.6941159 L11.55136,14.0045159 L14.06656,14.0045159 C14.256,14.0045159 14.35072,13.9110759 14.35072,13.7241959 C14.35072,13.5347559 14.256,13.4400359 14.06656,13.4400359 L14.06656,13.4400359 L11.27104,13.4400359 C11.0816,13.4400359 10.98688,13.5347559 10.98688,13.7241959 L10.98688,13.7241959 L10.98688,18.2784359 C10.98688,18.4678759 11.0816,18.5625959 11.27104,18.5625959 L11.27104,18.5625959 L14.06656,18.5625959 Z M17.91488,18.5625959 C18.44224,18.5625959 18.82816,18.4409959 19.07264,18.1977959 C19.31712,17.9545959 19.43936,17.5667559 19.43936,17.0342759 L19.43936,17.0342759 L19.43936,16.3507559 C19.43936,16.1638759 19.34592,16.0704359 19.15904,16.0704359 L19.15904,16.0704359 L18.1952,16.0627559 C18.00832,16.0627559 17.91488,16.1561959 17.91488,16.3430759 C17.91488,16.5325159 18.00832,16.6272359 18.1952,16.6272359 L18.1952,16.6272359 L18.87488,16.6349159 L18.87488,17.0342759 C18.87488,17.2851559 18.84608,17.4803559 18.78848,17.6198759 C18.73088,17.7593959 18.63232,17.8573159 18.4928,17.9136359 C18.35328,17.9699559 18.16064,17.9981159 17.91488,17.9981159 L17.91488,17.9981159 L16.99328,17.9981159 C16.71168,17.9981159 16.4896,17.9635559 16.32704,17.8944359 C16.16448,17.8253159 16.04864,17.7094759 15.97952,17.5469159 C15.9104,17.3843559 15.87584,17.1622759 15.87584,16.8806759 L15.87584,16.8806759 L15.87584,15.1219559 C15.87584,14.8377959 15.9104,14.6144359 15.97952,14.4518759 C16.04864,14.2893159 16.16384,14.1741159 16.32512,14.1062759 C16.4864,14.0384359 16.70656,14.0045159 16.9856,14.0045159 L16.9856,14.0045159 L17.91488,14.0045159 C18.23232,14.0045159 18.46272,14.0525159 18.60608,14.1485159 C18.74944,14.2445159 18.83264,14.4230759 18.85568,14.6841959 C18.88128,14.8736359 18.97984,14.9683559 19.15136,14.9683559 C19.24608,14.9683559 19.31776,14.9433959 19.3664,14.8934759 C19.41504,14.8435559 19.43296,14.7712359 19.42016,14.6765159 C19.38432,14.2489959 19.24352,13.9360359 18.99776,13.7376359 C18.752,13.5392359 18.39104,13.44 17.91488,13.44 L17.91488,13.44 L16.9856,13.44 C16.41216,13.4374759 15.98976,13.5718759 15.7184,13.8432359 C15.44704,14.1145959 15.31136,14.5408359 15.31136,15.1219559 L15.31136,15.1219559 L15.31136,16.8806759 C15.31136,17.4566759 15.44768,17.8809959 15.72032,18.1536359 C15.99296,18.4262759 16.41728,18.5625959 16.99328,18.5625959 L16.99328,18.5625959 L17.91488,18.5625959 Z M21.14784,18.5625959 C21.24256,18.5625959 21.31296,18.5389159 21.35904,18.4915559 C21.40512,18.4441959 21.42816,18.3731559 21.42816,18.2784359 L21.42816,18.2784359 L21.42816,13.7280359 C21.42816,13.6307559 21.40512,13.5590759 21.35904,13.5129959 C21.31296,13.4669159 21.24256,13.4438759 21.14784,13.4438759 C21.05312,13.4438759 20.98208,13.4669159 20.93472,13.5129959 C20.88736,13.5590759 20.86368,13.6307559 20.86368,13.7280359 L20.86368,13.7280359 L20.86368,18.2784359 C20.86368,18.3731559 20.88736,18.4441959 20.93472,18.4915559 C20.98208,18.5389159 21.05312,18.5625959 21.14784,18.5625959 Z M25.52992,18.5625959 C26.00608,18.5625959 26.36704,18.4640359 26.6128,18.2669159 C26.85856,18.0697959 26.99936,17.7561959 27.0352,17.3261159 C27.048,17.2313959 27.03008,17.1590759 26.98144,17.1091559 C26.9328,17.0592359 26.86112,17.0342759 26.7664,17.0342759 C26.59488,17.0342759 26.49632,17.1289959 26.47072,17.3184359 C26.44768,17.5795559 26.36448,17.7581159 26.22112,17.8541159 C26.07776,17.9501159 25.84736,17.9981159 25.52992,17.9981159 L25.52992,17.9981159 L24.60832,17.9981159 C24.32672,17.9981159 24.10464,17.9635559 23.94208,17.8944359 C23.77952,17.8253159 23.66368,17.7094759 23.59456,17.5469159 C23.52544,17.3843559 23.49088,17.1622759 23.49088,16.8806759 L23.49088,16.8806759 L23.49088,15.1219559 C23.49088,14.8377959 23.52544,14.6144359 23.59456,14.4518759 C23.66368,14.2893159 23.77888,14.1741159 23.94016,14.1062759 C24.10144,14.0384359 24.3216,14.0045159 24.60064,14.0045159 L24.60064,14.0045159 L25.52992,14.0045159 C25.84736,14.0045159 26.07776,14.0525159 26.22112,14.1485159 C26.36448,14.2445159 26.44768,14.4230759 26.47072,14.6841959 C26.49632,14.8736359 26.59488,14.9683559 26.7664,14.9683559 C26.86112,14.9683559 26.9328,14.9433959 26.98144,14.8934759 C27.03008,14.8435559 27.048,14.7712359 27.0352,14.6765159 C26.99936,14.2489959 26.85856,13.9360359 26.6128,13.7376359 C26.36704,13.5392359 26.00608,13.44 25.52992,13.44 L25.52992,13.44 L24.60064,13.44 C24.0272,13.4374759 23.6048,13.5718759 23.33344,13.8432359 C23.06208,14.1145959 22.9264,14.5408359 22.9264,15.1219559 L22.9264,15.1219559 L22.9264,16.8806759 C22.9264,17.4566759 23.06272,17.8809959 23.33536,18.1536359 C23.608,18.4262759 24.03232,18.5625959 24.60832,18.5625959 L24.60832,18.5625959 L25.52992,18.5625959 Z",
    id: "HEGIC",
    fill: "#80F7EF",
    fillRule: "nonzero"
  })));
}

function SteCRVIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 36 35"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "pjphslc83a",
    x1: "50%",
    x2: "50%",
    y1: "16.895%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FFF"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#B7D0FF"
  })), React.createElement("linearGradient", {
    id: "2nuabyd9zb",
    x1: "58.286%",
    x2: "64.051%",
    y1: "53.988%",
    y2: "74.084%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#F2E62B"
  }), React.createElement("stop", {
    offset: "48.648%",
    stopColor: "#B1FF46"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#05A2FB"
  })), React.createElement("linearGradient", {
    id: "qknezg99uc",
    x1: "45.095%",
    x2: "50%",
    y1: "32.986%",
    y2: "63.475%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "maroon"
  }), React.createElement("stop", {
    offset: "18.742%",
    stopColor: "#FA0F00"
  }), React.createElement("stop", {
    offset: "43.093%",
    stopColor: "#FFCD0C"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#EEEB32"
  })), React.createElement("linearGradient", {
    id: "1az4e9nyld",
    x1: "33.933%",
    x2: "26.653%",
    y1: "27.778%",
    y2: "60.183%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FF9800"
  }), React.createElement("stop", {
    offset: "55.769%",
    stopColor: "#E4FF13"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#50FFA7"
  })), React.createElement("linearGradient", {
    id: "jwav2zkg2e",
    x1: "61.321%",
    x2: "50%",
    y1: "-11.07%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA1000"
  }), React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA1000"
  }), React.createElement("stop", {
    offset: "17.007%",
    stopColor: "maroon"
  }), React.createElement("stop", {
    offset: "39.062%",
    stopColor: "#FA1801"
  }), React.createElement("stop", {
    offset: "54.442%",
    stopColor: "#F67A08"
  }), React.createElement("stop", {
    offset: "62.733%",
    stopColor: "#B1FF46"
  }), React.createElement("stop", {
    offset: "75.379%",
    stopColor: "#75FF82"
  }), React.createElement("stop", {
    offset: "85.4%",
    stopColor: "#05A2FB"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#1212EE"
  })), React.createElement("linearGradient", {
    id: "tyzfn8d7of",
    x1: "40.306%",
    x2: "29.029%",
    y1: "8.651%",
    y2: "78.218%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA2401"
  }), React.createElement("stop", {
    offset: "42.869%",
    stopColor: "#F5DF22"
  }), React.createElement("stop", {
    offset: "77.418%",
    stopColor: "#00E4F8"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#0010FF"
  })), React.createElement("linearGradient", {
    id: "kg6hni2fjg",
    x1: "50%",
    x2: "50.689%",
    y1: "-35.457%",
    y2: "95.225%"
  }, React.createElement("stop", {
    offset: ".022%",
    stopColor: "#F76D08"
  }), React.createElement("stop", {
    offset: "33.814%",
    stopColor: "#F1E62B"
  }), React.createElement("stop", {
    offset: "50.699%",
    stopColor: "#75F583"
  }), React.createElement("stop", {
    offset: "69.543%",
    stopColor: "#00E0FB"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#0023FF"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", null, React.createElement("g", null, React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "16",
    fill: "url(#pjphslc83a)"
  }), React.createElement("g", null, React.createElement("path", {
    fill: "#66C8FF",
    d: "M8.402 0L8.402 11.174 14.338 8.96z",
    transform: "translate(7.658 4.103)"
  }), React.createElement("path", {
    fill: "#00A3FF",
    d: "M8.402 0L2.591 8.968 8.402 11.174z",
    transform: "translate(7.658 4.103)"
  }), React.createElement("path", {
    fill: "#66C8FF",
    d: "M2.591 8.968L8.402 5.468 8.402 12.242z",
    transform: "translate(7.658 4.103)"
  }), React.createElement("path", {
    fill: "#CCEDFF",
    d: "M8.402 5.468L14.214 8.96 8.402 12.242zM8.402 14.513L8.402 23.478 15.656 10.513z",
    transform: "translate(7.658 4.103)"
  }), React.createElement("path", {
    fill: "#66C8FF",
    d: "M8.402 14.513L1.287 10.601 8.402 23.478z",
    transform: "translate(7.658 4.103)"
  }), React.createElement("path", {
    fill: "#00A3FF",
    d: "M1.27 10.513C.464 11.809 0 13.339 0 14.977c0 4.683 3.72 8.479 8.402 8.479L1.27 10.513z",
    transform: "translate(7.658 4.103)"
  }), React.createElement("path", {
    fill: "#66C8FF",
    d: "M8.402 23.456c4.683 0 8.555-3.796 8.555-8.479 0-1.651-.472-3.192-1.288-4.495L8.402 23.456z",
    transform: "translate(7.658 4.103)"
  }))), React.createElement("g", {
    fill: "#FFF"
  }, React.createElement("path", {
    d: "M7.676 11.835c.74-.277 1.507-.477 2.277-.66.615-.144 1.23-.278 1.844-.436.383-.1.765-.207 1.123-.378.285-.136.555-.31.777-.533.222-.223.395-.492.525-.778.163-.358.257-.741.322-1.13.079-.467.115-.941.058-1.406-.056-.464-.207-.919-.411-1.346-.205-.427-.463-.825-.77-1.182-.41-.475-.906-.877-1.432-1.229-.657-.44-1.359-.804-2.078-1.128-.72-.324-1.459-.608-2.21-.848C7.096.589 6.484.424 5.857.333 5.388.265 4.913.238 4.439.285c-.472.048-.94.171-1.364.383-.422.211-.8.51-1.122.857-.324.347-.59.739-.812 1.154-.222.417-.4.855-.535 1.307-.134.45-.228.914-.282 1.381C.25 5.99.243 6.62.295 7.245c.065.78.223 1.551.402 2.317.18.766.383 1.526.692 2.249.247.576.56 1.13.975 1.606.259.296.558.563.892.772.269.167.56.297.867.371.231.056.47.078.706.067.238-.01.474-.054.697-.134.298-.103.573-.267.815-.47.302-.253.552-.566.759-.903.247-.402.433-.838.576-1.285z",
    transform: "translate(21 20)"
  })), React.createElement("g", null, React.createElement("g", {
    transform: "translate(21 21) translate(.6 .4)"
  }, React.createElement("path", {
    fill: "url(#2nuabyd9zb)",
    d: "M3.261.253c2.105-1.266 9.85 2.5 9.738 4.965-.113 2.465-1.35 2.84-2.326 3.107-.977.266-4.053.84-4.217 1.284-.163.445-.678 2.65-2.321 2.366-1.644-.283-3.011-3.382-3.115-5.574C.916 4.209 1.156 1.52 3.26.253z"
  }), React.createElement("path", {
    fill: "url(#qknezg99uc)",
    d: "M3.287.248C5.246-.787 11.95 1.603 12.98 4.044c.089.212-.144.4-.409.542-.851.457-1.77.574-2.757.81-.988.237-4.099.746-4.264 1.14-.165.395-4.426 1.117-4.53-.83C.914 3.76 1.157 1.373 3.286.249z"
  }), React.createElement("path", {
    fill: "url(#1az4e9nyld)",
    d: "M5.397 7c0-.924-.096-1.61-.287-2.058-.288-.673.017-1.733.613-1.915.597-.182 2.045.601 3.325 1.117 1.28.516 2.197 1.175 1.894 1.663-.303.49-1.827.815-2.514.912-.458.064-1.468.158-3.031.281z"
  }), React.createElement("path", {
    fill: "url(#jwav2zkg2e)",
    d: "M4.192 12.569c1.465-.337 2.188-2.75 2.183-6.084-.003-1.223-.545-3.212-.905-4.326-.388-1.2 1.218-1.32.989-1.385-.912-.259-1.363-.47-2.3-.464C2.256.321.444 2.813.65 6.63c.206 3.817 2.078 6.276 3.542 5.939z",
    transform: "rotate(-4 3.558 6.455)"
  }), React.createElement("path", {
    fill: "url(#tyzfn8d7of)",
    d: "M4.267 12.57c1.163-.268 1.862-1.846 2.098-4.155.027-.27.258-2.207-.15-3.751-.013-.052-.15.78-.476 1.451-.327.672-.787 1.133-.851 1.143-1.126.171-1.728-.216-2.772-.684-1.107-.497-.126-5.362-.787-3.828C.885 3.777.663 5.094.725 6.631c.153 3.851 2.078 6.275 3.542 5.939z",
    transform: "rotate(-4 3.584 7.524)"
  }), React.createElement("ellipse", {
    cx: "3.213",
    cy: "8.765",
    fill: "url(#kg6hni2fjg)",
    rx: "1.901",
    ry: "2.944",
    transform: "rotate(-12 3.213 8.765)"
  }))))));
}

function YveCRVIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 32 32"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    x1: "-6.979%",
    y1: "10.383%",
    x2: "12.803%",
    y2: "109.429%",
    id: "YveCRVIcon-linearGradient-1"
  }, React.createElement("stop", {
    stopColor: "#B00000",
    offset: ".052%"
  }), React.createElement("stop", {
    stopColor: "#005CCD",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "0%",
    y1: "0%",
    x2: "0%",
    y2: "100%",
    id: "YveCRVIcon-linearGradient-2"
  }, React.createElement("stop", {
    stopColor: "#FFCC35",
    stopOpacity: ".6",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#24E9FF",
    stopOpacity: ".6",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "95.381%",
    y1: "12.405%",
    x2: "-1.276%",
    y2: "21.618%",
    id: "YveCRVIcon-linearGradient-3"
  }, React.createElement("stop", {
    stopColor: "#F9FF53",
    stopOpacity: ".6",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#B8FF53",
    stopOpacity: ".6",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "55.494%",
    y1: "-7.054%",
    x2: "-10.929%",
    y2: "54.699%",
    id: "YveCRVIcon-linearGradient-4"
  }, React.createElement("stop", {
    stopColor: "#33B1FF",
    stopOpacity: ".632",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#338BFF",
    stopOpacity: ".638",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "47.805%",
    y1: "-10.682%",
    x2: "-10.285%",
    y2: "49.305%",
    id: "YveCRVIcon-linearGradient-5"
  }, React.createElement("stop", {
    stopColor: "#0A76FF",
    stopOpacity: ".7",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#0A4FFF",
    stopOpacity: ".7",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "-13.785%",
    y1: "49.106%",
    x2: "-5.755%",
    y2: "61.521%",
    id: "YveCRVIcon-linearGradient-7"
  }, React.createElement("stop", {
    stopColor: "#FF0400",
    stopOpacity: ".7",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#F80",
    stopOpacity: ".7",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "-18.585%",
    y1: "48.415%",
    x2: "-12.675%",
    y2: "58.478%",
    id: "YveCRVIcon-linearGradient-8"
  }, React.createElement("stop", {
    stopColor: "#BC0000",
    stopOpacity: ".8",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#EC1A00",
    stopOpacity: ".8",
    offset: "100%"
  })), React.createElement("radialGradient", {
    cx: "54.254%",
    cy: "22.767%",
    fx: "54.254%",
    fy: "22.767%",
    r: "98.118%",
    gradientTransform: "matrix(.41331 0 0 1 .318 0)",
    id: "YveCRVIcon-radialGradient-6"
  }, React.createElement("stop", {
    stopColor: "#FF3000",
    stopOpacity: ".6",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#FFB900",
    stopOpacity: ".6",
    offset: "100%"
  }))), React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", null, React.createElement("path", {
    d: "M32 15.924C32 7.14 24.828.004 16 .004S0 7.139 0 15.924s7.172 15.92 16 15.92 16-7.135 16-15.92z",
    fill: "url(#YveCRVIcon-linearGradient-1)"
  }), React.createElement("path", {
    d: "M19.15 23.208c2.122.775 4.035 1.1 5.62 1.322 1.584.222 2.84.34 3.498.431.657.093.715.159.686.229-.029.07-.145.144-.448.234-.304.09-.794.197-1.775.736-.98.539-2.45 1.51-3.909 2.279-1.458.77-2.904 1.336-4.608 1.82-1.704.484-3.666.885-5.475.812-1.809-.074-3.465-.621-4.984-1.524-1.52-.902-2.902-2.16-3.65-3.683-.747-1.524-.858-3.316-.656-4.599.201-1.283.715-2.058 1.521-2.544.806-.485 1.903-.681 3.185-.423 1.28.258 2.746.97 4.644 1.94 1.898.969 4.228 2.194 6.35 2.97z",
    fillOpacity: ".396",
    fill: "#00F8FF"
  }), React.createElement("path", {
    d: "M22.291 26.561c1.487.497 2.967.98 3.262 1.515.295.535-.593 1.12-1.791 1.757-1.198.636-2.706 1.322-4.598 1.696-1.893.374-4.17.434-6.269 0-2.099-.433-4.02-1.36-5.128-2.306-1.107-.946-1.398-1.912-1.393-2.885.004-.973.306-1.954 1.102-2.588.795-.633 2.084-.92 3.89-.646 1.804.274 4.126 1.108 6.034 1.78 1.908.671 3.404 1.18 4.891 1.677z",
    fill: "#053FBE",
    opacity: ".7"
  }), React.createElement("path", {
    d: "M18.587 27.602c1.876.618 3.902 1.444 4.017 2.187.114.742-1.685 1.4-3.577 1.76-1.892.36-3.877.422-5.562-.018-1.685-.44-3.07-1.384-3.636-2.376-.567-.993-.317-2.034.391-2.541.71-.507 1.877-.48 3.323-.26 1.445.22 3.17.63 5.044 1.248z",
    fill: "#001EC3"
  }), React.createElement("path", {
    d: "M14.698 28.535c-1.02-.043-1.795.283-2.011.755-.216.472.128 1.09.834 1.502.706.412 1.774.62 2.892.607 1.12-.012 2.29-.244 2.604-.613.313-.37-.23-.878-1.133-1.337-.903-.46-2.166-.87-3.186-.914z",
    fill: "#000086"
  }), React.createElement("path", {
    d: "M14.9 30.46c1.903-.252 3.84-.916 5.984-2.178 2.143-1.26 4.493-3.118 6.116-5.074 1.624-1.956 2.523-4.011 3.095-5.926.572-1.915.819-3.69.624-5.502-.194-1.812-.83-3.663-1.86-5.124-1.03-1.46-2.454-2.532-4.186-3.2-1.732-.669-3.771-.933-5.865-.649-2.094.285-4.242 1.118-6.312 2.36a23.498 23.498 0 00-5.75 4.875c-1.687 1.98-3.07 4.293-3.718 6.755-.647 2.462-.558 5.076-.054 7.003.504 1.927 1.423 3.169 2.54 4.151 1.119.983 2.436 1.707 4.027 2.151 1.592.444 3.458.608 5.36.357z",
    fill: "url(#YveCRVIcon-linearGradient-2)",
    opacity: ".8"
  }), React.createElement("path", {
    d: "M13.556 11.113c2.34 1.152 4.773 2.65 6.55 4.288 1.775 1.64 2.893 3.42 3.156 5.149.262 1.727-.332 3.402-1.432 4.802-1.101 1.4-2.71 2.525-4.233 3.26a11.721 11.721 0 01-4.496 1.175c-1.532.097-3.156-.055-4.6-.454-1.444-.4-2.709-1.047-3.735-1.982-1.027-.936-1.816-2.159-2.372-3.553-.556-1.393-.879-2.958-1.096-4.608a47.655 47.655 0 01-.367-5.026c-.039-1.642-.003-3.189.437-4.165s1.284-1.381 2.244-1.561c.96-.18 2.036-.135 3.697.291 1.66.426 3.907 1.233 6.247 2.384z",
    fillOpacity: ".6",
    fill: "#1CEFFF"
  }), React.createElement("path", {
    d: "M17.618 11.309c2.9 1.52 5.955 3.25 8.272 5.143 2.317 1.893 3.898 3.948 4.33 5.327.431 1.38-.286 2.083-1.66 2.253-1.374.169-3.405-.196-5.78-.985-2.376-.79-5.096-2.003-7.57-3.295-2.473-1.291-4.7-2.661-6.533-3.954-1.832-1.292-3.27-2.508-4.288-3.518-1.02-1.009-1.62-1.812-1.943-2.734-.323-.922-.367-1.964.81-2.381 1.176-.417 3.573-.21 6.144.55 2.572.76 5.318 2.073 8.218 3.594z",
    fillOpacity: ".6",
    fill: "#94FF63"
  }), React.createElement("path", {
    d: "M15.858 18.744a30.247 30.247 0 005.61 2.701c2.16.769 4.56 1.31 6.327 1.33 1.768.02 2.983-.48 3.556-2.392.572-1.913.887-4.538.414-7.21-.473-2.67-1.813-5.39-3.106-6.782C27.366 5 25.735 4.235 23.881 3.84c-1.855-.395-3.933-.42-5.93.071-1.997.491-3.913 1.499-5.359 2.812-1.445 1.313-2.42 2.932-2.43 4.536-.012 1.605.94 3.195 1.985 4.43 1.044 1.236 2.182 2.117 3.71 3.055z",
    fill: "url(#YveCRVIcon-linearGradient-3)"
  }), React.createElement("path", {
    d: "M.465 13.374c.307-.944.83-1.759 1.774-2.088.945-.33 2.312-.174 3.735.162 1.422.336 2.9.852 4.538 1.792 1.637.94 3.433 2.305 4.693 3.768 1.26 1.463 1.982 3.026 2.106 4.536a5.898 5.898 0 01-1.215 4.078c-.862 1.11-2.11 1.872-3.429 2.309a8.83 8.83 0 01-4.132.332c-1.42-.216-2.87-.757-4.013-1.58-1.143-.822-1.982-1.924-2.597-3.056C1.31 22.494.918 21.332.631 20.133a18.855 18.855 0 01-.517-3.588c-.047-1.154.044-2.227.351-3.171z",
    fill: "url(#YveCRVIcon-linearGradient-4)"
  }), React.createElement("path", {
    d: "M7.703 26c.954.029 1.95-.096 2.757-.54.807-.443 1.424-1.204 1.761-2.146a4.872 4.872 0 00.01-3.202c-.382-1.139-1.204-2.295-2.362-3.222-1.158-.928-2.652-1.626-3.872-2.107-1.22-.48-2.164-.743-3.033-.556-.869.187-1.662.822-2.047 1.66-.385.837-.362 1.875-.236 2.819s.354 1.793.715 2.612c.36.819.854 1.608 1.464 2.319.61.71 1.339 1.342 2.158 1.748.82.406 1.731.587 2.685.615z",
    fill: "url(#YveCRVIcon-linearGradient-5)"
  }), React.createElement("path", {
    d: "M7.293 19.151c.733.886 1.06 2.001.906 2.798-.155.796-.792 1.274-1.606 1.351-.814.078-1.806-.246-2.564-.805-.758-.558-1.284-1.352-1.565-2.16-.281-.807-.317-1.628.028-2.194.344-.566 1.07-.877 2-.704.931.172 2.068.829 2.8 1.714z",
    fillOpacity: ".8",
    fill: "#0A0FCA"
  }), React.createElement("path", {
    d: "M23.374 16.729c1.46.57 3.248.823 4.495.53 1.246-.294 1.951-1.134 2.225-2.173.274-1.039.118-2.277-.437-3.509-.554-1.232-1.507-2.457-2.805-3.205-1.298-.747-2.941-1.016-4.3-.882-1.36.135-2.437.673-3.082 1.425-.645.753-.857 1.719-.756 2.666.101.946.516 1.873 1.29 2.781a8.522 8.522 0 003.37 2.367z",
    fillOpacity: ".857",
    fill: "#FF6D00"
  }), React.createElement("path", {
    d: "M21.459 18.733c1.752.788 3.646 1.364 5.236 1.436 1.59.072 2.876-.361 3.716-1.266.84-.906 1.233-2.283 1.208-4.085-.024-1.801-.467-4.027-1.791-5.816-1.324-1.788-3.53-3.14-5.82-3.565-2.291-.424-4.667.078-6.354 1.121-1.687 1.043-2.684 2.627-2.763 4.282-.079 1.655.76 3.38 1.984 4.743 1.224 1.363 2.833 2.362 4.584 3.15z",
    fillOpacity: ".749",
    fill: "#FFFD00"
  }), React.createElement("path", {
    d: "M19.204 10.177c1.852.88 3.74 1.807 5.363 2.313 1.623.507 2.98.592 3.859.085.878-.507 1.277-1.606 1.32-2.66.043-1.056-.27-2.065-.895-3.15-.625-1.083-1.564-2.24-3.044-3.14-1.48-.898-3.5-1.539-5.573-1.623-2.072-.085-4.195.387-5.924.977-1.73.59-3.066 1.3-4.24 1.953-1.172.655-2.182 1.255-3.228 1.612-1.046.357-2.128.471-2.766.378-.639-.094-.833-.395-.727-.654.105-.259.51-.475 1.336-.564.826-.09 2.072-.053 3.648.29 1.575.343 3.48.991 5.34 1.732 1.862.74 3.679 1.572 5.531 2.451z",
    fill: "url(#YveCRVIcon-radialGradient-6)"
  }), React.createElement("path", {
    d: "M16.834 5.964c2.08.671 4.183 1.25 5.951 1.467 1.768.215 3.2.067 3.795-.59.594-.658.35-1.825-.505-2.903-.856-1.077-2.323-2.065-4.031-2.602-1.708-.536-3.655-.62-5.32-.509-1.664.113-3.044.422-4.328.807-1.284.384-2.47.845-3.477 1.138-1.007.293-1.834.419-2.276.498-.442.078-.499.11-.429.12.07.009.269-.006 1.028.053.76.06 2.08.192 3.769.64 1.688.448 3.743 1.21 5.823 1.881z",
    fill: "url(#YveCRVIcon-linearGradient-7)"
  }), React.createElement("path", {
    d: "M13.704 2.624c1.176.29 2.27.639 3.47.887 1.198.247 2.502.395 3.59.384 1.087-.01 1.959-.179 2.274-.62.314-.441.071-1.155-.612-1.704-.683-.548-1.806-.93-2.92-1.191a13.43 13.43 0 00-3.444-.377c-1.228.027-2.582.221-3.635.452-1.053.23-1.806.498-2.34.692-.532.195-.846.316-.939.41-.092.093.036.159.218.205.181.047.416.075 1.162.206.745.131 2.001.365 3.176.656z",
    fill: "url(#YveCRVIcon-linearGradient-8)"
  }), React.createElement("path", {
    d: "M16.912 1.712c.833.01 1.673-.087 2.178-.244.504-.157.671-.373.49-.606C19.4.63 18.87.38 18.205.225c-.663-.154-1.46-.211-2.244-.208-.785.002-1.556.065-2.11.19-.553.125-.888.312-.755.532.133.22.733.475 1.445.66.713.186 1.538.303 2.37.313z",
    fill: "#A60000"
  }), React.createElement("path", {
    d: "M26.169 14.902c.97-.127 1.71-.942 1.824-1.868.113-.927-.4-1.966-1.309-2.59-.909-.623-2.212-.831-3.1-.607-.888.224-1.361.88-1.424 1.63-.063.75.285 1.593 1.06 2.296.775.702 1.977 1.265 2.949 1.139z",
    fillOpacity: ".418",
    fill: "#FF6D00"
  }), React.createElement("path", {
    d: "M2.473 24.5c.541.81 1.214 1.568 2.05 2.174 1.143.83 2.592 1.377 4.012 1.595a8.749 8.749 0 004.132-.336c1.32-.44 2.567-1.21 3.43-2.33a5.997 5.997 0 001.214-4.118c-.124-1.525-.847-3.102-2.106-4.58-1.26-1.477-3.056-2.855-4.693-3.804a16.35 16.35 0 00-4.538-1.81c-1.423-.339-2.79-.496-3.735-.164-.945.333-1.467 1.155-1.774 2.109-.277.86-.378 1.826-.361 2.862.04-1.82.347-2.628.634-3.226.286-.598.553-.984.955-1.261.403-.277.941-.445 1.741-.452.8-.007 1.86.146 2.998.474 1.139.329 2.354.832 3.509 1.467a20.265 20.265 0 013.202 2.202c.953.8 1.765 1.63 2.415 2.611.651.983 1.14 2.117 1.293 3.253.151 1.137-.034 2.276-.51 3.233-.476.958-1.242 1.733-2.134 2.35-.89.616-1.908 1.072-3.025 1.255-1.116.182-2.333.09-3.39-.15a9.93 9.93 0 01-2.644-1.017 8.347 8.347 0 01-1.606-1.168c-.43-.392-.803-.788-1.07-1.169z",
    fill: "#FFF"
  }), React.createElement("path", {
    d: "M10.46 25.474c-.807.45-1.803.577-2.757.549-.954-.03-1.865-.213-2.685-.626-.82-.412-1.547-1.053-2.158-1.775a9.527 9.527 0 01-1.464-2.354 9.723 9.723 0 01-.715-2.652c-.126-.958-.149-2.013.236-2.863.385-.85 1.178-1.496 2.047-1.685.869-.19 1.814.077 3.033.565 1.22.488 2.714 1.197 3.872 2.139 1.158.941 1.98 2.115 2.363 3.272a5.02 5.02 0 01-.01 3.251c-.338.956-.955 1.73-1.762 2.18zm-.17-7.999c-.727-.738-1.646-1.382-2.58-1.888a17.672 17.672 0 00-2.634-1.134c-.753-.26-1.312-.411-1.964-.292-.653.119-1.4.508-1.865 1.259-.464.75-.645 1.864-.467 3.194.179 1.331.717 2.88 1.561 4.138.845 1.259 1.995 2.228 3.399 2.706 1.404.477 3.06.464 4.216-.044 1.155-.508 1.81-1.512 2.082-2.517.272-1.006.16-2.013-.162-2.932-.323-.92-.859-1.752-1.586-2.49z",
    fill: "#FFF"
  }), React.createElement("path", {
    d: "M3.882 26.392c.272.343.567.662.884.953 1.026.943 2.29 1.596 3.735 1.998 1.444.403 3.068.556 4.6.459a11.646 11.646 0 004.496-1.185c1.524-.74 3.132-1.875 4.233-3.287 1.1-1.41 1.694-3.1 1.432-4.841-.263-1.742-1.381-3.538-3.157-5.19-1.776-1.653-4.21-3.162-6.549-4.323-2.34-1.161-4.586-1.974-6.247-2.404-1.661-.43-2.737-.475-3.697-.293-.96.181-1.804.59-2.244 1.573-.101.226-.18.482-.243.762.292-.985.753-1.5 1.407-1.841.654-.342 1.502-.511 2.782-.393s2.99.523 5.122 1.365c2.132.842 4.683 2.121 6.791 3.586 2.109 1.464 3.774 3.113 4.705 4.762.932 1.65 1.13 3.298.758 4.712-.371 1.414-1.312 2.594-2.51 3.65-1.196 1.058-2.649 1.991-4.306 2.53-1.657.54-3.518.686-5.077.583-1.56-.103-2.818-.456-3.918-.97s-2.044-1.19-2.997-2.206z",
    fill: "#FFF"
  }), React.createElement("path", {
    d: "M2.252 8.491c-.005-.558.237-.97.686-1.226.45-.255 1.105-.352 2.092-.298.987.054 2.305.26 3.829.708 1.523.448 3.251 1.14 5.23 2.083 1.98.944 4.21 2.14 6.055 3.194 1.844 1.053 3.303 1.962 4.6 2.92 1.295.96 2.428 1.967 3.26 2.857a13.08 13.08 0 011.706 2.244c.347.581.51.971.572 1.337.062.366.023.707-.253 1.12.329-.376.415-.917.19-1.643-.431-1.395-2.012-3.474-4.33-5.388-2.316-1.914-5.37-3.663-8.27-5.201C14.717 9.66 11.971 8.332 9.4 7.564c-2.57-.769-4.968-.978-6.144-.557-.793.285-1.031.856-1.004 1.484zM28.293 24.965l.01.001c.653.094.71.16.682.232-.029.072-.144.147-.446.239-.302.091-.833.175-1.808.723-.975.548-2.459 1.497-3.909 2.279-1.45.783-2.888 1.36-4.582 1.852-1.695.492-3.58.964-5.38.89-1.673-.07-3.214-.556-4.637-1.363 2.737 1.392 4.808 1.285 6.49 1.054a18.74 18.74 0 004.403-1.135 36.067 36.067 0 004.202-1.946c1.201-.66 2.032-1.239 2.737-1.624a7.628 7.628 0 011.733-.696c.446-.12.76-.167.94-.211.182-.044.23-.084.176-.13-.055-.046-.214-.098-.611-.165z",
    fill: "#FFF"
  }), React.createElement("path", {
    d: "M28.475 6.158c.137.201.262.402.376.6.626 1.084.938 2.094.895 3.148-.043 1.055-.442 2.154-1.32 2.661-.878.507-2.236.422-3.86-.084-1.622-.507-3.51-1.434-5.362-2.313-1.852-.88-3.67-1.712-5.53-2.452-1.861-.74-3.766-1.389-5.341-1.731-1.576-.343-2.822-.38-3.648-.291-.825.09-1.23.305-1.336.564a.38.38 0 00-.023.082c.06-.244.296-.368.63-.448.333-.08.763-.119 1.474-.091a16.2 16.2 0 012.76.352c1.056.23 2.177.6 3.373 1.054 1.196.455 2.468.996 4.06 1.71 1.592.714 3.506 1.6 5.233 2.374 1.726.773 3.266 1.433 4.547 1.715 1.28.283 2.3.188 2.99-.161.688-.348 1.045-.95 1.257-1.596a4.617 4.617 0 00.199-1.972c-.078-.637-.3-1.221-.547-1.732a9.862 9.862 0 00-.827-1.389z",
    fill: "#FFF"
  }), React.createElement("path", {
    d: "M24.862 2.757c.455.355.847.74 1.158 1.136.846 1.082 1.087 2.254.499 2.915-.588.66-2.004.809-3.753.592-1.749-.217-3.83-.799-5.886-1.473-2.056-.673-4.089-1.439-5.758-1.888-1.67-.45-3.129-.536-3.88-.596-.751-.059-.958-.044-1.028-.053-.017-.002-.027-.005-.024-.01-.012.017.034.045.172.06.138.015.38.017.851.07.472.054 1.187.157 2.046.36.858.204 2.015.46 3.332.913 1.317.454 2.948 1.059 4.399 1.548 1.45.488 2.72.86 3.947 1.104 1.226.243 2.409.356 3.315.334.906-.022 1.536-.18 1.96-.416.423-.235.64-.547.73-.904.09-.357.053-.758-.07-1.15a4.417 4.417 0 00-.576-1.126c-.24-.353-.511-.678-1.434-1.416z",
    fill: "#FFF"
  }), React.createElement("path", {
    d: "M21.35.955c.413.176.78.379 1.07.61.683.549.927 1.24.612 1.682-.314.441-1.181.586-2.269.597-1.087.01-2.39-.137-3.59-.384-1.199-.248-2.293-.596-3.468-.887-1.176-.291-2.439-.494-3.184-.625-.746-.131-.98-.16-1.162-.206-.137-.035-.244-.081-.248-.142 0 .05.037.094.087.126.05.032.111.051.447.125.336.073.953.17 1.67.332.717.161 1.541.356 2.3.562.759.206 1.452.422 2.23.637.776.214 1.636.427 2.553.58.917.154 1.89.247 2.68.197.789-.05 1.395-.244 1.747-.467.352-.222.45-.474.486-.694a1.04 1.04 0 00-.092-.63c-.1-.222-.277-.434-.55-.672-.274-.238-.65-.458-1.32-.74z",
    fill: "#FFF"
  }), React.createElement("path", {
    d: "M17.907.162c.102.018.202.039.299.061.663.154 1.193.404 1.374.637.182.233.014.45-.49.606-.505.157-1.345.254-2.178.244a10.074 10.074 0 01-2.37-.313c-.713-.185-1.313-.44-1.446-.66-.103-.17.075-.321.419-.439-.537.182-.58.354-.449.548.132.194.437.41 1.081.611.644.202 1.625.39 2.55.427.925.038 1.792-.076 2.306-.206.514-.131.673-.28.748-.428.074-.149.064-.299-.073-.437-.138-.14-.403-.267-.696-.375a5.687 5.687 0 00-1.075-.276zM10.338 30.21c2.1.421 4.744.458 7.612-.636 2.867-1.095 5.959-3.32 8.086-5.655 2.127-2.335 3.29-4.779 3.926-7.06.637-2.28.747-4.4.462-6.152-.285-1.751-1.026-3.14-1.718-4.2-.693-1.061-1.52-2.013-2.929-2.902 1.274.724 2.26 1.75 3.022 2.843 1.03 1.478 1.726 3.354 1.92 5.187.195 1.833-.052 3.628-.624 5.565-.572 1.937-1.47 4.017-3.095 5.996-1.623 1.978-3.973 3.857-6.116 5.133-2.144 1.275-4.081 1.948-5.983 2.201a13.441 13.441 0 01-5.36-.36 9.894 9.894 0 01-3.99-2.179c1.17.993 2.687 1.798 4.787 2.219z",
    fill: "#FFF"
  }))));
}

function CrvIBIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 32 32"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    x1: "58.27%",
    y1: "53.99%",
    x2: "64.02%",
    y2: "74.08%",
    id: "CrvIB-linearGradient-1"
  }, React.createElement("stop", {
    stopColor: "#F2E62B",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#B1FF46",
    offset: "48.65%"
  }), React.createElement("stop", {
    stopColor: "#05A2FB",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "45.1%",
    y1: "27.88%",
    x2: "50%",
    y2: "67.52%",
    id: "CrvIB-linearGradient-2"
  }, React.createElement("stop", {
    stopColor: "maroon",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#FA0F00",
    offset: "18.74%"
  }), React.createElement("stop", {
    stopColor: "#FFCD0C",
    offset: "43.09%"
  }), React.createElement("stop", {
    stopColor: "#EEEB32",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "33.93%",
    y1: "24.73%",
    x2: "26.65%",
    y2: "61.58%",
    id: "CrvIB-linearGradient-3"
  }, React.createElement("stop", {
    stopColor: "#FF9800",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#E4FF13",
    offset: "55.77%"
  }), React.createElement("stop", {
    stopColor: "#50FFA7",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "60.83%",
    y1: "-11.07%",
    x2: "50%",
    y2: "100%",
    id: "CrvIB-linearGradient-4"
  }, React.createElement("stop", {
    stopColor: "#FA1000",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#FA1000",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "maroon",
    offset: "17.01%"
  }), React.createElement("stop", {
    stopColor: "#FA1801",
    offset: "39.06%"
  }), React.createElement("stop", {
    stopColor: "#F67A08",
    offset: "54.44%"
  }), React.createElement("stop", {
    stopColor: "#B1FF46",
    offset: "62.73%"
  }), React.createElement("stop", {
    stopColor: "#75FF82",
    offset: "75.38%"
  }), React.createElement("stop", {
    stopColor: "#05A2FB",
    offset: "85.4%"
  }), React.createElement("stop", {
    stopColor: "#1212EE",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "40.75%",
    y1: "8.65%",
    x2: "30%",
    y2: "78.22%",
    id: "CrvIB-linearGradient-5"
  }, React.createElement("stop", {
    stopColor: "#FA2401",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#F5DF22",
    offset: "42.87%"
  }), React.createElement("stop", {
    stopColor: "#00E4F8",
    offset: "77.42%"
  }), React.createElement("stop", {
    stopColor: "#0010FF",
    offset: "100%"
  })), React.createElement("linearGradient", {
    x1: "50%",
    y1: "-35.46%",
    x2: "50.66%",
    y2: "95.22%",
    id: "CrvIB-linearGradient-6"
  }, React.createElement("stop", {
    stopColor: "#F76D08",
    offset: ".02%"
  }), React.createElement("stop", {
    stopColor: "#F1E62B",
    offset: "33.81%"
  }), React.createElement("stop", {
    stopColor: "#75F583",
    offset: "50.7%"
  }), React.createElement("stop", {
    stopColor: "#00E0FB",
    offset: "69.54%"
  }), React.createElement("stop", {
    stopColor: "#0023FF",
    offset: "100%"
  }))), React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    fillRule: "nonzero"
  }, React.createElement("circle", {
    cx: "14.5",
    cy: "14.5",
    r: "14.5",
    fill: "#69E2DC"
  }), React.createElement("path", {
    d: "M28.29 19a14.47 14.47 0 01-2.4 4.48c.48-.8.48-1.81-.05-2.6-2.6-3.93-7.83-5.05-7.83-5.05 3.05-3.18 9.28 2.26 10.28 3.18z",
    fill: "#FFF"
  }), React.createElement("path", {
    d: "M29 14.5c0 1.56-.25 3.05-.7 4.45-3.02-4.6-8.46-5.7-10.5-4.48-2.03 1.23 1.17 4.06 1.25 4.13-4.91-1.76-5.9.67-5.9.67-4.75-.73-4.92 1.7-4.92 1.7-4.04-.17-4.57-3.67-4.57-3.67 5.2.44 6.37-5.34 6.37-5.34s1.22-1.13 5.18-2.76c3.97-1.64 6.46-5.5 6.46-5.5.33 2.96-3.45 7.12-3.45 7.12 2.5-.32 8.05-3.1 8.14-3.14l-2.53 3.54c.9-.34 2.16-.46 3.38-.49.6 0 1.02-.54.95-1.1a13.5 13.5 0 01.76 3.37c.05.5.08 1 .08 1.5z",
    fill: "#FFF"
  }), React.createElement("path", {
    d: "M12.7 11.68s-.93 1.52-1.7 1.47l-.73 1.23c.44.01.73-.3.86-.45l.07-.1 1.26-.44s.77-1.17.23-1.7zM28.92 13a5.41 5.41 0 00-1.42-.5l1.27-.6c.06.36.11.73.15 1.1z",
    fill: "#69E2DC"
  })), React.createElement("g", {
    transform: "translate(18 18)"
  }, React.createElement("path", {
    d: "M7.24 11.27c.72-.26 1.46-.46 2.2-.63.6-.14 1.2-.27 1.79-.43.37-.1.74-.2 1.08-.36.28-.13.54-.3.75-.52.22-.21.39-.47.51-.75.16-.35.25-.72.31-1.1.08-.45.12-.9.06-1.35a5.19 5.19 0 00-1.14-2.44c-.4-.47-.88-.86-1.39-1.2-.63-.42-1.31-.77-2-1.09A20 20 0 007.25.58C6.68.4 6.1.24 5.48.15 5.03.08 4.57.05 4.11.1c-.46.05-.9.17-1.32.37-.4.2-.77.5-1.08.83-.32.34-.57.72-.79 1.12a6.85 6.85 0 00-.79 2.6C.06 5.62.05 6.23.1 6.83c.07.76.22 1.5.4 2.24.17.75.36 1.48.66 2.18.24.56.54 1.1.94 1.55.25.29.54.55.87.75.26.16.54.29.84.36a2.43 2.43 0 002.14-.52c.3-.25.53-.55.73-.87.24-.4.42-.81.56-1.25z",
    fill: "#FFF"
  }), React.createElement("g", {
    transform: "translate(.41 .62)"
  }, React.createElement("path", {
    d: "M2.93.64c2.12-1.27 9.92 2.53 9.8 5.01-.1 2.48-1.35 2.86-2.33 3.13-.99.27-4.08.85-4.25 1.3-.16.44-.68 2.67-2.34 2.38C2.16 12.18.78 9.06.68 6.84.58 4.64.8 1.92 2.93.64z",
    fill: "url(#CrvIB-linearGradient-1)"
  }), React.createElement("path", {
    d: "M2.93.64c1.95-1.17 8.63 1.54 9.66 4.31.09.24-.15.46-.41.62-.85.52-1.76.65-2.75.92-.98.27-4.08.85-4.24 1.3-.17.44-4.4 1.26-4.51-.95-.1-2.2.13-4.92 2.25-6.2z",
    fill: "url(#CrvIB-linearGradient-2)"
  }), React.createElement("path", {
    d: "M6.12 6.28c0-.81-.08-1.42-.24-1.8-.24-.6.01-1.53.5-1.7.5-.15 1.69.54 2.74.99 1.06.45 1.81 1.03 1.56 1.46-.25.43-1.5.72-2.07.8-.37.06-1.2.14-2.5.25z",
    fill: "url(#CrvIB-linearGradient-3)"
  }), React.createElement("path", {
    d: "M4.1 12.64c1.44-.34 2.16-2.77 2.16-6.12 0-1.23-.53-3.23-.88-4.35C5 .97 6.58.84 6.35.77 5.45.52 5.01.3 4.1.31 2.23.33.44 2.83.64 6.67c.2 3.84 2.03 6.31 3.47 5.97z",
    fill: "url(#CrvIB-linearGradient-4)",
    transform: "rotate(-4 3.5 6.5)"
  }), React.createElement("path", {
    d: "M4.18 12.64c1.14-.27 1.83-1.86 2.07-4.18.03-.27.26-2.22-.14-3.77-.02-.06-.15.78-.47 1.46A3.25 3.25 0 014.8 7.3c-1.1.17-1.7-.22-2.72-.69-1.09-.5-.12-5.39-.77-3.84a9.24 9.24 0 00-.6 3.9c.15 3.88 2.03 6.31 3.47 5.97z",
    fill: "url(#CrvIB-linearGradient-5)",
    transform: "rotate(-4 3.52 7.57)"
  }), React.createElement("ellipse", {
    fill: "url(#CrvIB-linearGradient-6)",
    transform: "rotate(-12 3.15 8.82)",
    cx: "3.15",
    cy: "8.82",
    rx: "1.87",
    ry: "2.96"
  })))));
}

function CrvTricryptoIcon(props) {
  var gradientIds = React.useMemo(function () {
    return [1, 2, 3, 4, 5, 6].map(function () {
      return makeRandomID('TriCryptoIcon');
    });
  }, []);
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 32 32"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientIds[0],
    x1: "58.266%",
    x2: "64.017%",
    y1: "53.988%",
    y2: "74.084%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#F2E62B"
  }), React.createElement("stop", {
    offset: "48.648%",
    stopColor: "#B1FF46"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#05A2FB"
  })), React.createElement("linearGradient", {
    id: gradientIds[1],
    x1: "45.095%",
    x2: "50%",
    y1: "27.882%",
    y2: "67.517%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "maroon"
  }), React.createElement("stop", {
    offset: "18.742%",
    stopColor: "#FA0F00"
  }), React.createElement("stop", {
    offset: "43.093%",
    stopColor: "#FFCD0C"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#EEEB32"
  })), React.createElement("linearGradient", {
    id: gradientIds[2],
    x1: "33.933%",
    x2: "26.653%",
    y1: "24.733%",
    y2: "61.578%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FF9800"
  }), React.createElement("stop", {
    offset: "55.769%",
    stopColor: "#E4FF13"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#50FFA7"
  })), React.createElement("linearGradient", {
    id: gradientIds[3],
    x1: "60.825%",
    x2: "50%",
    y1: "-11.07%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA1000"
  }), React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA1000"
  }), React.createElement("stop", {
    offset: "17.007%",
    stopColor: "maroon"
  }), React.createElement("stop", {
    offset: "39.062%",
    stopColor: "#FA1801"
  }), React.createElement("stop", {
    offset: "54.442%",
    stopColor: "#F67A08"
  }), React.createElement("stop", {
    offset: "62.733%",
    stopColor: "#B1FF46"
  }), React.createElement("stop", {
    offset: "75.379%",
    stopColor: "#75FF82"
  }), React.createElement("stop", {
    offset: "85.4%",
    stopColor: "#05A2FB"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#1212EE"
  })), React.createElement("linearGradient", {
    id: gradientIds[4],
    x1: "40.754%",
    x2: "29.998%",
    y1: "8.651%",
    y2: "78.218%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FA2401"
  }), React.createElement("stop", {
    offset: "42.869%",
    stopColor: "#F5DF22"
  }), React.createElement("stop", {
    offset: "77.418%",
    stopColor: "#00E4F8"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#0010FF"
  })), React.createElement("linearGradient", {
    id: gradientIds[5],
    x1: "50%",
    x2: "50.659%",
    y1: "-35.457%",
    y2: "95.225%"
  }, React.createElement("stop", {
    offset: ".022%",
    stopColor: "#F76D08"
  }), React.createElement("stop", {
    offset: "33.814%",
    stopColor: "#F1E62B"
  }), React.createElement("stop", {
    offset: "50.699%",
    stopColor: "#75F583"
  }), React.createElement("stop", {
    offset: "69.543%",
    stopColor: "#00E0FB"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#0023FF"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1"
  }, React.createElement("g", {
    id: "TriCrypto"
  }, React.createElement("path", {
    fill: "#D8D8D8",
    fillOpacity: "0",
    d: "M0 0h32v32H0z"
  }), React.createElement("g", null, React.createElement("path", {
    fill: "url(#" + gradientIds[0] + ")",
    d: "M6.579 1.248c5.098-3.07 23.855 6.062 23.581 12.038-.273 5.977-3.267 6.887-5.632 7.533-2.365.646-9.815 2.037-10.211 3.114-.396 1.077-1.643 6.423-5.623 5.736-3.98-.687-7.292-8.2-7.543-13.515-.251-5.316.33-11.836 5.428-14.906z"
  }), React.createElement("path", {
    fill: "url(#" + gradientIds[1] + ")",
    d: "M6.579 1.248c4.692-2.826 20.75 3.7 23.216 10.366.214.578-.344 1.091-.978 1.48-2.04 1.25-4.238 1.567-6.604 2.213-2.365.645-9.815 2.037-10.211 3.114-.396 1.077-10.6 3.048-10.851-2.267-.251-5.316.33-11.836 5.428-14.906z"
  }), React.createElement("path", {
    fill: "url(#" + gradientIds[2] + ")",
    d: "M14.232 14.8c0-1.952-.19-3.402-.57-4.35-.57-1.42.034-3.66 1.216-4.046 1.182-.384 4.052 1.271 6.588 2.361 2.537 1.09 4.354 2.482 3.754 3.515-.601 1.032-3.62 1.721-4.981 1.925-.908.136-2.91.334-6.007.595z"
  }), React.createElement("path", {
    fill: "url(#" + gradientIds[3] + ")",
    d: "M9.399 30.099c3.46-.82 5.178-6.66 5.178-14.725 0-2.96-1.274-7.768-2.12-10.461-.91-2.901 2.883-3.197 2.342-3.354C12.646.937 11.581.43 9.37.447 4.874.48.583 6.515 1.055 15.747 1.528 24.98 5.939 30.92 9.399 30.1z",
    transform: "rotate(-4 7.936 15.31)"
  }), React.createElement("path", {
    fill: "url(#" + gradientIds[4] + ")",
    d: "M9.58 30.101c2.748-.652 4.406-4.472 4.97-10.059.066-.65.62-5.34-.337-9.072-.032-.126-.358 1.886-1.132 3.513-.775 1.626-1.862 2.744-2.014 2.768-2.66.419-4.08-.516-6.544-1.645-2.612-1.196-.277-12.969-1.844-9.254-1.052 2.495-1.581 5.68-1.442 9.398C1.584 25.066 6.12 30.92 9.58 30.1z",
    transform: "rotate(-4 7.992 17.904)"
  }), React.createElement("ellipse", {
    cx: "7.109",
    cy: "20.901",
    fill: "url(#" + gradientIds[5] + ")",
    rx: "4.493",
    ry: "7.114",
    transform: "rotate(-12 7.11 20.901)"
  })), React.createElement("g", {
    transform: "translate(9 8.5)"
  }, React.createElement("circle", {
    cx: "16",
    cy: "16.15",
    r: "6.5",
    fill: "#FFF",
    fillRule: "nonzero",
    stroke: "#FFF"
  }), React.createElement("circle", {
    cx: "6.5",
    cy: "16.15",
    r: "6.5",
    fill: "#FFF",
    fillRule: "nonzero",
    stroke: "#FFF"
  }), React.createElement("circle", {
    cx: "11.25",
    cy: "6.5",
    r: "6.5",
    fill: "#FFF",
    fillRule: "nonzero",
    stroke: "#FFF"
  }), React.createElement("path", {
    fill: "#5A5564",
    fillRule: "nonzero",
    d: "M10.259 12.615l-.361.36c1.662 1.796 1.662 4.526 0 6.25l.361.36c1.807-2.012 1.807-5.03 0-6.97zM3.32 12.615c1.807-1.653 4.553-1.653 6.288 0l.362-.36a5.142 5.142 0 00-6.94 0l.29.36zM3.03 19.226c-1.662-1.797-1.662-4.527 0-6.252l-.361-.359a5.066 5.066 0 000 6.898l.361-.287zM9.68 19.513c-1.806 1.653-4.553 1.653-6.288 0l-.362.36a5.142 5.142 0 006.94 0l-.29-.36z"
  }), React.createElement("path", {
    fill: "#F90",
    fillRule: "nonzero",
    d: "M8.596 14.986c-.072-.718-.65-.934-1.445-1.006v-.934h-.579v.934h-.506v-.934h-.578v.934H4.331v.647h.434c.145 0 .29.072.362.287v2.587c0 .072-.073.144-.073.144-.072.072-.144.072-.217.072h-.433l-.145.718h1.157v1.006h.578v-1.006h.434v.934h.578v-.934c1.012-.072 1.663-.287 1.735-1.221.072-.719-.29-1.078-.795-1.222.434-.144.65-.503.65-1.006zm-.795 2.084c0 .719-1.229.647-1.662.647v-1.294c.361 0 1.662-.143 1.662.647zm-.289-1.796c0 .646-1.012.575-1.373.575v-1.15c.289 0 1.373-.144 1.373.575z"
  }), React.createElement("path", {
    fill: "#282138",
    fillRule: "nonzero",
    d: "M6.5 22.1c-3.325 0-6-2.659-6-5.964 0-3.305 2.675-5.964 6-5.964s6 2.659 6 5.964c0 3.305-2.675 5.964-6 5.964zm0-11.497c-3.036 0-5.566 2.443-5.566 5.533 0 3.09 2.458 5.533 5.566 5.533 3.036 0 5.566-2.443 5.566-5.533-.072-3.09-2.53-5.533-5.566-5.533z"
  }), React.createElement("path", {
    fill: "#26A17B",
    fillRule: "nonzero",
    d: "M16 22.15a6 6 0 100-12 6 6 0 000 12z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M16.715 16.658c-.046 0-.253.023-.738.023-.37 0-.646 0-.739-.023-1.453-.07-2.561-.323-2.561-.623s1.085-.554 2.562-.623v.992c.092 0 .369.023.738.023.462 0 .67-.023.715-.023v-.992c1.454.069 2.539.323 2.539.623.046.3-1.062.553-2.516.623zm0-1.339v-.9h2.031v-1.361h-5.538v1.361h2.03v.877c-1.661.07-2.884.393-2.884.785s1.246.715 2.885.784v2.839h1.476v-2.839c1.662-.069 2.885-.392 2.885-.784 0-.393-1.223-.692-2.885-.762z"
  }), React.createElement("path", {
    fill: "#627EEA",
    d: "M17.25 6.5c0 3.325-2.675 6-6 6s-6-2.675-6-6 2.675-6 6-6 6 2.747 6 6z"
  }), React.createElement("path", {
    fill: "#FFF",
    fillOpacity: ".604",
    fillRule: "nonzero",
    d: "M11.467 2.018v3.325l2.82 1.23z"
  }), React.createElement("path", {
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M11.467 2.018L8.575 6.645l2.892-1.302z"
  }), React.createElement("path", {
    fill: "#FFF",
    fillOpacity: ".604",
    fillRule: "nonzero",
    d: "M11.467 8.741v2.24l2.82-3.903z"
  }), React.createElement("path", {
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M11.467 11.054v-2.24L8.575 7.15z"
  }), React.createElement("path", {
    fill: "#FFF",
    fillOpacity: ".2",
    fillRule: "nonzero",
    d: "M11.467 8.235l2.82-1.663-2.82-1.229z"
  }), React.createElement("path", {
    fill: "#FFF",
    fillOpacity: ".604",
    fillRule: "nonzero",
    d: "M8.575 6.572l2.892 1.663V5.343z"
  })))));
}

function BTCIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  return inactive ? React.createElement(RenBTCIcon, Object.assign({}, props)) : React.createElement(ActiveBTCIcon, Object.assign({}, svgProps));
}

function ActiveBTCIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "15fzl4aoga",
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#FCC538"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#F7931A"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    fillRule: "nonzero"
  }, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "url(#15fzl4aoga)"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M14.545 8.656c.214-1.44-.876-2.215-2.365-2.732l.483-1.952-1.18-.296-.47 1.9c-.31-.078-.629-.151-.945-.224l.474-1.913-1.18-.296-.483 1.951c-.256-.059-.508-.117-.753-.178l.001-.006L6.5 4.5l-.313 1.27s.875.202.856.214c.478.12.565.439.55.691L7.043 8.9c.033.009.075.02.122.04l-.124-.031-.772 3.115c-.058.146-.206.365-.54.282.012.017-.858-.215-.858-.215l-.585 1.36 1.535.385c.285.072.565.148.84.219l-.487 1.974 1.178.296.483-1.953c.322.088.635.17.94.246l-.481 1.944 1.18.296.487-1.97c2.012.383 3.525.228 4.161-1.604.513-1.476-.025-2.327-1.084-2.882.771-.18 1.352-.69 1.507-1.745zm-2.584 3.862c-.369 1.54-2.866.707-3.675.498l.655-2.73c.81.21 3.406.625 3.02 2.232zm.286-3.867c-.338 1.281-2.427.63-3.104.47l.597-2.264c.678.16 2.86.458 2.507 1.794z"
  }))));
}

function ETHIcon(props) {
  var inactive = props.inactive,
      svgProps = _objectWithoutPropertiesLoose(props, ["inactive"]);

  return inactive ? React.createElement(WETHIcon, Object.assign({}, props)) : React.createElement(ActiveETHIcon, Object.assign({}, svgProps));
}

function ActiveETHIcon(props) {
  var gradientId = React.useMemo(function () {
    return makeRandomID('ETHIcon');
  }, []);
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: gradientId,
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#9BB5F6"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#627EEA"
  }))), React.createElement("g", {
    fill: "none"
  }, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "url(#" + gradientId + ")"
  }), React.createElement("g", {
    fill: "#FFF"
  }, React.createElement("path", {
    fillOpacity: ".602",
    d: "M4.686 0L4.686 5.544 9.372 7.638z",
    transform: "translate(5.625 2.5)"
  }), React.createElement("path", {
    d: "M4.686 0L0 7.638 4.686 5.544z",
    transform: "translate(5.625 2.5)"
  }), React.createElement("path", {
    fillOpacity: ".602",
    d: "M4.686 11.23L4.686 14.997 9.375 8.51z",
    transform: "translate(5.625 2.5)"
  }), React.createElement("path", {
    d: "M4.686 14.997L4.686 11.229 0 8.51z",
    transform: "translate(5.625 2.5)"
  }), React.createElement("path", {
    fillOpacity: ".2",
    d: "M4.686 10.358L9.372 7.638 4.686 5.545z",
    transform: "translate(5.625 2.5)"
  }), React.createElement("path", {
    fillOpacity: ".602",
    d: "M0 7.638L4.686 10.358 4.686 5.545z",
    transform: "translate(5.625 2.5)"
  }))));
}

function USDIcon(props) {
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 20 20"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "y989383tca",
    x1: "50%",
    x2: "50%",
    y1: "100%",
    y2: "0%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#33A455"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#6BFF97"
  }))), React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "url(#y989383tca)"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M10.546 15.966v-1.008c1.554-.042 2.982-1.036 2.982-2.982 0-1.89-1.554-2.548-2.982-2.996V6.152c.644 0 1.344.266 1.778.742l1.134-1.176c-.756-.658-1.89-.98-2.912-.994V3.8H9.79v.952c-1.498.098-2.926 1.106-2.926 2.772 0 1.792 1.288 2.436 2.926 2.884v3.108c-.714-.014-1.554-.448-2.058-1.036L6.5 13.656c.882.854 2.058 1.26 3.29 1.302v1.008h.756zM9.79 8.784c-.714-.21-1.246-.574-1.246-1.344 0-.812.588-1.218 1.246-1.288v2.632zm.756 4.732v-2.884c.742.252 1.302.616 1.302 1.442s-.518 1.4-1.302 1.442z"
  })));
}

var useStyles$1 = /*#__PURE__*/styles$2.makeStyles(function (theme) {
  var _root;

  return {
    root: (_root = {
      backgroundColor: theme.colors.blackRussian,
      minWidth: 0,
      opacity: 0.7,
      fontSize: 9,
      width: 30,
      height: 20,
      borderRadius: 18
    }, _root[theme.breakpoints.up('tabletSM')] = {
      width: 58,
      height: 30,
      borderRadius: 23,
      fontSize: 13
    }, _root),
    expanded: {
      transform: 'rotate(180deg)',
      backgroundColor: theme.colors.grayishNavy
    }
  };
});

var RowExpander = function RowExpander(props) {
  var _cn;

  var expanded = props.expanded,
      onToggle = props.onToggle;
  var classes = useStyles$1();
  return React.createElement(Button$1, {
    className: cn((_cn = {}, _cn[classes.root] = true, _cn[classes.expanded] = expanded, _cn)),
    onClick: function onClick() {
      return onToggle(!expanded);
    }
  }, React.createElement(Arrow, {
    fontSize: "inherit"
  }));
};

var useStyles$2 = /*#__PURE__*/styles$2.makeStyles(function () {
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    label: {},
    value: {}
  };
}, {
  name: 'Summary'
});

var Summary = function Summary(props) {
  var _props$summary = props.summary,
      renderLabel = _props$summary.renderLabel,
      renderValue = _props$summary.renderValue;
  var classes = useStyles$2();
  return React.createElement("div", {
    className: classes.root
  }, React.createElement("div", {
    className: classes.label
  }, renderLabel()), React.createElement("div", {
    className: classes.value
  }, renderValue()));
};

function Table(props) {
  var _ref;

  var classes = useStyles();
  var alignPropertyToClass = {
    center: classes.cellAlignCenter,
    left: classes.cellAlignLeft,
    right: classes.cellAlignRight
  };
  var verticalAlignPropertyClass = {
    center: classes.cellVerticalAlignCenter,
    top: classes.cellVerticalAlignTop,
    bottom: classes.cellVerticalAlignBottom
  };
  var rowPaddingToClass = {
    medium: classes.cellPaddingMedium,
    small: classes.cellPaddingSmall,
    'extra-small': classes.cellPaddingExtraSmall
  };
  var titlePaddingToClass = {
    medium: classes.titlePaddingMedium,
    small: classes.titlePaddingSmall,
    'extra-small': classes.titlePaddingExtraSmall
  };
  var indentFromHeaderClass = {
    medium: classes.paddingFromTitleMedium,
    small: classes.paddingFromTitleSmall,
    'extra-small': classes.paddingFromTitleExtraSmall
  };
  var subtableIndentFromHeaderClass = {
    medium: classes.subtablePaddingFromTitleMedium,
    unset: ''
  };
  var columns = props.columns,
      entries = props.entries,
      summary = props.summary,
      withStripes = props.withStripes,
      withOuterPadding = props.withOuterPadding,
      _props$rowPadding = props.rowPadding,
      rowPadding = _props$rowPadding === void 0 ? 'medium' : _props$rowPadding,
      _props$titlePadding = props.titlePadding,
      titlePadding = _props$titlePadding === void 0 ? 'medium' : _props$titlePadding,
      indentFromHeader = props.indentFromHeader,
      divideBy = props.divideBy,
      rowClassNames = props.rowClassNames;

  var _React$useState = React__default.useState(function () {
    return entries.reduce(function (acc, _, index) {
      var _extends2;

      return _extends({}, acc, (_extends2 = {}, _extends2[index] = false, _extends2));
    }, {});
  }),
      rowToExpanded = _React$useState[0],
      setRowToExpanded = _React$useState[1];

  var expandedArea = function () {
    var _columns$find;

    var contentWithRowExpander = (_columns$find = columns.find(function (x) {
      return x.cellContent.kind === 'for-row-expander';
    })) === null || _columns$find === void 0 ? void 0 : _columns$find.cellContent;
    return (contentWithRowExpander === null || contentWithRowExpander === void 0 ? void 0 : contentWithRowExpander.expandedArea) || null;
  }();

  return React__default.createElement("table", {
    className: cn([classes.root, (_ref = {}, _ref[classes.withStripes] = withStripes, _ref[classes.withOuterPadding] = withOuterPadding, _ref)])
  }, columns.find(function (x) {
    return x.renderTitle;
  }) && React__default.createElement("thead", null, React__default.createElement("tr", {
    className: cn(rowClassNames === null || rowClassNames === void 0 ? void 0 : rowClassNames.className, rowClassNames === null || rowClassNames === void 0 ? void 0 : rowClassNames.headerRowClassName)
  }, columns.map(renderTitle))), React__default.createElement("tbody", {
    className: cn(getPaddingFromTitleClass(indentFromHeader))
  }, renderEntriesAndSummary()));

  function renderEntriesAndSummary() {
    if (summary) {
      return React__default.createElement(React__default.Fragment, null, entries.map(function (entry, entryIndex) {
        return renderEntry(entry, entryIndex, entryIndex === entries.length - 1);
      }), renderSummary(summary));
    }

    return entries.map(function (entry, entryIndex) {
      return renderEntry(entry, entryIndex);
    });
  }

  function renderSummary(_ref2) {
    var className = _ref2.className,
        rest = _objectWithoutPropertiesLoose(_ref2, ["className"]);

    return React__default.createElement("tr", {
      key: "summary"
    }, React__default.createElement("td", {
      colSpan: columns.length,
      className: cn(classes.cell, classes.summaryCell, className)
    }, React__default.createElement(Summary, {
      summary: rest
    })));
  }

  function getAlignClass(_ref3) {
    var align = _ref3.align;
    return align && alignPropertyToClass[align];
  }

  function getVerticalAlignClass(_ref4) {
    var verticalAlign = _ref4.verticalAlign;
    return verticalAlign && verticalAlignPropertyClass[verticalAlign];
  }

  function getClassName(_ref5, entry, entryIndex, entryArray) {
    var className = _ref5.className;
    return typeof className === 'function' ? className(entry, entryIndex, entryArray) : className;
  }

  function getPaddingClass(paddingSize) {
    return paddingSize && rowPaddingToClass[paddingSize];
  }

  function getTitlePaddingClass(paddingSize) {
    return paddingSize && titlePaddingToClass[paddingSize];
  }

  function getPaddingFromTitleClass(paddingSize) {
    return paddingSize && indentFromHeaderClass[paddingSize];
  }

  function getSubtablePaddingFromTitleClass(paddingSize) {
    if (paddingSize === void 0) {
      paddingSize = 'medium';
    }

    return paddingSize && subtableIndentFromHeaderClass[paddingSize];
  }

  function getSubtableRowInactiveClass(entryIndex) {
    return !rowToExpanded[entryIndex] ? classes.subtableRowInactive : null;
  }

  function renderTitle(column, columnIndex) {
    return React__default.createElement("th", {
      className: cn(classes.title, classes.cell, classes.topLevelTitle, getAlignClass(column), getTitlePaddingClass(titlePadding), getVerticalAlignClass(column), column.titleClassName),
      key: columnIndex
    }, column.renderTitle && column.renderTitle());
  }

  function renderEntry(entry, entryIndex, beforeSummary) {
    if (expandedArea === null) {
      return React__default.createElement(React__default.Fragment, {
        key: entryIndex
      }, renderEntryRow(entry, entryIndex, beforeSummary));
    }

    return React__default.createElement(React__default.Fragment, {
      key: entryIndex
    }, renderEntryRow(entry, entryIndex, beforeSummary), renderEntryExpandedArea(expandedArea, entry, entryIndex));
  }

  function renderEntryExpandedArea(area, entry, entryIndex) {
    switch (area.kind) {
      case 'single-cell':
        return renderAreaWithinSingleCell(area, entry, entryIndex);

      case 'subtable':
        return renderAreaWithinSubtable(area, entry, entryIndex);
    }
  }

  function renderAreaWithinSingleCell(area, entry, entryIndex) {
    return React__default.createElement("tr", null, React__default.createElement("td", {
      className: cn(classes.singleCellExpandedArea, classes.cellData, classes.cell, getClassName(area, entry, entryIndex, entries)),
      colSpan: columns.length
    }, area.renderContent(entry, entryIndex, entries)));
  }

  function renderAreaWithinSubtable(area, entry, entryIndex) {
    var subtableEntries = area.getSubtableEntries(entry, entryIndex, entries);

    var adjustedSubtableColumns = function () {
      var subtableCols = area.subtableColumns;
      var subtableColsNumber = area.subtableColumns.length;
      var tableColsNumber = columns.length;

      if (subtableColsNumber < tableColsNumber) {
        var colsToAdd = R.repeat({
          renderCell: function renderCell() {
            return null;
          },
          renderTitle: function renderTitle() {
            return null;
          }
        }, tableColsNumber - subtableColsNumber);
        return subtableCols.concat(colsToAdd);
      }

      if (subtableColsNumber > tableColsNumber) {
        console.warn('unexpected subtable columns number > table columns number');
        return subtableCols.slice(0, subtableColsNumber);
      }

      return subtableCols;
    }();

    return React__default.createElement(React__default.Fragment, null, adjustedSubtableColumns.find(function (x) {
      return x.renderTitle;
    }) ? React__default.createElement("tr", {
      key: "subtable-header",
      className: cn(classes.subtableRow, getSubtableRowInactiveClass(entryIndex), rowClassNames === null || rowClassNames === void 0 ? void 0 : rowClassNames.className, rowClassNames === null || rowClassNames === void 0 ? void 0 : rowClassNames.subHeaderRowClassName)
    }, adjustedSubtableColumns.map(renderSubtableHeader)) : null, subtableEntries.map(function (subtableEntry, subtableEntryIndex) {
      return renderSubtableEntry(adjustedSubtableColumns, subtableEntry, subtableEntryIndex, subtableEntries, area.paddingFromTitle, entryIndex);
    }));
  }

  function renderSubtableHeader(x, columnIndex) {
    return React__default.createElement("th", {
      className: cn(classes.title, classes.cell, x.titleClassName),
      key: columnIndex
    }, x.renderTitle && x.renderTitle());
  }

  function renderSubtableEntry(subtableColumns, subtableEntry, subtableEntryIndex, subtableEntries, paddingFromTitle, entryIndex) {
    var _ref6;

    var last = subtableEntryIndex === subtableEntries.length - 1;
    var first = subtableEntryIndex === 0;
    return React__default.createElement("tr", {
      key: subtableEntryIndex,
      className: cn([classes.subtableRow, getSubtableRowInactiveClass(entryIndex), (_ref6 = {}, _ref6[classes.lastSubtableRow] = last, _ref6[getSubtablePaddingFromTitleClass(paddingFromTitle)] = first, _ref6)], rowClassNames === null || rowClassNames === void 0 ? void 0 : rowClassNames.className, rowClassNames === null || rowClassNames === void 0 ? void 0 : rowClassNames.subRowClassName)
    }, subtableColumns.map(makeSubtableCellRenderer(subtableEntry, entryIndex, subtableEntries)));
  }

  function makeSubtableCellRenderer(subtableEntry, subtableEntryIndex, subtableEntries) {
    return function (column, columnIndex) {
      return React__default.createElement("td", {
        className: cn(classes.cell, classes.cellData, classes.subtableCell, getAlignClass(column), getPaddingClass(rowPadding), getClassName(column, subtableEntry, subtableEntryIndex, subtableEntries)),
        key: columnIndex
      }, React__default.createElement("div", null, column.renderCell(subtableEntry, subtableEntryIndex, subtableEntries)));
    };
  }

  function getColSpan(_ref7, columnIndex, entry, entryIndex) {
    var colSpan = _ref7.colSpan;
    var colSpanValue = typeof colSpan === 'function' ? colSpan(entry, entryIndex, entries) : colSpan;
    return colSpanValue === 'end' ? columns.length - columnIndex : colSpanValue;
  }

  function renderEntryRow(entry, entryIndex, beforeSummary) {
    var _cn;

    return React__default.createElement("tr", {
      key: entryIndex,
      className: cn((_cn = {}, _cn[classes.rowBeforeSummary] = beforeSummary, _cn[classes.rowWithExpandedContent] = rowToExpanded[entryIndex], _cn[classes.divideDown] = divideBy === null || divideBy === void 0 ? void 0 : divideBy(entry, entryIndex, entries), _cn[classes.divideUp] = entryIndex > 0 && (divideBy === null || divideBy === void 0 ? void 0 : divideBy(entries[entryIndex - 1], entryIndex - 1, entries)), _cn), rowClassNames === null || rowClassNames === void 0 ? void 0 : rowClassNames.className, rowClassNames === null || rowClassNames === void 0 ? void 0 : rowClassNames.entryRowClassName)
    }, columns.reduce(makeRowCellsRenderer(entry, entryIndex), {
      cells: [],
      cellsToSkip: 0
    }).cells.map(function (cell) {
      return cell;
    }));
  }

  function makeRowCellsRenderer(entry, entryIndex) {
    return function (cellsAccumulator, column, columnIndex) {
      var previousCells = cellsAccumulator.cells,
          cellsToSkip = cellsAccumulator.cellsToSkip;
      var shouldSkipCurrentCell = cellsToSkip > 0;

      var nextSkipCounter = function nextSkipCounter() {
        if (shouldSkipCurrentCell) {
          return cellsToSkip - 1;
        }

        var colSpanValue = getColSpan(column.cellContent, columnIndex, entry, entryIndex) || 1;
        return Math.max(0, colSpanValue - 1);
      };

      return {
        cells: shouldSkipCurrentCell ? previousCells : [].concat(previousCells, [makeCellRenderer(entry, entryIndex)(column, columnIndex)]),
        cellsToSkip: nextSkipCounter()
      };
    };
  }

  function makeCellRenderer(entry, entryIndex) {
    return function (column, columnIndex) {
      switch (column.cellContent.kind) {
        case 'simple':
          return renderCellWithSimpleContent(entry, entryIndex, column.cellContent, columnIndex, column);

        case 'for-row-expander':
          return renderCellWithContentForRowExpander(entry, entryIndex, column.cellContent, columnIndex, column);
      }
    };
  }

  function renderCellWithSimpleContent(entry, entryIndex, content, columnIndex, column) {
    return React__default.createElement("td", {
      className: cn(classes.cell, classes.cellData, getAlignClass(column), getPaddingClass(rowPadding), getVerticalAlignClass(column), getClassName(column, entry, entryIndex, entries)),
      key: columnIndex,
      colSpan: getColSpan(content, columnIndex, entry, entryIndex)
    }, content.render(entry, entryIndex, entries));
  }

  function renderCellWithContentForRowExpander(entry, entryIndex, content, columnIndex, column) {
    var handleToggle = function handleToggle(newValue) {
      var _extends3;

      return setRowToExpanded(_extends({}, rowToExpanded, (_extends3 = {}, _extends3[entryIndex] = newValue, _extends3)));
    };

    return React__default.createElement("td", {
      className: cn(classes.cell, classes.cellData, getAlignClass(column), getPaddingClass(rowPadding), getVerticalAlignClass(column), getClassName(column, entry, entryIndex, entries)),
      key: "row-expander",
      colSpan: getColSpan(content, columnIndex, entry, entryIndex)
    }, React__default.createElement(RowExpander, {
      expanded: rowToExpanded[entryIndex],
      onToggle: handleToggle
    }));
  }
}



var index = {
  __proto__: null,
  models: models,
  Component: Table
};

var shadowOffset = 3;
var largeShadowOffset = 3;
var backgroundGradientSize = '300%';
var extraSmallHeightTabletXS = 2.75;
var smallHeightTabletXS = 3.75;
var heightTabletXS = 4.5;
var largeHeightTabletXS = 6;
var useStyles$3 = /*#__PURE__*/styles$2.makeStyles(function (theme) {
  var _sizeSmall;

  return {
    root: {
      textTransform: 'none',
      fontWeight: 400,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      padding: theme.spacing(1.25, 2.5),
      fontSize: theme.spacing(2),
      minHeight: theme.spacing(heightTabletXS),
      borderRadius: theme.spacing(heightTabletXS / 2),
      '&$defaultMinWidth': {
        minWidth: theme.spacing(8.25)
      }
    },
    sizeExtraSmall: {
      padding: theme.spacing(0.5, 1),
      fontSize: theme.spacing(1.5),
      minHeight: theme.spacing(extraSmallHeightTabletXS),
      borderRadius: theme.spacing(extraSmallHeightTabletXS / 2),
      '&$defaultMinWidth': {
        minWidth: theme.spacing(13.25)
      },
      '&$outlinedPrimary': {
        '&$defaultMinWidth': {
          minWidth: theme.spacing(12.25)
        }
      }
    },
    sizeSmall: (_sizeSmall = {
      fontSize: theme.spacing(2),
      minHeight: theme.spacing(smallHeightTabletXS),
      borderRadius: theme.spacing(smallHeightTabletXS / 2),
      padding: '7px 16px'
    }, _sizeSmall[theme.breakpoints.up('desktopXS')] = {
      padding: '7px 20px'
    }, _sizeSmall['&$defaultMinWidth'] = {
      minWidth: theme.spacing(13.25)
    }, _sizeSmall['&$outlinedPrimary'] = {
      '&$defaultMinWidth': {
        minWidth: theme.spacing(12.25)
      }
    }, _sizeSmall),
    sizeLarge: {
      padding: theme.spacing(1.85, 4),
      fontSize: theme.spacing(2.5),
      minHeight: theme.spacing(largeHeightTabletXS),
      borderRadius: theme.spacing(largeHeightTabletXS / 2),
      '&$defaultMinWidth': {
        minWidth: theme.spacing(10)
      }
    },
    outlinedPrimary: {
      borderWidth: 0,
      backgroundImage: theme.gradients.outlinedButton.linear('-270deg'),
      backgroundSize: backgroundGradientSize,
      opacity: 0.99,
      color: theme.palette.text.primary,
      transition: 'background-position 1s',
      '&$disabled': {
        background: "rgba(255, 255, 255, 0.2)",
        color: "rgba(255, 255, 255, 0.5)",
        border: 'none',
        '&:hover:not(:active), &$focusVisible': {
          background: "rgba(255, 255, 255, 0.2)",
          color: "rgba(255, 255, 255, 0.5)",
          border: 'none'
        }
      },
      '&:before': {
        zIndex: -1,
        display: 'block',
        // tslint:disable-next-line: quotemark
        content: "''",
        position: 'absolute',
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        backgroundColor: function backgroundColor(_ref) {
          var _backgroundColor = _ref.backgroundColor;
          return _backgroundColor;
        },
        transition: theme.transitions.create(['opacity', 'background-color']),
        borderRadius: theme.spacing(heightTabletXS / 2) - 1,
        '$sizeExtraSmall&': {
          borderRadius: theme.spacing(smallHeightTabletXS / 2) - 1
        },
        '$sizeSmall&': {
          borderRadius: theme.spacing(smallHeightTabletXS / 2) - 1
        },
        '$sizeLarge&': {
          borderRadius: theme.spacing(largeHeightTabletXS / 2) - 1
        }
      },
      '&:hover:not(:active), &$focusVisible': {
        border: 'none',
        color: theme.colors.violetRed
      },
      '&:active': {
        border: 'none',
        backgroundPosition: '50%'
      }
    },
    containedPrimary: {
      boxShadow: 'none',
      color: theme.colors.white,
      marginBottom: 'auto',
      alignSelf: 'center',
      background: theme.gradients.button.linear('-270deg'),
      backgroundSize: backgroundGradientSize,
      opacity: 0.99,
      transition: 'background-position 1s',
      '&$disabled': {
        background: "rgba(255, 255, 255, 0.1)",
        color: "rgba(255, 255, 255, 0.5)",
        '&:hover:not(:active), &$focusVisible': {
          background: "rgba(255, 255, 255, 0.1)",
          color: "rgba(255, 255, 255, 0.5)"
        }
      },
      '&:before': {
        // tslint:disable-next-line: quotemark
        content: "''",
        display: 'block',
        position: 'absolute',
        top: -shadowOffset,
        left: -shadowOffset,
        right: -shadowOffset,
        bottom: -shadowOffset,
        zIndex: '-1',
        background: theme.gradients.button.linear('-270deg'),
        backgroundSize: backgroundGradientSize,
        filter: 'blur(8px)',
        opacity: 0,
        transition: '1s',
        borderRadius: theme.spacing(heightTabletXS / 2 + 2 * shadowOffset),
        '&$sizeLarge': {
          filter: 'blur(8px)',
          top: -largeShadowOffset,
          left: -largeShadowOffset,
          right: -largeShadowOffset,
          bottom: -largeShadowOffset,
          borderRadius: theme.spacing(largeHeightTabletXS / 2 + 2 * largeShadowOffset)
        }
      },
      '&:hover:not(:active), &$focusVisible': {
        animation: '$animate 8s linear infinite',
        '&:before': {
          opacity: 0.7,
          animation: '$animate 8s linear infinite'
        }
      },
      '&:active': {
        boxShadow: 'none',
        backgroundPosition: '50%'
      }
    },
    textPrimary: {
      padding: 0,
      color: theme.colors.violetRed,
      minWidth: 'unset',
      minHeight: 'unset',
      justifyContent: 'flex-start',
      borderRadius: 0,
      transition: theme.transitions.create('color'),
      '&:hover, &$focusVisible': {
        color: '#EB67FE'
      }
    },
    disabled: {},
    focusVisible: {},
    defaultMinWidth: {},
    '@keyframes animate': {
      '0%': {
        backgroundPosition: '0%'
      },
      '100%': {
        backgroundPosition: backgroundGradientSize
      }
    }
  };
}, {
  name: 'Button'
});

function Button(props) {
  var backgroundColor = styles$2.useAncestorBackgroundHack();
  var classes = useStyles$3({
    backgroundColor: backgroundColor
  });

  var _props$classes = props.classes,
      muiClasses = _props$classes === void 0 ? {} : _props$classes,
      size = props.size,
      _props$minWidthSize = props.minWidthSize,
      minWidthSize = _props$minWidthSize === void 0 ? 'default' : _props$minWidthSize,
      rest = _objectWithoutPropertiesLoose(props, ["classes", "size", "minWidthSize"]);

  return React.createElement(Button$1, Object.assign({}, rest, {
    size: getSizeTypeToDefault(size),
    classes: _extends({}, muiClasses, {
      root: cn(classes.root, muiClasses.root),
      disabled: cn(classes.disabled, muiClasses.disabled),
      focusVisible: cn(classes.focusVisible, muiClasses.focusVisible),
      containedPrimary: cn(classes.containedPrimary, muiClasses.containedPrimary),
      outlinedPrimary: cn(classes.outlinedPrimary, muiClasses.outlinedPrimary),
      textPrimary: cn(classes.textPrimary, muiClasses.textPrimary)
    }, getSizeClasses()),
    disableRipple: rest.variant !== 'text'
  }));

  function getSizeClasses() {
    switch (size) {
      case 'large':
        return {
          sizeLarge: cn(classes.sizeLarge, muiClasses.sizeLarge, getMinWidthClasses())
        };

      case 'small':
        return {
          sizeSmall: cn(classes.sizeSmall, muiClasses.sizeSmall, getMinWidthClasses())
        };

      case 'extra-small':
        return {
          sizeSmall: cn(classes.sizeExtraSmall, muiClasses.sizeSmall, getMinWidthClasses())
        };

      case 'medium':
      default:
        return null;
    }
  }

  function getMinWidthClasses() {
    switch (minWidthSize) {
      case 'none':
        return null;

      case 'default':
      default:
        return classes.defaultMinWidth;
    }
  }
}

function getSizeTypeToDefault(size) {
  switch (size) {
    case 'extra-small':
      return 'small';

    case 'small':
    case 'large':
    case 'medium':
    default:
      return size;
  }
}

var TabsVariantContext = /*#__PURE__*/React__default.createContext('default');
var TabsVariantContextProvider = TabsVariantContext.Provider;
function useGetVariantStyles(styles) {
  var variant = React__default.useContext(TabsVariantContext);
  return styles[variant];
}

var sizes = {
  tabs: {
    height: 36,
    indicatorSpace: 3,
    borderWidth: 1
  }
};

var getBaseOverrides = function getBaseOverrides() {
  return {
    tabsListRoot: {
      position: 'relative',
      display: 'inline-flex',
      overflow: 'hidden',
      minHeight: sizes.tabs.height,
      borderRadius: sizes.tabs.height / 2,
      padding: sizes.tabs.indicatorSpace,
      background: 'linear-gradient(to left, #5346e6, #ef359c)',
      '&::before': {
        content: "''",
        position: 'absolute',
        top: 1,
        left: 1,
        right: 1,
        bottom: 1,
        borderRadius: sizes.tabs.height / 2
      }
    },
    indicator: {
      top: 0,
      bottom: 0,
      height: '100%',
      borderRadius: sizes.tabs.height / 2 - sizes.tabs.indicatorSpace - sizes.tabs.borderWidth,
      zIndex: -1,
      background: 'linear-gradient(to left, #5346e6, #ef359c)'
    },
    scroller: {
      zIndex: 1,
      overflow: 'hidden',
      borderRadius: sizes.tabs.height / 2 - sizes.tabs.indicatorSpace - sizes.tabs.borderWidth
    },
    flexContainer: {
      height: '100%'
    }
  };
};

var getDefaultVariantOverrides = function getDefaultVariantOverrides() {
  return R.mergeDeepRight(getBaseOverrides(), {
    root: {
      overflow: 'hidden'
    },
    tabsListRoot: {
      '&::before': {
        background: function background(_ref) {
          var backgroundColor = _ref.backgroundColor;
          return backgroundColor;
        }
      },
      '&$fullWidth': {
        display: 'flex'
      }
    },
    fullWidth: {}
  });
};

var getMinimalisticVariantOverrides = function getMinimalisticVariantOverrides() {
  return R.mergeDeepRight(getDefaultVariantOverrides(), {
    root: {
      display: 'flex'
    },
    tabsListRoot: {
      minHeight: 28,
      background: '#30288D',
      '&::before': {
        background: 'none'
      }
    },
    indicator: {
      background: 'linear-gradient(to bottom, #574cf2, #4236d0)'
    },
    scrollButton: {
      background: '#30288D',
      width: 28,
      height: 28,
      borderRadius: 14,
      '&$disabled': {
        opacity: 0.5
      },
      // TODO: fix buttons hide on mobile
      '&.MuiTabs-scrollButtonsDesktop': {
        display: 'inline-flex'
      }
    },
    leftScrollButton: {
      '& > $scrollButton': {
        marginRight: 5
      }
    },
    rightScrollButton: {
      '& > $scrollButton': {
        marginLeft: 5
      }
    },
    disabled: {}
  });
};

var useDefaultStyles = /*#__PURE__*/styles$2.makeStyles(function () {
  return getDefaultVariantOverrides();
}, {
  name: 'TabList'
});
var useMinimalisticStyles = /*#__PURE__*/styles$2.makeStyles(function () {
  return getMinimalisticVariantOverrides();
}, {
  name: 'TabList'
});

function TabList(props) {
  var _cn;

  var backgroundColor = styles$2.useAncestorBackgroundHack();
  var useStyles = useGetVariantStyles({
    "default": useDefaultStyles,
    minimalistic: useMinimalisticStyles
  });
  var classes = useStyles({
    backgroundColor: backgroundColor
  });
  var leftScrollButtonRef = React__default.useRef(null);
  var rightScrollButtonRef = React__default.useRef(null);
  return React__default.createElement("div", {
    className: classes.root
  }, React__default.createElement("div", {
    ref: leftScrollButtonRef,
    className: classes.leftScrollButton
  }), React__default.createElement(lab.TabList, Object.assign({}, props, {
    ScrollButtonComponent: CustomTabScrollButton,
    TabScrollButtonProps: {
      classes: {
        root: classes.scrollButton,
        disabled: classes.disabled
      }
    },
    classes: {
      root: cn(classes.tabsListRoot, (_cn = {}, _cn[classes.fullWidth] = props.variant === 'fullWidth', _cn)),
      indicator: classes.indicator,
      scroller: classes.scroller,
      flexContainer: classes.flexContainer
    }
  })), React__default.createElement("div", {
    ref: rightScrollButtonRef,
    className: classes.rightScrollButton
  }));

  function CustomTabScrollButton(tabProps) {
    var parent = tabProps.direction === 'left' ? leftScrollButtonRef : rightScrollButtonRef;
    return parent.current && ReactDOM.createPortal(React__default.createElement(TabScrollButton, Object.assign({}, tabProps)), parent.current);
  }
}

var styles = function styles(theme) {
  var _navigationBar, _tabList;

  return styles$2.createStyles({
    navigationBar: (_navigationBar = {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: 20
    }, _navigationBar[theme.breakpoints.up('mobileLG')] = {
      marginBottom: 30
    }, _navigationBar[theme.breakpoints.up('desktopXS')] = {
      marginBottom: 45
    }, _navigationBar),
    tabList: (_tabList = {
      fontSize: 13
    }, _tabList[theme.breakpoints.up('mobileMD')] = {
      fontSize: 16
    }, _tabList['&$fullWidth'] = {
      width: '100%'
    }, _tabList),
    tabPanel: {
      padding: 0
    },
    fullWidth: {}
  });
};

var defaultTabComponent = 'div';
var TabsSectionComponent = /*#__PURE__*/styles$2.withStyles(styles, {
  name: 'TabsSection'
})(function (props) {
  var _content$navigationBa, _cn, _content$navigationBa2;

  var tabs = props.tabs,
      currentValue = props.currentValue,
      onChange = props.onChange,
      tabComponent = props.tabComponent,
      _props$tabListProps = props.tabListProps,
      tabListProps = _props$tabListProps === void 0 ? {} : _props$tabListProps,
      _props$content = props.content,
      content = _props$content === void 0 ? {
    navigationBar: {}
  } : _props$content,
      classes = props.classes;
  var isSmallMobile = styles$2.useBreakpointsMatch({
    to: 'mobileMD'
  });
  var defaultVariant = isSmallMobile ? 'fullWidth' : 'standard';

  var tabListClassName = tabListProps.className,
      _tabListProps$variant = tabListProps.variant,
      variant = _tabListProps$variant === void 0 ? defaultVariant : _tabListProps$variant,
      restTabListProps = _objectWithoutPropertiesLoose(tabListProps, ["className", "variant"]);

  return React__default.createElement(TabContext$1, {
    value: currentValue
  }, React__default.createElement("div", {
    className: classes.navigationBar
  }, (_content$navigationBa = content.navigationBar) === null || _content$navigationBa === void 0 ? void 0 : _content$navigationBa.beforeTabs, React__default.createElement(TabList, Object.assign({}, restTabListProps, {
    value: currentValue,
    onChange: onChange,
    variant: variant,
    className: cn(tabListClassName, classes.tabList, (_cn = {}, _cn[classes.fullWidth] = variant === 'fullWidth', _cn))
  }), tabs.map(function (tabItem) {
    return renderTab(tabItem);
  })), (_content$navigationBa2 = content.navigationBar) === null || _content$navigationBa2 === void 0 ? void 0 : _content$navigationBa2.afterTabs), tabs.map(function (_ref) {
    var value = _ref.value,
        renderContent = _ref.renderContent;
    return React__default.createElement(TabPanel, {
      classes: {
        root: classes.tabPanel
      },
      value: value,
      key: value
    }, renderContent());
  }));

  function renderTab(tabItem) {
    var value = tabItem.value,
        label = tabItem.label,
        restTabProps = _objectWithoutPropertiesLoose(tabItem, ["value", "label", "renderContent"]);

    return React__default.createElement(Tab$1, Object.assign({}, restTabProps, {
      label: label,
      value: value,
      key: value,
      component: tabComponent || defaultTabComponent
    }));
  }
});
function TabsSection(props) {
  return React__default.createElement(TabsSectionComponent, Object.assign({}, props));
}

var useStyles$4 = /*#__PURE__*/styles$2.makeStyles(function () {
  return {
    root: {},
    title: {
      fontSize: 16,
      marginBottom: 12,
      '$sizeSmall &': {
        fontSize: 12,
        fontWeight: 300,
        marginBottom: 0
      },
      '$variantCondensed &': {
        marginBottom: 0
      }
    },
    value: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 32,
      fontWeight: 300,
      lineHeight: 'normal',
      '$sizeSmall &': {
        fontSize: 22
      },
      '$variantCondensed &': {
        lineHeight: 1.2
      }
    },
    subValue: {
      marginTop: 8,
      fontSize: 16
    },
    chart: {
      marginBottom: 5,
      marginLeft: 10,
      alignSelf: 'flex-end'
    },
    sizeSmall: {},
    variantCondensed: {}
  };
}, {
  name: 'Metric'
});

function Metric(props) {
  var _cn;

  var title = props.title,
      value = props.value,
      subValue = props.subValue,
      chart = props.chart,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'default' : _props$variant;
  var classes = useStyles$4();
  return React.createElement("div", {
    className: cn(classes.root, (_cn = {}, _cn[classes.sizeSmall] = size === 'small', _cn[classes.variantCondensed] = variant === 'condensed', _cn))
  }, React.createElement("div", {
    className: classes.title
  }, title), React.createElement("div", {
    className: classes.value
  }, value, chart && React.createElement("div", {
    className: classes.chart
  }, chart)), subValue && React.createElement("div", {
    className: classes.subValue
  }, subValue));
}

function ComingSoon(props) {
  var _cn;

  var classes = useStyles$5();
  var _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'default' : _props$variant,
      _props$text = props.text,
      text = _props$text === void 0 ? 'Coming soon' : _props$text;
  return React.createElement("div", {
    className: cn(classes.root, (_cn = {}, _cn[classes.isLabel] = variant === 'label', _cn))
  }, React.createElement("span", {
    className: classes.text
  }, text));
}
var useStyles$5 = /*#__PURE__*/styles$2.makeStyles(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      background: theme.palette.background.hint,
      borderRadius: 4
    },
    isLabel: {
      display: 'inline-flex',
      minWidth: 86,
      padding: '6px 8px',
      borderRadius: 12.5,
      '& $text': {
        fontSize: 12,
        lineHeight: 1.1,
        fontWeight: 300,
        fontStyle: 'italic'
      }
    },
    text: {
      whiteSpace: 'nowrap'
    }
  };
}, {
  name: 'ComingSoon'
});

var Label = function Label(props) {
  var _cn;

  var hint = props.hint,
      inline = props.inline,
      icon = props.icon,
      propsClasses = props.classes,
      children = props.children,
      withComingSoon = props.withComingSoon,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 'inherit' : _props$fontSize;
  var classes = useStyles$6(props);

  var _React$useState = React.useState(false),
      isOpen = _React$useState[0],
      setIsOpen = _React$useState[1];

  var handleTooltipClose = React.useCallback(function () {
    setIsOpen(false);
  }, []);
  var handleTooltipOpen = React.useCallback(function (event) {
    setIsOpen(true);
    event.preventDefault();
  }, []);
  return React.createElement(Typography, {
    variant: "h6",
    component: "h6",
    className: cn(propsClasses === null || propsClasses === void 0 ? void 0 : propsClasses.title, classes.title, classes[fontSize], (_cn = {}, _cn[classes.inline] = inline, _cn))
  }, icon && React.createElement(React.Fragment, null, icon, "\xA0"), children, renderTooltip(), withComingSoon && React.createElement("span", {
    className: cn(propsClasses === null || propsClasses === void 0 ? void 0 : propsClasses.comingSoonLabel, classes.comingSoonLabel)
  }, React.createElement(ComingSoon, {
    variant: "label"
  })));

  function renderTooltip() {
    return hint && React.createElement(React.Fragment, null, "\xA0", React.createElement(ClickAwayListener, {
      onClickAway: handleTooltipClose
    }, React.createElement(Tooltip, {
      classes: propsClasses === null || propsClasses === void 0 ? void 0 : propsClasses.tooltipClasses,
      onClose: handleTooltipClose,
      open: isOpen,
      disableFocusListener: true,
      disableHoverListener: true,
      disableTouchListener: true,
      title: React.createElement("div", {
        className: classes.hint
      }, hint),
      placement: "right"
    }, React.createElement("span", null, React.createElement(InfoIcon, {
      className: cn(propsClasses === null || propsClasses === void 0 ? void 0 : propsClasses.tooltipIcon, classes.tooltipIcon),
      fontSize: "small",
      onMouseOver: handleTooltipOpen,
      onMouseLeave: handleTooltipClose,
      onClick: handleTooltipOpen
    })))));
  }
};
var useStyles$6 = /*#__PURE__*/styles$2.makeStyles(function () {
  return {
    title: {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 'normal',
      '&$inherit': {
        fontSize: 'inherit',
        fontWeight: 400
      },
      '&$medium': {
        fontSize: 16,
        fontWeight: 400
      },
      '&$large': {
        fontSize: 22,
        fontWeight: 300
      }
    },
    inline: {
      display: 'inline-flex'
    },
    comingSoonLabel: {
      marginLeft: 10
    },
    hint: {
      fontSize: 12
    },
    tooltipIcon: {
      fontSize: '1.125em',
      opacity: '50%',
      '&:hover': {
        opacity: '100%'
      }
    },
    inherit: {},
    medium: {},
    large: {}
  };
}, {
  name: 'Label'
});

var baseColors = ['#01888c', '#fc7500', '#034f5d', '#f73f01', '#fc1960', '#c7144c', '#f3c100', '#1598f2', '#2465e1', '#f19e02'];
var shapeCount = 4;
var diameter = 40;
var wobble = 30;

function AddressIcon(props) {
  var address = props.address,
      rest = _objectWithoutPropertiesLoose(props, ["address"]);

  var classes = useStyles$7();
  var generator = new MersenneTwister(jsNumberForAddress(address));
  var shapesArr = Array(shapeCount).fill(0);
  var shiftedColors = makeHueShift(baseColors.slice(), generator);
  return React.createElement(SvgIcon, Object.assign({}, rest, {
    viewBox: "0 0 40 40",
    x: "0",
    y: "0",
    classes: {
      root: classes.root
    },
    style: {
      backgroundColor: generateColor(shiftedColors, generator)
    }
  }), shapesArr.map(function (_, i) {
    return renderShape(shiftedColors, generator, i, shapeCount - 1);
  }));
}

function jsNumberForAddress(address) {
  var addr = address.slice(2, 10);
  var seed = parseInt(addr, 16);
  return seed;
}

function generateColor(colors, generator) {
  // unused variable to keep the order of generation like in original library https://github.com/marcusmolchany/react-jazzicon/blob/2db7299d58892909dc6aafdd0ed8771a3ef644a1/src/Jazzicon.js#L15
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var rand = generator.random();
  var idx = Math.floor(colors.length * generator.random());
  var color = colors.splice(idx, 1)[0];
  return color;
}

function makeHueShift(colors, generator) {
  var amount = generator.random() * 30 - wobble / 2;
  return colors.map(function (hex) {
    var color = new Color(hex);
    color.rotate(amount);
    return color.hexString();
  });
}

function renderShape(colors, generator, i, total) {
  var center = diameter / 2;
  var firstRot = generator.random();
  var angle = Math.PI * 2 * firstRot;
  var velocity = diameter / total * generator.random() + i * diameter / total;
  var tx = Math.cos(angle) * velocity;
  var ty = Math.sin(angle) * velocity;
  var translate = "translate(" + tx + " " + ty + ")";
  var secondRot = generator.random();
  var rot = firstRot * 360 + secondRot * 180;
  var rotate = "rotate(" + rot.toFixed(1) + " " + center + " " + center + ")";
  var transform = translate + " " + rotate;
  return React.createElement("rect", {
    key: i,
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    height: diameter,
    width: diameter,
    transform: transform,
    fill: generateColor(colors, generator)
  });
}

var useStyles$7 = /*#__PURE__*/styles$2.makeStyles({
  root: {
    borderRadius: '0.5em'
  }
}, {
  name: 'AddressIcon'
});

function getShortAddress(address) {
  return address.substr(0, 6) + "..." + address.substr(-4, 4);
}

var useStyles$8 = /*#__PURE__*/styles$2.makeStyles(function () {
  return {
    root: {
      width: 'min-content'
    },
    shortAddress: {
      fontSize: 'inherit',
      color: 'inherit'
    },
    tooltip: {
      cursor: 'pointer',
      borderBottom: '1px dashed'
    },
    icon: {
      width: 'auto',
      height: 'auto',
      marginRight: 10
    }
  };
});

function ShortAddress(props) {
  var address = props.address,
      disableCopy = props.disableCopy,
      withIcon = props.withIcon;
  var classes = useStyles$8();
  var theme = styles$2.useTheme();

  var _useState = React.useState('copy'),
      tooltipTitle = _useState[0],
      setTooltipTitle = _useState[1];

  var closeTimeout = React.useRef(0);
  var shortAddress = getShortAddress(address);
  var handleCopy = React.useCallback(function () {
    setTooltipTitle('copied!');
  }, []);
  var handleTooltipClose = React.useCallback(function () {
    if (tooltipTitle !== 'copy') {
      closeTimeout.current = window.setTimeout(function () {
        return setTooltipTitle('copy');
      }, theme.transitions.duration.shorter);
    }
  }, [theme.transitions.duration.shorter, tooltipTitle]);
  var handleTooltipOpen = React.useCallback(function () {
    clearTimeout(closeTimeout.current);
  }, []);

  var renderGridWithIcon = function renderGridWithIcon() {
    return React__default.createElement(Grid, {
      container: true,
      alignItems: "center",
      wrap: "nowrap",
      className: classes.root
    }, withIcon && React__default.createElement(Grid, {
      item: true
    }, React__default.createElement(Avatar, {
      className: classes.icon
    }, React__default.createElement(AddressIcon, {
      address: address,
      fontSize: "inherit"
    }))), React__default.createElement(Grid, {
      item: true
    }, disableCopy ? renderAddress() : React__default.createElement(CopyToClipboard, {
      text: address,
      onCopy: handleCopy
    }, renderAddress())));
  };

  var renderAddress = function renderAddress() {
    return React__default.createElement("span", {
      className: classes.shortAddress
    }, shortAddress);
  };

  return disableCopy ? renderGridWithIcon() : React__default.createElement(Tooltip, {
    className: classes.tooltip,
    title: tooltipTitle,
    onClose: handleTooltipClose,
    onOpen: handleTooltipOpen,
    placement: "bottom"
  }, renderGridWithIcon());
}

var ResizeObserverContainer = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(ResizeObserverContainer, _React$PureComponent);

  function ResizeObserverContainer() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      size: 'full'
    }; // eslint-disable-next-line react/sort-comp

    _this.handleResize = function () {
      var container = _this.ref.current;
      var copy = container.children[1];

      if (copy.offsetWidth > container.offsetWidth) {
        _this.setState({
          size: 'compressed'
        });
      } else {
        _this.setState({
          size: 'full'
        });
      }
    };

    _this.observer = new window.ResizeObserver(_this.handleResize);
    _this.ref = React__default.createRef();
    return _this;
  }

  var _proto = ResizeObserverContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.ref.current && this.observer.observe(this.ref.current);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.ref.current && this.observer.unobserve(this.ref.current);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        classes = _this$props.classes;
    var size = this.state.size;
    return React__default.createElement("div", {
      className: classes.resizeContainer,
      ref: this.ref
    }, React__default.createElement("div", {
      className: classes.original
    }, children(size)), React__default.createElement("div", {
      className: classes.hiddenCopy
    }, children('full')));
  };

  return ResizeObserverContainer;
}(React__default.PureComponent);
var styles$1 = /*#__PURE__*/styles$3.createStyles({
  resizeContainer: {
    position: 'relative',
    flex: '1 1 1rem'
  },
  original: {
    position: 'absolute',
    top: 0,
    transform: 'translateY(-50%)',
    right: 0
  },
  hiddenCopy: {
    position: 'absolute',
    visibility: 'hidden'
  }
});
var ResizeObserverComponent = /*#__PURE__*/styles$3.withStyles(styles$1)(ResizeObserverContainer);

/* eslint-disable react/require-default-props */
function Card(props) {
  var _cn;

  var labelIcon = props.labelIcon,
      label = props.label,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'outlined' : _props$variant,
      isActive = props.isActive,
      children = props.children,
      icons = props.icons,
      className = props.className;
  var theme = styles$2.useTheme();
  var backgroundColor = React.useMemo(function () {
    if (variant === 'contained') {
      return isActive ? getActiveBackgroundColor(theme) : theme.palette.background.paper;
    }

    return null;
  }, [variant, isActive, theme]);
  var classes = useStyles$9({
    backgroundColor: backgroundColor
  });
  return React__default.createElement(styles$2.AncestorBackgroundHackProvider, {
    backgroundColor: backgroundColor
  }, React__default.createElement("div", {
    className: cn(className, classes.root, (_cn = {}, _cn[classes.outlined] = variant === 'outlined', _cn[classes.contained] = variant === 'contained', _cn[classes.isActive] = isActive, _cn))
  }, children, React__default.createElement("div", {
    className: classes.header
  }, React__default.createElement("div", {
    className: classes.labelContainer
  }, labelIcon && React__default.createElement("span", {
    className: classes.labelIcon
  }, labelIcon), label && React__default.createElement(Typography, {
    component: "div",
    className: classes.label
  }, React__default.createElement("span", null, label))), icons && React__default.createElement(ResizeObserverComponent, null, function (size) {
    return React__default.createElement("div", {
      className: classes.icons
    }, icons.map(function (icon, index) {
      var _cn2;

      return React__default.createElement("div", {
        className: cn(classes.icon, (_cn2 = {}, _cn2[classes.compressed] = size === 'compressed', _cn2)),
        key: index
      }, icon);
    }));
  }))));
}

function getActiveBackgroundColor(currentTheme) {
  return currentTheme.palette.type === 'light' ? currentTheme.colors.zumthor : currentTheme.colors.darkSpace;
}

var useStyles$9 = /*#__PURE__*/styles$2.makeStyles(function (theme) {
  var _root, _label, _$compressed, _icon;

  return {
    root: (_root = {
      position: 'relative',
      borderRadius: theme.spacing(0.5),
      transition: theme.transitions.create(['border-color', 'background-color']),
      padding: '40px 10px 20px'
    }, _root[theme.breakpoints.up(375)] = {
      padding: '40px 15px 20px'
    }, _root[theme.breakpoints.up('tabletSM')] = {
      padding: '50px 20px 20px'
    }, _root['&$outlined'] = {
      border: "1px solid " + styles$2.rgba(theme.palette.type === 'light' ? theme.colors.shark : theme.colors.white, theme.palette.type === 'light' ? 0.2 : 0.25),
      WebkitBackgroundClip: 'padding-box',
      backgroundClip: 'padding-box'
    }, _root['&$contained'] = {
      backgroundColor: theme.palette.background.paper
    }, _root['&$contained$isActive'] = {
      backgroundColor: getActiveBackgroundColor(theme)
    }, _root),
    header: {
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
      paddingLeft: 'inherit',
      paddingRight: 'inherit',
      transform: 'translateY(-50%)',
      display: 'flex',
      alignItems: 'center'
    },
    labelContainer: {
      display: 'flex',
      alignItems: 'center',
      height: 30,
      borderRadius: 15,
      backgroundColor: function backgroundColor(_ref) {
        var _backgroundColor = _ref.backgroundColor;
        return _backgroundColor || 'transparent';
      }
    },
    labelIcon: {
      borderRadius: '50%',
      fontSize: 30,
      marginRight: 10
    },
    label: (_label = {
      padding: theme.spacing(0.25, 1.25, 0.25, 0),
      fontSize: theme.spacing(2),
      lineHeight: 1,
      color: theme.colors.white
    }, _label[theme.breakpoints.up('tabletXS')] = {
      fontSize: theme.spacing(1.5)
    }, _label),
    icons: {
      display: 'flex',
      marginLeft: 'auto'
    },
    icon: (_icon = {
      display: 'flex',
      fontSize: 30,
      marginRight: theme.spacing(1)
    }, _icon[theme.breakpoints.up('tabletXS')] = {
      marginRight: theme.spacing(1.5)
    }, _icon['&:last-child'] = {
      marginRight: 0
    }, _icon['&$compressed'] = (_$compressed = {
      marginRight: '-12.5px'
    }, _$compressed[theme.breakpoints.up('tabletXS')] = {
      marginRight: '-15px'
    }, _$compressed['&:last-child'] = {
      marginRight: 0
    }, _$compressed), _icon),
    outlined: {},
    contained: {},
    isActive: {},
    isWithIcon: {},
    compressed: {}
  };
}, {
  name: 'Card'
});

var DependencyContext = /*#__PURE__*/React.createContext(null);
function useDependencyContext() {
  var context = React.useContext(DependencyContext);

  if (!context) {
    throw new Error('DependencyContext is not found');
  }

  return context;
}

function DependencyProvider(props) {
  var _props$supportedToken = props.supportedTokens,
      supportedTokens = _props$supportedToken === void 0 ? primitives.mainnetTokens : _props$supportedToken,
      children = props.children;
  var context = React.useMemo(function () {
    return {
      supportedTokens: supportedTokens
    };
  }, [supportedTokens]);
  return React__default.createElement(DependencyContext.Provider, {
    value: context
  }, children);
}

var tokenIcons = {
  ADEL: ADELIcon,
  AKRO: AKROIcon,
  BAL: BALIcon,
  bUSD: BUSDIcon,
  COMP: COMPIcon,
  CRV: CRVIcon,
  DAI: DAIIcon,
  MTA: MTAIcon,
  renBTC: RenBTCIcon,
  sBTC: SBTCIcon,
  SNX: SNXIcon,
  sUSD: SUSDIcon,
  TUSD: TUSDIcon,
  USDC: USDCIcon,
  USDT: USDTIcon,
  WBTC: WBTCIcon,
  WETH: WETHIcon,
  YFI: YFIIcon,
  '3Crv': ThreeCrvIcon,
  crvSBTC: CrvSBTCIcon,
  crvBUSD: CrvBUSDIcon,
  crvCOMP: CrvCOMPIcon,
  yCRV: YCRVIcon,
  HEGIC: HEGICIcon,
  steCRV: SteCRVIcon,
  BTCB: BTCIcon,
  yveCRV: YveCRVIcon,
  crvIB: CrvIBIcon,
  crvTricrypto: CrvTricryptoIcon,
  crv3crypto: CrvTricryptoIcon
};
function TokenIcon(props) {
  var tokenAddress = props.tokenAddress,
      inactive = props.inactive,
      rest = _objectWithoutPropertiesLoose(props, ["tokenAddress", "inactive"]);

  var _useDependencyContext = useDependencyContext(),
      supportedTokens = _useDependencyContext.supportedTokens;

  var Icon = React.useMemo(function () {
    var tokenSymbol = Object.keys(supportedTokens).find(function (key) {
      return supportedTokens[key].toLowerCase() === tokenAddress.toLowerCase();
    });
    return tokenSymbol && tokenIcons[tokenSymbol];
  }, [tokenAddress, supportedTokens]);
  return Icon ? React__default.createElement(Icon, Object.assign({}, rest, {
    inactive: inactive
  })) : React__default.createElement(AddressIcon, Object.assign({}, rest, {
    address: tokenAddress
  }));
}

function TokenName(_ref) {
  var _token$tokens;

  var token = _ref.token,
      badge = _ref.badge,
      _ref$iconSize = _ref.iconSize,
      iconSize = _ref$iconSize === void 0 ? 'default' : _ref$iconSize,
      _ref$iconProps = _ref.iconProps,
      iconProps = _ref$iconProps === void 0 ? {} : _ref$iconProps;
  var classes = useStyles$a();

  var className = iconProps.className,
      rest = _objectWithoutPropertiesLoose(iconProps, ["className"]);

  return React__default.createElement(Grid, {
    container: true,
    alignItems: "center",
    wrap: "nowrap"
  }, React__default.createElement(Grid, {
    item: true
  }, token instanceof primitives.AllCoinsToken && ((_token$tokens = token.tokens) === null || _token$tokens === void 0 ? void 0 : _token$tokens.length) ? token.tokens.map(function (_ref2) {
    var address = _ref2.address;
    return React__default.createElement(TokenIcon, Object.assign({
      key: address,
      tokenAddress: address,
      className: cn(className, classes.icon, getIconSizeClass(iconSize))
    }, rest));
  }) : React__default.createElement(TokenIcon, Object.assign({
    tokenAddress: token.address,
    className: cn(className, classes.icon, getIconSizeClass(iconSize))
  }, rest))), React__default.createElement(Grid, {
    item: true,
    container: true
  }, React__default.createElement(Grid, {
    item: true,
    className: classes.tokenSymbol
  }, token.symbol), badge && React__default.createElement(Grid, {
    item: true,
    className: classes.badge
  }, badge)));

  function getIconSizeClass(size) {
    switch (size) {
      case 'extra-large':
        return classes.extraLarge;

      default:
        return size && classes[size];
    }
  }
}
var useStyles$a = /*#__PURE__*/styles$2.makeStyles(function () {
  return {
    icon: {
      marginRight: 8,
      '& + &': {
        marginLeft: -16
      }
    },
    "default": {
      fontSize: 20
    },
    small: {
      fontSize: 16
    },
    large: {
      fontSize: 24
    },
    extraLarge: {
      fontSize: 30
    },
    inherit: {
      fontSize: 'inherit'
    },
    badge: {
      padding: '1px 6px 0px',
      borderRadius: '9.5px',
      backgroundColor: '#494972',
      fontSize: 12
    },
    tokenSymbol: {
      display: 'flex',
      alignItems: 'center',
      marginRight: 4
    }
  };
}, {
  name: 'TokenName'
});

function TokensIcons(props) {
  var classes = useStyles$b();
  var tokens = props.tokens,
      iconsProps = props.iconsProps,
      propsClasses = props.classes;
  return React.createElement("div", {
    className: cn(propsClasses === null || propsClasses === void 0 ? void 0 : propsClasses.root, classes.root)
  }, tokens.map(function (_ref) {
    var address = _ref.address;
    return React.createElement("div", {
      className: cn(propsClasses === null || propsClasses === void 0 ? void 0 : propsClasses.iconWrapper, classes.iconWrapper),
      key: address
    }, React.createElement(TokenIcon, Object.assign({}, iconsProps, {
      tokenAddress: address
    })));
  }));
}
var useStyles$b = /*#__PURE__*/styles$2.makeStyles(function () {
  return {
    root: {
      display: 'flex'
    },
    iconWrapper: {
      '& + &': {
        marginLeft: -7
      }
    }
  };
}, {
  name: 'TokensIcons'
});

function HiddenSvgDefs(props) {
  var classes = useStyles$c();
  var children = props.children;
  return React.createElement("svg", {
    className: classes.root
  }, React.createElement("defs", null, children));
}
var useStyles$c = /*#__PURE__*/styles$2.makeStyles({
  root: {
    position: 'absolute',
    width: 0,
    height: 0,
    visibility: 'hidden',
    zIndex: -100
  }
}, {
  name: 'HiddenSvgDefs'
});

function DialogContent(props) {
  var children = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["children"]);

  var classes = useStyles$d();
  var theme = styles$2.useTheme();
  return React__default.createElement(styles$2.AncestorBackgroundHackProvider, {
    backgroundColor: theme.palette.background.paper
  }, React__default.createElement(MuiDialogContent, Object.assign({}, rest, {
    classes: {
      root: classes.root
    }
  }), children));
}
var useStyles$d = /*#__PURE__*/styles$2.makeStyles(function (theme) {
  var _root;

  return {
    root: (_root = {
      background: theme.palette.background.paper,
      padding: '40px 10px 20px !important',
      overflowX: 'hidden'
    }, _root[theme.breakpoints.up('mobileMD')] = {
      padding: '40px 20px 30px !important'
    }, _root[theme.breakpoints.up('tabletXS')] = {
      padding: '50px !important'
    }, _root)
  };
}, {
  name: 'DialogContent'
});

function useAdapativeSpacing(spacing) {
  var theme = styles$2.useTheme();
  var breakpoints = theme.breakpoints.values;
  var adaptiveSpacing = React.useRef(typeof spacing === 'object' ? spacing : null).current;
  var prevSpacingRef = React.useRef(null);
  React.useEffect(function () {
    prevSpacingRef.current = spacing;
  }, [spacing]);
  var spacingString = R.toString(spacing);
  React.useEffect(function () {
    var isChangedAdaptiveSpacing = adaptiveSpacing && R.toString(adaptiveSpacing) !== spacingString;
    var gridSpacingBecameAdaptive = !adaptiveSpacing && typeof spacing === 'object';

    if (isChangedAdaptiveSpacing || gridSpacingBecameAdaptive) {
      console.error('Error: Cannot update spacing prop in AdaptiveGrid. Object must be immutable.');
    }
  }, [spacingString, adaptiveSpacing, spacing]);
  var sortSpacingByBreakpointValues = React.useCallback(function (spacingObject) {
    return Object.entries(spacingObject).sort(function (_ref, _ref2) {
      var keyA = _ref[0];
      var keyB = _ref2[0];
      return breakpoints[keyA] - breakpoints[keyB];
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [R.toString(breakpoints)]);
  var sortedSpacing = React.useMemo(function () {
    return adaptiveSpacing ? sortSpacingByBreakpointValues(adaptiveSpacing) : [];
  }, [adaptiveSpacing, sortSpacingByBreakpointValues]); // eslint-disable-next-line react-hooks/rules-of-hooks

  var breakpointMatches = sortedSpacing.map(function (_ref3) {
    var key = _ref3[0];
    return styles$2.useBreakpointsMatch({
      from: key
    });
  });
  var currentSpacing = React.useMemo(function () {
    if (typeof spacing === 'object') {
      var index = breakpointMatches.lastIndexOf(true);

      var _ref4 = index !== -1 ? sortedSpacing[index] : [],
          spacingValue = _ref4[1];

      return spacingValue;
    }

    return spacing; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpointMatches.toString(), sortedSpacing.toString(), spacingString]);
  return currentSpacing;
}

function AdaptiveGrid(props) {
  var theme = styles$2.useTheme();
  var breakpointKeys = Object.keys(theme.breakpoints.values);

  var className = props.className,
      children = props.children,
      spacingProp = props.spacing,
      rest = _objectWithoutPropertiesLoose(props, ["className", "children", "spacing"]);

  var spacing = useAdapativeSpacing(spacingProp); // MUI generates css for custom breakpoints, but doesn't add classes to support them in Grids

  var breakpointClasses = breakpointKeys.reduce(function (classes, breakpointKey) {
    var breakpointValue = props[breakpointKey];
    return breakpointValue ? [].concat(classes, ["MuiGrid-grid-" + breakpointKey + "-" + breakpointValue]) : classes;
  }, []);
  var gridProps = Object.entries(rest).reduce(excludeBreakpointProps, {});
  return React__default.createElement(Grid, Object.assign({
    className: cn(className, breakpointClasses),
    spacing: spacing
  }, gridProps), children);

  function excludeBreakpointProps(restProps, _ref) {
    var _extends2;

    var key = _ref[0],
        value = _ref[1];
    return breakpointKeys.includes(key) ? restProps : _extends({}, restProps, (_extends2 = {}, _extends2[key] = value, _extends2));
  }
}

var tokenIcons$1 = {
  btc: BTCIcon,
  eth: ETHIcon
};
function CurrencyIcon(_ref) {
  var currency = _ref.currency,
      className = _ref.className,
      inactive = _ref.inactive;
  var Icon = React.useMemo(function () {
    return tokenIcons$1[currency.toLowerCase()];
  }, [currency]);
  return Icon ? React__default.createElement(Icon, {
    className: className,
    inactive: inactive
  }) : null;
}

/* eslint-disable no-param-reassign */

/* eslint-disable array-callback-return */
var ResizeObserverPolyfill = /*#__PURE__*/function () {
  function ResizeObserverPolyfill(callback) {
    this.observables = []; // Array of observed elements that looks like this:
    // [{
    //   el: domNode,
    //   size: {height: x, width: y}
    // }]

    this.boundCheck = this.check.bind(this);
    this.boundCheck();
    this.callback = callback;
  }

  var _proto = ResizeObserverPolyfill.prototype;

  _proto.observe = function observe(el) {
    if (this.observables.some(function (observable) {
      return observable.el === el;
    })) {
      return;
    }

    var newObservable = {
      el: el,
      size: {
        height: el.clientHeight,
        width: el.clientWidth
      }
    };
    this.observables.push(newObservable);
  };

  _proto.unobserve = function unobserve(el) {
    this.observables = this.observables.filter(function (obj) {
      return obj.el !== el;
    });
  };

  _proto.disconnect = function disconnect() {
    this.observables = [];
  };

  _proto.check = function check() {
    var changedEntries = this.observables.filter(function (obj) {
      var currentHeight = obj.el.clientHeight;
      var currentWidth = obj.el.clientWidth;

      if (obj.size.height !== currentHeight || obj.size.width !== currentWidth) {
        obj.size.height = currentHeight;
        obj.size.width = currentWidth;
        return true;
      }

      return false;
    }).map(function (obj) {
      return obj.el;
    });

    if (changedEntries.length > 0) {
      this.callback(changedEntries);
    }

    window.requestAnimationFrame(this.boundCheck);
  };

  return ResizeObserverPolyfill;
}();

var Skeleton = function Skeleton(props) {
  var _props$classes = props.classes,
      muiClasses = _props$classes === void 0 ? {} : _props$classes,
      rest = _objectWithoutPropertiesLoose(props, ["classes"]);

  var backgroundColor = styles$2.useAncestorBackgroundHack();
  var classes = useStyles$e({
    backgroundColor: backgroundColor
  });
  return React__default.createElement(MuiSkeleton, Object.assign({
    classes: _extends({}, muiClasses, {
      root: cn(classes.root, muiClasses.root)
    })
  }, rest));
};
var useStyles$e = /*#__PURE__*/styles$2.makeStyles(function () {
  return {
    root: {
      backgroundColor: function backgroundColor(_ref) {
        var _backgroundColor = _ref.backgroundColor;
        return styles$2.lighten(_backgroundColor, 0.15);
      }
    }
  };
}, {
  name: 'Skeleton'
});

function NetworkIcon(props) {
  var network = props.network,
      rest = _objectWithoutPropertiesLoose(props, ["network"]);

  switch (network) {
    case 'bsc':
      return React.createElement(BSCIcon, Object.assign({}, rest));

    case 'eth':
    default:
      return React.createElement(ETHIcon, Object.assign({}, rest));
  }
}

function useOnChangeState(value, needToRunEffect, effect) {
  var valueRef = React.useRef(value);
  React.useEffect(function () {
    if (needToRunEffect(valueRef.current, value)) {
      effect(valueRef.current, value);
    }

    valueRef.current = value; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
}

function attachStaticFields(target, staticFields) {
  var result = target;
  Object.keys(staticFields).forEach(function (key) {
    result[key] = staticFields[key];
  });
  return result;
}

function AccordionComponent(props) {
  var classes = useStyles$f();

  var _props$classes = props.classes,
      muiClasses = _props$classes === void 0 ? {} : _props$classes,
      rest = _objectWithoutPropertiesLoose(props, ["classes"]);

  return React__default.createElement(MuiAccordion, Object.assign({
    classes: _extends({}, muiClasses, {
      root: cn(classes.root, muiClasses.root),
      rounded: cn(classes.rounded, muiClasses.rounded),
      expanded: cn(classes.expanded, muiClasses.expanded)
    })
  }, rest));
}

function Summary$1(props) {
  var classes = useStyles$f();

  var _props$classes2 = props.classes,
      muiClasses = _props$classes2 === void 0 ? {} : _props$classes2,
      rest = _objectWithoutPropertiesLoose(props, ["classes"]);

  return React__default.createElement(MuiAccordionSummary, Object.assign({
    expandIcon: React__default.createElement(Arrow, {
      fontSize: "inherit"
    }),
    classes: _extends({}, muiClasses, {
      root: cn(classes.summary, muiClasses.root),
      content: cn(classes.summaryContent, muiClasses.content),
      expanded: cn(classes.summaryExpanded, muiClasses.expanded),
      expandIcon: cn(classes.expandIcon, muiClasses.expandIcon)
    })
  }, rest));
}

function Details(props) {
  var classes = useStyles$f();

  var _props$classes3 = props.classes,
      muiClasses = _props$classes3 === void 0 ? {} : _props$classes3,
      rest = _objectWithoutPropertiesLoose(props, ["classes"]);

  return React__default.createElement(MuiAccordionDetails, Object.assign({
    classes: _extends({}, muiClasses, {
      root: cn(classes.details, muiClasses.root)
    })
  }, rest));
}

var Accordion = /*#__PURE__*/attachStaticFields(AccordionComponent, {
  Summary: Summary$1,
  Details: Details
});
var useStyles$f = /*#__PURE__*/styles$2.makeStyles(function () {
  return {
    root: {
      boxShadow: 'none',
      '&$expanded': {
        margin: 0
      },
      '&:before': {
        display: 'none'
      }
    },
    rounded: {
      borderRadius: '6px !important',
      overflow: 'hidden'
    },
    summary: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: '0 20px',
      fontSize: 16
    },
    summaryContent: {
      flexGrow: 0,
      '&': {
        margin: '20px 0'
      },
      '&, &$summaryExpanded': {
        margin: '20px 0'
      }
    },
    expandIcon: {
      margin: '12px 0',
      fontSize: 16,
      transform: 'rotate(-90deg)',
      '&$summaryExpanded': {
        transform: 'rotate(0deg)'
      }
    },
    details: {
      padding: '0 20px 20px',
      lineHeight: 1.5
    },
    expanded: {},
    summaryExpanded: {}
  };
}, {
  name: 'Accordion'
});

function TabContext(props) {
  var _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'default' : _props$variant,
      rest = _objectWithoutPropertiesLoose(props, ["variant"]);

  return React__default.createElement(TabsVariantContextProvider, {
    value: variant
  }, React__default.createElement(TabContext$1, Object.assign({}, rest)));
}

function CloseIcon(props) {
  var gradientId = React.useMemo(function () {
    return makeRandomID('CloseIcon');
  }, []);
  return React.createElement(SvgIcon, Object.assign({}, props, {
    viewBox: "0 0 14 14"
  }), React.createElement("defs", null, React.createElement("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%",
    id: gradientId
  }, React.createElement("stop", {
    stopColor: "#574CF2",
    offset: "0%"
  }), React.createElement("stop", {
    stopColor: "#4236D0",
    offset: "100%"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    transform: "translate(1 1)",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("circle", {
    stroke: "#0A0A0E",
    fill: "url(#" + gradientId + ")",
    cx: "6",
    cy: "6",
    r: "6"
  }), React.createElement("path", {
    stroke: "#FFF",
    d: "m4.052 3.908 3.897 3.898M4.05 7.806l3.898-3.898"
  }))));
}

var sizes$1 = {
  tabs: {
    height: 36,
    indicatorSpace: 3,
    borderWidth: 1
  }
};

var getBaseOverrides$1 = function getBaseOverrides(theme) {
  var _tabRoot;

  return {
    tabRoot: (_tabRoot = {
      position: 'relative',
      overflow: 'visible',
      minHeight: 'unset',
      minWidth: 'unset !important',
      textTransform: 'unset',
      fontSize: 'inherit',
      fontWeight: 300,
      lineHeight: 1.5,
      borderRadius: sizes$1.tabs.height / 2 - sizes$1.tabs.indicatorSpace - sizes$1.tabs.borderWidth,
      padding: theme.spacing(0.2, 1.25)
    }, _tabRoot[theme.breakpoints.up('mobileMD')] = {
      padding: theme.spacing(0.2, 2.5)
    }, _tabRoot['&::after'] = {
      content: "''",
      position: 'absolute',
      left: 0,
      width: 1,
      top: 3,
      bottom: 3,
      background: 'currentColor',
      opacity: 0,
      transition: theme.transitions.create('opacity')
    }, _tabRoot['&:not($selected)'] = {
      '& + &::after': {
        opacity: 0.2
      }
    }, _tabRoot['&$selected'] = {
      color: theme.colors.white
    }, _tabRoot),
    textColorInherit: {
      opacity: 1,
      '&$disabled': {
        opacity: 0.2
      }
    }
  };
};

var getDefaultVariantOverrides$1 = function getDefaultVariantOverrides(theme) {
  var _$withCloseButtonInd, _icon;

  return R.mergeDeepRight(getBaseOverrides$1(theme), {
    root: {
      position: 'relative',
      '&$withCloseButtonIndent': (_$withCloseButtonInd = {
        paddingRight: 13
      }, _$withCloseButtonInd[theme.breakpoints.up('tabletXS')] = {
        paddingRight: 10
      }, _$withCloseButtonInd)
    },
    iconButton: {
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)'
    },
    icon: (_icon = {
      fontSize: 16
    }, _icon[theme.breakpoints.up('tabletXS')] = {
      fontSize: 13
    }, _icon),
    withCloseButtonIndent: {}
  });
};

var getMinimalisticVariantOverrides$1 = function getMinimalisticVariantOverrides(theme) {
  var _tabRoot2;

  return R.mergeDeepRight(getDefaultVariantOverrides$1(theme), {
    root: {
      lineHeight: 1
    },
    tabRoot: (_tabRoot2 = {
      padding: theme.spacing(0.2, 1)
    }, _tabRoot2[theme.breakpoints.up('mobileMD')] = {
      padding: theme.spacing(0.25, 1)
    }, _tabRoot2)
  });
};

var useDefaultStyles$1 = /*#__PURE__*/styles$2.makeStyles(function (theme) {
  return getDefaultVariantOverrides$1(theme);
}, {
  name: 'Tab'
});
var useMinimalisticStyles$1 = /*#__PURE__*/styles$2.makeStyles(function (theme) {
  return getMinimalisticVariantOverrides$1(theme);
}, {
  name: 'Tab'
});

function Tab(props) {
  var _cn;

  var onClose = props.onClose,
      selected = props.selected,
      rest = _objectWithoutPropertiesLoose(props, ["onClose", "selected"]);

  var useStyles = useGetVariantStyles({
    "default": useDefaultStyles$1,
    minimalistic: useMinimalisticStyles$1
  });
  var classes = useStyles();
  return React__default.createElement("div", {
    className: cn(classes.root, (_cn = {}, _cn[classes.withCloseButtonIndent] = onClose, _cn))
  }, React__default.createElement(Tab$1, Object.assign({}, rest, {
    classes: {
      root: classes.tabRoot,
      textColorInherit: classes.textColorInherit
    }
  })), onClose && selected && React__default.createElement(IconButton, {
    className: classes.iconButton,
    size: "small",
    key: "close",
    "aria-label": "close",
    onClick: onClose
  }, React__default.createElement(CloseIcon, {
    className: classes.icon
  })));
}

var makeNumberInput = /*#__PURE__*/R.memoizeWith(R.toString, function (ownProps) {
  return function NumberFormatCustom(props) {
    var inputRef = props.inputRef,
        onChange = props.onChange,
        other = _objectWithoutPropertiesLoose(props, ["inputRef", "onChange"]);

    return React.createElement(NumberFormat, Object.assign({}, ownProps, other, {
      getInputRef: inputRef,
      onValueChange: onChange
    }));
  };
});

var NumberInput = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(NumberInput, _React$PureComponent);

  function NumberInput() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = NumberInput.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        thousandSeparator = _this$props.thousandSeparator,
        decimalSeparator = _this$props.decimalSeparator,
        allowNegative = _this$props.allowNegative,
        prefix = _this$props.prefix,
        suffix = _this$props.suffix,
        decimalScale = _this$props.decimalScale,
        rest = _objectWithoutPropertiesLoose(_this$props, ["thousandSeparator", "decimalSeparator", "allowNegative", "prefix", "suffix", "decimalScale"]);

    return React.createElement(TextInput, Object.assign({}, rest, {
      onChange: rest.onChange,
      InputLabelProps: _extends({}, rest.InputLabelProps, {
        shrink: prefix ? true : rest.InputLabelProps && rest.InputLabelProps.shrink
      }),
      InputProps: _extends({}, rest.InputProps, {
        inputComponent: makeNumberInput({
          prefix: prefix,
          suffix: suffix,
          thousandSeparator: thousandSeparator,
          decimalSeparator: decimalSeparator,
          allowNegative: allowNegative,
          decimalScale: decimalScale
        })
      })
    }));
  };

  return NumberInput;
}(React.PureComponent);

function DecimalsInput(props) {
  var classes = useStyles$g();

  var onChange = props.onChange,
      baseDecimals = props.baseDecimals,
      value = props.value,
      maxValue = props.maxValue,
      disabled = props.disabled,
      InputProps = props.InputProps,
      restInputProps = _objectWithoutPropertiesLoose(props, ["onChange", "baseDecimals", "value", "maxValue", "baseUnitName", "disabled", "InputProps"]);

  var _useState = React.useState(''),
      suffix = _useState[0],
      setSuffix = _useState[1];

  var _useState2 = React.useState(function () {
    return !value || value === '0';
  }),
      needToShowEmpty = _useState2[0],
      setNeedToShowEmpty = _useState2[1];

  React.useEffect(function () {
    needToShowEmpty && value && value !== '0' && setNeedToShowEmpty(false);
  }, [needToShowEmpty, value]);
  React.useEffect(function () {
    return setSuffix('');
  }, [value, baseDecimals]);
  useOnChangeState(baseDecimals, function (prev, cur) {
    return prev !== cur;
  }, function (prevBaseDecimals) {
    var decimalsDiff = prevBaseDecimals ? new BN(baseDecimals - prevBaseDecimals) : new BN(0);

    if (decimalsDiff.eqn(0)) {
      return;
    }

    var decimalCorrectionFactor = new BN(10).pow(decimalsDiff);
    var adjustedValue = decimalsDiff.gtn(0) ? new BN(value).mul(decimalCorrectionFactor) : new BN(value).div(decimalCorrectionFactor);
    onChange(adjustedValue.toString());
  });
  var amount = React.useMemo(function () {
    return value && primitives.fromBaseUnit(value, baseDecimals) + suffix;
  }, [value, suffix, baseDecimals]);
  var handleInputChange = React.useCallback(function (event) {
    var maxFractionLength = baseDecimals;
    var inputValidationRegExp = new RegExp("^$|^\\d+?" + (maxFractionLength > 0 ? "(\\.?\\d{0," + maxFractionLength + "})" : '') + "$");

    if (inputValidationRegExp.test(event.target.value)) {
      if (!event.target.value) {
        setNeedToShowEmpty(true);
        setSuffix('');
        onChange('0');
        return;
      }

      setNeedToShowEmpty(false);
      var nextValue = primitives.toBaseUnit(event.target.value, baseDecimals).toString();

      if (nextValue !== value) {
        onChange(nextValue);
      }

      var suffixMatch = event.target.value.match(/^.+?((\.|\.0+)|(\.[0-9]*?(0*)))$/);

      if (suffixMatch) {
        var dotWithZeros = suffixMatch[2],
            zerosAfterDot = suffixMatch[4];
        setSuffix(dotWithZeros || zerosAfterDot || '');
      } else {
        setSuffix('');
      }
    }
  }, [baseDecimals, value, onChange]);
  var handleMaxButtonClick = React__default.useCallback(function () {
    setSuffix('');
    maxValue && onChange(maxValue.toString()); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onChange, maxValue && maxValue.toString()]);
  return React__default.createElement(TextInput, Object.assign({}, restInputProps, {
    disabled: disabled,
    value: needToShowEmpty ? '' : amount,
    variant: "outlined",
    fullWidth: true,
    onChange: handleInputChange,
    InputProps: _extends({
      endAdornment: maxValue && React__default.createElement(Button, {
        disabled: disabled,
        onClick: handleMaxButtonClick,
        className: classes.maxButton
      }, "Max")
    }, InputProps)
  }));
}

var useStyles$g = /*#__PURE__*/styles$2.makeStyles(function () {
  return {
    maxButton: {
      fontSize: 12,
      padding: 11,
      minWidth: 'unset'
    }
  };
});

var checkboxSize = 20;
var borderRadius = 4;
var useStyles$h = /*#__PURE__*/styles$2.makeStyles(function (theme) {
  return {
    root: {
      '&$checked': {
        color: theme.palette.text.primary
      }
    },
    icon: {
      borderRadius: borderRadius,
      position: 'relative',
      width: checkboxSize,
      height: checkboxSize,
      background: theme.gradients.main.linear('to right'),
      '&:before': {
        display: 'block',
        content: "''",
        position: 'absolute',
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        borderRadius: borderRadius - 1,
        background: function background(_ref) {
          var backgroundColor = _ref.backgroundColor;
          return backgroundColor || theme.palette.background.paper;
        },
        transition: theme.transitions.create('opacity')
      },
      '$disabled &': {
        background: 'rgba(255, 255, 255, 0.1)'
      },
      '$checked &': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        '&:before': {
          opacity: 0
        }
      }
    },
    disabled: {},
    checked: {}
  };
}, {
  name: 'CheckboxInput'
});

function CheckboxInput(props) {
  var _normalizeProps = normalizeProps(props),
      formControlProps = _normalizeProps.formControlProps,
      formControlLabelProps = _normalizeProps.formControlLabelProps,
      formHelperTextProps = _normalizeProps.formHelperTextProps,
      checkboxProps = _normalizeProps.checkboxProps,
      other = _normalizeProps.other;

  var label = other.label,
      helperText = other.helperText;
  var backgroundColor = styles$2.useAncestorBackgroundHack();
  var classes = useStyles$h({
    backgroundColor: backgroundColor
  });
  return React.createElement(FormControl, Object.assign({}, formControlProps), React.createElement(FormControlLabel, Object.assign({}, formControlLabelProps, {
    control: React.createElement(Checkbox, Object.assign({}, checkboxProps, {
      classes: {
        root: classes.root,
        disabled: classes.disabled,
        checked: classes.checked
      },
      icon: React.createElement("span", {
        className: classes.icon
      }),
      checkedIcon: React.createElement("span", {
        className: classes.icon
      }, React.createElement(CheckmarkIcon, {
        fontSize: "inherit"
      }))
    })),
    label: checkboxProps.required ? React.createElement(React.Fragment, null, label, ' *') : label
  })), helperText && React.createElement(FormHelperText, Object.assign({}, formHelperTextProps), helperText));
}

function normalizeProps(props) {
  var error = props.error,
      _props$helperText = props.helperText,
      helperText = _props$helperText === void 0 ? null : _props$helperText,
      label = props.label,
      _props$formHelperText = props.formHelperTextProps,
      formHelperTextProps = _props$formHelperText === void 0 ? null : _props$formHelperText,
      _props$formControlLab = props.formControlLabelProps,
      formControlLabelProps = _props$formControlLab === void 0 ? null : _props$formControlLab,
      fullWidth = props.fullWidth,
      rest = _objectWithoutPropertiesLoose(props, ["error", "helperText", "label", "formHelperTextProps", "formControlLabelProps", "fullWidth"]);

  var checkboxProps = rest;
  var formControlProps = {
    error: error,
    required: rest.required,
    fullWidth: fullWidth
  };
  return {
    formHelperTextProps: formHelperTextProps,
    formControlLabelProps: formControlLabelProps,
    formControlProps: formControlProps,
    checkboxProps: checkboxProps,
    other: {
      label: label,
      helperText: helperText
    }
  };
}

function RadioGroupInput(props) {
  var _normalizeProps = normalizeProps$1(props),
      formControlProps = _normalizeProps.formControlProps,
      radioGroupProps = _normalizeProps.radioGroupProps,
      formLabelProps = _normalizeProps.formLabelProps,
      formHelperTextProps = _normalizeProps.formHelperTextProps,
      other = _normalizeProps.other;

  var label = other.label,
      helperText = other.helperText;
  return React.createElement(FormControl, Object.assign({}, formControlProps), label && React.createElement(FormLabel, Object.assign({}, formLabelProps), label), React.createElement(RadioGroup, Object.assign({}, radioGroupProps)), helperText && React.createElement(FormHelperText, Object.assign({}, formHelperTextProps), helperText));
}

function normalizeProps$1(props) {
  var error = props.error,
      _props$helperText = props.helperText,
      helperText = _props$helperText === void 0 ? null : _props$helperText,
      required = props.required,
      label = props.label,
      _props$formControlPro = props.formControlProps,
      fcProps = _props$formControlPro === void 0 ? null : _props$formControlPro,
      _props$formLabelProps = props.formLabelProps,
      formLabelProps = _props$formLabelProps === void 0 ? null : _props$formLabelProps,
      _props$formHelperText = props.formHelperTextProps,
      formHelperTextProps = _props$formHelperText === void 0 ? null : _props$formHelperText,
      fullWidth = props.fullWidth,
      rest = _objectWithoutPropertiesLoose(props, ["error", "helperText", "required", "label", "formControlProps", "formLabelProps", "formHelperTextProps", "fullWidth"]);

  var radioGroupProps = rest;

  var formControlProps = _extends({
    error: error,
    required: required,
    fullWidth: fullWidth
  }, fcProps);

  return {
    formHelperTextProps: formHelperTextProps,
    formControlProps: formControlProps,
    radioGroupProps: radioGroupProps,
    formLabelProps: formLabelProps,
    other: {
      label: label,
      helperText: helperText
    }
  };
}

var thumbSize = 10;
var borderOffset = 5;
var buttonSize = thumbSize + borderOffset * 2;
var useStyles$i = /*#__PURE__*/styles$2.makeStyles(function (theme) {
  return {
    icon: {
      position: 'relative',
      borderRadius: '50%',
      width: buttonSize,
      height: buttonSize,
      padding: borderOffset,
      background: theme.gradients.main.linear('to right'),
      '&$colorSecondary': {
        background: 'rgba(255, 255, 255, 0.5)',
        '&$iconChecked:after': {
          background: '#fff'
        }
      },
      '&:before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        borderRadius: '50%',
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        background: function background(_ref) {
          var backgroundColor = _ref.backgroundColor;
          return backgroundColor;
        }
      }
    },
    iconChecked: {
      '&:after': {
        zIndex: 1,
        content: "''",
        display: 'block',
        position: 'relative',
        borderRadius: '50%',
        width: thumbSize,
        height: thumbSize,
        background: theme.gradients.main.linear('to right')
      }
    },
    colorSecondary: {}
  };
}, {
  name: 'RadioButton'
});

function RadioButton(props) {
  var _cn, _cn2;

  var _normalizeProps = normalizeProps$2(props),
      formHelperTextProps = _normalizeProps.formHelperTextProps,
      radioProps = _normalizeProps.radioProps,
      other = _normalizeProps.other;

  var label = other.label,
      helperText = other.helperText;
  var backgroundColor = styles$2.useAncestorBackgroundHack();
  var classes = useStyles$i({
    backgroundColor: backgroundColor
  });
  return React.createElement(React.Fragment, null, React.createElement(FormControlLabel, {
    control: React.createElement(Radio, Object.assign({}, radioProps, {
      checkedIcon: React.createElement("span", {
        className: cn(classes.icon, classes.iconChecked, (_cn = {}, _cn[classes.colorSecondary] = radioProps.color === 'secondary', _cn))
      }),
      icon: React.createElement("span", {
        className: cn(classes.icon, (_cn2 = {}, _cn2[classes.colorSecondary] = radioProps.color === 'secondary', _cn2))
      })
    })),
    label: label
  }), helperText && React.createElement(FormHelperText, Object.assign({}, formHelperTextProps), helperText));
}

function normalizeProps$2(props) {
  var _props$helperText = props.helperText,
      helperText = _props$helperText === void 0 ? null : _props$helperText,
      label = props.label,
      _props$formHelperText = props.formHelperTextProps,
      formHelperTextProps = _props$formHelperText === void 0 ? null : _props$formHelperText,
      rest = _objectWithoutPropertiesLoose(props, ["helperText", "label", "formHelperTextProps"]);

  var radioProps = rest;
  return {
    formHelperTextProps: formHelperTextProps,
    radioProps: radioProps,
    other: {
      label: label,
      helperText: helperText
    }
  };
}

var thumbSize$1 = 14;
var borderOffset$1 = 3;
var controlWidth = 34;
var borderRadius$1 = 24;
var useStyles$j = /*#__PURE__*/styles$2.makeStyles(function (theme) {
  return {
    root: {
      width: controlWidth,
      height: thumbSize$1 + 2 * borderOffset$1,
      padding: 0,
      marginRight: 10,
      marginLeft: 11,
      overflow: 'visible'
    },
    switchBase: {
      padding: borderOffset$1,
      '&$checked': {
        transform: 'translateX(14px)',
        '& + $track, & + $track:after, & $thumb:after': {
          opacity: 1
        }
      },
      '&$disabled': {
        opacity: 0.4
      }
    },
    thumb: {
      position: 'relative',
      width: thumbSize$1,
      height: thumbSize$1,
      background: theme.colors.independence,
      '&:after': {
        display: 'block',
        content: "''",
        position: 'absolute',
        borderRadius: '50%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        background: theme.gradients.main.linear('to right'),
        transition: theme.transitions.create(['opacity'])
      }
    },
    track: {
      borderRadius: borderRadius$1,
      border: 'none',
      position: 'relative',
      opacity: 1,
      background: theme.colors.independence,
      zIndex: 0,
      '&:before': {
        zIndex: 1,
        display: 'block',
        content: "''",
        position: 'absolute',
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        borderRadius: borderRadius$1,
        background: function background(_ref) {
          var backgroundColor = _ref.backgroundColor;
          return backgroundColor;
        }
      },
      '&:after': {
        zIndex: 0,
        display: 'block',
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        borderRadius: borderRadius$1,
        background: theme.gradients.main.linear('to right'),
        transition: theme.transitions.create(['opacity'])
      },
      '$disabled + &': {
        opacity: 0.4
      }
    },
    label: {
      fontSize: 'inherit'
    },
    checked: {},
    disabled: {}
  };
}, {
  name: 'SwitchInput'
});

function SwitchInput(props) {
  var _normalizeProps = normalizeProps$3(props),
      formControlProps = _normalizeProps.formControlProps,
      formHelperTextProps = _normalizeProps.formHelperTextProps,
      switchProps = _normalizeProps.switchProps,
      other = _normalizeProps.other;

  var label = other.label,
      helperText = other.helperText;
  var backgroundColor = styles$2.useAncestorBackgroundHack();
  var classes = useStyles$j({
    backgroundColor: backgroundColor
  });
  return React.createElement(FormControl, Object.assign({}, formControlProps), React.createElement(FormControlLabel, {
    classes: {
      label: classes.label
    },
    control: React.createElement(Switch, Object.assign({}, switchProps, {
      classes: {
        root: classes.root,
        switchBase: classes.switchBase,
        checked: classes.checked,
        disabled: classes.disabled,
        thumb: classes.thumb,
        track: classes.track
      }
    })),
    label: label
  }), helperText && React.createElement(FormHelperText, Object.assign({}, formHelperTextProps), helperText));
}

function normalizeProps$3(props) {
  var error = props.error,
      _props$helperText = props.helperText,
      helperText = _props$helperText === void 0 ? null : _props$helperText,
      label = props.label,
      _props$formHelperText = props.formHelperTextProps,
      formHelperTextProps = _props$formHelperText === void 0 ? null : _props$formHelperText,
      fullWidth = props.fullWidth,
      rest = _objectWithoutPropertiesLoose(props, ["error", "helperText", "label", "formHelperTextProps", "fullWidth"]);

  var switchProps = rest;
  var formControlProps = {
    error: error,
    required: rest.required,
    fullWidth: fullWidth
  };
  return {
    formHelperTextProps: formHelperTextProps,
    formControlProps: formControlProps,
    switchProps: switchProps,
    other: {
      label: label,
      helperText: helperText
    }
  };
}

var useStyles$k = /*#__PURE__*/styles$2.makeStyles(function (theme) {
  var _root, _paper;

  return {
    root: (_root = {
      minWidth: 129,
      fontSize: 12
    }, _root[theme.breakpoints.up('tabletSM')] = {
      minWidth: 144,
      fontSize: 16
    }, _root['&$isOpen'] = {
      '&$hasBottomSpace $input': {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      '&$hasTopSpace $input': {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      },
      '& $arrowIcon': {
        transform: 'rotate(180deg)'
      }
    }, _root['&$disableVariantText'] = {
      minWidth: 100,
      '& $input': {
        borderColor: 'transparent',
        color: '#fff'
      },
      '& $select': {
        paddingRight: 0
      },
      '& $arrowIcon': {
        display: 'none'
      }
    }, _root['&$withoutOutline'] = {
      verticalAlign: 'baseline',
      '& $arrowIcon': {
        padding: 0
      }
    }, _root['&$withoutOutline$filled'] = {
      '& $arrowIcon': {
        padding: 12
      }
    }, _root),
    input: {
      backgroundColor: 'transparent',
      fontSize: 'inherit',
      '&$filled': {
        backgroundColor: '#191924'
      }
    },
    paper: (_paper = {
      fontSize: 12,
      borderColor: theme.colors.darkMist,
      borderRadius: 6,
      backgroundColor: function backgroundColor(_ref) {
        var _backgroundColor = _ref.backgroundColor;
        return _backgroundColor;
      },
      '&$hasBottomSpace': {
        borderRadius: '0 0 6px 6px',
        borderTop: 'none'
      },
      '&$hasTopSpace': {
        borderRadius: '6px 6px 0 0'
      },
      '&$withCheckmark': {
        backgroundColor: theme.colors.blackRussian,
        '& $menuItem': {
          paddingRight: 34
        },
        '& $menuItem.Mui-selected': {
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath fill='%2313131b' fill-opacity='.01' d='M0 0H16V16H0z' transform='translate(-643 -399) translate(638 397) translate(5 2)'/%3E%3Cpath fill='%23fff' fill-rule='nonzero' d='M7.052 11.94c.215.0.38-.093.503-.274l4.355-6.831c.088-.142.127-.254.127-.366.0-.279-.19-.469-.474-.469-.195.0-.307.073-.43.264l-4.1 6.523-2.12-2.759c-.122-.166-.244-.234-.425-.234-.288.0-.488.195-.488.474.0.117.049.244.146.366l2.398 3.032c.146.186.298.273.508.273z' transform='translate(-643 -399) translate(638 397) translate(5 2)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '16px 16px',
          backgroundPosition: 'right 10px center',
          backgroundRepeat: 'no-repeat'
        }
      },
      '&$withoutOutline': {
        '&$hasBottomSpace': {
          marginTop: 10,
          borderRadius: 6,
          borderTop: '1px solid #40404b'
        },
        '&$hasTopSpace': {
          marginTop: -10,
          borderRadius: 6,
          borderBottom: '1px solid #40404b'
        },
        '&$filled': {
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }
      }
    }, _paper[theme.breakpoints.up('tabletSM')] = {
      fontSize: 16
    }, _paper),
    menuItem: {
      minHeight: 'auto',
      fontSize: 'inherit'
    },
    arrowIcon: {
      position: 'absolute',
      right: 0,
      padding: 12,
      fontSize: 14,
      pointerEvents: 'none'
    },
    isOpen: {},
    disableVariantText: {},
    hasBottomSpace: {},
    hasTopSpace: {},
    withoutOutline: {},
    filled: {},
    withCheckmark: {},
    select: {}
  };
}, {
  name: 'SelectInput'
});

var MENU_PADDINGS_HEIGHT = 15;
var MENU_SHIFT_HEIGHT = 20;
function SelectInput(props) {
  var _selectInputRef$curre2, _cn, _cn2, _menuProps$PaperProps, _cn3;

  var options = props.options,
      disabled = props.disabled,
      _props$disableVariant = props.disableVariant,
      disableVariant = _props$disableVariant === void 0 ? 'default' : _props$disableVariant,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'outlined' : _props$variant,
      _props$InputProps = props.InputProps,
      InputProps = _props$InputProps === void 0 ? {} : _props$InputProps,
      _props$SelectProps = props.SelectProps,
      SelectProps = _props$SelectProps === void 0 ? {} : _props$SelectProps,
      restProps = _objectWithoutPropertiesLoose(props, ["options", "disabled", "disableVariant", "variant", "InputProps", "SelectProps"]);

  var inputClassName = InputProps.className,
      restInputProps = _objectWithoutPropertiesLoose(InputProps, ["className"]);

  var selectClassName = SelectProps.className,
      menuProps = SelectProps.MenuProps,
      restSelectProps = _objectWithoutPropertiesLoose(SelectProps, ["className", "MenuProps"]);

  var backgroundColor = styles$2.useAncestorBackgroundHack();
  var classes = useStyles$k({
    backgroundColor: backgroundColor
  });
  var currentWindowHeight = useWindowHeight();

  var _useState = React.useState(false),
      isMenuOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = React.useState(0),
      toBottomDistance = _useState2[0],
      setToBottomDistance = _useState2[1];

  var _useState3 = React.useState(0),
      toTopDistance = _useState3[0],
      setToTopDistance = _useState3[1];

  var selectInputRef = React.useRef(null);
  var handleSelectOpen = React.useCallback(function () {
    setIsOpen(true);
  }, []);
  var handleSelectClose = React.useCallback(function () {
    setIsOpen(false);
  }, []);
  React.useEffect(function () {
    var _selectInputRef$curre;

    var inputRect = (_selectInputRef$curre = selectInputRef.current) === null || _selectInputRef$curre === void 0 ? void 0 : _selectInputRef$curre.getBoundingClientRect();

    if (inputRect) {
      var bottom = inputRect.bottom,
          top = inputRect.top;
      setToBottomDistance(currentWindowHeight - bottom - MENU_SHIFT_HEIGHT);
      setToTopDistance(top - MENU_SHIFT_HEIGHT);
    }
  }, [currentWindowHeight, isMenuOpen]);
  var selectHeight = Number((_selectInputRef$curre2 = selectInputRef.current) === null || _selectInputRef$curre2 === void 0 ? void 0 : _selectInputRef$curre2.offsetHeight) * options.length + MENU_PADDINGS_HEIGHT;
  var hasBottomSpace = toBottomDistance > selectHeight;
  var hasTopSpace = toTopDistance > selectHeight;
  var menuPositionProps = React.useMemo(function () {
    function getVerticalPosition(type) {
      if (hasBottomSpace) {
        return type === 'anchor' ? 'bottom' : 'top';
      }

      if (hasTopSpace) {
        return type === 'anchor' ? 'top' : 'bottom';
      }

      return 'center';
    }

    return {
      elevation: 0,
      anchorOrigin: {
        vertical: getVerticalPosition('anchor'),
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: getVerticalPosition('transform'),
        horizontal: 'center'
      },
      getContentAnchorEl: null
    };
  }, [hasBottomSpace, hasTopSpace]);
  return React__default.createElement(TextInput, Object.assign({}, restProps, {
    ref: selectInputRef,
    select: true,
    variant: variant,
    disabled: disabled,
    className: cn(classes.root, selectClassName, (_cn = {}, _cn[classes.isOpen] = isMenuOpen, _cn[classes.disableVariantText] = disabled && disableVariant === 'text', _cn[classes.hasBottomSpace] = hasBottomSpace, _cn[classes.hasTopSpace] = !hasBottomSpace && hasTopSpace, _cn[classes.withoutOutline] = variant === 'standard' || variant === 'filled', _cn[classes.filled] = variant === 'filled', _cn)),
    InputProps: _extends({}, restInputProps, {
      className: cn(classes.input, inputClassName, (_cn2 = {}, _cn2[classes.filled] = variant === 'filled', _cn2))
    }),
    SelectProps: _extends({}, restSelectProps, {
      classes: {
        select: classes.select
      },
      MenuProps: _extends({}, menuProps, {
        PaperProps: _extends({
          variant: 'outlined'
        }, menuProps === null || menuProps === void 0 ? void 0 : menuProps.PaperProps, {
          className: cn(classes.paper, menuProps === null || menuProps === void 0 ? void 0 : (_menuProps$PaperProps = menuProps.PaperProps) === null || _menuProps$PaperProps === void 0 ? void 0 : _menuProps$PaperProps.className, (_cn3 = {}, _cn3[classes.hasBottomSpace] = hasBottomSpace, _cn3[classes.hasTopSpace] = !hasBottomSpace && hasTopSpace, _cn3[classes.withoutOutline] = variant === 'standard' || variant === 'filled', _cn3[classes.withCheckmark] = variant === 'standard' || variant === 'filled' || restSelectProps.multiple, _cn3[classes.filled] = variant === 'filled', _cn3))
        })
      }, menuPositionProps),
      IconComponent: renderArrowIcon,
      onOpen: handleSelectOpen,
      onClose: handleSelectClose
    })
  }), options.map(function (_ref) {
    var id = _ref.id,
        label = _ref.label;
    return React__default.createElement(MenuItem, {
      key: id,
      value: id,
      className: classes.menuItem
    }, label);
  }));

  function renderArrowIcon() {
    return React__default.createElement("div", {
      className: classes.arrowIcon
    }, React__default.createElement(Arrow, {
      fontSize: "inherit"
    }));
  }

  function useWindowHeight() {
    var _useState4 = React.useState(0),
        windowHeight = _useState4[0],
        setWindowHeight = _useState4[1];

    React.useEffect(function () {
      function handleResize() {
        setWindowHeight(window.innerHeight);
      }

      window.addEventListener('resize', handleResize);
      handleResize();
      return function () {
        return window.removeEventListener('resize', handleResize);
      };
    }, []);
    return windowHeight;
  }
}

var useStyles$l = /*#__PURE__*/styles$2.makeStyles(function (theme) {
  var _inputAdornedStart;

  return {
    root: {
      display: 'flex'
    },
    tableCell: {
      border: 'none',
      padding: 0
    },
    tableCellForInput: {
      width: '100%'
    },
    decimalInputWrapper: {
      flexGrow: 1,
      position: 'relative',
      zIndex: 1
    },
    withCurrencySelect: {
      '& $decimalInput': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }
    },
    inputAdornedStart: (_inputAdornedStart = {
      fontSize: 13,
      fontWeight: 'normal',
      color: theme.colors.lightGray,
      paddingLeft: 10
    }, _inputAdornedStart[theme.breakpoints.up(767)] = {
      fontSize: 12
    }, _inputAdornedStart),
    select: {
      flexShrink: 0,
      // Hint to merge select left border with the right border of the text input
      marginLeft: -1
    },
    selectInput: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    selectRoot: {
      '$tableCell &': {
        minWidth: 'unset'
      }
    },
    decimalInput: {}
  };
}, {
  name: 'AmountInput'
});

function AmountInput(props) {
  var onChange = props.onChange,
      value = props.value,
      maxValue = props.maxValue,
      allowedMax = props.allowedMax,
      disabled = props.disabled,
      currencies = props.currencies,
      hideCurrencySelect = props.hideCurrencySelect,
      _props$displayVariant = props.displayVariant,
      displayVariant = _props$displayVariant === void 0 ? 'default' : _props$displayVariant,
      disabledAlert = props.disabledAlert,
      _props$InputProps = props.InputProps,
      InputProps = _props$InputProps === void 0 ? {} : _props$InputProps,
      _props$SelectProps = props.SelectProps,
      SelectProps = _props$SelectProps === void 0 ? {} : _props$SelectProps,
      makeAmount = props.makeAmount,
      getCurrencyIdentifier = props.getCurrencyIdentifier,
      getCurrencyLabel = props.getCurrencyLabel,
      restInputProps = _objectWithoutPropertiesLoose(props, ["onChange", "value", "maxValue", "allowedMax", "disabled", "currencies", "hideCurrencySelect", "displayVariant", "disabledAlert", "InputProps", "SelectProps", "makeAmount", "getCurrencyIdentifier", "getCurrencyLabel"]);

  var selectClassName = SelectProps.className,
      restSelectProps = _objectWithoutPropertiesLoose(SelectProps, ["className"]);

  var classes = useStyles$l();
  var tokenAmount = value || null;
  var defaultCurrency = currencies[0];
  var currentValue = React.useMemo(function () {
    return (tokenAmount === null || tokenAmount === void 0 ? void 0 : tokenAmount.toBN()) || new BN(0);
  }, [tokenAmount]);
  var currentCurrency = (tokenAmount === null || tokenAmount === void 0 ? void 0 : tokenAmount.currency) || defaultCurrency;
  var currentDecimals = (currentCurrency === null || currentCurrency === void 0 ? void 0 : currentCurrency.decimals) || 0;
  var currentCurrencyUpdatingTrigger = useUpdatingTrigger(currentCurrency, function (a, b) {
    return Boolean(a && b && a.equals(b));
  });
  var isSingleOptionSelect = Boolean(currencies.length <= 1 && currentCurrency); // initialize or update value if currencies is not contain current currency

  React.useEffect(function () {
    var isWrongCurrentCurrency = currentCurrency && !currencies.find(function (item) {
      return item.equals(currentCurrency);
    });

    if (defaultCurrency && (!tokenAmount || isWrongCurrentCurrency)) {
      // async change is necessary for the correct working of subscriptions in the final-form during the first render
      Promise.resolve().then(function () {
        return onChange(makeAmount(currentValue, defaultCurrency));
      });
    }
  }, [currentCurrency, currencies, defaultCurrency, tokenAmount, onChange, makeAmount, currentValue]);
  var handleInputChange = React.useCallback(function (nextValue) {
    var nextValueInBN = new BN(nextValue);
    var validatedValue = allowedMax && nextValueInBN.gt(allowedMax) ? currentValue : nextValueInBN;
    currentCurrency && onChange(makeAmount(validatedValue, currentCurrency));
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [allowedMax, currentCurrencyUpdatingTrigger, currentValue, currentCurrency, onChange, makeAmount]);
  var handleCurrencyChange = React.useCallback(function (event) {
    var nextCurrency = event.target.value;
    var currency = getCurrencyIdentifier && currencies.find(function (item) {
      return getCurrencyIdentifier(item) === nextCurrency;
    });
    currency && onChange(makeAmount(currentValue, currency));
  }, [getCurrencyIdentifier, currencies, onChange, makeAmount, currentValue]);
  var currencySelectOptions = React.useMemo(function () {
    return hideCurrencySelect ? [] : currencies.map(function (item) {
      return {
        id: getCurrencyIdentifier(item),
        label: getCurrencyLabel(item)
      };
    });
  }, [currencies, getCurrencyIdentifier, getCurrencyLabel, hideCurrencySelect]);
  var disabledInputProps = React.useMemo(function () {
    return disabled && disabledAlert ? {
      startAdornment: React__default.createElement(AlertIcon, {
        color: "inherit",
        fontSize: "small"
      }),
      endAdornment: React__default.createElement(React__default.Fragment, null),
      value: disabledAlert,
      classes: {
        inputAdornedStart: classes.inputAdornedStart
      }
    } : {};
  }, [classes, disabled, disabledAlert]);
  return displayVariant === 'table-cell' ? React__default.createElement(React__default.Fragment, null, React__default.createElement("td", {
    className: cn(classes.tableCell, classes.tableCellForInput)
  }, renderDecimalInput()), !hideCurrencySelect && React__default.createElement("td", {
    className: classes.tableCell
  }, renderSelectInput())) : React__default.createElement("div", {
    className: classes.root
  }, renderDecimalInput(), !hideCurrencySelect && renderSelectInput());

  function renderDecimalInput() {
    var _cn;

    return React__default.createElement("div", {
      className: cn(classes.decimalInputWrapper, (_cn = {}, _cn[classes.withCurrencySelect] = !hideCurrencySelect && !isSingleOptionSelect, _cn))
    }, React__default.createElement(DecimalsInput, Object.assign({}, restInputProps, {
      baseDecimals: currentDecimals,
      value: currentValue.toString(),
      maxValue: maxValue,
      onChange: handleInputChange,
      disabled: disabled,
      InputProps: _extends({
        className: classes.decimalInput
      }, disabledInputProps, InputProps)
    })));
  }

  function renderSelectInput() {
    return React__default.createElement("div", {
      className: classes.select
    }, React__default.createElement(SelectInput, {
      options: currencySelectOptions,
      onChange: handleCurrencyChange,
      value: currentCurrency && getCurrencyIdentifier(currentCurrency),
      disableVariant: "text",
      disabled: isSingleOptionSelect,
      InputProps: {
        className: classes.selectInput
      },
      SelectProps: _extends({}, restSelectProps, {
        className: cn(classes.selectRoot, selectClassName)
      })
    }));
  }
}

function useUpdatingTrigger(deps, isEquals) {
  var prevValueRef = React.useRef();

  var _useState = React.useState(function () {
    return {};
  }),
      updatedDepsTrigger = _useState[0],
      setUpdatedDepsTrigger = _useState[1];

  React.useEffect(function () {
    var prevDeps = prevValueRef.current;
    prevValueRef.current = deps;

    if (prevDeps && !isEquals(prevDeps, deps)) {
      setUpdatedDepsTrigger({});
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [deps]);
  return updatedDepsTrigger;
}

function LiquidityAmountInput(props) {
  return React__default.createElement(AmountInput, Object.assign({}, props, {
    makeAmount: makeAmount,
    getCurrencyIdentifier: getCurrencyIdentifier,
    getCurrencyLabel: getCurrencyLabel
  }));
}

function getCurrencyIdentifier(currency) {
  return currency.symbol;
}

var currenciesWithIcons = ['btc', 'eth'];

function getCurrencyLabel(currency) {
  return currenciesWithIcons.includes(currency.symbol.toLowerCase()) ? React__default.createElement(Grid$1, {
    container: true,
    alignItems: "center",
    wrap: "nowrap"
  }, React__default.createElement(CurrencyIcon, {
    currency: currency.symbol
  }), "\xA0", currency.symbol) : currency.symbol;
}

function makeAmount(value, currency) {
  return new primitives.LiquidityAmount(value, currency);
}

function TokenAmountInput(props) {
  var allowSelectAllToken = props.allowSelectAllToken,
      currencies = props.currencies,
      rest = _objectWithoutPropertiesLoose(props, ["allowSelectAllToken", "currencies"]);

  var tokens = React.useMemo(function () {
    return allowSelectAllToken && currencies.length > 1 ? [].concat(currencies, [new primitives.AllCoinsToken(currencies)]) : currencies;
  }, [allowSelectAllToken, currencies]);
  return React__default.createElement(AmountInput, Object.assign({}, rest, {
    currencies: tokens,
    makeAmount: makeAmount$1,
    getCurrencyIdentifier: getCurrencyIdentifier$1,
    getCurrencyLabel: getCurrencyLabel
  }));

  function getCurrencyLabel(currency) {
    return currency instanceof primitives.AllCoinsToken && currency.tokens ? React__default.createElement(Grid, {
      container: true,
      alignItems: "center",
      wrap: "nowrap"
    }, React__default.createElement(TokensIcons, {
      tokens: currency.tokens
    }), "\xA0", currency.symbol) : React__default.createElement(TokenName, {
      token: currency
    });
  }
}

function getCurrencyIdentifier$1(currency) {
  return currency.address;
}

function makeAmount$1(value, currency) {
  return new primitives.TokenAmount(value, currency);
}

var useStyles$m = /*#__PURE__*/styles$2.makeStyles(function () {
  return {
    root: {
      padding: '1px 0px 1px 8px',
      border: '1px solid #40404b',
      borderRadius: 6,
      '& .MuiInputBase-input': {
        padding: '6px 0'
      },
      '& .MuiIconButton-root': {
        padding: 3
      },
      '& .MuiInputAdornment-root': {
        marginLeft: 2
      },
      '& .MuiFormHelperText-root.Mui-error': {
        position: 'absolute',
        top: 32,
        left: 3,
        lineHeight: 1
      }
    },
    datePickerIcon: {
      fontSize: 24,
      marginTop: -1
    }
  };
}, {
  name: 'DatepickerInput'
});

function DatepickerInput(props) {
  var className = props.className,
      iconClassName = props.iconClassName,
      restProps = _objectWithoutPropertiesLoose(props, ["className", "iconClassName"]);

  var classes = useStyles$m();
  return React.createElement(pickers.MuiPickersUtilsProvider, {
    utils: DateFnsUtils
  }, React.createElement(pickers.KeyboardDatePicker, Object.assign({
    className: cn(classes.root, className),
    format: "MM/dd/yyyy",
    keyboardIcon: React.createElement(HistoryIcon, {
      className: cn(classes.datePickerIcon, iconClassName)
    }),
    variant: "inline",
    invalidDateMessage: "Enter correct date",
    autoOk: true
  }, restProps)));
}

exports.Box = Box;
exports.ButtonBase = ButtonBase;
exports.CircularProgress = CircularProgress;
exports.CssBaseline = CssBaseline;
exports.Typography = Typography;
exports.IconButton = IconButton;
exports.Link = Link;
exports.Divider = Divider;
exports.TextInput = TextInput;
exports.AAVEIcon = AAVEIcon;
exports.ADELIcon = ADELIcon;
exports.AKROIcon = AKROIcon;
exports.Accordion = Accordion;
exports.AddressIcon = AddressIcon;
exports.AlertIcon = AlertIcon;
exports.AmountInput = AmountInput;
exports.Arrow = Arrow;
exports.BALIcon = BALIcon;
exports.BSCIcon = BSCIcon;
exports.BTCIcon = BTCIcon;
exports.BUSDIcon = BUSDIcon;
exports.Button = Button;
exports.COMPIcon = COMPIcon;
exports.CRVIcon = CRVIcon;
exports.Card = Card;
exports.CheckboxInput = CheckboxInput;
exports.CheckmarkIcon = CheckmarkIcon;
exports.ComingSoon = ComingSoon;
exports.CrvBUSDIcon = CrvBUSDIcon;
exports.CrvCOMPIcon = CrvCOMPIcon;
exports.CrvIBIcon = CrvIBIcon;
exports.CrvSBTCIcon = CrvSBTCIcon;
exports.CrvTricryptoIcon = CrvTricryptoIcon;
exports.CurrencyIcon = CurrencyIcon;
exports.DAIIcon = DAIIcon;
exports.DatepickerInput = DatepickerInput;
exports.DecimalsInput = DecimalsInput;
exports.DelphiPoolIcon = DelphiPoolIcon;
exports.DependencyProvider = DependencyProvider;
exports.DialogContent = DialogContent;
exports.ETHIcon = ETHIcon;
exports.Grid = AdaptiveGrid;
exports.HEGICIcon = HEGICIcon;
exports.HiddenSvgDefs = HiddenSvgDefs;
exports.HistoryIcon = HistoryIcon;
exports.InfoIcon = InfoIcon;
exports.Label = Label;
exports.LiquidityAmountInput = LiquidityAmountInput;
exports.MTAIcon = MTAIcon;
exports.MUSDIcon = MUSDIcon;
exports.Metric = Metric;
exports.NetworkIcon = NetworkIcon;
exports.NumberInput = NumberInput;
exports.RENIcon = RENIcon;
exports.RadioButton = RadioButton;
exports.RadioGroupInput = RadioGroupInput;
exports.RenBTCIcon = RenBTCIcon;
exports.ResizeObserverComponent = ResizeObserverComponent;
exports.ResizeObserverPolyfill = ResizeObserverPolyfill;
exports.SBTCIcon = SBTCIcon;
exports.SNXIcon = SNXIcon;
exports.SUSDIcon = SUSDIcon;
exports.SelectInput = SelectInput;
exports.ShortAddress = ShortAddress;
exports.Skeleton = Skeleton;
exports.SteCRVIcon = SteCRVIcon;
exports.SwitchInput = SwitchInput;
exports.TUSDIcon = TUSDIcon;
exports.Tab = Tab;
exports.TabContext = TabContext;
exports.TabList = TabList;
exports.Table = index;
exports.TabsSection = TabsSection;
exports.ThreeCrvIcon = ThreeCrvIcon;
exports.TokenAmountInput = TokenAmountInput;
exports.TokenIcon = TokenIcon;
exports.TokenName = TokenName;
exports.TokensIcons = TokensIcons;
exports.USDCIcon = USDCIcon;
exports.USDIcon = USDIcon;
exports.USDTIcon = USDTIcon;
exports.WBTCIcon = WBTCIcon;
exports.WETHIcon = WETHIcon;
exports.YCRVIcon = YCRVIcon;
exports.YFIIcon = YFIIcon;
exports.YveCRVIcon = YveCRVIcon;
//# sourceMappingURL=components.cjs.development.js.map
