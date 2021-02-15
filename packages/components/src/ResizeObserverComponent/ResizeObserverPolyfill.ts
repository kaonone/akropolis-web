/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
class ResizeObserverPolyfill {
  observables: any[];
  boundCheck: () => void;
  callback: any;
  constructor(callback: any) {
    this.observables = [];
    // Array of observed elements that looks like this:
    // [{
    //   el: domNode,
    //   size: {height: x, width: y}
    // }]
    this.boundCheck = this.check.bind(this);
    this.boundCheck();
    this.callback = callback;
  }

  observe(el: { clientHeight: any; clientWidth: any }) {
    if (this.observables.some((observable: { el: any }) => observable.el === el)) {
      return;
    }
    const newObservable = {
      el,
      size: {
        height: el.clientHeight,
        width: el.clientWidth,
      },
    };
    this.observables.push(newObservable);
  }

  unobserve(el: any) {
    this.observables = this.observables.filter((obj: { el: any }) => obj.el !== el);
  }

  disconnect() {
    this.observables = [];
  }

  check() {
    const changedEntries = this.observables
      .filter(
        (obj: {
          el: { clientHeight: any; clientWidth: any };
          size: { height: any; width: any };
        }) => {
          const currentHeight = obj.el.clientHeight;
          const currentWidth = obj.el.clientWidth;
          if (obj.size.height !== currentHeight || obj.size.width !== currentWidth) {
            obj.size.height = currentHeight;
            obj.size.width = currentWidth;
            return true;
          }
          return false;
        },
      )
      .map((obj: { el: any }) => obj.el);
    if (changedEntries.length > 0) {
      this.callback(changedEntries);
    }
    window.requestAnimationFrame(this.boundCheck);
  }
}

export { ResizeObserverPolyfill };
