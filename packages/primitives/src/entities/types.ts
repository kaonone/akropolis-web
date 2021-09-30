type OverridableStringUnion<T, U = Record<string, unknown>> = GenerateStringUnion<Overwrite<T, U>>;

type Overwrite<T, U> = Omit<T, keyof U> & U;

type GenerateStringUnion<T> = Extract<
  {
    [Key in keyof T]: true extends T[Key] ? Key : never;
  }[keyof T],
  string
>;

type NetworkDefaults = Record<'eth', true>;

export interface NetworkOverrides {}

export type Network = OverridableStringUnion<NetworkDefaults, NetworkOverrides>;
