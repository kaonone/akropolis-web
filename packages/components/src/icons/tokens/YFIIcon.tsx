import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { TokenIconProps } from '../types';

function YFIIcon(props: TokenIconProps) {
  const { inactive, ...svgProps } = props;

  const circleFillColor = inactive ? '#191924' : '#2c68db';

  return (
    <SvgIcon {...svgProps} viewBox="0 0 30 30">
      <g fill="none" fillRule="evenodd">
        <g>
          <g transform="translate(-285 -299) translate(285 299)">
            <circle cx="15" cy="15" r="15" fill={circleFillColor} />
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M14.348 8.576H15.799000000000001V21.248H14.348z"
            />
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M10.706 17.851c-.39.688-.58 1.47-.55 2.26.0 2.56 1.964 4.69 4.514 4.9 2.55.21 4.835-1.57 5.254-4.095.42-2.524-1.168-4.947-3.649-5.573v1.468c1.675.61 2.628 2.376 2.217 4.11-.411 1.734-2.056 2.886-3.826 2.679-1.77-.207-3.104-1.706-3.105-3.488.002-.673.207-1.328.59-1.881l.255 2.326 1.403-.181-.679-4.435-4.412.883.249 1.47 1.74-.443zm8.939-6.161c.288-.626.345-1.086.345-1.82.0-2.56-1.963-4.69-4.513-4.9-2.55-.21-4.835 1.57-5.254 4.095-.42 2.524 1.168 4.948 3.649 5.573v-1.467c-1.35-.493-2.264-1.758-2.307-3.194-.043-1.436.794-2.754 2.112-3.326 1.318-.572 2.852-.283 3.871.73 1.02 1.012 1.32 2.544.757 3.866l-.78-2.063-1.29.403 1.25 4.355 4.274-1.572-.52-1.226-1.594.546z"
            />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}

export { YFIIcon };
