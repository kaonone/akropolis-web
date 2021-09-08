'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var BN = _interopDefault(require('bn.js'));

var HEX_REGEX = /^0x[a-fA-F0-9]+$/;
function isHex(value, bitLength, ignoreLength) {
  if (bitLength === void 0) {
    bitLength = -1;
  }

  if (ignoreLength === void 0) {
    ignoreLength = false;
  }

  var isValidHex = value === '0x' || (typeof value === 'string' || value instanceof String) && HEX_REGEX.test(value.toString());

  if (isValidHex && bitLength !== -1) {
    return value.length === 2 + Math.ceil(bitLength / 4);
  }

  return isValidHex && (ignoreLength || value.length % 2 === 0);
}

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

var UNPREFIX_HEX_REGEX = /^[a-fA-F0-9]+$/;
function hexStripPrefix(value) {
  if (!value) {
    return '';
  }

  var hasPrefix = !!(value && isHex(value, -1, true) && value.substr(0, 2) === '0x');

  if (hasPrefix) {
    return value.substr(2);
  }

  if (UNPREFIX_HEX_REGEX.test(value)) {
    return value;
  }

  throw new Error("Invalid hex " + value + " passed to hexStripPrefix");
}

function reverse(value) {
  return (value.match(new RegExp('.{1,2}', 'g')) || []).reverse().join('');
}

function hexToBn(value, options) {
  if (options === void 0) {
    options = {
      isLe: false,
      isNegative: false
    };
  }

  if (!value) {
    return new BN(0);
  }

  var newOptions = _extends({
    isLe: false,
    isNegative: false
  }, typeof options === 'boolean' ? {
    isLe: options
  } : options);

  var newValue = hexStripPrefix(value);
  var bn = new BN((newOptions.isLe ? reverse(newValue) : newValue) || '00', 16);
  return newOptions.isNegative ? bn.fromTwos(newValue.length * 4) : bn;
}

function isToBN(value) {
  return typeof value === 'object' && !!value && 'toBN' in value;
}

function bnToBn(value) {
  if (!value) {
    return new BN(0);
  }

  if (isHex(value, undefined, true)) {
    return hexToBn(value.toString());
  }

  var convertedToBnValue = isToBN(value) ? value.toBN() : new BN(value);
  return BN.isBN(value) ? value : convertedToBnValue;
}

function decimalsToWei(decimals) {
  return new BN(10).pow(new BN(decimals));
}

var zero = /*#__PURE__*/new BN(0);
var negative1 = /*#__PURE__*/new BN(-1);
function fromBaseUnit(input, decimals) {
  var wei = new BN(input);
  var negative = wei.lt(zero);
  var base = new BN(10).pow(new BN(decimals));

  if (negative) {
    wei = wei.mul(negative1);
  }

  var fraction = wei.mod(base).toString(10);

  while (fraction.length < decimals) {
    fraction = "0" + fraction;
  }

  fraction = fraction.replace(/^(.+?)0+$/, '$1');
  var whole = wei.div(base).toString(10);
  var value = "" + whole + (fraction === '0' ? '' : "." + fraction);

  if (negative) {
    value = "-" + value;
  }

  return value;
}

function getSignificantValue(_ref, significantFractionalDigits) {
  var symbol = _ref.symbol,
      decimals = _ref.decimals;
  var fractionalDigits = significantFractionalDigits || getSignificantFractionalDigits(symbol);
  return decimalsToWei(Math.max(0, decimals - fractionalDigits));
} // fractional digits should be based on the equivalent of 0.01$ in a given currency

function getSignificantFractionalDigits(currencySymbol) {
  switch (currencySymbol.toUpperCase()) {
    case 'BTC':
    case 'RENBTC':
    case 'WBTC':
    case 'SBTC':
    case 'YFI':
      {
        return 7;
      }

    default:
      {
        return 5;
      }
  }
}

