import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import MersenneTwister from 'mersenne-twister';
import Color from 'color';
import { makeStyles } from '@akropolis-web/styles';

import { baseColors, shapeCount, diameter, wobble } from './constants';

type Props = React.ComponentProps<typeof SvgIcon> & {
  address: string;
};

function AddressIcon(props: Props) {
  const { address, ...rest } = props;
  const classes = useStyles();

  const generator = new MersenneTwister(jsNumberForAddress(address));
  const shapesArr: number[] = Array(shapeCount).fill(0);
  const shiftedColors = makeHueShift(baseColors.slice(), generator);

  return (
    <SvgIcon
      {...rest}
      viewBox="0 0 40 40"
      x="0"
      y="0"
      classes={{ root: classes.root }}
      style={{ backgroundColor: generateColor(shiftedColors, generator) }}
    >
      {shapesArr.map((_, i) => renderShape(shiftedColors, generator, i, shapeCount - 1))}
    </SvgIcon>
  );
}

function jsNumberForAddress(address: string) {
  const addr = address.slice(2, 10);
  const seed = parseInt(addr, 16);

  return seed;
}

function generateColor(colors: string[], generator: MersenneTwister) {
  // unused variable to keep the order of generation like in original library https://github.com/marcusmolchany/react-jazzicon/blob/2db7299d58892909dc6aafdd0ed8771a3ef644a1/src/Jazzicon.js#L15
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const rand = generator.random();
  const idx = Math.floor(colors.length * generator.random());
  const color = colors.splice(idx, 1)[0];
  return color;
}

function makeHueShift(colors: string[], generator: MersenneTwister) {
  const amount = generator.random() * 30 - wobble / 2;
  return colors.map(hex => {
    const color = new Color(hex);
    color.rotate(amount);
    return color.hexString();
  });
}

function renderShape(colors: string[], generator: MersenneTwister, i: number, total: number) {
  const center = diameter / 2;
  const firstRot = generator.random();
  const angle = Math.PI * 2 * firstRot;
  const velocity = (diameter / total) * generator.random() + (i * diameter) / total;
  const tx = Math.cos(angle) * velocity;
  const ty = Math.sin(angle) * velocity;
  const translate = `translate(${tx} ${ty})`;

  const secondRot = generator.random();
  const rot = firstRot * 360 + secondRot * 180;
  const rotate = `rotate(${rot.toFixed(1)} ${center} ${center})`;
  const transform = `${translate} ${rotate}`;

  return (
    <rect
      key={i}
      x="0"
      y="0"
      rx="0"
      ry="0"
      height={diameter}
      width={diameter}
      transform={transform}
      fill={generateColor(colors, generator)}
    />
  );
}

const useStyles = makeStyles(
  {
    root: {
      borderRadius: '0.5em',
    },
  },
  { name: 'AddressIcon' },
);

export { AddressIcon };
