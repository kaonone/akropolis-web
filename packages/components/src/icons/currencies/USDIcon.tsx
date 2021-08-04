import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { CurrencyIconProps } from '../types';

function USDIcon(props: CurrencyIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <defs>
        <linearGradient id="y989383tca" x1="50%" x2="50%" y1="100%" y2="0%">
          <stop offset="0%" stopColor="#33A455" />
          <stop offset="100%" stopColor="#6BFF97" />
        </linearGradient>
      </defs>
      <g fillRule="nonzero" fill="none">
        <circle cx="10" cy="10" r="10" fill="url(#y989383tca)" />
        <path
          fill="#FFF"
          d="M10.546 15.966v-1.008c1.554-.042 2.982-1.036 2.982-2.982 0-1.89-1.554-2.548-2.982-2.996V6.152c.644 0 1.344.266 1.778.742l1.134-1.176c-.756-.658-1.89-.98-2.912-.994V3.8H9.79v.952c-1.498.098-2.926 1.106-2.926 2.772 0 1.792 1.288 2.436 2.926 2.884v3.108c-.714-.014-1.554-.448-2.058-1.036L6.5 13.656c.882.854 2.058 1.26 3.29 1.302v1.008h.756zM9.79 8.784c-.714-.21-1.246-.574-1.246-1.344 0-.812.588-1.218 1.246-1.288v2.632zm.756 4.732v-2.884c.742.252 1.302.616 1.302 1.442s-.518 1.4-1.302 1.442z"
        />
      </g>
    </SvgIcon>
  );
}

export { USDIcon };
