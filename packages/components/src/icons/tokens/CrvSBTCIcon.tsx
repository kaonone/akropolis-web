import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function CrvSBTCIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 32 32">
      <defs>
        <linearGradient id="u9lbi2gpsa" x1="50%" x2="50%" y1="0" y2="100%">
          <stop offset="0" stopColor="#fcc538" />
          <stop offset="100%" stopColor="#f7931a" />
        </linearGradient>
        <linearGradient id="foznij8lcb" x1="0" x2="0" y1="0" y2="100%">
          <stop offset="0" stopColor="#ff1a00" />
          <stop offset="24.495%" stopColor="#f8f500" />
          <stop offset="49.429%" stopColor="#87ff70" />
          <stop offset="74.787%" stopColor="#00e0fb" />
          <stop offset="100%" stopColor="#004cff" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <path
              fill="url(#u9lbi2gpsa)"
              fillRule="nonzero"
              d="M29 14.5c0-1.898-.378-3.796-1.104-5.549-.726-1.753-1.8-3.362-3.143-4.704-1.342-1.342-2.95-2.417-4.704-3.143C18.296.378 16.398.0 14.5.0c-1.898.0-3.796.378-5.549 1.104-1.753.726-3.362 1.801-4.704 3.143C2.905 5.589 1.83 7.198 1.104 8.951.378 10.704.0 12.602.0 14.5c0 1.898.378 3.796 1.104 5.549.726 1.753 1.8 3.362 3.143 4.704 1.342 1.342 2.95 2.417 4.704 3.143C10.704 28.622 12.602 29 14.5 29c1.898.0 3.796-.378 5.549-1.104 1.753-.726 3.362-1.801 4.704-3.143 1.342-1.342 2.417-2.951 3.143-4.704C28.622 18.296 29 16.398 29 14.5z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fff"
              d="M20.893 12.567c.289-1.911-1.18-2.937-3.188-3.625l.651-2.587-1.59-.392-.636 2.519c-.417-.103-.847-.201-1.274-.297l.637-2.535-1.588-.393-.654 2.587-.217-.05c-.27-.062-.537-.123-.798-.186l.002-.009-2.195-.543-.422 1.683.012.003c.138.032 1.167.267 1.142.282.644.159.762.582.743.916L9.73 17.031c-.078.194-.278.484-.73.374.018.023-1.097-.27-1.156-.286l-.79 1.802 1.036.256 1.036.256c.222.055.44.112.658.168l.475.122-.658 2.617 1.59.393.652-2.59c.434.117.854.225 1.268.325l-.65 2.578 1.591.393.659-2.613c2.712.509 4.754.304 5.613-2.127.691-1.956-.036-3.084-1.464-3.821 1.04-.236 1.822-.913 2.032-2.311zm-3.635 5.046c-.452 1.795-3.284 1.055-4.583.716-.119-.031-.224-.059-.314-.081l.873-3.468c.11.027.243.057.395.09 1.344.299 4.09.909 3.63 2.743zm-3.363-4.355c1.081.287 3.443.912 3.854-.719.42-1.67-1.874-2.173-2.995-2.419-.126-.028-.237-.052-.328-.075l-.79 3.146c.074.018.161.042.26.067z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fff"
              d="M25.224 29.277c.72-.27 1.47-.465 2.219-.643.6-.141 1.2-.271 1.797-.425.373-.097.745-.202 1.094-.368.278-.133.54-.303.757-.52.215-.217.385-.479.511-.758.159-.349.25-.722.314-1.101.077-.455.113-.917.057-1.37-.055-.452-.202-.895-.401-1.311-.2-.416-.451-.804-.75-1.152-.4-.463-.883-.854-1.395-1.197-.64-.429-1.324-.784-2.025-1.099-.702-.316-1.42-.593-2.154-.827-.588-.187-1.184-.347-1.795-.436-.456-.066-.921-.093-1.382-.047-.46.047-.917.167-1.329.373-.412.206-.78.498-1.094.835-.315.338-.575.72-.79 1.125-.218.406-.39.833-.522 1.273-.131.439-.221.891-.275 1.346-.072.607-.079 1.221-.028 1.83.063.76.217 1.511.392 2.257.175.746.373 1.487.674 2.191.24.562.546 1.101.95 1.565.252.289.543.549.87.752.26.163.545.29.844.362.224.054.457.076.688.065.232-.01.461-.053.68-.13.289-.101.557-.261.793-.458.294-.247.538-.552.739-.88.241-.392.422-.817.56-1.252z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="url(#foznij8lcb)"
              d="M22.049 31.023 21.669 30.901 21.296 30.683 20.918 30.361 20.606 29.989 20.322 29.547 20.073 29.046 19.838 28.421 19.558 27.552 19.298 26.586 19.213 26.232 19.085 25.471 19.036 25.074 18.98 24.334 18.995 23.596 19.085 22.869 19.238 22.191 19.338 21.765 19.558 21.161 19.824 20.669 20.405 19.88 20.737 19.594 21.1 19.337 21.423 19.175 21.883 19.039 22.709 18.981 23.415 19.055 24.247 19.222 25.173 19.494 26.151 19.843 27.126 20.259 27.22 20.29 28.163 20.76 28.995 21.27 29.641 21.794 29.814 21.918 30.42 22.607 30.555 22.826 30.873 23.56 30.964 23.843 31.026 24.15 31.052 24.464V24.807L31.027 25.107 30.905 25.721 30.822 25.994 30.72 26.232 30.578 26.473 30.42 26.671 30.256 26.807 29.791 27.06 29.248 27.244 28.465 27.449 27.709 27.634 26.8 27.851 26.136 28.033 25.886 28.093 25.026 28.366 24.621 28.521 24.445 28.585 24.395 28.831 24.291 29.134 24.198 29.391 24.097 29.61 23.854 30.069 23.558 30.449 23.237 30.731 22.793 30.964 22.417 31.037z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fbf100"
              fillRule="nonzero"
              d="M24.066 22.461 23.962 22.606 24.051 23.338 24.133 23.167z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a40000"
              fillRule="nonzero"
              d="M22.709 18.972 22.151 19.006 22.427 19.105 22.916 19.071z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffae00"
              fillRule="nonzero"
              d="M23.968 21.776 23.831 21.896 23.962 22.606 24.066 22.461z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a80000"
              fillRule="nonzero"
              d="M22.916 19.071 22.427 19.105 22.703 19.323 23.123 19.284z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff7300"
              fillRule="nonzero"
              d="M23.841 21.13 23.661 21.228 23.831 21.896 23.968 21.776z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b60000"
              fillRule="nonzero"
              d="M23.123 19.284 22.703 19.323 22.971 19.654 23.325 19.607z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3f00"
              fillRule="nonzero"
              d="M23.689 20.543 23.457 20.62 23.661 21.228 23.841 21.13z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d60000"
              fillRule="nonzero"
              d="M23.325 19.607 22.971 19.655 23.226 20.091 23.515 20.03z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1300"
              fillRule="nonzero"
              d="M23.515 20.03 23.225 20.091 23.457 20.62 23.689 20.543z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#16ffe1"
              fillRule="nonzero"
              d="M25.192 24.756 24.707 24.857 24.683 25.403 25.187 25.272z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#4dffaa"
              fillRule="nonzero"
              d="M25.196 24.196 24.72 24.264 24.707 24.857 25.192 24.756z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M25.2 23.607 24.722 23.639 24.72 24.264 25.196 24.196z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b7ff40"
              fillRule="nonzero"
              d="M25.202 23.005 24.713 22.998 24.722 23.639 25.199 23.607z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ebff0c"
              fillRule="nonzero"
              d="M25.203 22.406 24.693 22.359 24.713 22.998 25.202 23.005z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ed0400"
              fillRule="nonzero"
              d="M25.173 19.481 24.247 19.215 24.316 19.303 25.18 19.559z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fc0"
              fillRule="nonzero"
              d="M25.203 21.826 24.662 21.74 24.693 22.359 25.203 22.406z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f10800"
              fillRule="nonzero"
              d="M25.18 19.559 24.316 19.303 24.385 19.494 25.186 19.735z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9800"
              fillRule="nonzero"
              d="M25.202 21.281 24.621 21.157 24.662 21.74 25.203 21.826z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1300"
              fillRule="nonzero"
              d="M25.186 19.735 24.385 19.494 24.452 19.784 25.191 20.003z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6c00"
              fillRule="nonzero"
              d="M25.199 20.787 24.572 20.627 24.621 21.157 25.202 21.281z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff2900"
              fillRule="nonzero"
              d="M25.191 20.003 24.452 19.784 24.514 20.165 25.196 20.357z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff4700"
              fillRule="nonzero"
              d="M25.196 20.357 24.515 20.166 24.572 20.628 25.199 20.787z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#13fce4"
              fillRule="nonzero"
              d="M24.707 24.858 24.35 25.013 24.306 25.587 24.684 25.404z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#49ffad"
              fillRule="nonzero"
              d="M24.72 24.264 24.373 24.388 24.35 25.013 24.707 24.857z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M24.722 23.639 24.35 23.729 24.373 24.388 24.72 24.264z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#baff3c"
              fillRule="nonzero"
              d="M24.713 22.998 24.352 23.052 24.374 23.729 24.722 23.639z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f1fc06"
              fillRule="nonzero"
              d="M24.692 22.359 24.309 22.378 24.352 23.053 24.713 22.998z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d10000"
              fillRule="nonzero"
              d="M24.247 19.215 23.415 19.043 23.552 19.138 24.316 19.303z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffc100"
              fillRule="nonzero"
              d="M24.662 21.74 24.245 21.723 24.309 22.378 24.693 22.359z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d60000"
              fillRule="nonzero"
              d="M24.316 19.303 23.552 19.137 23.689 19.342 24.385 19.494z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8900"
              fillRule="nonzero"
              d="M24.621 21.157 24.162 21.106 24.245 21.723 24.662 21.74z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e40000"
              fillRule="nonzero"
              d="M24.385 19.494 23.688 19.342 23.822 19.65 24.452 19.784z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff5d00"
              fillRule="nonzero"
              d="M24.571 20.627 24.062 20.545 24.162 21.106 24.621 21.157z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1300"
              fillRule="nonzero"
              d="M24.452 19.784 23.822 19.651 23.947 20.055 24.515 20.166z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3400"
              fillRule="nonzero"
              d="M24.515 20.165 23.947 20.055 24.062 20.545 24.572 20.627z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#1cffdb"
              fillRule="nonzero"
              d="M25.777 24.708 25.192 24.756 25.187 25.272 25.788 25.194z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#50ffa7"
              fillRule="nonzero"
              d="M25.774 24.184 25.196 24.196 25.192 24.756 25.777 24.708z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M25.779 23.634 25.2 23.607 25.196 24.196 25.774 24.184z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b4ff43"
              fillRule="nonzero"
              d="M25.791 23.073 25.202 23.005 25.2 23.607 25.779 23.634z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e4ff13"
              fillRule="nonzero"
              d="M25.812 22.516 25.203 22.406 25.202 23.005 25.791 23.073z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="gold"
              fillRule="nonzero"
              d="M25.839 21.978 25.203 21.826V22.406L25.812 22.516z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1e00"
              fillRule="nonzero"
              d="M26.15 19.831 25.173 19.482 25.18 19.559 26.102 19.897z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffa700"
              fillRule="nonzero"
              d="M25.873 21.474 25.202 21.281 25.203 21.826 25.839 21.978z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1e00"
              fillRule="nonzero"
              d="M26.102 19.897 25.18 19.559 25.186 19.735 26.052 20.054z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff7e00"
              fillRule="nonzero"
              d="M25.912 21.018 25.199 20.787 25.201 21.281 25.873 21.474z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff2900"
              fillRule="nonzero"
              d="M26.052 20.054 25.186 19.735 25.191 20.003 26.003 20.298z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff5900"
              fillRule="nonzero"
              d="M25.956 20.622 25.196 20.357 25.199 20.787 25.912 21.018z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3b00"
              fillRule="nonzero"
              d="M26.003 20.298 25.191 20.003 25.196 20.357 25.956 20.622z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0cf"
              fillRule="nonzero"
              d="M24.372 28.593 25.158 28.296 25.001 28.379 24.203 28.683z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00dcfe"
              fillRule="nonzero"
              d="M24.525 28.457 25.302 28.17 25.158 28.296 24.372 28.593z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#09f0ee"
              fillRule="nonzero"
              d="M24.66 28.278 25.428 28.003 25.301 28.17 24.525 28.457z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#1cffdb"
              fillRule="nonzero"
              d="M24.774 28.061 25.534 27.801 25.428 28.003 24.66 28.278z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#33ffc4"
              fillRule="nonzero"
              d="M24.862 27.809 25.617 27.568 25.534 27.801 24.774 28.061z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#4dffaa"
              fillRule="nonzero"
              d="M24.923 27.531 25.674 27.31 25.617 27.568 24.862 27.809z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#63ff94"
              fillRule="nonzero"
              d="M24.954 27.233 25.705 27.034 25.674 27.31 24.923 27.531z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#7dff7a"
              fillRule="nonzero"
              d="M24.956 26.923 25.707 26.747 25.705 27.034 24.954 27.233z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#97ff60"
              fillRule="nonzero"
              d="M24.927 26.608 25.681 26.455 25.707 26.747 24.956 26.923z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b1ff46"
              fillRule="nonzero"
              d="M24.868 26.298 25.628 26.168 25.681 26.455 24.927 26.608z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c7ff30"
              fillRule="nonzero"
              d="M24.781 26 25.548 25.892 25.628 26.168 24.868 26.298z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#deff19"
              fillRule="nonzero"
              d="M24.668 25.723 25.444 25.635 25.548 25.892 24.781 26z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fc0"
              fillRule="nonzero"
              d="M23.646 24.841 24.499 24.82 24.674 24.848 23.835 24.872z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f1fc06"
              fillRule="nonzero"
              d="M24.532 25.473 25.319 25.404 25.445 25.635 24.668 25.723z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fc0"
              fillRule="nonzero"
              d="M23.835 24.872 24.674 24.848 24.848 24.923 24.023 24.953z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffea00"
              fillRule="nonzero"
              d="M24.376 25.258 25.175 25.205 25.319 25.404 24.532 25.473z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffd000"
              fillRule="nonzero"
              d="M24.023 24.953 24.848 24.923 25.017 25.043 24.205 25.083z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffdb00"
              fillRule="nonzero"
              d="M24.205 25.083 25.017 25.043 25.175 25.205 24.376 25.258z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#beff39"
              fillRule="nonzero"
              d="M24.353 23.052 24.133 23.167 24.166 23.874 24.374 23.728z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f8f500"
              fillRule="nonzero"
              d="M24.309 22.378 24.066 22.461 24.133 23.167 24.353 23.052z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b00"
              fillRule="nonzero"
              d="M23.415 19.043 22.709 18.972 22.916 19.071 23.552 19.137z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffb900"
              fillRule="nonzero"
              d="M24.245 21.723 23.968 21.776 24.066 22.461 24.309 22.378z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#bf0000"
              fillRule="nonzero"
              d="M23.551 19.138 22.916 19.071 23.123 19.284 23.688 19.342z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff7e00"
              fillRule="nonzero"
              d="M24.162 21.106 23.841 21.13 23.968 21.776 24.245 21.723z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#cd0000"
              fillRule="nonzero"
              d="M23.689 19.342 23.123 19.284 23.325 19.607 23.822 19.651z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff4e00"
              fillRule="nonzero"
              d="M24.062 20.545 23.689 20.543 23.841 21.13 24.162 21.106z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e80000"
              fillRule="nonzero"
              d="M23.822 19.65 23.325 19.607 23.515 20.03 23.947 20.055z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f20"
              fillRule="nonzero"
              d="M23.947 20.055 23.515 20.03 23.689 20.543 24.062 20.545z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00d0ff"
              fillRule="nonzero"
              d="M23.886 28.763 24.525 28.457 24.372 28.593 23.719 28.911z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00e4f8"
              fillRule="nonzero"
              d="M24.032 28.568 24.66 28.278 24.525 28.457 23.886 28.763z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#16ffe1"
              fillRule="nonzero"
              d="M24.154 28.331 24.774 28.06 24.66 28.278 24.032 28.568z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#2cffca"
              fillRule="nonzero"
              d="M24.25 28.057 24.862 27.809 24.774 28.061 24.155 28.331z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#46ffb1"
              fillRule="nonzero"
              d="M24.315 27.754 24.923 27.531 24.862 27.809 24.25 28.057z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#63ff94"
              fillRule="nonzero"
              d="M24.348 27.429 24.954 27.233 24.923 27.531 24.315 27.754z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#7dff7a"
              fillRule="nonzero"
              d="M24.348 27.09 24.956 26.923 24.954 27.233 24.348 27.429z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#9aff5d"
              fillRule="nonzero"
              d="M24.316 26.747 24.927 26.608 24.955 26.923 24.348 27.091z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b7ff40"
              fillRule="nonzero"
              d="M24.25 26.409 24.868 26.298 24.926 26.608 24.316 26.747z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d1ff26"
              fillRule="nonzero"
              d="M24.155 26.083 24.781 26 24.868 26.298 24.251 26.409z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e7ff0f"
              fillRule="nonzero"
              d="M24.031 25.78 24.668 25.723 24.781 26 24.155 26.083z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fbf100"
              fillRule="nonzero"
              d="M23.881 25.507 24.532 25.473 24.668 25.723 24.031 25.78z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffdb00"
              fillRule="nonzero"
              d="M23.711 25.272 24.376 25.258 24.532 25.473 23.881 25.508z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00b4ff"
              fillRule="nonzero"
              d="M19.491 27.339 19.599 27.692 19.417 26.998 19.305 26.63z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#16ffe1"
              fillRule="nonzero"
              d="M19.207 26.232 19.307 26.643 19.417 26.998 19.297 26.278 19.128 25.677z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#56ffa0"
              fillRule="nonzero"
              d="M19.182 25.895 19.297 26.278 19.244 25.551 19.128 25.152z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#97ff60"
              fillRule="nonzero"
              d="M19.128 25.152 19.244 25.551 19.26 24.835 19.143 24.42z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d4ff23"
              fillRule="nonzero"
              d="M19.143 24.42 19.26 24.835 19.345 24.148 19.23 23.717z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="gold"
              fillRule="nonzero"
              d="M19.229 23.717 19.345 24.148 19.497 23.507 19.384 23.062z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9400"
              fillRule="nonzero"
              d="M19.384 23.062 19.497 23.507 19.715 22.932 19.606 22.473z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff5900"
              fillRule="nonzero"
              d="M19.606 22.473 19.715 22.932 19.992 22.436 19.888 21.966z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff2500"
              fillRule="nonzero"
              d="M19.887 21.966 19.991 22.436 20.321 22.036 20.224 21.555z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c1ff36"
              fillRule="nonzero"
              d="M24.576 25.309 24.587 25.715 24.657 26.462 24.647 26.072z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#df0000"
              fillRule="nonzero"
              d="M20.224 21.555 20.322 22.036 20.696 21.742 20.606 21.253z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffea00"
              fillRule="nonzero"
              d="M24.433 24.553 24.447 24.976 24.587 25.715 24.576 25.309z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b00"
              fillRule="nonzero"
              d="M20.606 21.253 20.696 21.741 21.106 21.563 21.023 21.069z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffa700"
              fillRule="nonzero"
              d="M24.221 23.826 24.239 24.265 24.447 24.976 24.433 24.553z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#9f0000"
              fillRule="nonzero"
              d="M21.023 21.069 21.106 21.563 21.539 21.506 21.466 21.01z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6c00"
              fillRule="nonzero"
              d="M23.945 23.147 23.969 23.6 24.239 24.265 24.221 23.826z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#920000"
              fillRule="nonzero"
              d="M21.466 21.01 21.539 21.506 21.985 21.573 21.92 21.077z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3400"
              fillRule="nonzero"
              d="M23.613 22.536 23.643 23.002 23.969 23.6 23.945 23.147z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#960000"
              fillRule="nonzero"
              d="M21.92 21.077 21.985 21.573 22.43 21.763 22.375 21.271z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f10800"
              fillRule="nonzero"
              d="M23.233 22.01 23.271 22.487 23.643 23.002 23.613 22.536z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a40000"
              fillRule="nonzero"
              d="M22.375 21.27 22.43 21.763 22.863 22.07 22.817 21.584z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c40000"
              fillRule="nonzero"
              d="M22.817 21.584 22.863 22.07 23.271 22.487 23.233 22.01z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#53ffa4"
              fillRule="nonzero"
              d="M19.083 25.488 19.182 25.895 19.128 25.152 19.027 24.735z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#97ff60"
              fillRule="nonzero"
              d="M19.027 24.735 19.128 25.152 19.143 24.42 19.043 23.993z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d7ff1f"
              fillRule="nonzero"
              d="M19.043 23.993 19.143 24.42 19.229 23.717 19.129 23.281z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffd300"
              fillRule="nonzero"
              d="M19.129 23.281 19.229 23.717 19.384 23.062 19.285 22.617z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9100"
              fillRule="nonzero"
              d="M19.285 22.617 19.384 23.062 19.605 22.473 19.508 22.02z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff5200"
              fillRule="nonzero"
              d="M19.509 22.02 19.606 22.473 19.888 21.966 19.793 21.505z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1e00"
              fillRule="nonzero"
              d="M19.793 21.505 19.888 21.966 20.224 21.555 20.133 21.088z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d60000"
              fillRule="nonzero"
              d="M20.133 21.088 20.224 21.555 20.606 21.253 20.518 20.781z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ad0000"
              fillRule="nonzero"
              d="M20.519 20.781 20.606 21.253 21.023 21.069 20.941 20.594z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffa300"
              fillRule="nonzero"
              d="M24.173 23.381 24.221 23.826 24.433 24.553 24.388 24.117z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#920000"
              fillRule="nonzero"
              d="M20.941 20.594 21.023 21.069 21.465 21.01 21.387 20.533z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6400"
              fillRule="nonzero"
              d="M23.894 22.693 23.945 23.147 24.221 23.826 24.173 23.381z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#840000"
              fillRule="nonzero"
              d="M21.387 20.533 21.466 21.01 21.92 21.077 21.847 20.6z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff2d00"
              fillRule="nonzero"
              d="M23.558 22.075 23.613 22.536 23.945 23.147 23.894 22.693z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#890000"
              fillRule="nonzero"
              d="M21.847 20.6 21.92 21.077 22.375 21.27 22.306 20.795z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e40000"
              fillRule="nonzero"
              d="M23.174 21.542 23.233 22.01 23.613 22.536 23.558 22.075z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#9b0000"
              fillRule="nonzero"
              d="M22.306 20.795 22.375 21.271 22.817 21.584 22.753 21.112z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b00"
              fillRule="nonzero"
              d="M22.753 21.112 22.817 21.584 23.233 22.01 23.174 21.543z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#13fce4"
              fillRule="nonzero"
              d="M19.152 25.821 19.207 26.232 19.083 25.488 19.028 25.074z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#19ffde"
              fillRule="nonzero"
              d="M19.417 26.998 19.522 27.32 19.406 26.622 19.298 26.278z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#56ffa0"
              fillRule="nonzero"
              d="M19.297 26.278 19.406 26.622 19.355 25.917 19.245 25.551z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#94ff63"
              fillRule="nonzero"
              d="M19.244 25.551 19.355 25.917 19.37 25.223 19.26 24.835z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d1ff26"
              fillRule="nonzero"
              d="M19.26 24.835 19.37 25.222 19.453 24.556 19.345 24.148z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffdb00"
              fillRule="nonzero"
              d="M19.345 24.148 19.453 24.556 19.602 23.936 19.498 23.507z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9c00"
              fillRule="nonzero"
              d="M19.497 23.507 19.602 23.936 19.813 23.379 19.715 22.932z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6000"
              fillRule="nonzero"
              d="M19.715 22.932 19.813 23.379 20.082 22.9 19.992 22.436z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3000"
              fillRule="nonzero"
              d="M19.992 22.436 20.082 22.9 20.403 22.512 20.322 22.036z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c1ff36"
              fillRule="nonzero"
              d="M24.587 25.716 24.544 26.086 24.612 26.809 24.657 26.462z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f10800"
              fillRule="nonzero"
              d="M20.321 22.036 20.403 22.512 20.767 22.228 20.696 21.741z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fbf100"
              fillRule="nonzero"
              d="M24.447 24.976 24.408 25.369 24.544 26.086 24.587 25.715z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c80000"
              fillRule="nonzero"
              d="M20.696 21.742 20.767 22.228 21.165 22.056 21.105 21.563z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffae00"
              fillRule="nonzero"
              d="M24.239 24.265 24.206 24.679 24.408 25.369 24.447 24.976z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ad0000"
              fillRule="nonzero"
              d="M21.106 21.563 21.165 22.056 21.585 22.002 21.539 21.506z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff7300"
              fillRule="nonzero"
              d="M23.969 23.6 23.944 24.036 24.206 24.679 24.239 24.265z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a40000"
              fillRule="nonzero"
              d="M21.539 21.506 21.585 22.002 22.018 22.068 21.985 21.573z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3f00"
              fillRule="nonzero"
              d="M23.643 23.002 23.628 23.456 23.944 24.035 23.969 23.6z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a40000"
              fillRule="nonzero"
              d="M21.985 21.573 22.018 22.068 22.451 22.253 22.43 21.763z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1300"
              fillRule="nonzero"
              d="M23.271 22.487 23.267 22.956 23.628 23.456 23.643 23.002z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b60000"
              fillRule="nonzero"
              d="M22.43 21.763 22.451 22.253 22.871 22.552 22.863 22.07z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d10000"
              fillRule="nonzero"
              d="M22.863 22.07 22.871 22.551 23.267 22.956 23.271 22.487z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00bcff"
              fillRule="nonzero"
              d="M19.599 27.692 19.698 27.994 19.521 27.32 19.417 26.998z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00c4ff"
              fillRule="nonzero"
              d="M19.699 27.994 19.776 28.233 19.605 27.585 19.522 27.32z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#1cffdb"
              fillRule="nonzero"
              d="M19.522 27.32 19.605 27.585 19.494 26.914 19.406 26.622z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#56ffa0"
              fillRule="nonzero"
              d="M19.405 26.622 19.494 26.913 19.445 26.236 19.354 25.917z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#94ff63"
              fillRule="nonzero"
              d="M19.355 25.917 19.445 26.236 19.46 25.569 19.37 25.222z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ceff29"
              fillRule="nonzero"
              d="M19.37 25.222 19.46 25.569 19.541 24.929 19.453 24.556z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00b0ff"
              fillRule="nonzero"
              d="M24.403 28.831 24.303 29.043 24.113 29.588 24.204 29.398z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe200"
              fillRule="nonzero"
              d="M19.453 24.556 19.541 24.929 19.684 24.334 19.602 23.936z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0cf4eb"
              fillRule="nonzero"
              d="M24.54 28.2 24.435 28.436 24.304 29.043 24.403 28.831z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffa300"
              fillRule="nonzero"
              d="M19.602 23.936 19.684 24.334 19.887 23.799 19.813 23.379z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#46ffb1"
              fillRule="nonzero"
              d="M24.61 27.52 24.503 27.783 24.435 28.436 24.54 28.2z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6c00"
              fillRule="nonzero"
              d="M19.813 23.379 19.888 23.799 20.147 23.34 20.082 22.9z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M24.612 26.809 24.504 27.1 24.502 27.783 24.61 27.52z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3b00"
              fillRule="nonzero"
              d="M20.082 22.9 20.147 23.34 20.455 22.969 20.403 22.512z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#beff39"
              fillRule="nonzero"
              d="M24.545 26.085 24.438 26.405 24.504 27.1 24.612 26.809z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1300"
              fillRule="nonzero"
              d="M20.403 22.512 20.455 22.969 20.805 22.697 20.767 22.228z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f8f500"
              fillRule="nonzero"
              d="M24.408 25.369 24.307 25.718 24.438 26.406 24.544 26.085z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#da0000"
              fillRule="nonzero"
              d="M20.767 22.228 20.805 22.697 21.188 22.533 21.165 22.056z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffb600"
              fillRule="nonzero"
              d="M24.206 24.679 24.112 25.055 24.307 25.718 24.408 25.369z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c40000"
              fillRule="nonzero"
              d="M21.165 22.056 21.188 22.533 21.593 22.482 21.585 22.002z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff7e00"
              fillRule="nonzero"
              d="M23.944 24.035 23.86 24.437 24.112 25.055 24.206 24.679z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b60000"
              fillRule="nonzero"
              d="M21.585 22.002 21.593 22.482 22.009 22.546 22.018 22.068z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff4a00"
              fillRule="nonzero"
              d="M23.628 23.456 23.556 23.88 23.86 24.437 23.944 24.036z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b00"
              fillRule="nonzero"
              d="M22.018 22.068 22.009 22.546 22.424 22.724 22.451 22.252z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1e00"
              fillRule="nonzero"
              d="M23.267 22.956 23.209 23.401 23.556 23.881 23.628 23.456z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c80000"
              fillRule="nonzero"
              d="M22.451 22.252 22.424 22.724 22.828 23.012 22.871 22.551z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e40000"
              fillRule="nonzero"
              d="M22.871 22.551 22.828 23.012 23.209 23.401 23.267 22.956z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00c4ff"
              fillRule="nonzero"
              d="M23.475 28.553 24.324 28.26 24.163 28.121 23.302 28.404z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00d0ff"
              fillRule="nonzero"
              d="M23.301 28.404 24.163 28.122 24.014 27.945 23.141 28.213z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00e0fb"
              fillRule="nonzero"
              d="M23.141 28.213 24.015 27.945 23.881 27.734 22.997 27.986z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0ff8e7"
              fillRule="nonzero"
              d="M22.997 27.986 23.881 27.735 23.767 27.496 22.873 27.729z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00b4ff"
              fillRule="nonzero"
              d="M22.744 28.866 23.475 28.553 23.302 28.404 22.555 28.703z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00c0ff"
              fillRule="nonzero"
              d="M22.555 28.703 23.302 28.404 23.141 28.213 22.38 28.495z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00a8ff"
              fillRule="nonzero"
              d="M22.942 28.98 23.656 28.658 23.475 28.553 22.744 28.866z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#23ffd4"
              fillRule="nonzero"
              d="M22.873 27.729 23.767 27.495 23.675 27.234 22.772 27.447z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00d4ff"
              fillRule="nonzero"
              d="M22.38 28.495 23.141 28.213 22.997 27.986 22.222 28.248z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00a8ff"
              fillRule="nonzero"
              d="M23.143 29.043 23.841 28.715 23.656 28.658 22.942 28.98z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#06ecf1"
              fillRule="nonzero"
              d="M22.223 28.248 22.997 27.986 22.873 27.729 22.087 27.967z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#39ffbe"
              fillRule="nonzero"
              d="M22.772 27.447 23.675 27.234 23.607 26.957 22.698 27.148z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00a8ff"
              fillRule="nonzero"
              d="M23.343 29.052 24.025 28.724 23.841 28.715 23.143 29.043z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#1cffdb"
              fillRule="nonzero"
              d="M22.087 27.967 22.873 27.729 22.772 27.447 21.976 27.66z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#53ffa4"
              fillRule="nonzero"
              d="M22.698 27.148 23.607 26.957 23.565 26.671 22.651 26.839z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#36ffc1"
              fillRule="nonzero"
              d="M21.976 27.66 22.772 27.447 22.698 27.148 21.893 27.334z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#6dff8a"
              fillRule="nonzero"
              d="M22.651 26.839 23.565 26.671 23.55 26.383 22.634 26.528z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#50ffa7"
              fillRule="nonzero"
              d="M21.894 27.334 22.698 27.148 22.651 26.839 21.841 26.997z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#87ff70"
              fillRule="nonzero"
              d="M22.634 26.528 23.55 26.383 23.563 26.1 22.646 26.224z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#6aff8d"
              fillRule="nonzero"
              d="M21.841 26.997 22.651 26.839 22.634 26.528 21.821 26.658z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a0ff56"
              fillRule="nonzero"
              d="M22.646 26.224 23.563 26.1 23.604 25.831 22.688 25.933z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#87ff70"
              fillRule="nonzero"
              d="M21.821 26.658 22.634 26.528 22.646 26.224 21.833 26.326z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b7ff40"
              fillRule="nonzero"
              d="M22.688 25.933 23.604 25.831 23.671 25.582 22.759 25.664z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a4ff53"
              fillRule="nonzero"
              d="M21.833 26.326 22.646 26.224 22.688 25.933 21.878 26.009z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d1ff26"
              fillRule="nonzero"
              d="M22.759 25.664 23.671 25.582 23.763 25.359 22.857 25.424z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#beff39"
              fillRule="nonzero"
              d="M21.878 26.009 22.688 25.933 22.759 25.664 21.953 25.716z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e4ff13"
              fillRule="nonzero"
              d="M22.857 25.423 23.763 25.359 23.878 25.168 22.98 25.218z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d7ff1f"
              fillRule="nonzero"
              d="M21.953 25.716 22.759 25.664 22.857 25.424 22.059 25.453z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#eeff09"
              fillRule="nonzero"
              d="M22.059 25.453 22.857 25.423 22.98 25.218 22.191 25.229z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffea00"
              fillRule="nonzero"
              d="M22.191 25.229 22.98 25.218 23.124 25.053 22.347 25.049z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="gold"
              fillRule="nonzero"
              d="M22.347 25.049 23.124 25.053 23.286 24.933 22.523 24.918z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00f"
              fillRule="nonzero"
              d="M21.296 30.683 21.257 30.653 20.919 30.361 20.938 30.374z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0010ff"
              fillRule="nonzero"
              d="M20.938 30.374 20.919 30.361 20.604 29.989 20.605 29.981z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0000f1"
              fillRule="nonzero"
              d="M21.669 30.901 21.61 30.86 21.257 30.653 21.296 30.683z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0038ff"
              fillRule="nonzero"
              d="M20.605 29.981 20.604 29.989 20.319 29.548 20.304 29.513z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0000e8"
              fillRule="nonzero"
              d="M22.049 31.023 21.969 30.974 21.61 30.86 21.669 30.901z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0064ff"
              fillRule="nonzero"
              d="M20.304 29.513 20.319 29.547 20.073 29.046 20.044 28.983z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0000ed"
              fillRule="nonzero"
              d="M22.427 31.044 22.326 30.994 21.969 30.974 22.049 31.023z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0098ff"
              fillRule="nonzero"
              d="M20.044 28.983 20.073 29.046 19.87 28.497 19.829 28.401z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00f"
              fillRule="nonzero"
              d="M22.793 30.964 22.672 30.919 22.326 30.994 22.427 31.044z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00d4ff"
              fillRule="nonzero"
              d="M19.829 28.402 19.87 28.497 19.717 27.913 19.667 27.784z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0008ff"
              fillRule="nonzero"
              d="M23.138 30.784 22.998 30.749 22.672 30.919 22.793 30.964z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#26ffd1"
              fillRule="nonzero"
              d="M19.667 27.783 19.717 27.913 19.617 27.309 19.561 27.144z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#002cff"
              fillRule="nonzero"
              d="M23.454 30.509 23.296 30.488 22.998 30.749 23.138 30.784z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#5aff9d"
              fillRule="nonzero"
              d="M19.561 27.144 19.617 27.309 19.573 26.699 19.515 26.498z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0054ff"
              fillRule="nonzero"
              d="M23.732 30.143H23.558L23.296 30.488 23.454 30.509z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#90ff66"
              fillRule="nonzero"
              d="M19.515 26.498 19.573 26.699 19.588 26.1 19.53 25.863z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#08f"
              fillRule="nonzero"
              d="M23.965 29.695 23.777 29.72 23.558 30.143H23.732z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c7ff30"
              fillRule="nonzero"
              d="M19.529 25.863 19.588 26.1 19.66 25.526 19.606 25.255z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00c4ff"
              fillRule="nonzero"
              d="M24.146 29.176 23.948 29.23 23.777 29.72 23.965 29.695z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fbf100"
              fillRule="nonzero"
              d="M19.606 25.255 19.66 25.526 19.79 24.993 19.743 24.689z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#16ffe1"
              fillRule="nonzero"
              d="M24.271 28.599 24.065 28.685 23.948 29.23 24.146 29.176z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffb900"
              fillRule="nonzero"
              d="M19.743 24.688 19.79 24.993 19.973 24.514 19.937 24.18z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#4dffaa"
              fillRule="nonzero"
              d="M24.334 27.977 24.124 28.098 24.064 28.685 24.271 28.599z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8600"
              fillRule="nonzero"
              d="M19.937 24.18 19.973 24.514 20.206 24.103 20.184 23.744z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M24.335 27.327 24.124 27.485V28.098L24.335 27.977z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff5d00"
              fillRule="nonzero"
              d="M20.184 23.744 20.207 24.103 20.484 23.772 20.479 23.392z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b7ff40"
              fillRule="nonzero"
              d="M24.272 26.666 24.064 26.862 24.124 27.485 24.335 27.327z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3800"
              fillRule="nonzero"
              d="M20.479 23.392 20.484 23.772 20.799 23.53 20.812 23.135z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ebff0c"
              fillRule="nonzero"
              d="M24.147 26.012 23.945 26.245 24.064 26.862 24.272 26.666z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1a00"
              fillRule="nonzero"
              d="M20.812 23.135 20.799 23.53 21.143 23.385 21.176 22.98z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffc800"
              fillRule="nonzero"
              d="M23.961 25.382 23.769 25.651 23.945 26.245 24.147 26.012z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f10800"
              fillRule="nonzero"
              d="M21.177 22.979 21.143 23.385 21.506 23.341 21.562 22.932z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9400"
              fillRule="nonzero"
              d="M23.72 24.794 23.542 25.098 23.769 25.652 23.961 25.382z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e80000"
              fillRule="nonzero"
              d="M21.562 22.932 21.506 23.341 21.879 23.4 21.958 22.994z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6800"
              fillRule="nonzero"
              d="M23.431 24.264 23.269 24.598 23.542 25.098 23.72 24.794z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ed0400"
              fillRule="nonzero"
              d="M21.958 22.994 21.879 23.4 22.253 23.561 22.354 23.164z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff4300"
              fillRule="nonzero"
              d="M23.1 23.808 22.957 24.168 23.269 24.598 23.431 24.264z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fa0f00"
              fillRule="nonzero"
              d="M22.353 23.164 22.252 23.56 22.615 23.819 22.738 23.437z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f20"
              fillRule="nonzero"
              d="M22.738 23.438 22.615 23.819 22.957 24.168 23.101 23.808z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0cf"
              fillRule="nonzero"
              d="M19.776 28.233 19.829 28.401 19.667 27.783 19.605 27.585z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#1fffd7"
              fillRule="nonzero"
              d="M19.605 27.585 19.667 27.784 19.561 27.144 19.494 26.914z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0018ff"
              fillRule="nonzero"
              d="M23.576 30.442 23.454 30.509 23.138 30.785 23.244 30.731z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#5aff9d"
              fillRule="nonzero"
              d="M19.494 26.914 19.561 27.144 19.515 26.498 19.445 26.236z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#04f"
              fillRule="nonzero"
              d="M23.868 30.058 23.732 30.143 23.454 30.509 23.576 30.442z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#94ff63"
              fillRule="nonzero"
              d="M19.445 26.236 19.515 26.498 19.53 25.863 19.461 25.568z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#007cff"
              fillRule="nonzero"
              d="M24.113 29.588 23.965 29.695 23.732 30.143 23.868 30.058z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#caff2c"
              fillRule="nonzero"
              d="M19.461 25.568 19.53 25.863 19.606 25.254 19.541 24.929z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00b8ff"
              fillRule="nonzero"
              d="M24.304 29.043 24.146 29.176 23.965 29.695 24.113 29.588z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffea00"
              fillRule="nonzero"
              d="M19.541 24.929 19.606 25.255 19.743 24.689 19.684 24.334z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0ff8e7"
              fillRule="nonzero"
              d="M24.435 28.436 24.271 28.599 24.146 29.176 24.304 29.043z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffae00"
              fillRule="nonzero"
              d="M19.684 24.334 19.743 24.689 19.937 24.181 19.887 23.799z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#49ffad"
              fillRule="nonzero"
              d="M24.503 27.783 24.335 27.977 24.271 28.599 24.435 28.436z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff7a00"
              fillRule="nonzero"
              d="M19.887 23.799 19.937 24.18 20.184 23.744 20.147 23.34z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M24.504 27.1 24.335 27.327V27.977L24.503 27.783z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff4a00"
              fillRule="nonzero"
              d="M20.147 23.34 20.184 23.744 20.479 23.392 20.456 22.969z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#baff3c"
              fillRule="nonzero"
              d="M24.438 26.406 24.272 26.666 24.335 27.327 24.504 27.1z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff2500"
              fillRule="nonzero"
              d="M20.455 22.969 20.478 23.392 20.812 23.135 20.805 22.697z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f1fc06"
              fillRule="nonzero"
              d="M24.307 25.718 24.147 26.012 24.272 26.666 24.438 26.405z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f10800"
              fillRule="nonzero"
              d="M20.805 22.697 20.812 23.135 21.176 22.98 21.188 22.533z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffc100"
              fillRule="nonzero"
              d="M24.113 25.055 23.961 25.382 24.147 26.012 24.307 25.718z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#da0000"
              fillRule="nonzero"
              d="M21.188 22.533 21.177 22.979 21.562 22.932 21.593 22.482z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8900"
              fillRule="nonzero"
              d="M23.86 24.437 23.721 24.794 23.961 25.382 24.113 25.055z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#cd0000"
              fillRule="nonzero"
              d="M21.593 22.482 21.562 22.932 21.958 22.993 22.009 22.546z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff5900"
              fillRule="nonzero"
              d="M23.556 23.881 23.431 24.264 23.72 24.794 23.86 24.437z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d10000"
              fillRule="nonzero"
              d="M22.009 22.546 21.958 22.994 22.354 23.164 22.425 22.724z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3000"
              fillRule="nonzero"
              d="M23.209 23.401 23.1 23.808 23.431 24.264 23.556 23.881z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#df0000"
              fillRule="nonzero"
              d="M22.424 22.724 22.353 23.164 22.738 23.438 22.828 23.012z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fa0f00"
              fillRule="nonzero"
              d="M22.828 23.012 22.738 23.437 23.1 23.808 23.209 23.401z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#9f0000"
              fillRule="nonzero"
              d="M21.883 19.029 21.415 19.175 21.745 19.144 22.151 19.007z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#960000"
              fillRule="nonzero"
              d="M22.151 19.006 21.745 19.144 22.085 19.238 22.427 19.105z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffab00"
              fillRule="nonzero"
              d="M23.831 21.896 23.817 22.078 23.978 22.805 23.962 22.606z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#960000"
              fillRule="nonzero"
              d="M22.426 19.105 22.085 19.238 22.426 19.456 22.703 19.323z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6c00"
              fillRule="nonzero"
              d="M23.661 21.228 23.608 21.394 23.817 22.078 23.831 21.896z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a80000"
              fillRule="nonzero"
              d="M22.703 19.323 22.426 19.456 22.758 19.791 22.972 19.654z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3400"
              fillRule="nonzero"
              d="M23.457 20.621 23.357 20.774 23.608 21.394 23.661 21.228z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c80000"
              fillRule="nonzero"
              d="M22.971 19.655 22.758 19.791 23.071 20.234 23.225 20.091z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f10800"
              fillRule="nonzero"
              d="M23.226 20.091 23.071 20.234 23.357 20.774 23.458 20.621z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#53ffa4"
              fillRule="nonzero"
              d="M19.028 25.074 19.083 25.488 19.027 24.735 18.972 24.318z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#97ff60"
              fillRule="nonzero"
              d="M18.972 24.319 19.027 24.735 19.043 23.993 18.987 23.574z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d7ff1f"
              fillRule="nonzero"
              d="M18.987 23.574 19.043 23.993 19.129 23.281 19.074 22.858z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffd000"
              fillRule="nonzero"
              d="M19.074 22.858 19.129 23.281 19.285 22.617 19.23 22.191z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8d00"
              fillRule="nonzero"
              d="M19.23 22.191 19.285 22.617 19.508 22.02 19.453 21.591z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff4e00"
              fillRule="nonzero"
              d="M19.453 21.59 19.508 22.02 19.793 21.505 19.738 21.073z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1a00"
              fillRule="nonzero"
              d="M19.738 21.073 19.793 21.505 20.133 21.088 20.078 20.654z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d10000"
              fillRule="nonzero"
              d="M20.079 20.654 20.133 21.088 20.519 20.781 20.465 20.345z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe600"
              fillRule="nonzero"
              d="M24.342 23.687 24.433 24.564 24.576 25.324 24.488 24.455z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a80000"
              fillRule="nonzero"
              d="M20.465 20.345 20.518 20.781 20.941 20.594 20.888 20.156z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9f00"
              fillRule="nonzero"
              d="M24.127 22.947 24.173 23.381 24.388 24.117 24.342 23.687z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#8d0000"
              fillRule="nonzero"
              d="M20.888 20.156 20.941 20.594 21.387 20.533 21.335 20.093z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6000"
              fillRule="nonzero"
              d="M23.847 22.258 23.894 22.693 24.173 23.381 24.127 22.947z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="maroon"
              fillRule="nonzero"
              d="M21.335 20.093 21.387 20.533 21.847 20.6 21.796 20.16z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff2900"
              fillRule="nonzero"
              d="M23.51 21.637 23.558 22.075 23.894 22.693 23.847 22.258z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="maroon"
              fillRule="nonzero"
              d="M21.796 20.16 21.847 20.6 22.307 20.795 22.256 20.354z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#df0000"
              fillRule="nonzero"
              d="M23.126 21.103 23.174 21.543 23.558 22.075 23.511 21.637z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#920000"
              fillRule="nonzero"
              d="M22.256 20.354 22.307 20.795 22.753 21.112 22.704 20.672z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b20000"
              fillRule="nonzero"
              d="M22.704 20.672 22.753 21.112 23.174 21.543 23.126 21.103z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe600"
              fillRule="nonzero"
              d="M24.244 23.331 24.342 23.687 24.487 24.455 24.385 24.098z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b20000"
              fillRule="nonzero"
              d="M21.103 19.327 20.737 19.587 21.1 19.42 21.415 19.174z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#960000"
              fillRule="nonzero"
              d="M21.415 19.175 21.1 19.421 21.486 19.38 21.745 19.144z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#890000"
              fillRule="nonzero"
              d="M21.745 19.144 21.486 19.38 21.883 19.466 22.085 19.239z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#890000"
              fillRule="nonzero"
              d="M22.085 19.238 21.883 19.465 22.28 19.677 22.426 19.456z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff2d00"
              fillRule="nonzero"
              d="M23.357 20.774 23.364 20.995 23.656 21.621 23.608 21.394z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#9b0000"
              fillRule="nonzero"
              d="M22.426 19.456 22.28 19.677 22.666 20.01 22.758 19.791z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e80000"
              fillRule="nonzero"
              d="M23.071 20.234 23.031 20.453 23.364 20.995 23.357 20.774z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b00"
              fillRule="nonzero"
              d="M22.758 19.791 22.666 20.01 23.031 20.453 23.071 20.234z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6400"
              fillRule="nonzero"
              d="M23.608 21.394 23.655 21.621 23.898 22.313 23.817 22.078z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d10000"
              fillRule="nonzero"
              d="M20.405 19.872 20.149 20.24 20.52 19.939 20.737 19.587z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a80000"
              fillRule="nonzero"
              d="M20.737 19.587 20.52 19.939 20.925 19.758 21.1 19.421z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#8d0000"
              fillRule="nonzero"
              d="M21.1 19.421 20.925 19.758 21.355 19.703 21.486 19.38z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="maroon"
              fillRule="nonzero"
              d="M21.486 19.379 21.355 19.703 21.797 19.776 21.883 19.466z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#840000"
              fillRule="nonzero"
              d="M21.883 19.466 21.797 19.776 22.239 19.977 22.28 19.677z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff2900"
              fillRule="nonzero"
              d="M23.364 20.995 23.444 21.275 23.768 21.899 23.656 21.621z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#920000"
              fillRule="nonzero"
              d="M22.28 19.677 22.239 19.977 22.669 20.301 22.666 20.009z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#df0000"
              fillRule="nonzero"
              d="M23.031 20.453 23.075 20.737 23.444 21.275 23.364 20.995z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b20000"
              fillRule="nonzero"
              d="M22.666 20.009 22.669 20.301 23.074 20.737 23.031 20.453z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1a00"
              fillRule="nonzero"
              d="M20.113 20.268 19.824 20.651 20.15 20.24 20.405 19.872z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8d00"
              fillRule="nonzero"
              d="M19.337 21.755 19.23 22.191 19.453 21.59 19.55 21.161z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff4e00"
              fillRule="nonzero"
              d="M19.55 21.162 19.453 21.59 19.738 21.073 19.824 20.651z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1600"
              fillRule="nonzero"
              d="M19.824 20.651 19.738 21.073 20.078 20.653 20.149 20.24z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d10000"
              fillRule="nonzero"
              d="M20.149 20.24 20.078 20.653 20.465 20.344 20.52 19.939z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a40000"
              fillRule="nonzero"
              d="M20.52 19.939 20.465 20.344 20.888 20.155 20.925 19.757z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#890000"
              fillRule="nonzero"
              d="M20.926 19.758 20.888 20.156 21.335 20.093 21.355 19.703z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6000"
              fillRule="nonzero"
              d="M23.768 21.899 23.847 22.258 24.127 22.947 24.037 22.59z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="maroon"
              fillRule="nonzero"
              d="M21.355 19.702 21.335 20.093 21.796 20.16 21.797 19.776z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff2900"
              fillRule="nonzero"
              d="M23.444 21.275 23.511 21.637 23.847 22.258 23.768 21.899z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="maroon"
              fillRule="nonzero"
              d="M21.797 19.776 21.796 20.16 22.256 20.354 22.239 19.977z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#df0000"
              fillRule="nonzero"
              d="M23.074 20.737 23.126 21.103 23.51 21.637 23.444 21.275z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#920000"
              fillRule="nonzero"
              d="M22.239 19.977 22.256 20.354 22.704 20.672 22.669 20.301z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b20000"
              fillRule="nonzero"
              d="M22.669 20.301 22.704 20.672 23.126 21.103 23.074 20.737z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#23ffd4"
              fillRule="nonzero"
              d="M26.423 24.714 25.777 24.708 25.788 25.194 26.447 25.168z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#53ffa4"
              fillRule="nonzero"
              d="M26.414 24.225 25.774 24.184 25.777 24.708 26.423 24.714z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M26.42 23.715 25.779 23.634 25.774 24.184 26.414 24.225z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#adff49"
              fillRule="nonzero"
              d="M26.441 23.196 25.791 23.073 25.779 23.634 26.42 23.715z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#dbff1c"
              fillRule="nonzero"
              d="M26.478 22.682 25.812 22.516 25.791 23.073 26.441 23.196z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe200"
              fillRule="nonzero"
              d="M26.528 22.188 25.839 21.978 25.812 22.516 26.478 22.682z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3800"
              fillRule="nonzero"
              d="M27.126 20.25 26.151 19.831 26.102 19.897 27.031 20.303z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffb600"
              fillRule="nonzero"
              d="M26.592 21.726 25.873 21.474 25.839 21.978 26.528 22.188z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3800"
              fillRule="nonzero"
              d="M27.031 20.303 26.102 19.897 26.052 20.054 26.934 20.44z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9100"
              fillRule="nonzero"
              d="M26.666 21.31 25.912 21.018 25.873 21.474 26.592 21.726z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff4300"
              fillRule="nonzero"
              d="M26.934 20.44 26.052 20.054 26.003 20.298 26.84 20.657z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6f00"
              fillRule="nonzero"
              d="M26.749 20.95 25.956 20.622 25.912 21.017 26.666 21.309z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f50"
              fillRule="nonzero"
              d="M26.84 20.658 26.003 20.298 25.956 20.622 26.75 20.95z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#2cffca"
              fillRule="nonzero"
              d="M27.079 24.768 26.423 24.714 26.447 25.168 27.114 25.19z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#56ffa0"
              fillRule="nonzero"
              d="M27.065 24.315 26.413 24.225 26.423 24.714 27.079 24.768z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M27.073 23.844 26.419 23.715 26.413 24.225 27.065 24.315z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#aaff4d"
              fillRule="nonzero"
              d="M27.102 23.368 26.441 23.196 26.42 23.715 27.073 23.844z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d4ff23"
              fillRule="nonzero"
              d="M27.151 22.897 26.478 22.682 26.441 23.196 27.102 23.368z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fbf100"
              fillRule="nonzero"
              d="M27.22 22.447 26.528 22.188 26.478 22.682 27.151 22.897z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f50"
              fillRule="nonzero"
              d="M28.173 20.759 27.218 20.282 27.127 20.25 28.045 20.72z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffc400"
              fillRule="nonzero"
              d="M27.306 22.027 26.591 21.726 26.528 22.188 27.22 22.447z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff4e00"
              fillRule="nonzero"
              d="M28.045 20.72 27.127 20.25 27.031 20.303 27.912 20.759z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffa300"
              fillRule="nonzero"
              d="M27.408 21.651 26.666 21.31 26.592 21.726 27.306 22.027z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff5200"
              fillRule="nonzero"
              d="M27.912 20.76 27.031 20.303 26.934 20.44 27.778 20.876z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8200"
              fillRule="nonzero"
              d="M27.523 21.328 26.75 20.95 26.666 21.31 27.408 21.651z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff5900"
              fillRule="nonzero"
              d="M27.779 20.876 26.934 20.44 26.84 20.658 27.648 21.068z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6c00"
              fillRule="nonzero"
              d="M27.648 21.068 26.84 20.658 26.749 20.95 27.523 21.328z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#33ffc4"
              fillRule="nonzero"
              d="M27.692 24.864 27.079 24.768 27.114 25.19 27.735 25.255z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#5aff9d"
              fillRule="nonzero"
              d="M27.675 24.447 27.065 24.315 27.079 24.768 27.692 24.864z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M27.683 24.015 27.073 23.844 27.066 24.315 27.675 24.447z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a7ff50"
              fillRule="nonzero"
              d="M27.717 23.579 27.102 23.367 27.073 23.844 27.683 24.014z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ceff29"
              fillRule="nonzero"
              d="M27.775 23.151 27.151 22.897 27.102 23.368 27.717 23.579z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f1fc06"
              fillRule="nonzero"
              d="M27.857 22.743 27.22 22.447 27.151 22.897 27.775 23.151z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="gold"
              fillRule="nonzero"
              d="M27.961 22.365 27.306 22.027 27.22 22.446 27.857 22.743z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6f00"
              fillRule="nonzero"
              d="M29.003 21.27 28.173 20.759 28.045 20.72 28.848 21.224z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffb600"
              fillRule="nonzero"
              d="M28.083 22.028 27.408 21.651 27.306 22.027 27.961 22.365z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6800"
              fillRule="nonzero"
              d="M28.848 21.224 28.044 20.72 27.912 20.76 28.688 21.25z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9800"
              fillRule="nonzero"
              d="M28.221 21.741 27.523 21.328 27.408 21.651 28.083 22.028z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6c00"
              fillRule="nonzero"
              d="M28.688 21.25 27.912 20.76 27.779 20.876 28.527 21.346z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8200"
              fillRule="nonzero"
              d="M28.37 21.512 27.648 21.068 27.523 21.328 28.221 21.741z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff7300"
              fillRule="nonzero"
              d="M28.527 21.346 27.778 20.876 27.648 21.068 28.37 21.512z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#39ffbe"
              fillRule="nonzero"
              d="M28.206 24.994 27.692 24.864 27.735 25.255 28.253 25.356z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#5aff9d"
              fillRule="nonzero"
              d="M28.186 24.611 27.675 24.446 27.692 24.864 28.206 24.994z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M28.194 24.216 27.683 24.014 27.675 24.446 28.186 24.611z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a4ff53"
              fillRule="nonzero"
              d="M28.231 23.82 27.717 23.579 27.683 24.015 28.194 24.216z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c7ff30"
              fillRule="nonzero"
              d="M28.296 23.432 27.775 23.151 27.716 23.579 28.231 23.82z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e7ff0f"
              fillRule="nonzero"
              d="M28.386 23.064 27.857 22.743 27.775 23.151 28.296 23.432z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe600"
              fillRule="nonzero"
              d="M28.501 22.726 27.961 22.365 27.857 22.743 28.386 23.065z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffc400"
              fillRule="nonzero"
              d="M28.636 22.426 28.083 22.028 27.961 22.365 28.5 22.726z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8600"
              fillRule="nonzero"
              d="M29.657 21.794 29.003 21.27 28.848 21.224 29.485 21.742z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffab00"
              fillRule="nonzero"
              d="M28.788 22.173 28.221 21.741 28.083 22.028 28.636 22.426z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8200"
              fillRule="nonzero"
              d="M29.484 21.742 28.848 21.224 28.688 21.25 29.307 21.755z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9800"
              fillRule="nonzero"
              d="M28.954 21.973 28.37 21.512 28.221 21.741 28.788 22.173z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8200"
              fillRule="nonzero"
              d="M29.307 21.755 28.688 21.249 28.527 21.346 29.128 21.832z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8900"
              fillRule="nonzero"
              d="M29.128 21.833 28.527 21.346 28.37 21.512 28.954 21.973z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#3cffba"
              fillRule="nonzero"
              d="M28.569 25.151 28.206 24.994 28.253 25.356 28.62 25.485z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#5dff9a"
              fillRule="nonzero"
              d="M28.548 24.799 28.186 24.611 28.206 24.994 28.569 25.151z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M28.556 24.438 28.194 24.216 28.186 24.611 28.548 24.799z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a0ff56"
              fillRule="nonzero"
              d="M28.594 24.078 28.231 23.819 28.194 24.216 28.556 24.438z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c1ff36"
              fillRule="nonzero"
              d="M28.662 23.728 28.296 23.432 28.231 23.819 28.594 24.078z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#deff19"
              fillRule="nonzero"
              d="M28.756 23.398 28.386 23.065 28.296 23.432 28.662 23.728z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fbf100"
              fillRule="nonzero"
              d="M28.876 23.095 28.5 22.726 28.386 23.065 28.756 23.398z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="gold"
              fillRule="nonzero"
              d="M29.018 22.829 28.636 22.426 28.5 22.726 28.876 23.095z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffa700"
              fillRule="nonzero"
              d="M30.264 22.429 29.819 21.91 29.657 21.794 30.093 22.313z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffc100"
              fillRule="nonzero"
              d="M29.178 22.607 28.788 22.173 28.636 22.426 29.018 22.829z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9c00"
              fillRule="nonzero"
              d="M30.093 22.313 29.657 21.794 29.485 21.742 29.911 22.255z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffae00"
              fillRule="nonzero"
              d="M29.353 22.435 28.954 21.973 28.788 22.173 29.178 22.607z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9800"
              fillRule="nonzero"
              d="M29.911 22.255 29.485 21.742 29.307 21.755 29.724 22.256z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9f00"
              fillRule="nonzero"
              d="M29.536 22.317 29.128 21.832 28.954 21.973 29.353 22.435z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9800"
              fillRule="nonzero"
              d="M29.724 22.256 29.307 21.755 29.128 21.832 29.536 22.317z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#43ffb4"
              fillRule="nonzero"
              d="M28.742 25.325 28.569 25.151 28.62 25.485 28.794 25.635z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#60ff97"
              fillRule="nonzero"
              d="M28.72 25.001 28.547 24.799 28.569 25.151 28.742 25.325z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#7dff7a"
              fillRule="nonzero"
              d="M28.728 24.671 28.556 24.438 28.547 24.799 28.72 25.001z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#9dff5a"
              fillRule="nonzero"
              d="M28.766 24.343 28.594 24.078 28.556 24.438 28.728 24.671z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#baff3c"
              fillRule="nonzero"
              d="M28.834 24.027 28.662 23.728 28.594 24.078 28.766 24.343z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d4ff23"
              fillRule="nonzero"
              d="M28.93 23.729 28.756 23.397 28.662 23.728 28.834 24.027z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#eeff09"
              fillRule="nonzero"
              d="M29.051 23.459 28.877 23.095 28.757 23.398 28.93 23.729z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffde00"
              fillRule="nonzero"
              d="M30.756 23.299 30.557 22.818 30.42 22.599 30.616 23.09z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe600"
              fillRule="nonzero"
              d="M29.194 23.224 29.018 22.829 28.876 23.095 29.05 23.459z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fc0"
              fillRule="nonzero"
              d="M30.616 23.09 30.42 22.599 30.264 22.429 30.457 22.926z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffd000"
              fillRule="nonzero"
              d="M29.356 23.029 29.178 22.607 29.018 22.829 29.194 23.224z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffb900"
              fillRule="nonzero"
              d="M30.457 22.926 30.264 22.429 30.093 22.313 30.283 22.811z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffc100"
              fillRule="nonzero"
              d="M29.532 22.881 29.353 22.435 29.178 22.607 29.356 23.029z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffb200"
              fillRule="nonzero"
              d="M30.283 22.811 30.093 22.313 29.911 22.255 30.098 22.748zM29.718 22.783 29.536 22.317 29.352 22.435 29.532 22.881z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffab00"
              fillRule="nonzero"
              d="M30.098 22.747 29.911 22.255 29.724 22.256 29.908 22.738z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffae00"
              fillRule="nonzero"
              d="M29.908 22.738 29.724 22.256 29.536 22.317 29.718 22.783z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ceff29"
              fillRule="nonzero"
              d="M28.881 24.048 28.93 23.729 28.834 24.027 28.788 24.317z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#50ffa7"
              fillRule="nonzero"
              d="M30.911 25.726 30.98 25.43 31.037 25.11 30.966 25.433z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#6aff8d"
              fillRule="nonzero"
              d="M30.966 25.433 31.037 25.11 31.064 24.781 30.992 25.131z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#87ff70"
              fillRule="nonzero"
              d="M30.992 25.131 31.064 24.781 31.061 24.452 30.989 24.827z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a0ff56"
              fillRule="nonzero"
              d="M30.988 24.827 31.061 24.452 31.027 24.131 30.954 24.529z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#beff39"
              fillRule="nonzero"
              d="M30.955 24.529 31.027 24.131 30.964 23.827 30.891 24.244z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d4ff23"
              fillRule="nonzero"
              d="M30.891 24.244 30.964 23.827 30.873 23.547 30.8 23.981z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e4ff13"
              fillRule="nonzero"
              d="M29 23.806 29.051 23.459 28.93 23.729 28.881 24.048z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ebff0c"
              fillRule="nonzero"
              d="M30.8 23.981 30.873 23.547 30.756 23.299 30.684 23.747z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f8f500"
              fillRule="nonzero"
              d="M29.141 23.596 29.194 23.224 29.05 23.459 29 23.806z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#feed00"
              fillRule="nonzero"
              d="M30.684 23.747 30.756 23.3 30.616 23.091 30.545 23.547z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffde00"
              fillRule="nonzero"
              d="M29.3 23.426 29.356 23.029 29.194 23.224 29.141 23.596z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffdb00"
              fillRule="nonzero"
              d="M30.545 23.547 30.616 23.091 30.457 22.926 30.387 23.387z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffd000"
              fillRule="nonzero"
              d="M29.474 23.298 29.532 22.881 29.356 23.029 29.3 23.426z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fc0"
              fillRule="nonzero"
              d="M30.387 23.387 30.457 22.926 30.283 22.811 30.215 23.272z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffc400"
              fillRule="nonzero"
              d="M29.657 23.218 29.718 22.783 29.532 22.881 29.474 23.298zM30.215 23.272 30.283 22.811 30.098 22.748 30.032 23.204z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffc100"
              fillRule="nonzero"
              d="M29.845 23.186 29.908 22.738 29.718 22.783 29.657 23.218z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffbd00"
              fillRule="nonzero"
              d="M30.032 23.204 30.098 22.748 29.908 22.738 29.845 23.186z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00d4ff"
              fillRule="nonzero"
              d="M29.963 26.981 30.274 26.802 30.44 26.657 30.123 26.855z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00e4f8"
              fillRule="nonzero"
              d="M30.123 26.855 30.44 26.657 30.589 26.473 30.268 26.69z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0ff8e7"
              fillRule="nonzero"
              d="M30.268 26.69 30.59 26.473 30.72 26.252 30.394 26.491z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#26ffd1"
              fillRule="nonzero"
              d="M30.394 26.491 30.72 26.252 30.828 26.001 30.498 26.262z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#3cffba"
              fillRule="nonzero"
              d="M30.498 26.262 30.828 26.001 30.911 25.726 30.578 26.009z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#53ffa4"
              fillRule="nonzero"
              d="M30.578 26.009 30.911 25.726 30.966 25.433 30.631 25.738z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#6dff8a"
              fillRule="nonzero"
              d="M30.631 25.739 30.966 25.433 30.992 25.131 30.655 25.458z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#87ff70"
              fillRule="nonzero"
              d="M30.655 25.458 30.992 25.131 30.988 24.827 30.65 25.174z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a0ff56"
              fillRule="nonzero"
              d="M30.65 25.174 30.988 24.827 30.954 24.529 30.616 24.894z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b7ff40"
              fillRule="nonzero"
              d="M30.616 24.894 30.954 24.529 30.891 24.244 30.554 24.626z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ceff29"
              fillRule="nonzero"
              d="M30.554 24.625 30.891 24.244 30.8 23.981 30.465 24.376z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e4ff13"
              fillRule="nonzero"
              d="M30.465 24.376 30.8 23.981 30.684 23.747 30.351 24.151z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#feed00"
              fillRule="nonzero"
              d="M29.009 23.785 29.3 23.426 29.141 23.596 28.856 23.936z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f4f802"
              fillRule="nonzero"
              d="M30.351 24.152 30.684 23.747 30.545 23.547 30.216 23.958z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffde00"
              fillRule="nonzero"
              d="M29.177 23.675 29.474 23.298 29.3 23.426 29.009 23.785z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe600"
              fillRule="nonzero"
              d="M30.216 23.959 30.545 23.547 30.387 23.387 30.063 23.802z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffd300"
              fillRule="nonzero"
              d="M29.354 23.609 29.657 23.218 29.474 23.298 29.177 23.675z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffdb00"
              fillRule="nonzero"
              d="M30.063 23.802 30.387 23.387 30.215 23.272 29.895 23.686z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffd000"
              fillRule="nonzero"
              d="M29.536 23.588 29.845 23.186 29.657 23.218 29.354 23.608zM29.895 23.686 30.215 23.272 30.032 23.204 29.718 23.614z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fc0"
              fillRule="nonzero"
              d="M29.718 23.614 30.032 23.204 29.845 23.186 29.536 23.588z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00d0ff"
              fillRule="nonzero"
              d="M29.259 27.244 29.792 27.066 29.963 26.981 29.423 27.172z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00dcfe"
              fillRule="nonzero"
              d="M29.422 27.172 29.963 26.981 30.123 26.855 29.575 27.06z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#06ecf1"
              fillRule="nonzero"
              d="M29.575 27.06 30.123 26.855 30.268 26.69 29.714 26.91z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#19ffde"
              fillRule="nonzero"
              d="M29.714 26.91 30.268 26.69 30.394 26.491 29.834 26.727z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#29ffce"
              fillRule="nonzero"
              d="M29.834 26.727 30.394 26.491 30.498 26.262 29.934 26.515z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#40ffb7"
              fillRule="nonzero"
              d="M29.934 26.515 30.498 26.262 30.578 26.009 30.01 26.279z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#56ffa0"
              fillRule="nonzero"
              d="M30.01 26.279 30.578 26.009 30.631 25.739 30.059 26.025z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#6dff8a"
              fillRule="nonzero"
              d="M30.059 26.025 30.631 25.738 30.655 25.458 30.082 25.76z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#87ff70"
              fillRule="nonzero"
              d="M30.082 25.76 30.655 25.458 30.65 25.174 30.076 25.49z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#9dff5a"
              fillRule="nonzero"
              d="M30.076 25.49 30.65 25.174 30.616 24.894 30.043 25.224z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b4ff43"
              fillRule="nonzero"
              d="M30.043 25.223 30.616 24.894 30.554 24.625 29.982 24.966z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#caff2c"
              fillRule="nonzero"
              d="M29.982 24.966 30.554 24.625 30.465 24.376 29.896 24.726z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#deff19"
              fillRule="nonzero"
              d="M29.896 24.726 30.465 24.376 30.351 24.152 29.786 24.508z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#eeff09"
              fillRule="nonzero"
              d="M29.786 24.508 30.351 24.152 30.216 23.958 29.656 24.319z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffde00"
              fillRule="nonzero"
              d="M28.829 23.948 29.354 23.608 29.177 23.675 28.66 24.002z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fbf100"
              fillRule="nonzero"
              d="M29.656 24.319 30.216 23.959 30.063 23.802 29.508 24.164z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffdb00"
              fillRule="nonzero"
              d="M29.004 23.937 29.536 23.588 29.354 23.608 28.829 23.948z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe600"
              fillRule="nonzero"
              d="M29.508 24.163 30.063 23.802 29.895 23.686 29.348 24.046z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="gold"
              fillRule="nonzero"
              d="M29.178 23.97 29.718 23.614 29.536 23.588 29.003 23.937z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffdb00"
              fillRule="nonzero"
              d="M29.348 24.046 29.895 23.686 29.718 23.614 29.178 23.97z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00d8ff"
              fillRule="nonzero"
              d="M28.537 27.437 29.259 27.244 29.423 27.172 28.693 27.375z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00e4f8"
              fillRule="nonzero"
              d="M28.693 27.375 29.423 27.172 29.576 27.06 28.838 27.273z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0cf4eb"
              fillRule="nonzero"
              d="M28.838 27.273 29.576 27.059 29.714 26.91 28.969 27.135z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#1cffdb"
              fillRule="nonzero"
              d="M28.97 27.135 29.714 26.91 29.835 26.727 29.084 26.963z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#2cffca"
              fillRule="nonzero"
              d="M29.084 26.963 29.835 26.727 29.934 26.515 29.177 26.762z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#43ffb4"
              fillRule="nonzero"
              d="M29.177 26.762 29.934 26.515 30.01 26.279 29.249 26.537z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#56ffa0"
              fillRule="nonzero"
              d="M29.248 26.537 30.009 26.279 30.059 26.025 29.295 26.294z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#6dff8a"
              fillRule="nonzero"
              d="M29.295 26.294 30.059 26.025 30.082 25.76 29.316 26.038z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#83ff73"
              fillRule="nonzero"
              d="M29.316 26.038 30.082 25.76 30.076 25.49 29.309 25.777z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#9aff5d"
              fillRule="nonzero"
              d="M29.309 25.777 30.076 25.49 30.043 25.223 29.277 25.517z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b1ff46"
              fillRule="nonzero"
              d="M29.276 25.518 30.043 25.223 29.982 24.966 29.218 25.266z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c4ff33"
              fillRule="nonzero"
              d="M29.218 25.266 29.982 24.966 29.896 24.726 29.135 25.03z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d7ff1f"
              fillRule="nonzero"
              d="M29.135 25.029 29.896 24.726 29.786 24.508 29.03 24.814z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe600"
              fillRule="nonzero"
              d="M28.117 24.231 28.829 23.948 28.66 24.003 27.957 24.277z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e7ff0f"
              fillRule="nonzero"
              d="M29.03 24.814 29.786 24.508 29.656 24.319 28.905 24.626z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe200"
              fillRule="nonzero"
              d="M28.283 24.228 29.004 23.937 28.829 23.948 28.118 24.231z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f4f802"
              fillRule="nonzero"
              d="M28.905 24.626 29.656 24.319 29.508 24.164 28.764 24.469z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe200"
              fillRule="nonzero"
              d="M28.449 24.268 29.178 23.97 29.003 23.937 28.283 24.228z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#feed00"
              fillRule="nonzero"
              d="M28.764 24.469 29.508 24.164 29.347 24.046 28.611 24.349z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe200"
              fillRule="nonzero"
              d="M28.611 24.349 29.348 24.046 29.178 23.97 28.449 24.268z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00dcfe"
              fillRule="nonzero"
              d="M27.677 27.649 28.537 27.437 28.693 27.375 27.824 27.594z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#02e8f4"
              fillRule="nonzero"
              d="M27.824 27.594 28.693 27.375 28.838 27.273 27.961 27.5z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0ff8e7"
              fillRule="nonzero"
              d="M27.961 27.5 28.838 27.273 28.969 27.135 28.085 27.368z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#1fffd7"
              fillRule="nonzero"
              d="M28.085 27.368 28.969 27.135 29.083 26.963 28.192 27.203z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#30ffc7"
              fillRule="nonzero"
              d="M28.192 27.203 29.084 26.963 29.177 26.762 28.281 27.008z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#43ffb4"
              fillRule="nonzero"
              d="M28.281 27.008 29.177 26.762 29.248 26.537 28.347 26.788z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#5aff9d"
              fillRule="nonzero"
              d="M28.347 26.788 29.248 26.537 29.295 26.294 28.391 26.549z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#6dff8a"
              fillRule="nonzero"
              d="M28.391 26.549 29.295 26.294 29.316 26.038 28.409 26.296z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#83ff73"
              fillRule="nonzero"
              d="M28.409 26.296 29.315 26.038 29.309 25.777 28.402 26.037z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#9aff5d"
              fillRule="nonzero"
              d="M28.402 26.037 29.309 25.777 29.276 25.518 28.37 25.779z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b1ff46"
              fillRule="nonzero"
              d="M28.37 25.779 29.276 25.518 29.218 25.266 28.314 25.527z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c4ff33"
              fillRule="nonzero"
              d="M28.314 25.527 29.218 25.266 29.135 25.03 28.234 25.29z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d7ff1f"
              fillRule="nonzero"
              d="M28.234 25.29 29.135 25.03 29.03 24.814 28.134 25.072z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe600"
              fillRule="nonzero"
              d="M27.425 24.46 28.283 24.228 28.118 24.231 27.268 24.457z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e4ff13"
              fillRule="nonzero"
              d="M28.134 25.072 29.03 24.814 28.905 24.626 28.015 24.88z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe600"
              fillRule="nonzero"
              d="M27.581 24.506 28.449 24.268 28.283 24.228 27.424 24.461z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f1fc06"
              fillRule="nonzero"
              d="M28.015 24.88 28.905 24.626 28.764 24.469 27.881 24.719z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe600"
              fillRule="nonzero"
              d="M27.735 24.593 28.611 24.349 28.449 24.268 27.581 24.507z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#feed00"
              fillRule="nonzero"
              d="M27.881 24.719 28.764 24.469 28.611 24.349 27.735 24.593z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00e4f8"
              fillRule="nonzero"
              d="M26.972 27.775 27.894 27.552 27.751 27.627 26.828 27.851z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0cf4eb"
              fillRule="nonzero"
              d="M27.104 27.66 28.025 27.439 27.894 27.552 26.972 27.775z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#19ffde"
              fillRule="nonzero"
              d="M27.221 27.51 28.141 27.29 28.025 27.439 27.104 27.661z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#29ffce"
              fillRule="nonzero"
              d="M27.319 27.326 28.239 27.109 28.141 27.29 27.221 27.509z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#3cffba"
              fillRule="nonzero"
              d="M27.397 27.115 28.317 26.901 28.239 27.109 27.319 27.326z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#53ffa4"
              fillRule="nonzero"
              d="M27.451 26.881 28.372 26.67 28.317 26.901 27.397 27.115z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#66ff90"
              fillRule="nonzero"
              d="M27.482 26.631 28.403 26.424 28.372 26.67 27.451 26.881z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#7dff7a"
              fillRule="nonzero"
              d="M27.486 26.37 28.409 26.167 28.403 26.424 27.481 26.631z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#94ff63"
              fillRule="nonzero"
              d="M27.465 26.107 28.389 25.908 28.409 26.167 27.486 26.37z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#aaff4d"
              fillRule="nonzero"
              d="M27.419 25.847 28.345 25.652 28.389 25.908 27.465 26.107z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#beff39"
              fillRule="nonzero"
              d="M27.349 25.598 28.277 25.406 28.345 25.652 27.419 25.847z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d1ff26"
              fillRule="nonzero"
              d="M27.256 25.366 28.186 25.178 28.277 25.406 27.349 25.598z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe200"
              fillRule="nonzero"
              d="M26.402 24.629 27.346 24.453 27.503 24.478 26.562 24.655z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e1ff16"
              fillRule="nonzero"
              d="M27.144 25.157 28.076 24.972 28.186 25.178 27.256 25.365z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe600"
              fillRule="nonzero"
              d="M26.562 24.655 27.503 24.478 27.659 24.545 26.72 24.723z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#eeff09"
              fillRule="nonzero"
              d="M27.015 24.977 27.95 24.795 28.077 24.972 27.144 25.157z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffea00"
              fillRule="nonzero"
              d="M26.72 24.723 27.659 24.545 27.809 24.651 26.872 24.831z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fbf100"
              fillRule="nonzero"
              d="M26.872 24.831 27.809 24.652 27.95 24.795 27.015 24.977z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00e0fb"
              fillRule="nonzero"
              d="M26.041 28.023 26.972 27.775 26.828 27.851 25.892 28.102z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#09f0ee"
              fillRule="nonzero"
              d="M26.177 27.904 27.104 27.66 26.972 27.775 26.041 28.023z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#16ffe1"
              fillRule="nonzero"
              d="M26.297 27.747 27.221 27.509 27.104 27.66 26.177 27.904z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#29ffce"
              fillRule="nonzero"
              d="M26.398 27.556 27.319 27.326 27.221 27.509 26.297 27.747z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#3cffba"
              fillRule="nonzero"
              d="M26.478 27.337 27.397 27.115 27.319 27.326 26.398 27.556z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#50ffa7"
              fillRule="nonzero"
              d="M26.533 27.094 27.451 26.881 27.397 27.115 26.478 27.337z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#66ff90"
              fillRule="nonzero"
              d="M26.563 26.834 27.482 26.631 27.451 26.881 26.533 27.094z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#7dff7a"
              fillRule="nonzero"
              d="M26.567 26.563 27.486 26.371 27.482 26.631 26.563 26.834z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#94ff63"
              fillRule="nonzero"
              d="M26.544 26.289 27.465 26.107 27.486 26.37 26.567 26.563z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#aaff4d"
              fillRule="nonzero"
              d="M26.494 26.018 27.419 25.847 27.465 26.107 26.544 26.288z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c1ff36"
              fillRule="nonzero"
              d="M26.421 25.759 27.349 25.598 27.419 25.847 26.495 26.018z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d4ff23"
              fillRule="nonzero"
              d="M26.323 25.517 27.256 25.366 27.349 25.598 26.421 25.759z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffde00"
              fillRule="nonzero"
              d="M25.434 24.75 26.402 24.629 26.562 24.655 25.6 24.777z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e4ff13"
              fillRule="nonzero"
              d="M26.206 25.3 27.144 25.157 27.256 25.366 26.323 25.517z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffde00"
              fillRule="nonzero"
              d="M25.6 24.777 26.562 24.655 26.72 24.723 25.764 24.848z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f1fc06"
              fillRule="nonzero"
              d="M26.071 25.112 27.015 24.977 27.144 25.157 26.206 25.3z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe600"
              fillRule="nonzero"
              d="M25.764 24.848 26.72 24.723 26.872 24.831 25.922 24.961z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#feed00"
              fillRule="nonzero"
              d="M25.922 24.96 26.872 24.831 27.015 24.977 26.071 25.112z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0cf"
              fillRule="nonzero"
              d="M25.001 28.379 25.892 28.102 25.735 28.138 24.835 28.418z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00d8ff"
              fillRule="nonzero"
              d="M25.158 28.296 26.041 28.023 25.892 28.101 25.001 28.379z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#02e8f4"
              fillRule="nonzero"
              d="M25.301 28.169 26.177 27.904 26.041 28.023 25.158 28.296z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#13fce4"
              fillRule="nonzero"
              d="M25.428 28.003 26.297 27.747 26.177 27.904 25.301 28.17z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#23ffd4"
              fillRule="nonzero"
              d="M25.534 27.801 26.399 27.556 26.297 27.747 25.428 28.003z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#39ffbe"
              fillRule="nonzero"
              d="M25.617 27.568 26.478 27.337 26.398 27.556 25.534 27.801z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#50ffa7"
              fillRule="nonzero"
              d="M25.674 27.31 26.533 27.094 26.478 27.337 25.617 27.568z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#66ff90"
              fillRule="nonzero"
              d="M25.705 27.034 26.563 26.834 26.533 27.094 25.674 27.31z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#7dff7a"
              fillRule="nonzero"
              d="M25.707 26.747 26.567 26.563 26.563 26.834 25.705 27.034z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#97ff60"
              fillRule="nonzero"
              d="M25.681 26.455 26.544 26.289 26.567 26.563 25.707 26.747z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#adff49"
              fillRule="nonzero"
              d="M25.628 26.168 26.494 26.018 26.544 26.288 25.681 26.455z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c4ff33"
              fillRule="nonzero"
              d="M25.548 25.892 26.42 25.759 26.494 26.018 25.628 26.168z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d7ff1f"
              fillRule="nonzero"
              d="M25.444 25.635 26.323 25.517 26.421 25.759 25.548 25.892z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="gold"
              fillRule="nonzero"
              d="M24.499 24.82 25.434 24.75 25.6 24.777 24.674 24.848z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ebff0c"
              fillRule="nonzero"
              d="M25.319 25.404 26.206 25.3 26.323 25.517 25.445 25.635z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="gold"
              fillRule="nonzero"
              d="M24.674 24.848 25.599 24.777 25.764 24.848 24.848 24.923z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f8f500"
              fillRule="nonzero"
              d="M25.175 25.205 26.071 25.113 26.206 25.3 25.319 25.404z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffdb00"
              fillRule="nonzero"
              d="M24.848 24.923 25.764 24.848 25.922 24.96 25.017 25.043z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe600"
              fillRule="nonzero"
              d="M25.017 25.043 25.922 24.96 26.071 25.112 25.175 25.205z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00a0ff"
              fillRule="nonzero"
              d="M22.157 29.19 22.744 28.866 22.555 28.703 21.95 29.011z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00b0ff"
              fillRule="nonzero"
              d="M21.95 29.011 22.555 28.703 22.38 28.495 21.757 28.783z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0094ff"
              fillRule="nonzero"
              d="M22.373 29.315 22.942 28.98 22.744 28.866 22.156 29.19z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00c4ff"
              fillRule="nonzero"
              d="M21.757 28.783 22.38 28.495 22.222 28.247 21.584 28.512z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0094ff"
              fillRule="nonzero"
              d="M22.593 29.384 23.143 29.043 22.942 28.98 22.373 29.315z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00e0fb"
              fillRule="nonzero"
              d="M21.584 28.512 22.222 28.248 22.087 27.967 21.434 28.205z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0094ff"
              fillRule="nonzero"
              d="M22.812 29.395 23.343 29.052 23.143 29.043 22.593 29.384z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#13fce4"
              fillRule="nonzero"
              d="M21.434 28.204 22.087 27.967 21.976 27.66 21.312 27.868z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#009cff"
              fillRule="nonzero"
              d="M23.024 29.347 23.537 29.008 23.343 29.052 22.812 29.395z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#30ffc7"
              fillRule="nonzero"
              d="M21.313 27.868 21.976 27.66 21.894 27.334 21.221 27.511z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00acff"
              fillRule="nonzero"
              d="M23.223 29.241 23.719 28.911 23.537 29.008 23.023 29.347z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#49ffad"
              fillRule="nonzero"
              d="M21.221 27.511 21.893 27.334 21.841 26.997 21.163 27.142z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#6aff8d"
              fillRule="nonzero"
              d="M21.163 27.142 21.841 26.997 21.821 26.659 21.139 26.771z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#87ff70"
              fillRule="nonzero"
              d="M21.139 26.771 21.821 26.659 21.833 26.326 21.151 26.406z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a7ff50"
              fillRule="nonzero"
              d="M21.151 26.406 21.833 26.326 21.878 26.009 21.198 26.058z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c4ff33"
              fillRule="nonzero"
              d="M21.198 26.059 21.878 26.009 21.953 25.716 21.28 25.736z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#deff19"
              fillRule="nonzero"
              d="M21.28 25.736 21.954 25.716 22.059 25.453 21.394 25.448z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f8f500"
              fillRule="nonzero"
              d="M21.394 25.448 22.059 25.453 22.191 25.229 21.538 25.202z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffdb00"
              fillRule="nonzero"
              d="M21.538 25.201 22.191 25.229 22.347 25.049 21.709 25.004z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffc800"
              fillRule="nonzero"
              d="M21.708 25.004 22.347 25.049 22.523 24.918 21.9 24.86z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffb900"
              fillRule="nonzero"
              d="M21.9 24.86 22.523 24.918 22.714 24.84 22.109 24.774z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffae00"
              fillRule="nonzero"
              d="M22.109 24.774 22.714 24.84 22.915 24.818 22.329 24.749z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#008cff"
              fillRule="nonzero"
              d="M21.721 29.515 22.157 29.19 21.95 29.011 21.494 29.319z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#009cff"
              fillRule="nonzero"
              d="M21.494 29.319 21.95 29.011 21.757 28.783 21.282 29.069z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0080ff"
              fillRule="nonzero"
              d="M21.959 29.653 22.373 29.315 22.156 29.19 21.721 29.515z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00b4ff"
              fillRule="nonzero"
              d="M21.282 29.069 21.757 28.783 21.584 28.512 21.092 28.771z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#007cff"
              fillRule="nonzero"
              d="M22.2 29.729 22.593 29.384 22.373 29.315 21.959 29.653z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00d0ff"
              fillRule="nonzero"
              d="M21.092 28.771 21.584 28.512 21.434 28.205 20.927 28.434z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#007cff"
              fillRule="nonzero"
              d="M22.44 29.741 22.812 29.395 22.593 29.384 22.2 29.729z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#09f0ee"
              fillRule="nonzero"
              d="M20.927 28.434 21.434 28.205 21.312 27.868 20.793 28.065z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#08f"
              fillRule="nonzero"
              d="M22.672 29.689 23.023 29.347 22.812 29.395 22.44 29.741z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#26ffd1"
              fillRule="nonzero"
              d="M20.793 28.065 21.312 27.868 21.221 27.511 20.691 27.673z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0098ff"
              fillRule="nonzero"
              d="M22.89 29.573 23.223 29.241 23.024 29.347 22.672 29.689z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#46ffb1"
              fillRule="nonzero"
              d="M20.691 27.672 21.221 27.511 21.163 27.142 20.626 27.267z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00acff"
              fillRule="nonzero"
              d="M23.09 29.396 23.405 29.079 23.223 29.241 22.89 29.573z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#66ff90"
              fillRule="nonzero"
              d="M20.626 27.268 21.163 27.142 21.139 26.771 20.599 26.86z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#8aff6d"
              fillRule="nonzero"
              d="M20.599 26.86 21.139 26.771 21.151 26.406 20.611 26.46z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#aaff4d"
              fillRule="nonzero"
              d="M20.611 26.46 21.151 26.406 21.198 26.059 20.662 26.077z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#caff2c"
              fillRule="nonzero"
              d="M20.662 26.077 21.198 26.058 21.28 25.736 20.75 25.723z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e7ff0f"
              fillRule="nonzero"
              d="M20.75 25.723 21.28 25.736 21.394 25.448 20.875 25.406z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe600"
              fillRule="nonzero"
              d="M20.875 25.406 21.394 25.448 21.538 25.202 21.032 25.135z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#fc0"
              fillRule="nonzero"
              d="M21.032 25.135 21.538 25.201 21.708 25.004 21.218 24.917z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffb600"
              fillRule="nonzero"
              d="M21.218 24.917 21.709 25.004 21.901 24.86 21.429 24.759z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffa300"
              fillRule="nonzero"
              d="M21.429 24.759 21.9 24.86 22.109 24.774 21.658 24.664z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9800"
              fillRule="nonzero"
              d="M21.658 24.664 22.109 24.774 22.329 24.749 21.899 24.637z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9400"
              fillRule="nonzero"
              d="M21.899 24.637 22.329 24.749 22.555 24.786 22.147 24.677z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9400"
              fillRule="nonzero"
              d="M22.147 24.677 22.555 24.786 22.779 24.884 22.394 24.784z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0074ff"
              fillRule="nonzero"
              d="M21.433 29.828 21.721 29.515 21.494 29.319 21.184 29.613z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0084ff"
              fillRule="nonzero"
              d="M21.184 29.613 21.494 29.319 21.283 29.069 20.952 29.339z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0068ff"
              fillRule="nonzero"
              d="M21.693 29.98 21.959 29.653 21.721 29.515 21.433 29.829z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00a0ff"
              fillRule="nonzero"
              d="M20.952 29.339 21.282 29.069 21.092 28.771 20.743 29.014z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0064ff"
              fillRule="nonzero"
              d="M21.957 30.063 22.2 29.729 21.958 29.653 21.692 29.98z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00c0ff"
              fillRule="nonzero"
              d="M20.743 29.014 21.092 28.771 20.927 28.434 20.562 28.644z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0064ff"
              fillRule="nonzero"
              d="M22.22 30.077 22.44 29.741 22.2 29.729 21.957 30.063z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00e4f8"
              fillRule="nonzero"
              d="M20.562 28.644 20.927 28.434 20.793 28.064 20.414 28.239z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0070ff"
              fillRule="nonzero"
              d="M22.474 30.02 22.672 29.689 22.44 29.741 22.22 30.077z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#1fffd7"
              fillRule="nonzero"
              d="M20.414 28.239 20.793 28.064 20.692 27.672 20.302 27.81z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0080ff"
              fillRule="nonzero"
              d="M22.713 29.894 22.89 29.573 22.672 29.689 22.474 30.02z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#40ffb7"
              fillRule="nonzero"
              d="M20.302 27.81 20.691 27.672 20.626 27.268 20.23 27.366z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0098ff"
              fillRule="nonzero"
              d="M22.931 29.7 23.09 29.396 22.89 29.573 22.713 29.894z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#66ff90"
              fillRule="nonzero"
              d="M20.23 27.366 20.626 27.267 20.599 26.86 20.199 26.919z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00b4ff"
              fillRule="nonzero"
              d="M23.122 29.445 23.264 29.162 23.09 29.396 22.931 29.7z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#8aff6d"
              fillRule="nonzero"
              d="M20.199 26.919 20.599 26.86 20.611 26.459 20.211 26.48z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#adff49"
              fillRule="nonzero"
              d="M20.211 26.48 20.611 26.46 20.662 26.077 20.266 26.061z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d1ff26"
              fillRule="nonzero"
              d="M20.266 26.061 20.662 26.077 20.75 25.723 20.362 25.672z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f4f802"
              fillRule="nonzero"
              d="M20.362 25.672 20.75 25.723 20.875 25.406 20.498 25.324z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="gold"
              fillRule="nonzero"
              d="M20.498 25.324 20.875 25.406 21.032 25.135 20.67 25.026z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffb900"
              fillRule="nonzero"
              d="M20.67 25.026 21.032 25.135 21.218 24.917 20.873 24.787z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9f00"
              fillRule="nonzero"
              d="M20.873 24.786 21.218 24.917 21.429 24.759 21.104 24.612z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8d00"
              fillRule="nonzero"
              d="M21.104 24.612 21.429 24.759 21.658 24.664 21.355 24.508z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8200"
              fillRule="nonzero"
              d="M21.355 24.508 21.658 24.664 21.899 24.637 21.619 24.478z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff7a00"
              fillRule="nonzero"
              d="M21.619 24.478 21.899 24.637 22.147 24.677 21.891 24.522z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff7e00"
              fillRule="nonzero"
              d="M21.891 24.522 22.147 24.677 22.394 24.784 22.163 24.64z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00c8ff"
              fillRule="nonzero"
              d="M23.264 29.162 23.565 28.866 23.405 29.079 23.09 29.396z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0028ff"
              fillRule="nonzero"
              d="M21.218 30.541 21.212 30.357 20.918 30.103 20.902 30.267z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0040ff"
              fillRule="nonzero"
              d="M20.902 30.267 20.918 30.103 20.643 29.779 20.606 29.919z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0018ff"
              fillRule="nonzero"
              d="M21.549 30.735 21.52 30.537 21.212 30.358 21.219 30.542z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0060ff"
              fillRule="nonzero"
              d="M20.607 29.919 20.644 29.779 20.396 29.394 20.34 29.505z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0010ff"
              fillRule="nonzero"
              d="M21.886 30.842 21.832 30.636 21.52 30.537 21.549 30.735z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#08f"
              fillRule="nonzero"
              d="M20.34 29.505 20.396 29.394 20.182 28.957 20.109 29.035z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0014ff"
              fillRule="nonzero"
              d="M22.22 30.861 22.143 30.653 21.832 30.637 21.886 30.842z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00b4ff"
              fillRule="nonzero"
              d="M20.109 29.035 20.181 28.957 20.005 28.479 19.92 28.52z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0020ff"
              fillRule="nonzero"
              d="M22.544 30.79 22.444 30.587 22.143 30.653 22.22 30.861z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#02e8f4"
              fillRule="nonzero"
              d="M19.92 28.52 20.006 28.479 19.872 27.971 19.776 27.974z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0038ff"
              fillRule="nonzero"
              d="M22.849 30.63 22.727 30.438 22.443 30.587 22.544 30.79z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#30ffc7"
              fillRule="nonzero"
              d="M19.776 27.974 19.872 27.971 19.786 27.446 19.683 27.408z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0054ff"
              fillRule="nonzero"
              d="M23.128 30.386 22.985 30.211 22.727 30.439 22.849 30.63z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#60ff97"
              fillRule="nonzero"
              d="M19.683 27.408 19.786 27.446 19.748 26.916 19.642 26.838z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#007cff"
              fillRule="nonzero"
              d="M23.372 30.062 23.212 29.91 22.985 30.211 23.127 30.386z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#8dff6a"
              fillRule="nonzero"
              d="M19.642 26.838 19.748 26.916 19.761 26.396 19.655 26.277z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00a8ff"
              fillRule="nonzero"
              d="M23.577 29.666 23.401 29.542 23.212 29.91 23.372 30.062z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#beff39"
              fillRule="nonzero"
              d="M19.655 26.277 19.761 26.396 19.825 25.898 19.724 25.74z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00d8ff"
              fillRule="nonzero"
              d="M23.736 29.207 23.548 29.115 23.401 29.542 23.577 29.666z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ebff0c"
              fillRule="nonzero"
              d="M19.724 25.741 19.825 25.899 19.938 25.437 19.845 25.242z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#23ffd4"
              fillRule="nonzero"
              d="M23.845 28.697 23.649 28.642 23.549 29.116 23.736 29.207z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffd300"
              fillRule="nonzero"
              d="M19.845 25.242 19.938 25.437 20.097 25.023 20.017 24.795z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#50ffa7"
              fillRule="nonzero"
              d="M23.9 28.148 23.699 28.133 23.649 28.642 23.845 28.697z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffa700"
              fillRule="nonzero"
              d="M20.017 24.795 20.097 25.022 20.3 24.668 20.235 24.412z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M23.899 27.575 23.698 27.601 23.699 28.133 23.9 28.148z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8200"
              fillRule="nonzero"
              d="M20.235 24.412 20.3 24.668 20.541 24.382 20.495 24.103z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b1ff46"
              fillRule="nonzero"
              d="M23.842 26.993 23.645 27.062 23.698 27.602 23.899 27.575z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6000"
              fillRule="nonzero"
              d="M20.495 24.103 20.541 24.382 20.814 24.174 20.789 23.878z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#deff19"
              fillRule="nonzero"
              d="M23.73 26.416 23.54 26.527 23.645 27.061 23.842 26.993z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff4a00"
              fillRule="nonzero"
              d="M20.789 23.878 20.814 24.174 21.112 24.049 21.11 23.743z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffe200"
              fillRule="nonzero"
              d="M23.566 25.862 23.387 26.014 23.54 26.527 23.73 26.416z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3800"
              fillRule="nonzero"
              d="M21.11 23.743 21.112 24.05 21.426 24.012 21.45 23.702z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffb200"
              fillRule="nonzero"
              d="M23.353 25.344 23.19 25.534 23.388 26.013 23.566 25.862z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3000"
              fillRule="nonzero"
              d="M21.45 23.702 21.427 24.012 21.75 24.064 21.799 23.758z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8d00"
              fillRule="nonzero"
              d="M23.098 24.878 22.953 25.102 23.19 25.534 23.353 25.344z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3400"
              fillRule="nonzero"
              d="M21.799 23.758 21.75 24.064 22.073 24.204 22.147 23.908z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6800"
              fillRule="nonzero"
              d="M22.806 24.476 22.683 24.73 22.953 25.103 23.097 24.878z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3b00"
              fillRule="nonzero"
              d="M22.148 23.909 22.073 24.204 22.387 24.428 22.486 24.15z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff4e00"
              fillRule="nonzero"
              d="M22.486 24.15 22.387 24.428 22.683 24.73 22.806 24.476z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0040ff"
              fillRule="nonzero"
              d="M21.212 30.358 21.273 30.115 21.001 29.88 20.918 30.103z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0058ff"
              fillRule="nonzero"
              d="M20.918 30.103 21.001 29.88 20.748 29.581 20.643 29.779z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0034ff"
              fillRule="nonzero"
              d="M21.52 30.537 21.556 30.28 21.272 30.115 21.212 30.357z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0074ff"
              fillRule="nonzero"
              d="M20.643 29.779 20.748 29.581 20.52 29.226 20.396 29.394z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#002cff"
              fillRule="nonzero"
              d="M21.832 30.637 21.844 30.372 21.556 30.28 21.52 30.537z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#009cff"
              fillRule="nonzero"
              d="M20.396 29.394 20.52 29.226 20.322 28.823 20.181 28.957z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0030ff"
              fillRule="nonzero"
              d="M22.143 30.653 22.131 30.387 21.844 30.371 21.832 30.636z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00c4ff"
              fillRule="nonzero"
              d="M20.182 28.957 20.322 28.823 20.16 28.382 20.006 28.479z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#003cff"
              fillRule="nonzero"
              d="M22.443 30.587 22.408 30.325 22.131 30.387 22.143 30.653z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0cf4eb"
              fillRule="nonzero"
              d="M20.005 28.479 20.16 28.382 20.037 27.913 19.872 27.971z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0050ff"
              fillRule="nonzero"
              d="M22.726 30.439 22.669 30.188 22.408 30.325 22.443 30.587z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#36ffc1"
              fillRule="nonzero"
              d="M19.872 27.971 20.037 27.913 19.958 27.429 19.786 27.446z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#006cff"
              fillRule="nonzero"
              d="M22.985 30.211 22.907 29.978 22.669 30.188 22.726 30.439z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#60ff97"
              fillRule="nonzero"
              d="M19.786 27.446 19.958 27.429 19.924 26.941 19.748 26.916z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0090ff"
              fillRule="nonzero"
              d="M23.212 29.91 23.116 29.699 22.907 29.977 22.985 30.211z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#8dff6a"
              fillRule="nonzero"
              d="M19.748 26.916 19.924 26.941 19.936 26.462 19.761 26.396z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00b8ff"
              fillRule="nonzero"
              d="M23.401 29.542 23.29 29.359 23.116 29.699 23.212 29.91z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b7ff40"
              fillRule="nonzero"
              d="M19.761 26.396 19.936 26.462 19.995 26.003 19.825 25.898z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#02e8f4"
              fillRule="nonzero"
              d="M23.549 29.116 23.425 28.967 23.29 29.36 23.401 29.542z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e1ff16"
              fillRule="nonzero"
              d="M19.825 25.898 19.995 26.003 20.1 25.578 19.938 25.436z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#29ffce"
              fillRule="nonzero"
              d="M23.649 28.642 23.517 28.53 23.425 28.967 23.548 29.116z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffde00"
              fillRule="nonzero"
              d="M19.937 25.436 20.099 25.578 20.247 25.197 20.097 25.022z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#53ffa4"
              fillRule="nonzero"
              d="M23.699 28.133 23.563 28.061 23.517 28.53 23.649 28.642z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffb600"
              fillRule="nonzero"
              d="M20.097 25.023 20.247 25.198 20.434 24.872 20.3 24.668z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M23.698 27.601 23.562 27.572 23.563 28.061 23.699 28.133z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9400"
              fillRule="nonzero"
              d="M20.3 24.668 20.434 24.871 20.656 24.609 20.541 24.382z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#adff49"
              fillRule="nonzero"
              d="M23.645 27.062 23.512 27.075 23.561 27.572 23.698 27.602z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f70"
              fillRule="nonzero"
              d="M20.541 24.382 20.656 24.609 20.908 24.418 20.814 24.174z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#d7ff1f"
              fillRule="nonzero"
              d="M23.54 26.527 23.416 26.583 23.512 27.075 23.645 27.061z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6000"
              fillRule="nonzero"
              d="M20.814 24.174 20.908 24.418 21.182 24.304 21.112 24.05z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#feed00"
              fillRule="nonzero"
              d="M23.387 26.013 23.275 26.111 23.416 26.583 23.54 26.527z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff5200"
              fillRule="nonzero"
              d="M21.112 24.05 21.182 24.304 21.471 24.271 21.427 24.013z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffc400"
              fillRule="nonzero"
              d="M23.19 25.534 23.093 25.67 23.275 26.111 23.387 26.014z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff4a00"
              fillRule="nonzero"
              d="M21.427 24.013 21.471 24.271 21.769 24.319 21.75 24.064z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9f00"
              fillRule="nonzero"
              d="M22.953 25.103 22.875 25.273 23.093 25.67 23.19 25.534z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff4a00"
              fillRule="nonzero"
              d="M21.75 24.064 21.769 24.319 22.066 24.447 22.073 24.204z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff7e00"
              fillRule="nonzero"
              d="M22.683 24.73 22.627 24.931 22.875 25.273 22.953 25.103z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f50"
              fillRule="nonzero"
              d="M22.073 24.204 22.066 24.447 22.355 24.653 22.387 24.428z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6800"
              fillRule="nonzero"
              d="M22.387 24.428 22.355 24.653 22.627 24.931 22.683 24.73z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#005cff"
              fillRule="nonzero"
              d="M21.273 30.115 21.433 29.828 21.184 29.613 21.001 29.88z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0070ff"
              fillRule="nonzero"
              d="M21.001 29.88 21.184 29.613 20.952 29.339 20.748 29.581z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#004cff"
              fillRule="nonzero"
              d="M21.556 30.28 21.692 29.98 21.433 29.828 21.272 30.115z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#008cff"
              fillRule="nonzero"
              d="M20.748 29.581 20.952 29.339 20.743 29.014 20.52 29.226z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0048ff"
              fillRule="nonzero"
              d="M21.844 30.372 21.957 30.064 21.692 29.98 21.556 30.28z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00acff"
              fillRule="nonzero"
              d="M20.519 29.226 20.743 29.014 20.562 28.644 20.322 28.823z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#004cff"
              fillRule="nonzero"
              d="M22.131 30.387 22.22 30.077 21.957 30.064 21.844 30.372z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00d4ff"
              fillRule="nonzero"
              d="M20.322 28.823 20.562 28.644 20.414 28.24 20.16 28.382z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0054ff"
              fillRule="nonzero"
              d="M22.408 30.325 22.474 30.02 22.22 30.077 22.131 30.387z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#16ffe1"
              fillRule="nonzero"
              d="M20.16 28.382 20.414 28.239 20.302 27.81 20.037 27.913z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0068ff"
              fillRule="nonzero"
              d="M22.669 30.188 22.713 29.894 22.474 30.02 22.408 30.325z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#3cffba"
              fillRule="nonzero"
              d="M20.037 27.913 20.302 27.81 20.23 27.366 19.958 27.429z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0080ff"
              fillRule="nonzero"
              d="M22.907 29.978 22.931 29.701 22.713 29.894 22.669 30.188z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#63ff94"
              fillRule="nonzero"
              d="M19.958 27.429 20.23 27.366 20.199 26.919 19.924 26.941z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00a0ff"
              fillRule="nonzero"
              d="M23.116 29.699 23.122 29.445 22.931 29.701 22.907 29.978z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#8dff6a"
              fillRule="nonzero"
              d="M19.924 26.941 20.199 26.919 20.211 26.48 19.936 26.462z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00c8ff"
              fillRule="nonzero"
              d="M23.29 29.36 23.282 29.133 23.122 29.445 23.116 29.699z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b4ff43"
              fillRule="nonzero"
              d="M19.936 26.462 20.211 26.48 20.266 26.061 19.995 26.003z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0cf4eb"
              fillRule="nonzero"
              d="M23.425 28.967 23.405 28.773 23.282 29.133 23.29 29.359z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#dbff1c"
              fillRule="nonzero"
              d="M19.995 26.003 20.266 26.061 20.362 25.672 20.1 25.578z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#30ffc7"
              fillRule="nonzero"
              d="M23.517 28.53 23.49 28.373 23.405 28.773 23.425 28.967z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#feed00"
              fillRule="nonzero"
              d="M20.1 25.578 20.362 25.672 20.498 25.324 20.247 25.197z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#56ffa0"
              fillRule="nonzero"
              d="M23.563 28.061 23.532 27.944 23.49 28.373 23.517 28.53z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffc800"
              fillRule="nonzero"
              d="M20.247 25.198 20.498 25.324 20.67 25.026 20.434 24.872z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M23.567 27.572 23.53 27.496 23.532 27.944 23.569 28.061z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffa700"
              fillRule="nonzero"
              d="M20.434 24.871 20.67 25.026 20.873 24.786 20.656 24.609z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#a7ff50"
              fillRule="nonzero"
              d="M23.512 27.075 23.485 27.041 23.53 27.496 23.562 27.572z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff8d00"
              fillRule="nonzero"
              d="M20.656 24.609 20.873 24.787 21.104 24.612 20.908 24.418z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ceff29"
              fillRule="nonzero"
              d="M23.416 26.584 23.397 26.592 23.485 27.041 23.512 27.075z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f70"
              fillRule="nonzero"
              d="M20.908 24.418 21.104 24.612 21.355 24.508 21.182 24.304z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f4f802"
              fillRule="nonzero"
              d="M23.275 26.111 23.268 26.16 23.397 26.592 23.416 26.584z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6c00"
              fillRule="nonzero"
              d="M21.182 24.304 21.354 24.508 21.619 24.478 21.471 24.27z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffd300"
              fillRule="nonzero"
              d="M23.093 25.67 23.102 25.757 23.268 26.16 23.275 26.111z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6400"
              fillRule="nonzero"
              d="M21.471 24.271 21.619 24.478 21.891 24.522 21.769 24.319z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffb200"
              fillRule="nonzero"
              d="M22.875 25.273 22.903 25.395 23.102 25.757 23.093 25.67z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6400"
              fillRule="nonzero"
              d="M21.769 24.319 21.891 24.522 22.163 24.64 22.066 24.447z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9400"
              fillRule="nonzero"
              d="M22.627 24.931 22.676 25.082 22.903 25.395 22.875 25.273z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6c00"
              fillRule="nonzero"
              d="M22.066 24.447 22.163 24.64 22.427 24.828 22.354 24.653z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff7e00"
              fillRule="nonzero"
              d="M22.354 24.653 22.427 24.828 22.675 25.082 22.627 24.931z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#000cff"
              fillRule="nonzero"
              d="M21.257 30.654 21.219 30.542 20.902 30.268 20.919 30.361z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0028ff"
              fillRule="nonzero"
              d="M20.919 30.361 20.902 30.268 20.607 29.919 20.604 29.989z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00f"
              fillRule="nonzero"
              d="M21.61 30.86 21.549 30.735 21.219 30.542 21.257 30.653z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#004cff"
              fillRule="nonzero"
              d="M20.604 29.989 20.606 29.919 20.34 29.505 20.319 29.548z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00f"
              fillRule="nonzero"
              d="M21.969 30.974 21.886 30.842 21.549 30.735 21.61 30.86z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0074ff"
              fillRule="nonzero"
              d="M20.319 29.547 20.34 29.505 20.109 29.035 20.073 29.046z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00f"
              fillRule="nonzero"
              d="M22.326 30.994 22.22 30.861 21.886 30.842 21.969 30.974z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00a8ff"
              fillRule="nonzero"
              d="M20.073 29.046 20.109 29.035 19.919 28.52 19.87 28.497z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0008ff"
              fillRule="nonzero"
              d="M22.672 30.919 22.544 30.79 22.22 30.861 22.326 30.994z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#00e0fb"
              fillRule="nonzero"
              d="M19.87 28.497 19.919 28.52 19.776 27.974 19.717 27.913z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0020ff"
              fillRule="nonzero"
              d="M22.998 30.749 22.849 30.63 22.544 30.789 22.672 30.919z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#2cffca"
              fillRule="nonzero"
              d="M19.717 27.913 19.776 27.974 19.682 27.408 19.617 27.309z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0040ff"
              fillRule="nonzero"
              d="M23.296 30.489 23.128 30.386 22.849 30.63 22.998 30.749z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#5dff9a"
              fillRule="nonzero"
              d="M19.617 27.309 19.683 27.408 19.642 26.838 19.573 26.699z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0068ff"
              fillRule="nonzero"
              d="M23.558 30.143 23.372 30.062 23.127 30.386 23.295 30.488z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#90ff66"
              fillRule="nonzero"
              d="M19.573 26.699 19.642 26.838 19.655 26.277 19.588 26.1z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0098ff"
              fillRule="nonzero"
              d="M23.777 29.72 23.577 29.666 23.372 30.062 23.558 30.143z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#c1ff36"
              fillRule="nonzero"
              d="M19.588 26.1 19.655 26.277 19.724 25.741 19.66 25.526z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#0cf"
              fillRule="nonzero"
              d="M23.948 29.23 23.736 29.207 23.577 29.666 23.777 29.72z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f4f802"
              fillRule="nonzero"
              d="M19.66 25.526 19.724 25.74 19.845 25.242 19.79 24.992z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#1cffdb"
              fillRule="nonzero"
              d="M24.065 28.685 23.845 28.697 23.736 29.207 23.948 29.23z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffc400"
              fillRule="nonzero"
              d="M19.79 24.992 19.845 25.242 20.017 24.795 19.973 24.514z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#4dffaa"
              fillRule="nonzero"
              d="M24.124 28.098 23.9 28.148 23.845 28.697 24.065 28.685z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff9800"
              fillRule="nonzero"
              d="M19.973 24.514 20.017 24.795 20.235 24.412 20.206 24.103z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#80ff77"
              fillRule="nonzero"
              d="M24.124 27.485 23.899 27.575 23.9 28.148 24.124 28.098z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff6f00"
              fillRule="nonzero"
              d="M20.206 24.103 20.235 24.412 20.495 24.103 20.484 23.772z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#b4ff43"
              fillRule="nonzero"
              d="M24.064 26.862 23.842 26.993 23.899 27.575 24.124 27.485z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff4a00"
              fillRule="nonzero"
              d="M20.484 23.772 20.495 24.103 20.789 23.878 20.799 23.53z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#e4ff13"
              fillRule="nonzero"
              d="M23.945 26.245 23.73 26.416 23.842 26.993 24.064 26.862z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3000"
              fillRule="nonzero"
              d="M20.799 23.53 20.789 23.878 21.11 23.743 21.143 23.385z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffd300"
              fillRule="nonzero"
              d="M23.769 25.652 23.566 25.862 23.73 26.416 23.945 26.245z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f20"
              fillRule="nonzero"
              d="M21.142 23.385 21.11 23.743 21.45 23.702 21.506 23.341z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ffa300"
              fillRule="nonzero"
              d="M23.542 25.097 23.353 25.344 23.566 25.862 23.77 25.652z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1a00"
              fillRule="nonzero"
              d="M21.506 23.341 21.45 23.702 21.799 23.758 21.879 23.4z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff7a00"
              fillRule="nonzero"
              d="M23.269 24.598 23.097 24.878 23.353 25.344 23.542 25.097z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff1a00"
              fillRule="nonzero"
              d="M21.879 23.4 21.799 23.758 22.148 23.909 22.253 23.561z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#f50"
              fillRule="nonzero"
              d="M22.957 24.168 22.806 24.476 23.097 24.878 23.269 24.598z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff2500"
              fillRule="nonzero"
              d="M22.253 23.561 22.148 23.909 22.486 24.15 22.615 23.819z"
              transform="translate(-372 -883) translate(372 883)"
            />
            <path
              fill="#ff3800"
              fillRule="nonzero"
              d="M22.615 23.819 22.486 24.15 22.806 24.476 22.957 24.168z"
              transform="translate(-372 -883) translate(372 883)"
            />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}
