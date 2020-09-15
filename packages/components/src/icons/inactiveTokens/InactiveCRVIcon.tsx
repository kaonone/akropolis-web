import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export function InactiveCRVIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <circle cx="10" cy="10" r="10" fill="#191924" />
        <g fill="#FFF" stroke="#FFF">
          <path
            d="M.328 2.587C.992.735 2.058-.164 3.873.122 5.687.408 8.13 1.397 9.262 2.293c1.132.897 2.064 2.373 1.496 3.91-.26.704-.987 1.191-2.91 1.687-.517.134-1.495.417-2.934.85h0v-.034l-.013.073c-.299 1.444-.857 1.887-1.424 2.113l-.078.03c-.321.117-.86.031-1.387-.35C-.091 9.053-.278 4.278.328 2.587zm2.064 2.821c-.774.081-1.158.98-1.016 2.329.143 1.35.813 2.283 1.587 2.202.774-.08 1.288-1.037 1.145-2.387-.143-1.35-.942-2.224-1.716-2.144zm2.614.27l-.091 3.028.025-.13c.05-.28.09-.593.121-.946.045-.518.021-1.136-.032-1.717l-.023-.235zM7.992 3.12c-.871-.582-3.067-1.39-3.563-1.077-.397.25-.01.381.37 2.235.064.313.146.823.206 1.39v.01l.012-.328c1.328.047 2.379-.116 3.15-.488l.187-.097c.764-.429.508-1.063-.362-1.645z"
            transform="translate(5 4.5)"
          />
        </g>
      </g>
    </SvgIcon>
  );
}