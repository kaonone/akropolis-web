import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function MUSDIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <ellipse cx="10" cy="10" fill="#000" fillRule="nonzero" rx="10" ry="9.818" />
        <g fill="#FFF">
          <path
            fillRule="nonzero"
            d="M5.698 8.186c-1.423-.123-2.459-.853-2.511-2.177H5.09c.041.42.25.677.606.79V5.177c-1.119-.288-2.52-.596-2.52-2.209 0-1.283 1.098-2.044 2.52-2.136V0h.67v.832C7.8.945 8.72 1.664 8.815 2.968H6.9c-.041-.38-.24-.616-.533-.719v1.592c1.12.308 2.552.606 2.552 2.198 0 1.11-.9 2.085-2.552 2.157v.832h-.67v-.842zm0-4.56V2.198c-.388.062-.628.288-.628.688 0 .36.25.575.628.74zm.669 1.746V6.83c.418-.072.68-.35.68-.73 0-.369-.272-.574-.68-.728z"
            transform="translate(4.074 3.455)"
          />
          <path
            d="M0 10.317L11.962 10.317 11.962 12.087 0 12.087z"
            transform="translate(4.074 3.455)"
          />
        </g>
      </g>
    </SvgIcon>
  );
}

export { MUSDIcon };
