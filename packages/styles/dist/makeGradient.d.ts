declare type Color = string;
interface GradientPoint {
    offset: string;
    color: Color;
}
export interface Gradient {
    points: GradientPoint[];
    linear(sideOrCorner?: string): string;
    svgLinear(id: string, direction?: Partial<SvgGradientDirection>): JSX.Element;
}
interface SvgGradientDirection {
    x1: string;
    x2: string;
    y1: string;
    y2: string;
}
export declare function makeGradient(points: Array<GradientPoint | Color>): Gradient;
export {};
