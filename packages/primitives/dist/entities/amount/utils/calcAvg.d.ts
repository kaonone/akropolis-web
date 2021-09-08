import { Value, Fraction } from '../../../fraction';
declare type Input = {
    value: Value;
    weight?: Value;
};
/**
 * Calculate average value with values weight
 * @return avg(x1, x2) = (x1.value * x1.weight + x2.value * x2.weight) / (x1.weight + x2.weight)
 */
export declare function calcAvg(...rest: Input[]): Fraction;
export {};
