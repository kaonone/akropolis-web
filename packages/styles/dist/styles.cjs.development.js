'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styles = require('@material-ui/core/styles');
var ramda = require('ramda');
var React = require('react');
var React__default = _interopDefault(React);
var useMediaQuery = _interopDefault(require('@material-ui/core/useMediaQuery'));

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

// Find color name http://chir.ag/projects/name-that-color
// https://github.com/insomnious0x01/ntc-js
var colors = {
  amour: '#f8e6f2',
  athensGray: '#eff1f5',
  black: '#000',
  blackRussian: '#191924',
  blueChalk: '#e7e3fe',
  blueZodiac: '#13254a',
  bossanova: '#4d2c66',
  bunting: '#1d134a',
  charade: '#2d2d40',
  cinder: '#13131b',
  darkBlueMagenta: '#101016',
  darkMist: '#40404b',
  darkSpace: '#1c1c2a',
  electricViolet: '#9013FE',
  frenchGray: '#B6B3C0',
  grayishNavy: '#393753',
  heliotrope2: '#E965FF',
  heliotrope: '#D93CEF',
  independence: '#4d4b6c',
  jacarta2: '#422c66',
  jacarta: '#342c66',
  jaguar: '#20202D',
  linkWater: '#d6eaf3',
  mediumPurple: '#8c4be6',
  monza: '#d0021b',
  obsidian: '#0a0a0e',
  purpleHeart: '#6931b6',
  rhino: '#283e64',
  royalBlue3: '#5346e6',
  royalBlue2: '#594cf2',
  royalBlue: '#544CF2',
  shark: '#191b1f',
  snuff: '#f0ddf1',
  valhalla: '#2a134a',
  whisper: '#e9e7f2',
  white: '#fff',
  zumthor2: '#e6eeff',
  zumthor: '#eaf1ff',
  midnightBlue2: '#373765',
  midnightBlue: '#3b3b7a',
  persimmon: '#FE5A59',
  lightGray: 'rgba(255, 255, 255, 0.5)',
  violetRed: '#ef359c',
  stormGray: '#75758b'
};

function makeGradient(points) {
  return {
    points: points.map(toGradientPoint),
    linear: function linear(sideOrCorner) {
      return getLinearGradient(points, sideOrCorner);
    },
    svgLinear: function svgLinear(id, direction) {
      return getSvgGradient(id, points, direction);
    }
  };
}

function getLinearGradient(points, sideOrCorner) {
  if (sideOrCorner === void 0) {
    sideOrCorner = 'to bottom';
  }

  return "linear-gradient(" + sideOrCorner + ", " + points.map(function (point, index) {
    var _toGradientPoint = toGradientPoint(point, index, points),
        color = _toGradientPoint.color,
        offset = _toGradientPoint.offset;

    return [color, offset].filter(Boolean).join(' ');
  }).join(', ') + ")";
}

function toGradientPoint(point, index, points) {
  var multiplier = 100 / (points.length - 1);
  var offset = Math.round(index * multiplier * 100) / 100 + "%";
  return typeof point === 'string' ? {
    color: point,
    offset: offset
  } : point;
}

function getSvgGradient(id, points, direction) {
  if (direction === void 0) {
    direction = {};
  }

  var _direction = direction,
      _direction$x = _direction.x1,
      x1 = _direction$x === void 0 ? '0%' : _direction$x,
      _direction$x2 = _direction.x2,
      x2 = _direction$x2 === void 0 ? '100%' : _direction$x2,
      _direction$y = _direction.y1,
      y1 = _direction$y === void 0 ? '50%' : _direction$y,
      _direction$y2 = _direction.y2,
      y2 = _direction$y2 === void 0 ? '50%' : _direction$y2;
  return React.createElement("linearGradient", {
    id: id,
    x1: x1,
    x2: x2,
    y1: y1,
    y2: y2
  }, points.map(function (point, index) {
    var _toGradientPoint2 = toGradientPoint(point, index, points),
        color = _toGradientPoint2.color,
        offset = _toGradientPoint2.offset;

    return React.createElement("stop", {
      key: index,
      offset: offset,
      stopColor: color
    });
  }));
}

