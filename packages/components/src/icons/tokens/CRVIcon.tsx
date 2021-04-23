import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

import { TokenIconProps } from '../types';

export function CRVIcon(props: TokenIconProps) {
  const { inactive, ...svgProps } = props;

  const Icon = inactive ? InactiveCRVIcon : ActiveCRVIcon;

  return <Icon {...svgProps} />;
}

function InactiveCRVIcon(props: SvgIconProps) {
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

function ActiveCRVIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 23 25">
      <defs>
        <linearGradient id="8hdwfmk96a" x1="58.266%" x2="64.017%" y1="53.988%" y2="74.084%">
          <stop offset="0%" stopColor="#F2E62B" />
          <stop offset="48.648%" stopColor="#B1FF46" />
          <stop offset="100%" stopColor="#05A2FB" />
        </linearGradient>
        <linearGradient id="08q3n6clxb" x1="45.095%" x2="50%" y1="27.882%" y2="67.517%">
          <stop offset="0%" stopColor="maroon" />
          <stop offset="18.742%" stopColor="#FA0F00" />
          <stop offset="43.093%" stopColor="#FFCD0C" />
          <stop offset="100%" stopColor="#EEEB32" />
        </linearGradient>
        <linearGradient id="gt7ib41wsc" x1="33.933%" x2="26.653%" y1="24.733%" y2="61.578%">
          <stop offset="0%" stopColor="#FF9800" />
          <stop offset="55.769%" stopColor="#E4FF13" />
          <stop offset="100%" stopColor="#50FFA7" />
        </linearGradient>
        <linearGradient id="mbndaqsx8d" x1="60.825%" x2="50%" y1="-11.07%" y2="100%">
          <stop offset="0%" stopColor="#FA1000" />
          <stop offset="0%" stopColor="#FA1000" />
          <stop offset="17.007%" stopColor="maroon" />
          <stop offset="39.062%" stopColor="#FA1801" />
          <stop offset="54.442%" stopColor="#F67A08" />
          <stop offset="62.733%" stopColor="#B1FF46" />
          <stop offset="75.379%" stopColor="#75FF82" />
          <stop offset="85.4%" stopColor="#05A2FB" />
          <stop offset="100%" stopColor="#1212EE" />
        </linearGradient>
        <linearGradient id="s4k8x0orfe" x1="40.754%" x2="29.998%" y1="8.651%" y2="78.218%">
          <stop offset="0%" stopColor="#FA2401" />
          <stop offset="42.869%" stopColor="#F5DF22" />
          <stop offset="77.418%" stopColor="#00E4F8" />
          <stop offset="100%" stopColor="#0010FF" />
        </linearGradient>
        <linearGradient id="tdoryhe7hf" x1="50%" x2="50.659%" y1="-35.457%" y2="95.225%">
          <stop offset=".022%" stopColor="#F76D08" />
          <stop offset="33.814%" stopColor="#F1E62B" />
          <stop offset="50.699%" stopColor="#75F583" />
          <stop offset="69.543%" stopColor="#00E0FB" />
          <stop offset="100%" stopColor="#0023FF" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g transform="translate(-377 -449) translate(372 445) translate(5.328 4.8)">
              <path
                fill="url(#8hdwfmk96a)"
                d="M5.233 1.882c3.591-2.162 16.803 4.27 16.61 8.48-.192 4.21-2.3 4.851-3.967 5.306-1.666.455-6.913 1.435-7.192 2.193-.28.759-1.158 4.524-3.96 4.04-2.804-.484-5.137-5.776-5.314-9.52-.177-3.743.232-8.336 3.823-10.499z"
              />
              <path
                fill="url(#08q3n6clxb)"
                d="M5.233 1.882C8.538-.108 19.85 4.488 21.586 9.184c.15.407-.242.768-.689 1.042-1.437.88-2.985 1.104-4.651 1.56-1.666.454-6.914 1.434-7.193 2.193-.279.758-7.466 2.146-7.643-1.597-.177-3.744.232-8.337 3.823-10.5z"
              />
              <path
                fill="url(#gt7ib41wsc)"
                d="M10.624 11.428c0-1.375-.133-2.396-.401-3.063-.402-1.002.023-2.58.856-2.85.833-.272 2.854.895 4.64 1.662 1.788.768 3.068 1.749 2.644 2.476-.423.727-2.549 1.213-3.508 1.356-.64.096-2.05.236-4.231.419z"
              />
              <path
                fill="url(#mbndaqsx8d)"
                d="M7.22 22.204c2.436-.578 3.647-4.691 3.647-10.372 0-2.084-.898-5.471-1.493-7.368-.642-2.044 2.03-2.252 1.65-2.362-1.517-.439-2.267-.796-3.826-.784-3.165.024-6.188 4.274-5.855 10.777.332 6.503 3.44 10.687 5.876 10.11z"
                transform="rotate(-4 6.19 11.787)"
              />
              <path
                fill="url(#s4k8x0orfe)"
                d="M7.347 22.206c1.936-.46 3.103-3.15 3.501-7.085.047-.458.436-3.761-.238-6.39-.022-.09-.251 1.328-.797 2.474-.545 1.145-1.312 1.932-1.418 1.95-1.874.294-2.874-.364-4.61-1.159-1.84-.842-.195-9.135-1.299-6.519-.741 1.758-1.113 4.002-1.016 6.62.245 6.562 3.44 10.687 5.877 10.109z"
                transform="rotate(-4 6.229 13.614)"
              />
              <ellipse
                cx="5.607"
                cy="15.726"
                fill="url(#tdoryhe7hf)"
                rx="3.165"
                ry="5.011"
                transform="rotate(-12 5.607 15.726)"
              />
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}
