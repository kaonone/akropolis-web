import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { makeRandomID } from '../../temp23/makeRandomID';
import { TokenIconProps } from './types';

export function BUSDIcon(props: TokenIconProps) {
  const { isInactive } = props;

  const gradientId = React.useMemo(() => makeRandomID('BUSDIcon'), []);
  const fillColor0 = isInactive ? '#191924' : `url(#${gradientId})`;
  const fillColor1 = isInactive ? '#FFF' : '#000';

  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <defs>
        <linearGradient id={gradientId} x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFEEB8" />
          <stop offset="100%" stopColor="#FECB27" />
        </linearGradient>
      </defs>
      <g fill="none">
        <path
          fill={fillColor0}
          d="M9.987 0c5.517 0 9.988 4.472 9.988 9.987 0 5.517-4.471 9.988-9.988 9.988C4.472 19.975 0 15.503 0 9.987 0 4.472 4.472 0 9.987 0z"
        />
        <g fill={fillColor1}>
          <path
            d="M6.7 0L8.348 1.71 4.199 5.913 2.551 4.244zM9.148 2.551L10.783 4.217 4.185 10.783 2.551 9.156zM1.681 4.986L3.362 6.687 1.681 8.348 0 6.687zM11.699 5.101L13.333 6.767 6.736 13.333 5.101 11.707z"
            transform="translate(3.394 3.394)"
          />
        </g>
      </g>
    </SvgIcon>
  );
}
