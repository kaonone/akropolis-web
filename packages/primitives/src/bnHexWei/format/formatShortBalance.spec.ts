import BN from 'bn.js';

import { formatShortBalance } from './formatShortBalance';

describe.only('formatShortBalance', (): void => {
  const TESTVAL = new BN('123456789000');

  it('formats empty to 0', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: '0',
        baseDecimals: 0,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('0 Unit');
  });

  it('formats 123,456,789,000 (decimals=15)', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 15,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('0.0001 Unit');
  });

  it('formats -123,456,789,000 (decimals=15)', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL.muln(-1),
        baseDecimals: 15,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('-0.0001 Unit');
  });

  it('formats 123,456,789,000 (decimals=36)', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 36,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('0.0000000000000000000000001 Unit');
  });

  it('formats 123,456,789,000 (decimals=12)', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 12,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('0.12 Unit');
  });

  it('formats 123,456,789,000 (decimals=9)', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 9,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('123.45 Unit');
  });

  it('formats 123,456,789,000 (decimals=8)', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 8,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('1.23K Unit');
  });

  it('formats 123,456,789,000 (decimals=8) without symbol', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 8,
      }),
    ).toEqual('1.23K');
  });

  it('formats 123,456,789,000 (decimals=7)', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 7,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('12.34K Unit');
  });

  it('formats 123,456,789,000 (decimals=6)', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 6,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('0.12M Unit');
  });

  it('formats 123,456,789,000 (decimals=5)', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 5,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('1.23M Unit');
  });

  it('formats 123,456,789,000 (decimals=4)', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 4,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('12.34M Unit');
  });

  it('formats 123,456,789,000 (decimals=3)', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 3,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('0.12B Unit');
  });

  it('formats 123,456,789,000 (decimals=2)', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 2,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('1.23B Unit');
  });

  it('formats 123,456,789,000 (decimals=1)', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 1,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('12.34B Unit');
  });

  it('formats 123,456,789,000 * 1000 (decimals=1)', (): void => {
    expect(
      formatShortBalance({
        amountInBaseUnits: TESTVAL.muln(1000),
        baseDecimals: 1,
        tokenSymbol: 'Unit',
      }),
    ).toEqual('12,345.67B Unit');
  });
});
