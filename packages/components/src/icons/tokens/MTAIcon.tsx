import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { TokenIconProps } from '../types';

export function MTAIcon(props: TokenIconProps) {
  const { inactive } = props;

  const Icon = inactive ? InactiveMTAIcon : ActiveMTAIcon;

  return <Icon {...props} />;
}

function ActiveMTAIcon(props: TokenIconProps) {
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

function InactiveMTAIcon(props: TokenIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <circle cx="10" cy="10" r="10" fill="#191924" />
        <g fill="#FFF" fillRule="nonzero">
          <path
            d="M.061 1.301C.061.916.037.541 0 .155h1.743l.06.785C1.999.674 2.472.022 3.7.022c1.413 0 1.814.858 1.933 1.147C6.143.19 6.973.035 7.606.035c1.241 0 1.74.736 1.874.977.329.531.305 1.267.305 1.798v3.338H7.973v-3.48c0-.652-.098-1.376-1.035-1.376-1.083 0-1.108 1.002-1.108 1.907v2.949H4.017v-3.52c0-.47-.012-1.339-1.01-1.339-1.132 0-1.132.966-1.132 1.379v3.48H.06V1.3zM0 7.488h9.787v1.484H0V7.488z"
            transform="translate(5 6)"
          />
        </g>
      </g>
    </SvgIcon>
  );
}
