import * as React from 'react';
import { CSS, Image, styled } from '@nextui-org/react';
import { moveLeftBounce } from '../animations';

const Shape = styled('div', {
  position: 'absolute',
  zIndex: -1,
  width: 'auto',
  animation: `${moveLeftBounce} 3s linear infinite`,
});

type Props = {
  src: string;
};

export type AnimatedShapeProps = Props &
  React.HTMLAttributes<unknown> & { css?: CSS };

const AnimatedShape = ({ src, ...rest }: AnimatedShapeProps) => {
  return (
    <Shape {...rest}>
      <Image src={src} alt="" width="100%" height="100%" />
    </Shape>
  );
};

export default AnimatedShape;
