import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { makeRandomID } from '../temp23/makeRandomID';

function CloseIcon(props: React.ComponentProps<typeof SvgIcon>) {
  const gradientId = React.useMemo(() => makeRandomID('CloseIcon'), []);

  return (
    <SvgIcon {...props} viewBox="0 0 14 14">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={gradientId}>
          <stop stopColor="#574CF2" offset="0%" />
          <stop stopColor="#4236D0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeLinecap="round" strokeLinejoin="round">
          <circle stroke="#0A0A0E" fill={`url(#${gradientId})`} cx="6" cy="6" r="6" />
          <path stroke="#FFF" d="m4.052 3.908 3.897 3.898M4.05 7.806l3.898-3.898" />
        </g>
      </g>
    </SvgIcon>
  );
}

export { CloseIcon };
