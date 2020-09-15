import React, {
  useEffect,
  useCallback,
  ComponentPropsWithoutRef,
  useRef,
  useState,
  useMemo,
} from 'react';
import BN from 'bn.js';
import cn from 'classnames';
import { Amount, IToBN } from '@akropolis-web/primitives';

import { SelectInput } from '../SelectInput/SelectInput';
import { TextInput } from '../TextInput';
import { DecimalsInput } from '../DecimalsInput';
import { useStyles } from './AmountInput.style';

interface IOwnProps<A extends Amount> {
  currencies: Array<A['currency']>;
  value: A | null | '';
  maxValue?: BN | IToBN;
  hideCurrencySelect?: boolean;
  onChange: (value: A) => void;
  makeAmount(value: BN, currency: A['currency']): A;
  getCurrencyIdentifier: (currency: A['currency']) => string;
  getCurrencyLabel: (currency: A['currency']) => JSX.Element | string;
}

export type AmountInputProps<A extends Amount> = IOwnProps<A> &
  Omit<ComponentPropsWithoutRef<typeof TextInput>, 'onChange'>;

// TODO add support of negative value
export function AmountInput<A extends Amount>(props: AmountInputProps<A>) {
  const {
    onChange,
    value,
    maxValue,
    disabled,
    currencies,
    hideCurrencySelect,
    makeAmount,
    getCurrencyIdentifier,
    getCurrencyLabel,
    ...restInputProps
  } = props;
  const classes = useStyles();

  const tokenAmount = value || null;

  const defaultCurrency = currencies[0] as A['currency'] | undefined;

  const currentValue = tokenAmount?.toBN() || new BN(0);
  const currentCurrency = tokenAmount?.currency || defaultCurrency;
  const currentDecimals = currentCurrency?.decimals || 0;

  const currentCurrencyUpdatingTrigger = useUpdatingTrigger(currentCurrency, (a, b) =>
    Boolean(a && b && a.equals(b)),
  );

  const isSingleOptionSelect = Boolean(currencies.length <= 1 && currentCurrency);

  const isDisabled = Boolean(disabled);

  // initialize or update value if currencies is not contain current currency
  useEffect(() => {
    const isWrongCurrentCurrency =
      currentCurrency && !currencies.find(item => item.equals(currentCurrency));

    if (defaultCurrency && (!tokenAmount || isWrongCurrentCurrency)) {
      // async change is necessary for the correct working of subscriptions in the final-form during the first render
      Promise.resolve().then(() => onChange(makeAmount(currentValue, defaultCurrency)));
    }
  }, [currentCurrency, currencies]);

  const handleInputChange = useCallback(
    (nextValue: string) => {
      currentCurrency && onChange(makeAmount(new BN(nextValue), currentCurrency));
    },
    [onChange, currentCurrencyUpdatingTrigger],
  );

  const handleCurrencyChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextCurrency = event.target.value;
      const currency =
        getCurrencyIdentifier &&
        currencies.find(item => getCurrencyIdentifier(item) === nextCurrency);

      currency && onChange(makeAmount(currentValue, currency));
    },
    [onChange, currencies, currentValue.toString()],
  );

  const currencySelectOptions = useMemo(
    () =>
      hideCurrencySelect
        ? []
        : currencies.map(item => ({
            id: getCurrencyIdentifier(item),
            label: getCurrencyLabel(item),
          })),
    [currencies, hideCurrencySelect],
  );

  return (
    <div className={classes.root}>
      <div
        className={cn(classes.decimalInputWrapper, {
          [classes.withCurrencySelect]: !hideCurrencySelect && !isSingleOptionSelect,
        })}
      >
        <DecimalsInput
          {...restInputProps}
          baseDecimals={currentDecimals}
          value={currentValue.toString()}
          maxValue={maxValue}
          onChange={handleInputChange}
          disabled={isDisabled}
          InputProps={{
            className: classes.decimalInput,
          }}
        />
      </div>
      {!hideCurrencySelect && (
        <div className={classes.select}>
          <SelectInput
            options={currencySelectOptions}
            onChange={handleCurrencyChange}
            value={currentCurrency && getCurrencyIdentifier(currentCurrency)}
            InputProps={{ className: classes.selectInput }}
          />
        </div>
      )}
    </div>
  );
}

function useUpdatingTrigger<V>(deps: V, isEquals: (prev: V, cur: V) => boolean) {
  const prevValueRef = useRef<V>();
  const [updatedDepsTrigger, setUpdatedDepsTrigger] = useState<{}>(() => ({}));

  useEffect(() => {
    const prevDeps = prevValueRef.current;
    prevValueRef.current = deps;

    if (prevDeps && !isEquals(prevDeps, deps)) {
      setUpdatedDepsTrigger({});
    }
  }, [deps]);

  return updatedDepsTrigger;
}
