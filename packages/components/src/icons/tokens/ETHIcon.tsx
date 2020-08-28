import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function ETHIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <defs>
        <linearGradient id="nui1dzi9qa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#9BB5F6" />
          <stop offset="100%" stopColor="#627EEA" />
        </linearGradient>
      </defs>
      <g fill="none">
        <circle cx="10" cy="10" r="10" fill="url(#nui1dzi9qa)" />
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

export { ETHIcon };
