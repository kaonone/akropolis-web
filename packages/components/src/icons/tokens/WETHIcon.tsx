import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { makeRandomID } from '../../temp23/makeRandomID';
import { TokenIconProps } from '../types';

function WETHIcon(props: TokenIconProps) {
  const { inactive, ...svgProps } = props;

  const Icon = inactive ? InactiveWETHIcon : ActiveWETHIcon;

  return <Icon {...svgProps} />;
}

function ActiveWETHIcon(props: React.ComponentProps<typeof SvgIcon>) {
  const gradientId = React.useMemo(() => makeRandomID('ETHIcon'), []);

  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <defs>
        <linearGradient id={gradientId} x1="50%" x2="50%" y1="100%" y2="0%">
          <stop offset="0%" stopColor="#FB0178" />
          <stop offset="100%" stopColor="#424242" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
          <circle cx="10" cy="10" r="10" fill="#FFF" />
          <path
            fill={`url(#${gradientId})`}
            d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z"
          />
          <g>
            <path
              fill="#424242"
              fillOpacity=".9"
              d="M3.751 0L3.751 4.437 7.501 6.113zM3.751 0L0 6.113 3.751 4.437z"
              transform="translate(6.2 4)"
            />
            <path
              fill="#FF0079"
              d="M3.751 8.989L3.751 12.004 7.504 6.811zM3.751 12.004L3.751 8.988 0 6.811z"
              transform="translate(6.2 4)"
            />
            <path
              fill="#424242"
              d="M3.751 8.291L7.501 6.113 3.751 4.438zM0 6.113L3.751 8.291 3.751 4.438z"
              transform="translate(6.2 4)"
            />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}

function InactiveWETHIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <g fill="none">
        <circle cx="10" cy="10" r="10" fill="#191924" />
        <g fill="#FFF">
          <path
            fillOpacity=".602"
            d="M4.686 0L4.686 5.544 9.372 7.638z"
            transform="translate(5.625 2.5)"
          />
          <path d="M4.686 0L0 7.638 4.686 5.544z" transform="translate(5.625 2.5)" />
          <path
            fillOpacity=".602"
            d="M4.686 11.23L4.686 14.997 9.375 8.51z"
            transform="translate(5.625 2.5)"
          />
          <path d="M4.686 14.997L4.686 11.229 0 8.51z" transform="translate(5.625 2.5)" />
          <path
            fillOpacity=".2"
            d="M4.686 10.358L9.372 7.638 4.686 5.545z"
            transform="translate(5.625 2.5)"
          />
          <path
            fillOpacity=".602"
            d="M0 7.638L4.686 10.358 4.686 5.545z"
            transform="translate(5.625 2.5)"
          />
        </g>
      </g>
    </SvgIcon>
  );
}

export { WETHIcon };
