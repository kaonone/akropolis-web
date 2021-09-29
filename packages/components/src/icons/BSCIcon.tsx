import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function BSCIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <g>
          <circle cx="10" cy="10" r="10" fill="#4D4D4D" />
          <path
            fill="#F3BA2F"
            d="M6.868 8.713L10 5.58l3.132 3.135 1.823-1.822L10 1.935 5.045 6.89l1.823 1.823zM1.935 10l1.823-1.823L5.581 10l-1.823 1.823L1.935 10zm4.933 1.287L10 14.42l3.132-3.135 1.826 1.822L10 18.065 5.045 13.11l-.003-.004 1.826-1.819zM14.419 10l1.823-1.823L18.065 10l-1.823 1.823L14.419 10z"
          />
          <path
            fill="#F3BA2F"
            d="M12.032 10L12.032 10 10 7.961 8.497 9.468 8.497 9.468 8.323 9.642 7.965 10 7.961 10.003 7.965 10.006 9.997 12.039 12.032 10.003 12.032 10.003 12.032 10.003z"
          />
        </g>
      </g>
    </SvgIcon>
  );
}

export { BSCIcon };
