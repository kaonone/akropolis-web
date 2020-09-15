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

import { Arrow } from '../../icons/Arrow';
import { TextInput } from '../TextInput';
import { useStyles } from './SelectInput.style';

type Option = {
  id: string;
  label: string | JSX.Element;
};

type OwnProps = {
  options: Option[];
};

type SelectInputProps = OwnProps & ComponentPropsWithoutRef<typeof TextInput>;

const MENU_PADDINGS_HEIGHT = 15;
const MENU_SHIFT_HEIGHT = 20;

export function SelectInput(props: SelectInputProps) {
  const { options, InputProps = {}, ...restProps } = props;
  const { className: inputClassName, ...restInputProps } = InputProps;
  const classes = useStyles();
  const backgroundColor = useAncestorBackgroundHack();
  const currentWindowHeight = useWindowHeight();
  const hasSingleOption = options.length <= 1;

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
    setToBottomDistance(
      currentWindowHeight -
        Number(selectInputRef.current?.getBoundingClientRect().bottom) -
        MENU_SHIFT_HEIGHT,
    );
    setToTopDistance(
      Number(selectInputRef.current?.getBoundingClientRect().top) - MENU_SHIFT_HEIGHT,
    );
  }, [setToBottomDistance, currentWindowHeight, selectInputRef]);
  const selectHeight =
    Number(selectInputRef.current?.offsetHeight) * options.length + MENU_PADDINGS_HEIGHT;

  const hasBottomSpace = toBottomDistance > selectHeight;
  const hasTopSpace = toTopDistance > selectHeight;

  const menuPositionProps = useMemo<Partial<MenuProps>>(
    () => ({
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
    }),
    [toBottomDistance, toTopDistance, selectHeight],
  );

  return (
    <TextInput
      {...restProps}
      ref={selectInputRef}
      select
      variant="outlined"
      disabled={hasSingleOption}
      className={cn(
        classes.root,
        {
          [classes.isOpen]: isMenuOpen,
        },
        {
          [classes.withSingleOption]: hasSingleOption,
        },
        {
          [classes.hasBottomSpace]: hasBottomSpace,
        },
        {
          [classes.hasTopSpace]: !hasBottomSpace && hasTopSpace,
        },
      )}
      InputProps={{
        ...restInputProps,
        className: cn(inputClassName, classes.input),
      }}
      SelectProps={{
        MenuProps: {
          PaperProps: {
            variant: 'outlined',
            className: cn(
              classes.paper,
              {
                [classes.hasBottomSpace]: hasBottomSpace,
              },
              {
                [classes.hasTopSpace]: !hasBottomSpace && hasTopSpace,
              },
            ),
            style: { backgroundColor },
          },
          ...menuPositionProps,
        },
        IconComponent: renderArrowIcon,
        onOpen: handleSelectOpen,
        onClose: handleSelectClose,
      }}
    >
      {options.map(({ id, label }) => {
        return (
          <MenuItem key={id} value={id}>
            {label}
          </MenuItem>
        );
      })}
    </TextInput>
  );

  function renderArrowIcon() {
    return (
      <div className={classes.arrowIcon}>
        <Arrow fontSize="inherit" />
      </div>
    );
  }

  function getVerticalPosition(type: 'anchor' | 'transform') {
    if (hasBottomSpace) {
      return type === 'anchor' ? 'bottom' : 'top';
    }
    if (hasTopSpace) {
      return type === 'anchor' ? 'top' : 'bottom';
    }

    return 'center';
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
