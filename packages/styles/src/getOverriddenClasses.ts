import { ClassNameMap, makeStyles } from '@material-ui/styles';
import * as R from 'ramda';
import cn from 'classnames';

export type OverriddenClasses<T extends ReturnType<typeof makeStyles>> = Partial<ReturnType<T>>;

export function getOverriddenClasses<T extends string>(
  classes: ClassNameMap<T>,
  overriddenClasses?: Partial<ClassNameMap<T>>,
): ClassNameMap<T> {
  const classesPairs = R.toPairs(classes) as [T, string][];

  return classesPairs.reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: cn(value, overriddenClasses && overriddenClasses[key]),
    };
  }, {} as ClassNameMap<T>);
}
