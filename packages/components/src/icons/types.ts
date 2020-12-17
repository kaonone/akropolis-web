import SvgIcon from '@material-ui/core/SvgIcon';

type TokenIconProps = { inactive?: boolean } & React.ComponentProps<typeof SvgIcon>;

type CurrencyIconProps = TokenIconProps;

export { TokenIconProps, CurrencyIconProps };
