export function attachStaticFields<
  T extends (...args: any[]) => void,
  I extends Record<string, unknown>
>(target: T, staticFields: I): T & I {
  const result: T & I = target as T & I;

  Object.keys(staticFields).forEach((key: keyof I) => {
    (result as I)[key] = staticFields[key];
  });

  return result;
}