function isEqualHex(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

function max(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return rest.reduce(function (acc, cur) {
    var accBn = bnToBn(acc);
    var curBn = bnToBn(cur);
    return accBn.gt(curBn) ? acc : cur;
  }, first);
}

function min(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return rest.reduce(function (acc, cur) {
    var accBn = bnToBn(acc);
    var curBn = bnToBn(cur);
    return accBn.lt(curBn) ? acc : cur;
  }, first);
}

function roundWei(value, decimals, variant, significant) {
  var bnValue = new BN(value);
  var multiplierDecimals = Math.max(0, decimals - significant);
  var multiplier = decimalsToWei(multiplierDecimals);

  if (!multiplierDecimals) {
    return bnValue;
  }

  var absFloorRounded = bnValue.abs().div(multiplier).mul(multiplier);
  var mod = bnValue.sub(absFloorRounded);
  var isNeedUpToCeil = variant === 'ceil' && !bnValue.eq(absFloorRounded) || variant === 'half-away-from-zero' && mod.gte(multiplier.divn(2));
  return absFloorRounded.add(isNeedUpToCeil ? multiplier : new BN(0)).muln(bnValue.isNeg() ? -1 : 1);
}

var negative1$1 = /*#__PURE__*/new BN(-1);
function toBaseUnit(input, decimals) {
  var inputStr = input;
  var base = new BN(10).pow(new BN(decimals)); // Is it negative?

  var negative = inputStr.substring(0, 1) === '-';

  if (negative) {
    inputStr = inputStr.substring(1);
  }

  if (inputStr === '.') {
    throw new Error("While converting number \"" + input + "\" to base units, invalid value");
  } // Split it into a whole and fractional part


  var comps = inputStr.split('.');

  if (comps.length > 2) {
    throw new Error("While converting number \"" + input + "\" to base units, too many decimal points");
  }

  var whole = comps[0];
  var fraction = comps[1];

  if (!whole) {
    whole = '0';
  }

  if (!fraction) {
    fraction = '';
  }

  if (fraction.length > decimals) {
    throw new Error("While converting number \"" + input + "\" to base units, too many decimal places");
  }

  while (fraction.length < decimals) {
    fraction += '0';
  }

  var inBaseUnit = new BN(whole).mul(base).add(new BN(fraction));

  if (negative) {
    inBaseUnit = inBaseUnit.mul(negative1$1);
  }

  return new BN(inBaseUnit.toString(10), 10);
}

function getDecimal(value, baseDecimals, precision) {
  if (value.length === 0 || value === '0') {
    return {
      fractional: '',
      integer: '0'
    };
  }

  var isNegative = value[0].startsWith('-');
  var positiveValue = isNegative ? value.substr(1) : value;
  var mid = positiveValue.length - baseDecimals;
  var integer = positiveValue.substr(0, mid);
  var padding = mid < 0 ? 0 - mid : 0;
  var minPrecision = baseDecimals - precision > positiveValue.length - 1 ? baseDecimals - positiveValue.length + 1 : precision;
  var decimalsZerosLength = baseDecimals < minPrecision ? baseDecimals : minPrecision; // TODO: refactor

  var fractional = (("" + '0'.repeat(padding) + positiveValue).substr(mid < 0 ? 0 : mid) + "000").substr(0, decimalsZerosLength);
  return {
    fractional: fractional,
    integer: "" + (isNegative ? '-' : '') + (integer || '0')
  };
}

var NUMBER_REGEX = /*#__PURE__*/new RegExp('(\\d+?)(?=(\\d{3})+(?!\\d)|$)', 'g');
function formatInteger(value) {
  if (value.length === 0) {
    return '0';
  }

  var isNegative = value[0].startsWith('-');
  var matched = isNegative ? value.substr(1).match(NUMBER_REGEX) : value.match(NUMBER_REGEX);
  return matched ? "" + (isNegative ? '-' : '') + matched.join(',') : value;
}

var startPositions = ['start-space', 'start'];
function isStartPosition(value) {
  return startPositions.includes(value);
}

var nbsp = ' ';
function makeFormattedBalance(_ref) {
  var _rawInteger$;

  var rawInteger = _ref.rawInteger,
      _ref$rawFractional = _ref.rawFractional,
      rawFractional = _ref$rawFractional === void 0 ? '' : _ref$rawFractional,
      symbolPosition = _ref.symbolPosition,
      tokenSymbol = _ref.tokenSymbol,
      variant = _ref.variant,
      si = _ref.si;
  var isStartUnit = isStartPosition(symbolPosition);
  var isNegative = (_rawInteger$ = rawInteger[0]) === null || _rawInteger$ === void 0 ? void 0 : _rawInteger$.startsWith('-');
  var startSymbol = isStartUnit ? tokenSymbol : '';
  var startSpace = symbolPosition === 'start-space' ? nbsp : '';
  var negativeSign = isNegative ? '-' : '';
  var integer = formatInteger(isNegative ? rawInteger.substr(1) : rawInteger) || '0';
  var fractional = {
    "default": function _default() {
      return rawFractional;
    },
    'trim-fractional-zeros': function trimFractionalZeros() {
      return rawFractional.replace(/^(\d*?)0*$/, '$1');
    }
  }[variant]();
  var decimalSeparator = fractional ? '.' : '';
  var siPower = (si === null || si === void 0 ? void 0 : si.value) || '';
  var endSpace = symbolPosition === 'end-space' ? nbsp : '';
  var endSymbol = !isStartUnit ? tokenSymbol : '';
  return {
    formatted: [startSymbol, startSpace, negativeSign, integer, decimalSeparator, fractional, siPower, endSpace, endSymbol].join('').trim(),
    detailed: {
      startSymbol: startSymbol,
      startSpace: startSpace,
      negativeSign: negativeSign,
      integer: integer,
      decimalSeparator: decimalSeparator,
      fractional: fractional,
      siPower: siPower,
      endSpace: endSpace,
      endSymbol: endSymbol
    }
  };
}

function formatBalance(_ref) {
  var amountInBaseUnits = _ref.amountInBaseUnits,
      baseDecimals = _ref.baseDecimals,
      _ref$tokenSymbol = _ref.tokenSymbol,
      tokenSymbol = _ref$tokenSymbol === void 0 ? '' : _ref$tokenSymbol,
      _ref$precision = _ref.precision,
      precision = _ref$precision === void 0 ? 2 : _ref$precision,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      _ref$symbolPosition = _ref.symbolPosition,
      symbolPosition = _ref$symbolPosition === void 0 ? 'end-space' : _ref$symbolPosition,
      _ref$withSI = _ref.withSI,
      withSI = _ref$withSI === void 0 ? false : _ref$withSI;
  var balanceString = bnToBn(amountInBaseUnits).toString();

  if (balanceString.length === 0 || balanceString === '0') {
    return makeFormattedBalance({
      rawInteger: '0',
      rawFractional: '',
      variant: variant,
      symbolPosition: symbolPosition,
      tokenSymbol: tokenSymbol
    });
  }

  var _getDecimal = getDecimal(balanceString, baseDecimals, precision),
      fractional = _getDecimal.fractional,
      integer = _getDecimal.integer;

  var si = withSI ? calcSI(integer) : null;

  if (!si) {
    return makeFormattedBalance({
      rawInteger: integer,
      rawFractional: fractional,
      variant: variant,
      symbolPosition: symbolPosition,
      tokenSymbol: tokenSymbol
    });
  }

  var _getDecimal2 = getDecimal(balanceString, baseDecimals + si.power, precision),
      integerSI = _getDecimal2.integer,
      fractionalSI = _getDecimal2.fractional;

  return makeFormattedBalance({
    rawInteger: integerSI,
    rawFractional: fractionalSI,
    variant: variant,
    symbolPosition: symbolPosition,
    tokenSymbol: tokenSymbol,
    si: si
  });
}
function calcSI(baseNumber) {
  var digit = baseNumber.length;
  if (digit > 9) return precisions.billion;
  if (digit > 6) return precisions.million;
  if (digit > 3) return precisions.thousand;
  return null;
}
var precisions = {
  thousand: {
    power: 3,
    value: 'K'
  },
  million: {
    power: 6,
    value: 'M'
  },
  billion: {
    power: 9,
    value: 'B'
  }
};

// eslint-disable-next-line max-classes-per-file
var Fraction = /*#__PURE__*/function () {
  function Fraction(numerator, denominator) {
    if (denominator === void 0) {
      denominator = new BN(1);
    }

    var _this$round = this.round(bnToBn(numerator), bnToBn(denominator)),
        roundedNumerator = _this$round[0],
        roundedDenominator = _this$round[1];

    this.numerator = roundedNumerator;
    this.denominator = roundedDenominator;
  }

  Fraction.isFraction = function isFraction(value) {
    return value instanceof Fraction;
  };

  var _proto = Fraction.prototype;

  _proto.toBN = function toBN() {
    return this.numerator.div(this.denominator);
  };

  _proto.toDecimal = function toDecimal(baseDecimals, precision) {
    var multiplier = new BN(10).pow(new BN(precision));
    return getDecimal(this.numerator.mul(multiplier).div(this.denominator).toString(), baseDecimals + precision, precision);
  };

  _proto.add = function add(value) {
    var _toFraction = toFraction(value),
        denominator = _toFraction.denominator,
        numerator = _toFraction.numerator;

    return new Fraction(this.numerator.mul(denominator).add(numerator.mul(this.denominator)), this.denominator.mul(denominator));
  };

  _proto.sub = function sub(value) {
    var _toFraction2 = toFraction(value),
        denominator = _toFraction2.denominator,
        numerator = _toFraction2.numerator;

    return new Fraction(this.numerator.mul(denominator).sub(numerator.mul(this.denominator)), this.denominator.mul(denominator));
  };

  _proto.div = function div(value) {
    var _toFraction3 = toFraction(value),
        denominator = _toFraction3.denominator,
        numerator = _toFraction3.numerator;

    return new Fraction(this.numerator.mul(denominator), this.denominator.mul(numerator));
  };

  _proto.mul = function mul(value) {
    var _toFraction4 = toFraction(value),
        denominator = _toFraction4.denominator,
        numerator = _toFraction4.numerator;

    return new Fraction(this.numerator.mul(numerator), this.denominator.mul(denominator));
  };

  _proto.eq = function eq(value) {
    return this.toBN().eq(toFraction(value).toBN());
  };

  _proto.gt = function gt(value) {
    var _toFraction5 = toFraction(value),
        denominator = _toFraction5.denominator,
        numerator = _toFraction5.numerator;

    return this.numerator.mul(denominator).gt(numerator.mul(this.denominator));
  };

  _proto.lt = function lt(value) {
    var _toFraction6 = toFraction(value),
        denominator = _toFraction6.denominator,
        numerator = _toFraction6.numerator;

    return this.numerator.mul(denominator).lt(numerator.mul(this.denominator));
  };

  _proto.lte = function lte(value) {
    var _toFraction7 = toFraction(value),
        denominator = _toFraction7.denominator,
        numerator = _toFraction7.numerator;

    return this.numerator.mul(denominator).lte(numerator.mul(this.denominator));
  };

  _proto.gte = function gte(value) {
    var _toFraction8 = toFraction(value),
        denominator = _toFraction8.denominator,
        numerator = _toFraction8.numerator;

    return this.numerator.mul(denominator).gte(numerator.mul(this.denominator));
  };

  _proto.abs = function abs() {
    return new Fraction(this.numerator.abs(), this.denominator.abs());
  };

  _proto.pow = function pow(rawPower) {
    var power = bnToBn(rawPower);
    return new Fraction(this.numerator.pow(power), this.denominator.pow(power));
  };

  _proto.isZero = function isZero() {
    return this.numerator.isZero();
  };

  _proto.isNeg = function isNeg() {
    return this.numerator.isNeg();
  };

  _proto.toNumber = function toNumber() {
    return parseFloat(this.toString());
  };

  _proto.toString = function toString() {
    var fractionalPrecisionMultiplier = new BN(10).pow(new BN(Fraction.decimalsAccuracy));
    var integer = this.numerator.div(this.denominator);
    var remainder = this.numerator.sub(this.denominator.mul(integer));
    var fractional = remainder.add(this.denominator) // add one denominator so that after division we get result: `fractionalPrecisionMultiplier + fractional = 100023` (1.00023 without fractionalPrecisionMultiplier multiplying)
    .mul(fractionalPrecisionMultiplier).div(this.denominator).toString().slice(1); // remove the first digit to take a fraction with padding 100023 -> 00023

    return integer + "." + fractional;
  };

  _proto.valueOf = function valueOf() {
    return this.toNumber();
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.round = function round(numerator, denominator) {
    if (numerator.length <= Fraction.maxWordsInNumerator) {
      return [numerator, denominator];
    }

    return [numerator.mul(decimalsToWei(Fraction.decimalsAccuracy)).div(denominator), decimalsToWei(Fraction.decimalsAccuracy)];
  };

  return Fraction;
}();
Fraction.decimalsAccuracy = 18;
Fraction.maxWordsInNumerator = 96;
function toFraction(value) {
  if (value instanceof Fraction) {
    return value;
  }

  if (typeof value === 'object' && 'toFraction' in value) {
    return value.toFraction();
  }

  if (typeof value === 'number') {
    var integer = Math.floor(value);
    var fractional = value - integer;

    if (fractional) {
      return new Fraction(fractional.toFixed(18).replace(/0\.(\d+)/, '1$1'), decimalsToWei(18)).sub(new BN(1)).add(new BN(integer));
    }

    return new Fraction(new BN(integer));
  }

  return new Fraction(value);
}

var uniqType = /*#__PURE__*/Symbol('Currency');
var Currency = /*#__PURE__*/function () {
  function Currency(symbol, decimals) {
    this.symbol = symbol;
    this.decimals = decimals;
    this._type = uniqType;
  }

  var _proto = Currency.prototype;

  _proto.toJSON = function toJSON() {
    var view = {
      _type: 'Currency',
      symbol: this.symbol,
      decimals: this.decimals
    };
    return view;
  };

  _proto.equals = function equals(a) {
    return this.symbol === a.symbol && this.decimals === a.decimals;
  };

  return Currency;
}();

var uniqType$1 = /*#__PURE__*/Symbol('Token');
var Token = /*#__PURE__*/function () {
  function Token(address, symbol, decimals, network) {
    this.address = address;
    this.symbol = symbol;
    this.decimals = decimals;
    this.network = network;
    this._type = uniqType$1;
  }

  var _proto = Token.prototype;

  _proto.toJSON = function toJSON() {
    var view = {
      _type: 'Token',
      address: this.address,
      symbol: this.symbol,
      decimals: this.decimals,
      network: this.network
    };
    return view;
  };

  _proto.equals = function equals(a) {
    return isEqualHex(this.address, a.address);
  };

  return Token;
}();

var Amount = /*#__PURE__*/function () {
  function Amount(amount, currency) {
    this.currency = currency;
    this.value = toFraction(amount);
  }

  var _proto = Amount.prototype;

  _proto.toFormattedString = function toFormattedString(precision, withSymbol) {
    return this.toFormattedBalance(precision, withSymbol).formatted;
  };

  _proto.toShortString = function toShortString(precision, withSymbol) {
    return this.toFormattedBalance(precision, withSymbol, true).formatted;
  };

  _proto.withValue = function withValue(newValue) {
    return this.makeAmount(toFraction(newValue), this.currency);
  };

  _proto.sub = function sub(value) {
    return this.makeAmount(this.value.sub(toFraction(value)), this.currency);
  };

  _proto.add = function add(value) {
    return this.makeAmount(this.value.add(toFraction(value)), this.currency);
  };

  _proto.div = function div(value) {
    return this.makeAmount(this.value.div(toFraction(value)), this.currency);
  };

  _proto.mul = function mul(value) {
    return this.makeAmount(this.value.mul(toFraction(value)), this.currency);
  };

  _proto.isZero = function isZero() {
    return this.value.isZero();
  };

  _proto.isNeg = function isNeg() {
    return this.value.isNeg();
  };

  _proto.eq = function eq(value) {
    return this.eqValues(value) && this.currency.equals(value.currency);
  };

  _proto.eqValues = function eqValues(value) {
    return this.value.eq(toFraction(value));
  } // TODO make allowance for currency.decimals
  ;

  _proto.gt = function gt(value) {
    return this.value.gt(toFraction(value));
  };

  _proto.lt = function lt(value) {
    return this.value.lt(toFraction(value));
  };

  _proto.gte = function gte(value) {
    return this.value.gte(toFraction(value));
  };

  _proto.lte = function lte(value) {
    return this.value.lte(toFraction(value));
  };

  _proto.abs = function abs() {
    return this.value.abs();
  };

  _proto.pow = function pow(power) {
    return this.value.pow(power);
  };

  _proto.toBN = function toBN() {
    return this.value.toBN();
  };

  _proto.toFraction = function toFraction() {
    return this.value;
  };

  _proto.toDecimal = function toDecimal(precision) {
    return this.value.toDecimal(this.currency.decimals, precision);
  };

  _proto.toNumber = function toNumber() {
    return this.value.toNumber();
  };

  _proto.toString = function toString(base, length) {
    return this.toBN().toString(base, length);
  };

  _proto.valueOf = function valueOf() {
    return this.value.valueOf();
  };

  _proto.toSignificantValue = function toSignificantValue(significantFractionalDigits) {
    var minSignificantValue = getSignificantValue(this.currency, significantFractionalDigits);
    return this.gte(minSignificantValue) ? this : this.makeAmount(0, this.currency);
  };

  return Amount;
}();

var uniqType$2 = /*#__PURE__*/Symbol('TokenAmount');
var TokenAmount = /*#__PURE__*/function (_Amount) {
  _inheritsLoose(TokenAmount, _Amount);

  function TokenAmount() {
    var _this;

    _this = _Amount.apply(this, arguments) || this;
    _this._type = uniqType$2;
    return _this;
  } // eslint-disable-next-line class-methods-use-this


  var _proto = TokenAmount.prototype;

  _proto.makeAmount = function makeAmount(amount, token) {
    return new TokenAmount(amount, token);
  };

  _proto.toFormattedBalance = function toFormattedBalance(precision, withSymbol, withSI) {
    if (precision === void 0) {
      precision = 2;
    }

    if (withSymbol === void 0) {
      withSymbol = true;
    }

    return formatBalance({
      withSI: withSI,
      amountInBaseUnits: this.toBN(),
      tokenSymbol: withSymbol ? this.currency.symbol : undefined,
      baseDecimals: this.currency.decimals,
      precision: precision,
      symbolPosition: 'end-space'
    });
  };

  _proto.withToken = function withToken(newToken) {
    return new TokenAmount(this.toFraction(), newToken);
  };

  return TokenAmount;
}(Amount);

function denormolizeAmount(amount, token) {
  var fractionAmount = amount.toFraction();
  return new TokenAmount(amount.currency.decimals > token.decimals ? fractionAmount.div(decimalsToWei(amount.currency.decimals - token.decimals)) : fractionAmount.mul(decimalsToWei(token.decimals - amount.currency.decimals)), token);
}

function normalizeAmounts(amounts, decimals) {
  if (amounts.length < 1) {
    return [];
  }

  var maxDecimal = decimals !== undefined ? decimals : amounts.map(function (amount) {
    return amount.currency.decimals;
  }).reduce(function (max, current) {
    return current > max ? current : max;
  });
  return amounts.map(function (amount) {
    var diff = maxDecimal - amount.currency.decimals;
    return {
      decimals: maxDecimal,
      original: amount,
      value: diff >= 0 ? amount.toFraction().mul(decimalsToWei(diff)) : amount.toFraction().div(decimalsToWei(-diff))
    };
  });
}

/**
 * Calculate average value with values weight
 * @return avg(x1, x2) = (x1.value * x1.weight + x2.value * x2.weight) / (x1.weight + x2.weight)
 */

function calcAvg() {
  for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  if (rest.length <= 1) {
    return toFraction(rest.length && rest[0].value || 0);
  }

  var avg = rest.reduce(function (x1, x2) {
    var weight1 = toFraction(x1.weight || 1);
    var weight2 = toFraction(x2.weight || 1);
    var value1 = toFraction(x1.value);
    var value2 = toFraction(x2.value);
    var fullWeight = weight1.add(weight2);

    if (fullWeight.isZero()) {
      return {
        value: 0,
        weight: 0
      };
    }

    return {
      value: value1.mul(weight1).add(value2.mul(weight2)).div(fullWeight),
      weight: fullWeight
    };
  });
  return toFraction(avg.value);
}

function sumTokenAmountsByToken(amounts) {
  var reducedAmounts = amounts.reduce(function (acc, cur) {
    var _acc$get;

    var prev = ((_acc$get = acc.get(cur.currency.address)) === null || _acc$get === void 0 ? void 0 : _acc$get.toFraction()) || 0;
    acc.set(cur.currency.address, cur.add(prev));
    return acc;
  }, new Map());
  return Array.from(reducedAmounts.values());
}

var uniqType$3 = /*#__PURE__*/Symbol('PercentAmount');
var PercentAmount = /*#__PURE__*/function (_Amount) {
  _inheritsLoose(PercentAmount, _Amount);

  function PercentAmount(amount) {
    var _this;

    _this = _Amount.call(this, amount, new Currency('%', 0)) || this;
    _this._type = uniqType$3;
    return _this;
  } // eslint-disable-next-line class-methods-use-this


  var _proto = PercentAmount.prototype;

  _proto.makeAmount = function makeAmount(amount) {
    return new PercentAmount(amount);
  };

  _proto.toFormattedBalance = function toFormattedBalance(precision, withSymbol, withSI) {
    if (precision === void 0) {
      precision = 2;
    }

    if (withSymbol === void 0) {
      withSymbol = true;
    }

    var multiplier = new BN(10).pow(new BN(precision));
    var value = this.toFraction().mul(multiplier);
    return formatBalance({
      withSI: withSI,
      amountInBaseUnits: value.toBN(),
      tokenSymbol: withSymbol ? this.currency.symbol : undefined,
      baseDecimals: precision,
      precision: precision,
      symbolPosition: 'end'
    });
  };

  return PercentAmount;
}(Amount);

var uniqType$4 = /*#__PURE__*/Symbol('LiquidityAmount type');
var LiquidityAmount = /*#__PURE__*/function (_Amount) {
  _inheritsLoose(LiquidityAmount, _Amount);

  function LiquidityAmount(amount, currency, options) {
    var _this$options, _this$options2;

    var _this;

    _this = _Amount.call(this, amount, currency) || this;
    _this.options = options;
    _this._type = uniqType$4;
    _this.defaultPrecision = ((_this$options = _this.options) === null || _this$options === void 0 ? void 0 : _this$options.precisions) || 2;
    _this.defaultSymbolPosition = ((_this$options2 = _this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.symbolPosition) || 'start';
    return _this;
  } // eslint-disable-next-line class-methods-use-this


  var _proto = LiquidityAmount.prototype;

  _proto.makeAmount = function makeAmount(amount, currency) {
    return new LiquidityAmount(amount, currency, this.options);
  };

  _proto.toFormattedBalance = function toFormattedBalance(precision, withSymbol, withSI) {
    if (precision === void 0) {
      precision = this.defaultPrecision;
    }

    if (withSymbol === void 0) {
      withSymbol = true;
    }

    return formatBalance({
      withSI: withSI,
      amountInBaseUnits: this.toBN(),
      tokenSymbol: withSymbol ? this.currency.symbol : undefined,
      baseDecimals: this.currency.decimals,
      precision: precision,
      symbolPosition: this.defaultSymbolPosition
    });
  };

  return LiquidityAmount;
}(Amount);

var zeroAddress = '0x0000000000000000000000000000000000000000';
var mainnetTokens = {
  AKRO: '0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7',
  COMP: '0xc00e94cb662c3520282e6f5717214004a7f26888',
  CRV: '0xd533a949740bb3306d119cc777fa900ba034cd52',
  DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
  SNX: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
  TUSD: '0x0000000000085d4780b73119b644ae5ecd22b376',
  USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  bUSD: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
  sUSD: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
  '3Crv': '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
  crvSBTC: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
  crvBUSD: '0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B',
  crvCOMP: '0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2',
  yCRV: '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8'
};

var AllCoinsToken = /*#__PURE__*/function (_Token) {
  _inheritsLoose(AllCoinsToken, _Token);

  function AllCoinsToken(tokens, symbol) {
    var _this;

    if (symbol === void 0) {
      symbol = 'All Coins';
    }

    _this = _Token.call(this, zeroAddress, symbol, 18, 'eth') || this;
    _this.tokens = tokens;
    return _this;
  }

  return AllCoinsToken;
}(Token);

exports.AllCoinsToken = AllCoinsToken;
exports.Amount = Amount;
exports.Currency = Currency;
exports.Fraction = Fraction;
exports.LiquidityAmount = LiquidityAmount;
exports.PercentAmount = PercentAmount;
exports.Token = Token;
exports.TokenAmount = TokenAmount;
exports.bnToBn = bnToBn;
exports.calcAvg = calcAvg;
exports.decimalsToWei = decimalsToWei;
exports.denormolizeAmount = denormolizeAmount;
exports.formatBalance = formatBalance;
exports.formatInteger = formatInteger;
exports.fromBaseUnit = fromBaseUnit;
exports.getDecimal = getDecimal;
exports.getSignificantValue = getSignificantValue;
exports.hexStripPrefix = hexStripPrefix;
exports.hexToBn = hexToBn;
exports.isEqualHex = isEqualHex;
exports.isHex = isHex;
exports.isToBN = isToBN;
exports.mainnetTokens = mainnetTokens;
exports.max = max;
exports.min = min;
exports.normalizeAmounts = normalizeAmounts;
exports.roundWei = roundWei;
exports.sumTokenAmountsByToken = sumTokenAmountsByToken;
exports.toBaseUnit = toBaseUnit;
exports.toFraction = toFraction;
exports.zeroAddress = zeroAddress;
//# sourceMappingURL=primitives.cjs.development.js.map
