import React, { ComponentPropsWithoutRef, useState, useCallback, useRef, useEffect } from 'react';
import cn from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import type { PopoverOrigin } from '@material-ui/core/Popover';
import {
  getOverriddenClasses,
  OverriddenClasses,
  useAncestorBackgroundHack,
} from '@akropolis-web/styles';

import { Arrow } from '../icons/Arrow';
import { TextInput } from '../TextInput';
import { useStyles } from './SelectInput.style';

export type Option = {
  id: string;
  label: string | JSX.Element;
  disabled?: boolean;
};

type OwnProps = {
  options?: Option[];
  disableVariant?: 'text' | 'default';
  classes?: OverriddenClasses<typeof useStyles>;
};

export type SelectInputProps = OwnProps & ComponentPropsWithoutRef<typeof TextInput>;

const MENU_SHIFT_HEIGHT = 20;

export function SelectInput(props: SelectInputProps) {
  const {
    options,
    children,
    disabled,
    disableVariant = 'default',
    variant = 'outlined',
    classes: overriddenClasses,
    InputProps = {},
    SelectProps = {},
    ...restProps
  } = props;
  const { className: inputClassName, ...restInputProps } = InputProps;
  const {
    className: selectClassName,
    classes: selectClasses,
    MenuProps: menuProps,
    IconComponent,
    ...restSelectProps
  } = SelectProps;
  const backgroundColor = useAncestorBackgroundHack();
  const rawClasses = useStyles({ backgroundColor });
  const classes = getOverriddenClasses(rawClasses, overriddenClasses);

  const currentWindowHeight = useWindowHeight();
  const [anchorVerticalOrigin, setAnchorVerticalOrigin] = useState<PopoverOrigin['vertical']>(
    'bottom',
  );

  const [isMenuOpen, setIsOpen] = useState(false);

  const selectInputRef = useRef<HTMLDivElement>(null);
  const menuListRef = useRef<HTMLUListElement>(null);

  const handleSelectOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleSelectClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const selectInputRect = selectInputRef.current?.getBoundingClientRect();
    const menuPaperRect = menuListRef.current?.parentElement?.getBoundingClientRect();
    if (!selectInputRect || !menuPaperRect) {
      return;
    }

    const toBottomDistance = currentWindowHeight - selectInputRect.bottom - MENU_SHIFT_HEIGHT;
    const toTopDistance = selectInputRect.top - MENU_SHIFT_HEIGHT;

    const hasBottomSpace = toBottomDistance > menuPaperRect.height;
    const hasTopSpace = toTopDistance > menuPaperRect.height;

    setAnchorVerticalOrigin((hasBottomSpace && 'bottom') || (hasTopSpace && 'top') || 'center');
  }, [currentWindowHeight, isMenuOpen]);

  return (
    <TextInput
      {...restProps}
      ref={selectInputRef}
      select
      variant={variant}
      disabled={disabled}
      className={cn(classes.root, selectClassName, {
        [classes.isOpen]: isMenuOpen,
        [classes.disableVariantText]: disabled && disableVariant === 'text',
        [classes.hasBottomSpace]: anchorVerticalOrigin === 'bottom',
        [classes.hasTopSpace]: anchorVerticalOrigin === 'top',
        [classes.withoutOutline]: variant === 'standard' || variant === 'filled',
        [classes.filled]: variant === 'filled',
      })}
      InputProps={{
        ...restInputProps,
        className: cn(classes.input, inputClassName, {
          [classes.filled]: variant === 'filled',
        }),
      }}
      SelectProps={{
        ...restSelectProps,
        classes: {
          ...selectClasses,
          select: cn(classes.select, selectClasses?.select),
        },
        MenuProps: {
          ...menuProps,
          MenuListProps: {
            ...menuProps?.MenuListProps,
            ref: menuListRef,
          },
          PaperProps: {
            variant: 'outlined',
            ...menuProps?.PaperProps,
            className: cn(classes.paper, menuProps?.PaperProps?.className, {
              [classes.hasBottomSpace]: anchorVerticalOrigin === 'bottom',
              [classes.hasTopSpace]: anchorVerticalOrigin === 'top',
              [classes.withoutOutline]: variant === 'standard' || variant === 'filled',
              [classes.withCheckmark]:
                variant === 'standard' || variant === 'filled' || restSelectProps.multiple,
              [classes.filled]: variant === 'filled',
            }),
          },
          elevation: 0,
          anchorOrigin: {
            vertical: anchorVerticalOrigin,
            horizontal: 'center',
          },
          transformOrigin: {
            vertical:
              (anchorVerticalOrigin === 'top' && 'bottom') ||
              (anchorVerticalOrigin === 'bottom' && 'top') ||
              'center',
            horizontal: 'center',
          },
          getContentAnchorEl: null,
        },
        IconComponent: IconComponent || renderArrowIcon,
        onOpen: handleSelectOpen,
        onClose: handleSelectClose,
      }}
    >
      {options
        ? options.map(({ id, label, disabled: disabledOption }) => (
            <MenuItem key={id} value={id} disabled={disabledOption} className={classes.menuItem}>
              {label}
            </MenuItem>
          ))
        : children}
    </TextInput>
  );

  function renderArrowIcon() {
    return (
      <div className={cn(classes.arrowIcon, selectClasses?.icon)}>
        <Arrow fontSize="inherit" />
      </div>
    );
  }

  function useWindowHeight() {
    const [windowHeight, setWindowHeight] = useState<number>(0);

    useEffect(() => {
      function handleResize() {
        setWindowHeight(window.innerHeight);
      }

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowHeight;
  }
}
