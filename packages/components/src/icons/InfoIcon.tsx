import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function InfoIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M10 18c4.38 0 8-3.62 8-8s-3.63-8-8-8-8 3.62-8 8 3.63 8 8 8zM9.94 7.27c-.57 0-1.03-.47-1.03-1.04 0-.58.46-1.04 1.03-1.04.58 0 1.03.46 1.03 1.04 0 .57-.45 1.04-1.03 1.04zm1.86 7H8.63a.57.57 0 0 1-.59-.57c0-.31.26-.56.59-.56h.95V9.67h-.81a.57.57 0 0 1-.59-.57c0-.32.26-.56.59-.56h1.47c.4 0 .63.28.63.72v3.88h.93c.33 0 .6.25.6.56 0 .34-.27.58-.6.58z"
        />
      </g>
    </SvgIcon>
  );
}

export { InfoIcon };
