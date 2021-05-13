import * as React from 'react';
import { Token } from '@akropolis-web/primitives';
import { makeStyles } from '@akropolis-web/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import cn from 'classnames';

import { TokenIcon } from '../TokenIcon/TokenIcon';

type Props = {
  tokens: Token[];
  iconsProps?: SvgIconProps;
  classes?: {
    root?: string;
    iconWrapper?: string;
  };
  showNetwork?: boolean;
  networkIconProps?: SvgIconProps;
};

export function TokensIcons(props: Props) {
  const classes = useStyles();
  const { tokens, iconsProps, classes: propsClasses, networkIconProps } = props;

  return (
    <div className={cn(propsClasses?.root, classes.root)}>
      {tokens.map(({ address, network }) => {
        return (
          <div className={cn(propsClasses?.iconWrapper, classes.iconWrapper)} key={address}>
            <TokenIcon
              {...iconsProps}
              network={network}
              networkIconProps={networkIconProps}
              tokenAddress={address}
            />
          </div>
        );
      })}
    </div>
  );
}

const useStyles = makeStyles(
  () => ({
    root: {
      display: 'flex',
    },
    iconWrapper: {
      '& + &': {
        marginLeft: -7,
      },
    },
  }),
  { name: 'TokensIcons' },
);
