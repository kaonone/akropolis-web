import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { TokenIconProps } from '../types';
import { makeRandomID } from '../../temp23/makeRandomID';

export function HEGICIcon(props: TokenIconProps) {
  const { inactive, ...svgProps } = props;

  const linearGradientId = React.useMemo(() => makeRandomID('HEGICIcon'), []);

  return (
    <SvgIcon {...svgProps} viewBox="0 0 32 32">
      <defs>
        <linearGradient x1="50%" y1="-19.9111328%" x2="50%" y2="100%" id={linearGradientId}>
          <stop stopColor="#2D3C65" offset="0%" />
          <stop stopColor="#141C35" offset="100%" />
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <circle id="Oval" fill={`url(#${linearGradientId})`} cx="16" cy="16" r="16" />
        <path
          d="M9.04896,18.5625959 C9.12576,18.5625959 9.19232,18.5344359 9.24864,18.4781159 C9.30496,18.4217959 9.33312,18.3552359 9.33312,18.2784359 L9.33312,18.2784359 L9.33312,13.7241959 C9.33312,13.6473959 9.30496,13.5808359 9.24864,13.5245159 C9.19232,13.4681959 9.12576,13.4400359 9.04896,13.4400359 C8.9696,13.4400359 8.90304,13.4681959 8.84928,13.5245159 C8.79552,13.5808359 8.76864,13.6473959 8.76864,13.7241959 L8.76864,13.7241959 L8.76864,15.6864359 L5.60448,15.6864359 L5.60448,13.7241959 C5.60448,13.6473959 5.57696,13.5808359 5.52192,13.5245159 C5.46688,13.4681959 5.40096,13.4400359 5.32416,13.4400359 C5.24736,13.4400359 5.1808,13.4681959 5.12448,13.5245159 C5.06816,13.5808359 5.04,13.6473959 5.04,13.7241959 L5.04,13.7241959 L5.04,18.2784359 C5.04,18.3552359 5.06816,18.4217959 5.12448,18.4781159 C5.1808,18.5344359 5.24736,18.5625959 5.32416,18.5625959 C5.40096,18.5625959 5.46688,18.5344359 5.52192,18.4781159 C5.57696,18.4217959 5.60448,18.3552359 5.60448,18.2784359 L5.60448,18.2784359 L5.60448,16.2509159 L8.76864,16.2509159 L8.76864,18.2784359 C8.76864,18.3552359 8.79552,18.4217959 8.84928,18.4781159 C8.90304,18.5344359 8.9696,18.5625959 9.04896,18.5625959 Z M14.06656,18.5625959 C14.256,18.5625959 14.35072,18.4678759 14.35072,18.2784359 C14.35072,18.0915559 14.256,17.9981159 14.06656,17.9981159 L14.06656,17.9981159 L11.55136,17.9981159 L11.55136,16.2585959 L13.16032,16.2585959 C13.34976,16.2585959 13.44448,16.1638759 13.44448,15.9744359 C13.44448,15.7875559 13.34976,15.6941159 13.16032,15.6941159 L13.16032,15.6941159 L11.55136,15.6941159 L11.55136,14.0045159 L14.06656,14.0045159 C14.256,14.0045159 14.35072,13.9110759 14.35072,13.7241959 C14.35072,13.5347559 14.256,13.4400359 14.06656,13.4400359 L14.06656,13.4400359 L11.27104,13.4400359 C11.0816,13.4400359 10.98688,13.5347559 10.98688,13.7241959 L10.98688,13.7241959 L10.98688,18.2784359 C10.98688,18.4678759 11.0816,18.5625959 11.27104,18.5625959 L11.27104,18.5625959 L14.06656,18.5625959 Z M17.91488,18.5625959 C18.44224,18.5625959 18.82816,18.4409959 19.07264,18.1977959 C19.31712,17.9545959 19.43936,17.5667559 19.43936,17.0342759 L19.43936,17.0342759 L19.43936,16.3507559 C19.43936,16.1638759 19.34592,16.0704359 19.15904,16.0704359 L19.15904,16.0704359 L18.1952,16.0627559 C18.00832,16.0627559 17.91488,16.1561959 17.91488,16.3430759 C17.91488,16.5325159 18.00832,16.6272359 18.1952,16.6272359 L18.1952,16.6272359 L18.87488,16.6349159 L18.87488,17.0342759 C18.87488,17.2851559 18.84608,17.4803559 18.78848,17.6198759 C18.73088,17.7593959 18.63232,17.8573159 18.4928,17.9136359 C18.35328,17.9699559 18.16064,17.9981159 17.91488,17.9981159 L17.91488,17.9981159 L16.99328,17.9981159 C16.71168,17.9981159 16.4896,17.9635559 16.32704,17.8944359 C16.16448,17.8253159 16.04864,17.7094759 15.97952,17.5469159 C15.9104,17.3843559 15.87584,17.1622759 15.87584,16.8806759 L15.87584,16.8806759 L15.87584,15.1219559 C15.87584,14.8377959 15.9104,14.6144359 15.97952,14.4518759 C16.04864,14.2893159 16.16384,14.1741159 16.32512,14.1062759 C16.4864,14.0384359 16.70656,14.0045159 16.9856,14.0045159 L16.9856,14.0045159 L17.91488,14.0045159 C18.23232,14.0045159 18.46272,14.0525159 18.60608,14.1485159 C18.74944,14.2445159 18.83264,14.4230759 18.85568,14.6841959 C18.88128,14.8736359 18.97984,14.9683559 19.15136,14.9683559 C19.24608,14.9683559 19.31776,14.9433959 19.3664,14.8934759 C19.41504,14.8435559 19.43296,14.7712359 19.42016,14.6765159 C19.38432,14.2489959 19.24352,13.9360359 18.99776,13.7376359 C18.752,13.5392359 18.39104,13.44 17.91488,13.44 L17.91488,13.44 L16.9856,13.44 C16.41216,13.4374759 15.98976,13.5718759 15.7184,13.8432359 C15.44704,14.1145959 15.31136,14.5408359 15.31136,15.1219559 L15.31136,15.1219559 L15.31136,16.8806759 C15.31136,17.4566759 15.44768,17.8809959 15.72032,18.1536359 C15.99296,18.4262759 16.41728,18.5625959 16.99328,18.5625959 L16.99328,18.5625959 L17.91488,18.5625959 Z M21.14784,18.5625959 C21.24256,18.5625959 21.31296,18.5389159 21.35904,18.4915559 C21.40512,18.4441959 21.42816,18.3731559 21.42816,18.2784359 L21.42816,18.2784359 L21.42816,13.7280359 C21.42816,13.6307559 21.40512,13.5590759 21.35904,13.5129959 C21.31296,13.4669159 21.24256,13.4438759 21.14784,13.4438759 C21.05312,13.4438759 20.98208,13.4669159 20.93472,13.5129959 C20.88736,13.5590759 20.86368,13.6307559 20.86368,13.7280359 L20.86368,13.7280359 L20.86368,18.2784359 C20.86368,18.3731559 20.88736,18.4441959 20.93472,18.4915559 C20.98208,18.5389159 21.05312,18.5625959 21.14784,18.5625959 Z M25.52992,18.5625959 C26.00608,18.5625959 26.36704,18.4640359 26.6128,18.2669159 C26.85856,18.0697959 26.99936,17.7561959 27.0352,17.3261159 C27.048,17.2313959 27.03008,17.1590759 26.98144,17.1091559 C26.9328,17.0592359 26.86112,17.0342759 26.7664,17.0342759 C26.59488,17.0342759 26.49632,17.1289959 26.47072,17.3184359 C26.44768,17.5795559 26.36448,17.7581159 26.22112,17.8541159 C26.07776,17.9501159 25.84736,17.9981159 25.52992,17.9981159 L25.52992,17.9981159 L24.60832,17.9981159 C24.32672,17.9981159 24.10464,17.9635559 23.94208,17.8944359 C23.77952,17.8253159 23.66368,17.7094759 23.59456,17.5469159 C23.52544,17.3843559 23.49088,17.1622759 23.49088,16.8806759 L23.49088,16.8806759 L23.49088,15.1219559 C23.49088,14.8377959 23.52544,14.6144359 23.59456,14.4518759 C23.66368,14.2893159 23.77888,14.1741159 23.94016,14.1062759 C24.10144,14.0384359 24.3216,14.0045159 24.60064,14.0045159 L24.60064,14.0045159 L25.52992,14.0045159 C25.84736,14.0045159 26.07776,14.0525159 26.22112,14.1485159 C26.36448,14.2445159 26.44768,14.4230759 26.47072,14.6841959 C26.49632,14.8736359 26.59488,14.9683559 26.7664,14.9683559 C26.86112,14.9683559 26.9328,14.9433959 26.98144,14.8934759 C27.03008,14.8435559 27.048,14.7712359 27.0352,14.6765159 C26.99936,14.2489959 26.85856,13.9360359 26.6128,13.7376359 C26.36704,13.5392359 26.00608,13.44 25.52992,13.44 L25.52992,13.44 L24.60064,13.44 C24.0272,13.4374759 23.6048,13.5718759 23.33344,13.8432359 C23.06208,14.1145959 22.9264,14.5408359 22.9264,15.1219559 L22.9264,15.1219559 L22.9264,16.8806759 C22.9264,17.4566759 23.06272,17.8809959 23.33536,18.1536359 C23.608,18.4262759 24.03232,18.5625959 24.60832,18.5625959 L24.60832,18.5625959 L25.52992,18.5625959 Z"
          id="HEGIC"
          fill="#80F7EF"
          fillRule="nonzero"
        />
      </g>
    </SvgIcon>
  );
}