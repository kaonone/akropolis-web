import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function CheckmarkIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 15 14">
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M5.98 13.29c.43 0 .76-.17.99-.52L13.9 2.04c.17-.26.24-.49.24-.7 0-.57-.41-.98-1-.98-.4 0-.64.14-.89.53l-6.3 9.98-3.22-4.1a.97.97 0 0 0-.84-.43c-.58 0-1 .42-1 .99 0 .25.08.49.29.74l3.83 4.73c.27.33.57.49.97.49z"
      />
    </SvgIcon>
  );
}

export { CheckmarkIcon };
