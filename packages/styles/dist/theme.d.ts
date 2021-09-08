import { SkeletonClassKey } from '@material-ui/lab/Skeleton';
import { TabPanelClassKey } from '@material-ui/lab/TabPanel';
import { Theme, ThemeOptions } from '@material-ui/core/styles';
import { MuiPickersOverrides } from '@material-ui/pickers/typings/overrides';
import { Object as O } from 'ts-toolbelt';
import { colors } from './colors';
import { makeGradient } from './makeGradient';
import { getBreakpoints } from './getBreakpoints';
export { Theme };
declare function getGradients(type: 'dark' | 'light'): {
    main: import("./makeGradient").Gradient;
    products: readonly [import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient];
    button: import("./makeGradient").Gradient;
    outlinedButton: import("./makeGradient").Gradient;
    poolCompositionChart: readonly [import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient, import("./makeGradient").Gradient];
    progressChart: import("./makeGradient").Gradient;
    cardTitleInactive: import("./makeGradient").Gradient;
};
declare const tokensPalette: {
    [token: string]: {
        gradient: ReturnType<typeof makeGradient>;
        hex: string;
    };
};
export declare const darkPalette: {
    primary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
    };
    secondary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
    };
    text: {
        primary: string;
    };
    error: {
        main: string;
    };
    background: {
        hint: string;
        default: string;
        paper: string;
        paperSecondary: string;
    };
    type: "dark";
};
export declare const lightTheme: Theme;
export declare const darkTheme: Theme;
export declare function getTheme(type: 'light' | 'dark', overrides?: ThemeOptions): Theme;
export interface ThemeOverrides {
}
export interface ThemeOptionsOverrides {
}
export interface TypeBackgroundOverrides {
}
export interface TypeBreakpointOverrides {
}
declare module PackageOverrides {
    interface Theme {
        colors: typeof colors;
        gradients: ReturnType<typeof getGradients>;
        tokensPalette: typeof tokensPalette;
        breakpoints: ReturnType<typeof getBreakpoints>;
    }
    interface ThemeOptions {
        colors?: Partial<typeof colors>;
        gradients?: Partial<ReturnType<typeof getGradients>>;
        tokensPalette?: Partial<typeof tokensPalette>;
        breakpoints?: ReturnType<typeof getBreakpoints>;
    }
    interface TypeBackground {
        hint: string;
        tableHeader: string;
        paperSecondary: string;
    }
    interface TypeBreakpoint {
        desktopXL: true;
        desktopLG: true;
        desktopMD: true;
        desktopSM: true;
        desktopXS: true;
        tabletSM: true;
        tabletMD: true;
        tabletLG: true;
        tabletXS: true;
        mobileLG: true;
        mobileMD: true;
        mobileSM: true;
        mobileXS: true;
    }
}
declare type MergeThemeOptions<A extends object, B extends object> = O.Partial<O.Merge<O.Required<A, keyof any, 'deep'>, O.Required<B, keyof any, 'deep'>, 'deep'>, 'deep'>;
declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme extends O.Merge<ThemeOverrides, PackageOverrides.Theme, 'deep'> {
    }
    interface ThemeOptions extends MergeThemeOptions<ThemeOptionsOverrides, PackageOverrides.ThemeOptions> {
    }
}
declare module '@material-ui/core/styles/createPalette' {
    interface TypeBackground extends O.Merge<TypeBackgroundOverrides, PackageOverrides.TypeBackground, 'deep'> {
    }
}
declare module '@material-ui/core/styles/createBreakpoints' {
    interface BreakpointOverrides extends O.Merge<TypeBreakpointOverrides, PackageOverrides.TypeBreakpoint, 'deep'> {
    }
}
declare module '@material-ui/core/styles/overrides' {
    interface ComponentNameToClassKey {
        MuiSkeleton: SkeletonClassKey;
        MuiTabPanel: TabPanelClassKey;
        MuiPickersToolbar: keyof Required<MuiPickersOverrides>['MuiPickersToolbar'];
        MuiPickersDay: keyof Required<MuiPickersOverrides>['MuiPickersDay'];
        MuiPickersYear: keyof Required<MuiPickersOverrides>['MuiPickersYear'];
    }
}
