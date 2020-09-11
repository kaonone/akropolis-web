import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export function InactiveTUSDIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
          <g>
            <path
              fill="#191924"
              d="M10 0c5.522 0 10 4.478 10 10s-4.478 10-10 10S0 15.525 0 10 4.478 0 10 0z"
              transform="translate(-1087 -6707) translate(1087 6707)"
            />
            <g fill="#FFF">
              <path
                d="M7.309 3.762v-1.49h3.402V.007H1.448v2.267H4.85v1.489C2.086 3.89.006 4.437.006 5.092c0 .656 2.08 1.203 4.844 1.33v4.765h2.461V6.423c2.762-.128 4.837-.675 4.837-1.33-.003-.656-2.078-1.203-4.84-1.331zM7.31 6.02c-.069.003-.425.025-1.219.025-.636 0-1.08-.017-1.239-.025v.003C2.411 5.915.586 5.49.586 4.98c0-.508 1.823-.933 4.267-1.041v1.655c.161.011.617.039 1.25.039.758 0 1.139-.03 1.211-.039V3.934c2.44.108 4.259.533 4.259 1.042-.006.508-1.825.933-4.262 1.044"
                transform="translate(-1087 -6707) translate(1087 6707) translate(4.1 5.123)"
              />
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}