function generateGridSpacingOverrides(spacing) {
  return gridSpacingClasses.reduce(function (acc, cur, index) {
    var _cur, _extends2;

    return _extends({}, acc, (_extends2 = {}, _extends2[cur] = (_cur = {
      width: "calc(100% + " + spacing(index + 1) + "px + 1px)"
    }, _cur["& > $item"] = {
      padding: (index + 1) * 4 + "px " + ((index + 1) * 4 + 1) + "px"
    }, _cur), _extends2));
  }, {});
}
var gridSpacingClasses = ['spacing-xs-1', 'spacing-xs-2', 'spacing-xs-3', 'spacing-xs-4', 'spacing-xs-5', 'spacing-xs-6', 'spacing-xs-7', 'spacing-xs-8', 'spacing-xs-9', 'spacing-xs-10'];

function getBreakpoints(breakpoints) {
  return Object.entries(breakpoints).sort(function (_ref, _ref2) {
    var valueA = _ref[1];
    var valueB = _ref2[1];
    return valueA - valueB;
  }).reduce(makeUniqueBreakpoints, {
    keys: [],
    values: {}
  });
} // MUI doesn't generate media queries for duplicated breakpoints

function makeUniqueBreakpoints(_ref3, _ref4) {
  var _extends2;

  var keys = _ref3.keys,
      values = _ref3.values;
  var currentKey = _ref4[0],
      currentValue = _ref4[1];
  var isValueDuplicated = Object.values(values).includes(currentValue);
  var value = currentValue !== 0 && isValueDuplicated ? currentValue + 0.000001 : currentValue;
  return {
    keys: [].concat(keys, [currentKey]),
    values: _extends({}, values, (_extends2 = {}, _extends2[currentKey] = value, _extends2))
  };
}

function getGradients(type) {
  return {
    main: makeGradient([colors.violetRed, colors.royalBlue3]),
    products: [makeGradient(type === 'dark' ? [colors.jacarta, colors.blueZodiac] : [colors.zumthor2, colors.linkWater]), makeGradient(type === 'dark' ? [colors.jacarta2, colors.bunting] : [colors.whisper, colors.blueChalk]), makeGradient(type === 'dark' ? [colors.bossanova, colors.valhalla] : [colors.snuff, colors.amour])],
    button: makeGradient([colors.violetRed, colors.royalBlue3, colors.violetRed, colors.violetRed]),
    outlinedButton: makeGradient([{
      color: colors.violetRed,
      offset: '0%'
    }, {
      color: colors.royalBlue3,
      offset: '33.3%'
    }, {
      color: colors.violetRed,
      offset: '100%'
    }]),
    poolCompositionChart: [makeGradient(['#A88BEB', '#F8CEEC']), makeGradient(['#647DEE', '#7F53AC']), makeGradient(['#F53844', '#42378F']), makeGradient(['#0652C5', '#D4418E']), makeGradient(['#B621FE', '#1FD1F9']), makeGradient(['#5F72BE', '#9921E8']), makeGradient(['#05D6D9', '#F907FC']), makeGradient(['#AD1DEB', '#6E72FC']), makeGradient(['#E975A8', '#726CF8']), makeGradient(['#A1BAFE', '#8D5185']), makeGradient(['#AA4465', '#861657']), makeGradient(['#000000', '#923CB5']), makeGradient(['#000000', '#E056FD']), makeGradient(['#746CC0', '#58427C']), makeGradient(['#8241B8', '#6C33A3']), makeGradient(['#EE696B', '#523A78']), makeGradient(['#A594F9', '#6247AA'])],
    progressChart: makeGradient(['#7d40ff', '#02a4ff']),
    cardTitleInactive: makeGradient([colors.midnightBlue, colors.midnightBlue2])
  };
}

