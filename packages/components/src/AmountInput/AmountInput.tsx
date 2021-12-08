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
import { Amount, decimalsToWei, IToBN } from '@akropolis-web/primitives';
import FormHelperText from '@material-ui/core/FormHelperText';

import { SelectInput, SelectInputProps as SelectInputPropsType } from '../SelectInput/SelectInput';
import { TextInput } from '../TextInput';
import { DecimalsInput } from '../DecimalsInput/DecimalsInput';
import { useStyles } from './AmountInput.style';

interface IOwnProps<A extends Amount> {
  currencies: Array<A['currency']>;
  value: A | null | '';
  maxValue?: BN | IToBN;
  allowedMax?: BN;
  hideCurrencySelect?: boolean;
  SelectInputProps?: Pick<SelectInputPropsType, 'classes'>;
  onChange: (value: A) => void;
  makeAmount(value: BN, currency: A['currency']): A;
  getCurrencyIdentifier(currency: A['currency']): string;
  getCurrencyLabel(currency: A['currency']): JSX.Element | string;
  renderSelectOnUnpicked?: () => React.ReactNode;
}

export type AmountInputProps<A extends Amount> = IOwnProps<A> &
  Omit<ComponentPropsWithoutRef<typeof TextInput>, 'onChange'>;

// TODO add support of negative value
export function AmountInput<A extends Amount>(props: AmountInputProps<A>) {
  const {
    onChange,
    value,
    maxValue,
    allowedMax,
    disabled,
    currencies,
    hideCurrencySelect,
    SelectInputProps = {},
    InputProps = {},
    SelectProps = {},
    makeAmount,
    getCurrencyIdentifier,
    getCurrencyLabel,
    FormHelperTextProps,
    helperText,
    error,
    renderSelectOnUnpicked,
    ...restInputProps
  } = props;
  const classes = useStyles();

  const tokenAmount = value || null;

  const currentValue = useMemo(() => tokenAmount?.toBN() || new BN(0), [tokenAmount]);
  const currentCurrency = tokenAmount?.currency;
  const currentDecimals = currentCurrency?.decimals || 0;

  const currentCurrencyUpdatingTrigger = useUpdatingTrigger(currentCurrency, (a, b) =>
    Boolean(a && b && a.equals(b)),
  );
  const isSingleOptionSelect = Boolean(currencies.length <= 1 && currentCurrency);

  // update value if currencies is not contain current currency
  useEffect(() => {
    const isWrongCurrentCurrency =
      currentCurrency && !currencies.find(item => item.equals(currentCurrency));
    const defaultCurrency = currencies[0];

    if (defaultCurrency && isWrongCurrentCurrency) {
      // async change is necessary for the correct working of subscriptions in the final-form during the first render
      const nextValue = getNormalizedValue(
        currentValue,
        currentCurrency?.decimals || defaultCurrency.decimals,
        defaultCurrency.decimals,
      );
      Promise.resolve().then(() => onChange(makeAmount(nextValue, defaultCurrency)));
    }
  }, [currentCurrency, currencies, onChange, makeAmount, currentValue]);

  const handleInputChange = useCallback(
    (nextValue: string) => {
      const nextValueInBN = new BN(nextValue);
      const validatedValue =
        allowedMax && nextValueInBN.gt(allowedMax) ? currentValue : nextValueInBN;

      currentCurrency && onChange(makeAmount(validatedValue, currentCurrency));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      allowedMax,
      currentCurrencyUpdatingTrigger,
      currentValue,
      currentCurrency,
      onChange,
      makeAmount,
    ],
  );

  const handleCurrencyChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const currency = event.target.value;
      const nextCurrency =
        getCurrencyIdentifier && currencies.find(item => getCurrencyIdentifier(item) === currency);

      if (!nextCurrency) return;

      const nextValue = getNormalizedValue(
        currentValue,
        currentCurrency?.decimals || nextCurrency.decimals,
        nextCurrency.decimals,
      );

      onChange(makeAmount(nextValue, nextCurrency));
    },
    [
      getCurrencyIdentifier,
      currencies,
      currentCurrency?.decimals,
      onChange,
      makeAmount,
      currentValue,
    ],
  );

  const currencySelectOptions = useMemo(
    () =>
      hideCurrencySelect
        ? []
        : currencies.map(item => ({
            id: getCurrencyIdentifier(item),
            label: getCurrencyLabel(item),
          })),
    [currencies, getCurrencyIdentifier, getCurrencyLabel, hideCurrencySelect],
  );

  return (
    <div>
      <div className={classes.inputs}>
        {renderDecimalInput()}
        {!hideCurrencySelect && renderSelectInput()}
      </div>
      {helperText && (
        <FormHelperText variant="standard" error={error} {...FormHelperTextProps}>
          {helperText}
        </FormHelperText>
      )}
    </div>
  );

  function renderDecimalInput() {
    return (
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
          disabled={disabled}
          InputProps={{
            className: classes.decimalInput,
            ...InputProps,
          }}
        />
      </div>
    );
  }

  function renderSelectInput() {
    return (
      <div className={classes.select}>
        <SelectInput
          options={currencySelectOptions}
          onChange={handleCurrencyChange}
          value={(currentCurrency && getCurrencyIdentifier(currentCurrency)) || ''}
          disableVariant="text"
          disabled={isSingleOptionSelect}
          InputProps={{ className: classes.selectInput }}
          SelectProps={{
            displayEmpty: true,
            ...(!currentCurrency && { renderValue: renderSelectOnUnpicked }),
            ...SelectProps,
          }}
          {...SelectInputProps}
        />
      </div>
    );
  }
}

function getNormalizedValue(value: BN, prevDecimals: number, nextDecimals: number) {
  if (prevDecimals === nextDecimals) {
    return value;
  }

  return prevDecimals > nextDecimals
    ? value.div(decimalsToWei(prevDecimals - nextDecimals))
    : value.mul(decimalsToWei(nextDecimals - prevDecimals));
}

function useUpdatingTrigger<V>(deps: V, isEquals: (prev: V, cur: V) => boolean) {
  const prevValueRef = useRef<V>();
  const [updatedDepsTrigger, setUpdatedDepsTrigger] = useState<Record<string, never>>(() => ({}));

  useEffect(() => {
    const prevDeps = prevValueRef.current;
    prevValueRef.current = deps;

    if (prevDeps && !isEquals(prevDeps, deps)) {
      setUpdatedDepsTrigger({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);

  return updatedDepsTrigger;
}
