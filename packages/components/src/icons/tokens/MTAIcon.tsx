import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function MTAIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <circle cx="10" cy="10" r="10" fill="#000" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M5.061 7.301c0-.385-.024-.76-.061-1.146h1.743l.06.785c.195-.266.668-.918 1.897-.918 1.413 0 1.814.858 1.933 1.147.51-.978 1.34-1.134 1.973-1.134 1.241 0 1.74.736 1.874.977.329.531.305 1.267.305 1.798v3.338h-1.812v-3.48c0-.652-.098-1.376-1.035-1.376-1.083 0-1.108 1.002-1.108 1.907v2.949H9.017v-3.52c0-.47-.012-1.339-1.01-1.339-1.132 0-1.132.966-1.132 1.379v3.48H5.06V7.3zM5 13.488h9.787v1.484H5v-1.484z"
        />
      </g>
    </SvgIcon>
  );
}

export { MTAIcon };
