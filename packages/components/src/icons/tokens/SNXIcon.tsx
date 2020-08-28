import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export function SNXIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <defs>
        <linearGradient id="dtxyvbmyga" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#40385F" />
          <stop offset="100%" stopColor="#1E1A31" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="url(#dtxyvbmyga)"
          d="M19.984 9.992C19.984 4.474 15.51 0 9.992 0 4.474 0 0 4.474 0 9.992c0 5.518 4.474 9.992 9.992 9.992 5.518 0 9.992-4.474 9.992-9.992z"
        />
        <g fill="#FFF">
          <path
            d="M1.041 8.697L0.14 8.054 5.806 0.182 6.706 0.825z"
            opacity=".5"
            transform="translate(6.6 5.2)"
          />
          <path
            d="M3.96 3.922h.302c1.392 0 2.52 1.125 2.52 2.513 0 1.387-1.128 2.512-2.52 2.512H.554C.248 8.947 0 8.7 0 8.395c0-.304.248-.552.554-.552h3.708c.78 0 1.413-.63 1.413-1.408 0-.778-.633-1.41-1.413-1.41h-1.74C1.128 5.026 0 3.902 0 2.514S1.129 0 2.521 0H6.23c.306 0 .554.247.554.552 0 .305-.248.552-.554.552H2.52c-.78 0-1.413.63-1.413 1.409 0 .778.632 1.409 1.413 1.409H3.96z"
            transform="translate(6.6 5.2)"
          />
        </g>
      </g>
    </SvgIcon>
  );
}