var tokensPalette = {
  AKRO: {
    gradient: /*#__PURE__*/makeGradient(['#ff2382', '#5c45e2']),
    hex: '#f79dc2'
  },
  BAL: {
    gradient: /*#__PURE__*/makeGradient(['#c4b2db', '#594097']),
    hex: '#c4b2db'
  },
  COMP: {
    gradient: /*#__PURE__*/makeGradient(['#85f9e1', '#639ff8']),
    hex: '#85f9e1'
  },
  CRV: {
    gradient: /*#__PURE__*/makeGradient(['#daff5f', '#f8ffe5']),
    hex: '#daff5f'
  },
  SNX: {
    gradient: /*#__PURE__*/makeGradient(['#6a2db9', '#7543f6']),
    hex: '#4940b2'
  },
  MTA: {
    gradient: /*#__PURE__*/makeGradient(['#fdde63', '#5ef3cd']),
    hex: '#fdde63'
  },
  YFI: {
    gradient: /*#__PURE__*/makeGradient(['#96d9ff', '#283ef0']),
    hex: '#96d9ff'
  },
  BTC: {
    gradient: /*#__PURE__*/makeGradient(['#ffc2a0', '#ffa17b']),
    hex: '#ffc2a0'
  },
  ETH: {
    gradient: /*#__PURE__*/makeGradient(['#96d9ff', '#283ef0']),
    hex: '#96d9ff'
  },
  WBTC: {
    gradient: /*#__PURE__*/makeGradient(['#fdde63', '#5ef3cd']),
    hex: '#fdde63'
  },
  renBTC: {
    gradient: /*#__PURE__*/makeGradient(['#c523ff', '#ebc0f5']),
    hex: '#c523ff'
  },
  sBTC: {
    gradient: /*#__PURE__*/makeGradient(['#81a7ff', '#639ff8']),
    hex: '#81a7ff'
  },
  mUSD: {
    gradient: /*#__PURE__*/makeGradient(['#ffc2a0', '#ffa17b']),
    hex: '#ffc2a0'
  },
  TUSD: {
    gradient: /*#__PURE__*/makeGradient(['#4987e3', '#dfb2ff']),
    hex: '#4987e3'
  },
  DAI: {
    gradient: /*#__PURE__*/makeGradient(['#ffd99c', '#f8c563']),
    hex: '#fed89a'
  },
  USDC: {
    gradient: /*#__PURE__*/makeGradient(['#699ff8', '#62bdfb']),
    hex: '#699ff8'
  },
  USDT: {
    gradient: /*#__PURE__*/makeGradient(['#81f9be', '#a1ffdf']),
    hex: '#81f9be'
  },
  REN: {
    gradient: /*#__PURE__*/makeGradient(['#634dc9', '#ff74a8']),
    hex: '#634dc9'
  },
  sUSD: {
    gradient: /*#__PURE__*/makeGradient(['#6a2db9', '#7543f6']),
    hex: '#4940b2'
  },
  ADEL: {
    gradient: /*#__PURE__*/makeGradient(['#02a4ff', '#7d40ff']),
    hex: '#02a4ff'
  },
  BUSD: {
    gradient: /*#__PURE__*/makeGradient(['#fdde63', '#5ef3cd']),
    hex: '#fdde63'
  },
  AAVE: {
    gradient: /*#__PURE__*/makeGradient(['#a381f9', '#a1ffb2']),
    hex: '#a381f9'
  }
};
var breakpoints = {
  mobileXS: 0,
  mobileSM: 320,
  mobileMD: 480,
  mobileLG: 640,
  tabletXS: 768,
  tabletSM: 1024,
  tabletMD: 1100,
  tabletLG: 1200,
  desktopXS: 1280,
  desktopSM: 1360,
  desktopMD: 1440,
  desktopLG: 1920,
  desktopXL: 2560,
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
var lightPalette = {
  primary: {
    main: colors.purpleHeart,
    light: colors.heliotrope,
    dark: colors.mediumPurple,
    contrastText: colors.white
  },
  secondary: {
    main: colors.electricViolet,
    light: colors.electricViolet,
    dark: colors.electricViolet,
    contrastText: colors.electricViolet
  },
  text: {
    primary: colors.black
  },
  error: {
    main: colors.persimmon
  },
  background: {
    hint: colors.charade,
    "default": colors.athensGray,
    paper: colors.white,
    paperSecondary: colors.white
  },
  type: 'light'
};
var darkPalette = {
  primary: {
    main: colors.purpleHeart,
    light: colors.heliotrope,
    dark: colors.mediumPurple,
    contrastText: colors.white
  },
  secondary: {
    main: colors.electricViolet,
    light: colors.electricViolet,
    dark: colors.electricViolet,
    contrastText: colors.electricViolet
  },
  text: {
    primary: colors.white
  },
  error: {
    main: colors.persimmon
  },
  background: {
    hint: colors.darkSpace,
    "default": colors.obsidian,
    paper: colors.cinder,
    paperSecondary: colors.darkBlueMagenta
  },
  type: 'dark'
};
var defaultTheme = /*#__PURE__*/styles.createMuiTheme({
  breakpoints: /*#__PURE__*/getBreakpoints(breakpoints)
});
var lightTheme = /*#__PURE__*/getTheme('light');
var darkTheme = /*#__PURE__*/getTheme('dark');
function getTheme(type, overrides) {
  return styles.createMuiTheme(ramda.mergeDeepRight({
    colors: colors,
    gradients: getGradients(type),
    tokensPalette: tokensPalette,
    palette: type === 'light' ? lightPalette : darkPalette,
    breakpoints: getBreakpoints(breakpoints),
    typography: {
      fontFamily: ['AvenirNext LT Pro', 'Arial', 'sans-serif'].join(','),
      h6: {
        fontSize: 16,
        fontWeight: 400
      }
    },
    shape: {
      borderRadius: 4
    },
    overrides: {
      MuiPaper: {
        root: {
          transition: defaultTheme.transitions.create(['background-color', 'box-shadow'])
        }
      },
      MuiPickersToolbar: {
        toolbar: {
          height: 80,
          '& .MuiTypography-h4': {
            fontSize: 16
          }
        }
      },
      MuiPickersDay: {
        day: {
          '& .MuiTypography-body2': {
            marginTop: 1,
            lineHeight: 1
          }
        },
        current: {
          color: '#d93cef'
        },
        daySelected: {
          color: '#fff',
          background: 'linear-gradient(to left, #5346e6, #ef359c)'
        }
      },
      MuiPickersYear: {
        root: {
          '&:focus': {
            color: '#d93cef'
          }
        },
        yearSelected: {
          color: '#d93cef'
        }
      },
      MuiLink: {
        root: {
          transition: defaultTheme.transitions.create(['border-color', 'color'])
        },
        underlineHover: {
          paddingBottom: 2,
          borderWidth: '0 0 1px 0',
          borderStyle: 'solid',
          borderColor: 'transparent',
          '&:hover': {
            textDecoration: 'none',
            borderColor: 'currentColor'
          }
        },
        underlineAlways: {
          paddingBottom: 2,
          borderWidth: '0 0 1px 0',
          borderStyle: 'solid',
          borderColor: type === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
            borderColor: 'currentColor'
          }
        }
      },
      MuiCssBaseline: {
        '@global': {
          html: {
            boxSizing: 'border-box',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            fontSize: 16,
            fontFamily: ['AvenirNext LT Pro', 'Arial', 'sans-serif'].join(',')
          },
          body: {
            margin: 0,
            fontSize: '1rem',
            transition: defaultTheme.transitions.create('background-color')
          },
          'html, body, #root': {
            height: '100%'
          },
          '*, *::before, *::after': {
            boxSizing: 'inherit'
          },
          '@media print': {
            body: {
              backgroundColor: '#fff'
            }
          },
          '#root': {
            zIndex: 1,
            position: 'relative'
          },
          '#walletconnect-wrapper': {
            zIndex: defaultTheme.zIndex.modal,
            position: 'relative'
          }
        }
      },
      MuiButton: {
        root: {
          '& .MuiButton-label': {
            transition: defaultTheme.transitions.create('color')
          }
        },
        endIcon: {
          '&:empty': {
            display: 'none'
          }
        },
        startIcon: {
          '&:empty': {
            display: 'none'
          }
        }
      },
      MuiGrid: _extends({}, generateGridSpacingOverrides(defaultTheme.spacing)),
      MuiSnackbarContent: {
        // TODO: research if MuiSnackbarContent is used or not
        root: {
          backgroundColor: '#fff'
        },
        message: {
          color: colors.rhino
        }
      },
      MuiFormControlLabel: {
        root: {
          marginRight: 0
        }
      },
      MuiFormGroup: {
        row: {
          '& .MuiFormControlLabel-root': {
            marginRight: 20
          }
        }
      },
      MuiSvgIcon: {
        root: {
          display: 'block',
          fontSize: '1.25rem'
        },
        fontSizeSmall: {
          fontSize: '1rem'
        },
        fontSizeLarge: {
          fontSize: '1.5rem'
        }
      },
      MuiDialogTitle: {
        root: {
          fontSize: '1.375rem',
          fontWeight: 300,
          padding: 0
        }
      },
      MuiInput: {
        underline: {
          minHeight: 0,
          '&:before': {
            display: 'none'
          },
          '&:after': {
            display: 'none'
          },
          '& $input.MuiSelect-select': {
            padding: '0 20px 0 0'
          }
        }
      },
      MuiOutlinedInput: {
        root: {
          borderColor: colors.darkMist,
          backgroundColor: colors.cinder,
          borderRadius: 6,
          minHeight: 36,
          '&$focused': {
            background: colors.blackRussian
          },
          '&$disabled': {
            color: 'rgba(255, 255, 255, 0.2)'
          },
          '&$error': {
            borderColor: '#643d3d'
          },
          '&$colorSecondary': {
            borderColor: colors.stormGray
          }
        },
        adornedEnd: {
          paddingRight: 0
        },
        input: {
          fontWeight: 300,
          padding: '8px 11px',
          '&::placeholder': {
            color: 'rgba(255, 255, 255, 0.5)',
            opacity: 1
          },
          '&$disabled': {
            '&::placeholder': {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
        notchedOutline: {
          borderColor: 'inherit !important',
          borderWidth: '1px !important'
        }
      },
      MuiFilledInput: {
        underline: {
          minHeight: 0,
          '&:before': {
            display: 'none'
          },
          '&:after': {
            display: 'none'
          },
          '& $input.MuiSelect-select': {
            padding: '10px 22px 10px 16px'
          }
        },
        root: {
          borderRadius: 6
        }
      },
      MuiFormHelperText: {
        root: {
          fontWeight: 300,
          '&$error': {
            margin: '5px 0 0',
            color: '#FE5A59'
          }
        }
      },
      MuiMenuItem: {
        root: {
          fontWeight: 300,
          padding: '10px 9px',
          '&$selected, &$selected:hover': {
            backgroundColor: colors.blackRussian
          },
          '&:hover': {
            backgroundColor: colors.darkMist
          }
        }
      },
      MuiSelect: {
        root: {
          overflow: 'hidden',
          '&$select:focus': {
            backgroundColor: colors.blackRussian
          },
          '&:hover:not($disabled)': {
            backgroundColor: colors.blackRussian
          }
        },
        filled: {
          '&$select:focus': {
            backgroundColor: 'transparent'
          },
          '&:hover:not($disabled)': {
            backgroundColor: 'transparent'
          }
        }
      },
      MuiTooltip: {
        tooltip: {
          padding: '15px',
          border: '1px solid #373740',
          borderRadius: '6px',
          backgroundColor: colors.blackRussian
        },
        tooltipPlacementTop: {
          margin: '8px 0 !important'
        },
        tooltipPlacementBottom: {
          margin: '8px 0 !important'
        },
        tooltipPlacementRight: {
          margin: '0 8px !important'
        },
        tooltipPlacementLeft: {
          margin: '0 8px !important'
        }
      },
      MuiSkeleton: {
        root: {
          backgroundColor: '#20202d'
        }
      },
      MuiTabPanel: {
        root: {
          padding: 0
        }
      },
      MuiBackdrop: {
        root: {
          backgroundColor: 'rgba(10, 10, 14, 0.9)'
        }
      }
    }
  }, overrides || {}));
}

function WithDarkTheme(_ref) {
  var children = _ref.children;
  return React__default.createElement(styles.MuiThemeProvider, {
    theme: darkTheme
  }, children);
}

var AncestorBackgroundHackContext = /*#__PURE__*/React.createContext(null);
function useAncestorBackgroundHack() {
  var context = React.useContext(AncestorBackgroundHackContext);
  var theme = styles.useTheme();
  return context || theme.palette.background["default"];
}
function AncestorBackgroundHackProvider(props) {
  var backgroundColor = props.backgroundColor,
      children = props.children;
  return React__default.createElement(AncestorBackgroundHackContext.Provider, {
    value: backgroundColor
  }, children);
}

function useFromToQuery(points) {
  var theme = styles.useTheme();
  var from = points.from,
      to = points.to;
  var fromQuery = !isUndefined(from) && theme.breakpoints.up(from);
  var toQuery = !isUndefined(to) && down(to, theme);
  var betweenQuery = !isUndefined(from) && !isUndefined(to) && between(from, to, theme);
  return betweenQuery || fromQuery || toQuery || '';
}

function isUndefined(value) {
  return typeof value === 'undefined';
}

function down(key, theme) {
  var maxBreakpoint = Object.entries(theme.breakpoints.values).reduce(function (acc, cur) {
    return acc[1] > cur[1] ? cur : acc;
  })[0];

  if (key === maxBreakpoint) {
    // maxBreakpoint down applies to all sizes
    return theme.breakpoints.up('xs');
  }

  var value = typeof key === 'number' ? key : theme.breakpoints.values[key];
  return "@media (max-width:" + (value - 5 / 100) + "px)";
}

function between(start, end, theme) {
  var maxBreakpoint = Object.entries(theme.breakpoints.values).reduce(function (acc, cur) {
    return acc[1] > cur[1] ? cur : acc;
  })[0];

  if (end === maxBreakpoint) {
    // maxBreakpoint down applies to all sizes
    return theme.breakpoints.up(start);
  }

  var startValue = typeof start === 'number' ? start : theme.breakpoints.values[start];
  var endValue = typeof end === 'number' ? end : theme.breakpoints.values[end];
  return "@media (min-width:" + startValue + "px) and (max-width:" + (endValue - 5 / 100) + "px)";
}

function useBreakpointsMatch(points) {
  var query = useFromToQuery(points);
  var matched = useMediaQuery(query);
  return !!matched;
}

function rgba(hex, alfa) {
  var rgb = styles.hexToRgb(hex).replace(/^rgb\((.+?)\)$/, '$1');
  return "rgba(" + rgb + ", " + alfa + ")";
}

Object.defineProperty(exports, 'createStyles', {
  enumerable: true,
  get: function () {
    return styles.createStyles;
  }
});
Object.defineProperty(exports, 'darken', {
  enumerable: true,
  get: function () {
    return styles.darken;
  }
});
Object.defineProperty(exports, 'lighten', {
  enumerable: true,
  get: function () {
    return styles.lighten;
  }
});
Object.defineProperty(exports, 'makeStyles', {
  enumerable: true,
  get: function () {
    return styles.makeStyles;
  }
});
Object.defineProperty(exports, 'useTheme', {
  enumerable: true,
  get: function () {
    return styles.useTheme;
  }
});
Object.defineProperty(exports, 'withStyles', {
  enumerable: true,
  get: function () {
    return styles.withStyles;
  }
});
exports.AncestorBackgroundHackProvider = AncestorBackgroundHackProvider;
exports.WithDarkTheme = WithDarkTheme;
exports.colors = colors;
exports.darkPalette = darkPalette;
exports.darkTheme = darkTheme;
exports.generateGridSpacingOverrides = generateGridSpacingOverrides;
exports.getBreakpoints = getBreakpoints;
exports.getTheme = getTheme;
exports.lightTheme = lightTheme;
exports.makeGradient = makeGradient;
exports.rgba = rgba;
exports.useAncestorBackgroundHack = useAncestorBackgroundHack;
exports.useBreakpointsMatch = useBreakpointsMatch;
exports.useFromToQuery = useFromToQuery;
//# sourceMappingURL=styles.cjs.development.js.map
