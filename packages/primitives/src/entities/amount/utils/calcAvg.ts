import { Value, toFraction, Fraction } from '../../../fraction';

type Input = {
  value: Value;
  weight?: Value;
};

/**
 * Calculate average value with values weight
 * @return avg(x1, x2) = (x1.value * x1.weight + x2.value * x2.weight) / (x1.weight + x2.weight)
 */
export function calcAvg(...rest: Input[]): Fraction {
  if (rest.length <= 1) {
    return toFraction((rest.length && rest[0].value) || 0);
  }

  const avg = rest.reduce((x1, x2) => {
    const weight1 = toFraction(x1.weight || 1);
    const weight2 = toFraction(x2.weight || 1);
    const value1 = toFraction(x1.value);
    const value2 = toFraction(x2.value);

    const fullWeight = weight1.add(weight2);

    if (fullWeight.isZero()) {
      return { value: 0, weight: 0 };
    }

    return {
      value: value1.mul(weight1).add(value2.mul(weight2)).div(fullWeight),
      weight: fullWeight,
    };
  });

  return toFraction(avg.value);
}
