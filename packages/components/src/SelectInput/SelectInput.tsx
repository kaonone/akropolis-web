import React, {
  ComponentPropsWithoutRef,
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from 'react';
import cn from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import { MenuProps } from '@material-ui/core/Menu';
import { useAncestorBackgroundHack } from '@akropolis-web/styles';

import { Arrow } from '../icons/Arrow';
import { TextInput } from '../TextInput';
import { useStyles } from './SelectInput.style';

export type Option = {
  id: string;
  label: string | JSX.Element;
};

type OwnProps = {
  options: Option[];
  disableVariant?: 'text' | 'default';
};

type SelectInputProps = OwnProps & ComponentPropsWithoutRef<typeof TextInput>;

const MENU_PADDINGS_HEIGHT = 15;
const MENU_SHIFT_HEIGHT = 20;

export function SelectInput(props: SelectInputProps) {
  const {
    options,
    disabled,
    disableVariant = 'default',
    variant = 'outlined',
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
  const classes = useStyles({ backgroundColor });
  const currentWindowHeight = useWindowHeight();

  const [isMenuOpen, setIsOpen] = useState(false);
  const [toBottomDistance, setToBottomDistance] = useState(0);
  const [toTopDistance, setToTopDistance] = useState(0);

  const selectInputRef = useRef<HTMLDivElement>(null);
  const handleSelectOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleSelectClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const inputRect = selectInputRef.current?.getBoundingClientRect();

    if (inputRect) {
      const { bottom, top } = inputRect;
      setToBottomDistance(currentWindowHeight - bottom - MENU_SHIFT_HEIGHT);
      setToTopDistance(top - MENU_SHIFT_HEIGHT);
    }
  }, [currentWindowHeight, isMenuOpen]);

  const selectHeight =
    Number(selectInputRef.current?.offsetHeight) * options.length + MENU_PADDINGS_HEIGHT;
  const hasBottomSpace = toBottomDistance > selectHeight;
  const hasTopSpace = toTopDistance > selectHeight;

  const menuPositionProps = useMemo<Partial<MenuProps>>(() => {
    function getVerticalPosition(type: 'anchor' | 'transform') {
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
        horizontal: 'center',
      },
      transformOrigin: {
        vertical: getVerticalPosition('transform'),
        horizontal: 'center',
      },
      getContentAnchorEl: null,
    };
  }, [hasBottomSpace, hasTopSpace]);

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
        [classes.hasBottomSpace]: hasBottomSpace,
        [classes.hasTopSpace]: !hasBottomSpace && hasTopSpace,
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
          PaperProps: {
            variant: 'outlined',
            ...menuProps?.PaperProps,
            className: cn(classes.paper, menuProps?.PaperProps?.className, {
              [classes.hasBottomSpace]: hasBottomSpace,
              [classes.hasTopSpace]: !hasBottomSpace && hasTopSpace,
              [classes.withoutOutline]: variant === 'standard' || variant === 'filled',
              [classes.withCheckmark]:
                variant === 'standard' || variant === 'filled' || restSelectProps.multiple,
              [classes.filled]: variant === 'filled',
            }),
          },
          ...menuPositionProps,
        },
        IconComponent: IconComponent || renderArrowIcon,
        onOpen: handleSelectOpen,
        onClose: handleSelectClose,
      }}
    >
      {options.map(({ id, label }) => {
        return (
          <MenuItem key={id} value={id} className={classes.menuItem}>
            {label}
          </MenuItem>
        );
      })}
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
