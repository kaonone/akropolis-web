declare module 'color' {
  class Color {
    constructor(color: string);
    rotate(angle: number): void;
    hex(): string;
  }

  // eslint-disable-next-line import/no-default-export
  export default Color;
}
