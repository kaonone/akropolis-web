import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { TokenIconProps } from '../types';
import { makeRandomID } from '../../temp23/makeRandomID';

export function TriCryptoIcon(props: TokenIconProps) {
  const gradientIds = React.useMemo(
    () => [1, 2, 3, 4, 5, 6].map(() => makeRandomID('TriCryptoIcon')),
    [],
  );

  return (
    <SvgIcon {...props} viewBox="0 0 32 32">
      <defs>
        <linearGradient id={gradientIds[0]} x1="58.266%" x2="64.017%" y1="53.988%" y2="74.084%">
          <stop offset="0%" stopColor="#F2E62B" />
          <stop offset="48.648%" stopColor="#B1FF46" />
          <stop offset="100%" stopColor="#05A2FB" />
        </linearGradient>
        <linearGradient id={gradientIds[1]} x1="45.095%" x2="50%" y1="27.882%" y2="67.517%">
          <stop offset="0%" stopColor="maroon" />
          <stop offset="18.742%" stopColor="#FA0F00" />
          <stop offset="43.093%" stopColor="#FFCD0C" />
          <stop offset="100%" stopColor="#EEEB32" />
        </linearGradient>
        <linearGradient id={gradientIds[2]} x1="33.933%" x2="26.653%" y1="24.733%" y2="61.578%">
          <stop offset="0%" stopColor="#FF9800" />
          <stop offset="55.769%" stopColor="#E4FF13" />
          <stop offset="100%" stopColor="#50FFA7" />
        </linearGradient>
        <linearGradient id={gradientIds[3]} x1="60.825%" x2="50%" y1="-11.07%" y2="100%">
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
        <linearGradient id={gradientIds[4]} x1="40.754%" x2="29.998%" y1="8.651%" y2="78.218%">
          <stop offset="0%" stopColor="#FA2401" />
          <stop offset="42.869%" stopColor="#F5DF22" />
          <stop offset="77.418%" stopColor="#00E4F8" />
          <stop offset="100%" stopColor="#0010FF" />
        </linearGradient>
        <linearGradient id={gradientIds[5]} x1="50%" x2="50.659%" y1="-35.457%" y2="95.225%">
          <stop offset=".022%" stopColor="#F76D08" />
          <stop offset="33.814%" stopColor="#F1E62B" />
          <stop offset="50.699%" stopColor="#75F583" />
          <stop offset="69.543%" stopColor="#00E0FB" />
          <stop offset="100%" stopColor="#0023FF" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g id="TriCrypto">
          <path fill="#D8D8D8" fillOpacity="0" d="M0 0h32v32H0z" />
          <g>
            <path
              fill={`url(#${gradientIds[0]})`}
              d="M6.579 1.248c5.098-3.07 23.855 6.062 23.581 12.038-.273 5.977-3.267 6.887-5.632 7.533-2.365.646-9.815 2.037-10.211 3.114-.396 1.077-1.643 6.423-5.623 5.736-3.98-.687-7.292-8.2-7.543-13.515-.251-5.316.33-11.836 5.428-14.906z"
            />
            <path
              fill={`url(#${gradientIds[1]})`}
              d="M6.579 1.248c4.692-2.826 20.75 3.7 23.216 10.366.214.578-.344 1.091-.978 1.48-2.04 1.25-4.238 1.567-6.604 2.213-2.365.645-9.815 2.037-10.211 3.114-.396 1.077-10.6 3.048-10.851-2.267-.251-5.316.33-11.836 5.428-14.906z"
            />
            <path
              fill={`url(#${gradientIds[2]})`}
              d="M14.232 14.8c0-1.952-.19-3.402-.57-4.35-.57-1.42.034-3.66 1.216-4.046 1.182-.384 4.052 1.271 6.588 2.361 2.537 1.09 4.354 2.482 3.754 3.515-.601 1.032-3.62 1.721-4.981 1.925-.908.136-2.91.334-6.007.595z"
            />
            <path
              fill={`url(#${gradientIds[3]})`}
              d="M9.399 30.099c3.46-.82 5.178-6.66 5.178-14.725 0-2.96-1.274-7.768-2.12-10.461-.91-2.901 2.883-3.197 2.342-3.354C12.646.937 11.581.43 9.37.447 4.874.48.583 6.515 1.055 15.747 1.528 24.98 5.939 30.92 9.399 30.1z"
              transform="rotate(-4 7.936 15.31)"
            />
            <path
              fill={`url(#${gradientIds[4]})`}
              d="M9.58 30.101c2.748-.652 4.406-4.472 4.97-10.059.066-.65.62-5.34-.337-9.072-.032-.126-.358 1.886-1.132 3.513-.775 1.626-1.862 2.744-2.014 2.768-2.66.419-4.08-.516-6.544-1.645-2.612-1.196-.277-12.969-1.844-9.254-1.052 2.495-1.581 5.68-1.442 9.398C1.584 25.066 6.12 30.92 9.58 30.1z"
              transform="rotate(-4 7.992 17.904)"
            />
            <ellipse
              cx="7.109"
              cy="20.901"
              fill={`url(#${gradientIds[5]})`}
              rx="4.493"
              ry="7.114"
              transform="rotate(-12 7.11 20.901)"
            />
          </g>
          <g transform="translate(9 8.5)">
            <circle cx="16" cy="16.15" r="6.5" fill="#FFF" fillRule="nonzero" stroke="#FFF" />
            <circle cx="6.5" cy="16.15" r="6.5" fill="#FFF" fillRule="nonzero" stroke="#FFF" />
            <circle cx="11.25" cy="6.5" r="6.5" fill="#FFF" fillRule="nonzero" stroke="#FFF" />
            <path
              fill="#5A5564"
              fillRule="nonzero"
              d="M10.259 12.615l-.361.36c1.662 1.796 1.662 4.526 0 6.25l.361.36c1.807-2.012 1.807-5.03 0-6.97zM3.32 12.615c1.807-1.653 4.553-1.653 6.288 0l.362-.36a5.142 5.142 0 00-6.94 0l.29.36zM3.03 19.226c-1.662-1.797-1.662-4.527 0-6.252l-.361-.359a5.066 5.066 0 000 6.898l.361-.287zM9.68 19.513c-1.806 1.653-4.553 1.653-6.288 0l-.362.36a5.142 5.142 0 006.94 0l-.29-.36z"
            />
            <path
              fill="#F90"
              fillRule="nonzero"
              d="M8.596 14.986c-.072-.718-.65-.934-1.445-1.006v-.934h-.579v.934h-.506v-.934h-.578v.934H4.331v.647h.434c.145 0 .29.072.362.287v2.587c0 .072-.073.144-.073.144-.072.072-.144.072-.217.072h-.433l-.145.718h1.157v1.006h.578v-1.006h.434v.934h.578v-.934c1.012-.072 1.663-.287 1.735-1.221.072-.719-.29-1.078-.795-1.222.434-.144.65-.503.65-1.006zm-.795 2.084c0 .719-1.229.647-1.662.647v-1.294c.361 0 1.662-.143 1.662.647zm-.289-1.796c0 .646-1.012.575-1.373.575v-1.15c.289 0 1.373-.144 1.373.575z"
            />
            <path
              fill="#282138"
              fillRule="nonzero"
              d="M6.5 22.1c-3.325 0-6-2.659-6-5.964 0-3.305 2.675-5.964 6-5.964s6 2.659 6 5.964c0 3.305-2.675 5.964-6 5.964zm0-11.497c-3.036 0-5.566 2.443-5.566 5.533 0 3.09 2.458 5.533 5.566 5.533 3.036 0 5.566-2.443 5.566-5.533-.072-3.09-2.53-5.533-5.566-5.533z"
            />
            <path fill="#26A17B" fillRule="nonzero" d="M16 22.15a6 6 0 100-12 6 6 0 000 12z" />
            <path
              fill="#FFF"
              d="M16.715 16.658c-.046 0-.253.023-.738.023-.37 0-.646 0-.739-.023-1.453-.07-2.561-.323-2.561-.623s1.085-.554 2.562-.623v.992c.092 0 .369.023.738.023.462 0 .67-.023.715-.023v-.992c1.454.069 2.539.323 2.539.623.046.3-1.062.553-2.516.623zm0-1.339v-.9h2.031v-1.361h-5.538v1.361h2.03v.877c-1.661.07-2.884.393-2.884.785s1.246.715 2.885.784v2.839h1.476v-2.839c1.662-.069 2.885-.392 2.885-.784 0-.393-1.223-.692-2.885-.762z"
            />
            <path
              fill="#627EEA"
              d="M17.25 6.5c0 3.325-2.675 6-6 6s-6-2.675-6-6 2.675-6 6-6 6 2.747 6 6z"
            />
            <path
              fill="#FFF"
              fillOpacity=".604"
              fillRule="nonzero"
              d="M11.467 2.018v3.325l2.82 1.23z"
            />
            <path fill="#FFF" fillRule="nonzero" d="M11.467 2.018L8.575 6.645l2.892-1.302z" />
            <path
              fill="#FFF"
              fillOpacity=".604"
              fillRule="nonzero"
              d="M11.467 8.741v2.24l2.82-3.903z"
            />
            <path fill="#FFF" fillRule="nonzero" d="M11.467 11.054v-2.24L8.575 7.15z" />
            <path
              fill="#FFF"
              fillOpacity=".2"
              fillRule="nonzero"
              d="M11.467 8.235l2.82-1.663-2.82-1.229z"
            />
            <path
              fill="#FFF"
              fillOpacity=".604"
              fillRule="nonzero"
              d="M8.575 6.572l2.892 1.663V5.343z"
            />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}
