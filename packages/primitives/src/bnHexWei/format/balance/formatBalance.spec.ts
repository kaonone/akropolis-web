import BN from 'bn.js';

import { formatBalance } from './formatBalance';

describe('formatBalance without SI', (): void => {
  const TESTVAL = new BN('123456789000');

  it('formats empty to 0', (): void => {
    expect(
      formatBalance({
        amountInBaseUnits: '0',
        baseDecimals: 0,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('0 Unit');
  });

  it('formats 123,456,789,000 (decimals=12)', (): void => {
    expect(
      formatBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 12,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('0.12 Unit');
  });

  it('formats 123,456,789,000 (decimals=9)', (): void => {
    expect(
      formatBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 9,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('123.45 Unit');
  });

  it('formats 123,456,789,000 (decimals=6)', (): void => {
    expect(
      formatBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 6,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('123,456.78 Unit');
  });

  it('formats 123,456,789,000 * 10 (decimals=12)', (): void => {
    expect(
      formatBalance({
        amountInBaseUnits: TESTVAL.muln(10),
        baseDecimals: 12,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('1.23 Unit');
  });

  it('formats 123,456,789,000 * 100 (decimals=12)', (): void => {
    expect(
      formatBalance({
        amountInBaseUnits: TESTVAL.muln(100),
        baseDecimals: 12,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('12.34 Unit');
  });

  it('formats 123,456,789,000 * 1000 (decimals=12)', (): void => {
    expect(
      formatBalance({
        amountInBaseUnits: TESTVAL.muln(1000),
        baseDecimals: 12,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('123.45 Unit');
  });

  it('formats -123,456,789,000 (decimals=9)', (): void => {
    expect(
      formatBalance({
        amountInBaseUnits: new BN('-123456789000'),
        baseDecimals: 9,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('-123.45 Unit');
  });

  it('formats 123,456,789,000 without whitespace (decimals=12)', (): void => {
    expect(
      formatBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 12,
      }).formatted,
    ).toEqual('0.12');
  });

  it('formats 123,456,789,000 with precision (decimals=12, precision=12)', (): void => {
    expect(
      formatBalance({
        amountInBaseUnits: TESTVAL,
        baseDecimals: 12,
        precision: 12,
      }).formatted,
    ).toEqual('0.123456789000');
  });

  it('should increase precision to first non zero digit', (): void => {
    expect(
      formatBalance({
        amountInBaseUnits: '123',
        baseDecimals: 8,
        precision: 2,
      }).formatted,
    ).toEqual('0.000001');
  });
});

describe.only('formatBalance with SI', (): void => {
  const TESTVAL = new BN('123456789000');

  it('formats empty to 0', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: '0',
        baseDecimals: 0,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('0 Unit');
  });

  it('formats 123,456,789,000 (decimals=15)', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL,
        baseDecimals: 15,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('0.0001 Unit');
  });

  it('formats -123,456,789,000 (decimals=15)', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL.muln(-1),
        baseDecimals: 15,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('-0.0001 Unit');
  });

  it('formats 123,456,789,000 (decimals=36)', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL,
        baseDecimals: 36,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('0.0000000000000000000000001 Unit');
  });

  it('formats 123,456,789,000 (decimals=12)', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL,
        baseDecimals: 12,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('0.12 Unit');
  });

  it('formats 123,456,789,000 (decimals=9)', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL,
        baseDecimals: 9,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('123.45 Unit');
  });

  it('formats 123,456,789,000 (decimals=8)', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL,
        baseDecimals: 8,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('1.23K Unit');
  });

  it('formats 123,456,789,000 (decimals=8) without symbol', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL,
        baseDecimals: 8,
      }).formatted,
    ).toEqual('1.23K');
  });

  it('formats 123,456,789,000 (decimals=7)', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL,
        baseDecimals: 7,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('12.34K Unit');
  });

  it('formats 123,456,789,000 (decimals=6)', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL,
        baseDecimals: 6,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('123.45K Unit');
  });

  it('formats 123,456,789,000 (decimals=5)', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL,
        baseDecimals: 5,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('1.23M Unit');
  });

  it('formats 123,456,789,000 (decimals=4)', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL,
        baseDecimals: 4,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('12.34M Unit');
  });

  it('formats 123,456,789,000 (decimals=3)', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL,
        baseDecimals: 3,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('123.45M Unit');
  });

  it('formats 123,456,789,000 (decimals=2)', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL,
        baseDecimals: 2,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('1.23B Unit');
  });

  it('formats 123,456,789,000 (decimals=1)', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL,
        baseDecimals: 1,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('12.34B Unit');
  });

  it('formats 123,456,789,000 * 1000 (decimals=1)', (): void => {
    expect(
      formatBalance({
        withSI: true,
        amountInBaseUnits: TESTVAL.muln(1000),
        baseDecimals: 1,
        tokenSymbol: 'Unit',
      }).formatted,
    ).toEqual('12,345.67B Unit');
  });
});
