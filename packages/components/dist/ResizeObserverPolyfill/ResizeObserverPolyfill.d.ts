declare class ResizeObserverPolyfill {
    observables: any[];
    boundCheck: () => void;
    callback: any;
    constructor(callback: any);
    observe(el: {
        clientHeight: any;
        clientWidth: any;
    }): void;
    unobserve(el: any): void;
    disconnect(): void;
    check(): void;
}
export { ResizeObserverPolyfill };
