import React from 'react';
import { GridSpacing, GridTypeMap as MuiGridTypeMap } from '@material-ui/core/Grid';
import { OverrideProps } from '@material-ui/core/OverridableComponent';
import { OverrideTypeMap } from '@akropolis-web/styles';
import { AdaptiveSpacing } from './useAdaptiveSpacing';
declare type OwnProps = {
    spacing?: GridSpacing | AdaptiveSpacing;
};
declare type GridTypeMap = OverrideTypeMap<MuiGridTypeMap, OwnProps>;
declare type GridProps<D extends React.ElementType = MuiGridTypeMap['defaultComponent']> = OverrideProps<GridTypeMap, D> & {
    component?: D;
};
declare function AdaptiveGrid<D extends React.ElementType = MuiGridTypeMap['defaultComponent']>(props: GridProps<D>): JSX.Element;
export { AdaptiveGrid, GridProps, GridTypeMap };
