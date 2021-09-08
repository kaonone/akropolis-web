import React from 'react';
declare type Size = 'full' | 'compressed';
declare type ClsNames = keyof typeof styles;
declare type Props = {
    children: (variant: Size) => JSX.Element;
    classes: Record<ClsNames, string>;
};
declare type State = {
    size: Size;
};
export declare class ResizeObserverContainer extends React.PureComponent<Props, State> {
    state: State;
    private handleResize;
    private observer;
    private ref;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
declare const styles: Record<"resizeContainer" | "original" | "hiddenCopy", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | import("@material-ui/styles").PropsFunc<{}, import("@material-ui/styles").CreateCSSProperties<{}>>>;
export declare const ResizeObserverComponent: React.ComponentType<Pick<Props, "children"> & import("@material-ui/styles").StyledComponentProps<"resizeContainer" | "original" | "hiddenCopy">>;
export {};
