import { keyframes } from '@nextui-org/react';

export const moveLeftBounce = keyframes({
  '0%': {
    transform: 'translateX(0)',
  },
  '50%': {
    transform: 'translateX(20px)',
  },
  '100%': {
    transform: 'translateX(0)',
  },
});

export const moveBounce = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(20px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});

export const moveScale = keyframes({
  '0%': {
    transform: 'scale(0.6)',
  },
  '50%': {
    transform: 'scale(0.8)',
  },
  '100%': {
    transform: 'scale(0.6)',
  },
});

export const animationFramesOne = keyframes({
  '0%': {
    transform: 'translate(0) rotate(0deg)',
  },
  '20%': {
    transform: 'translate(73px, -1px) rotate(36deg)',
  },
  '40%': {
    transform: 'translate(141px, 72px) rotate(72deg)',
  },
  '60%': {
    transform: 'translate(83px, 122px) rotate(108deg)',
  },
  '80%': {
    transform: 'translate(-40px, 72px) rotate(144deg)',
  },
  '100%': {
    transform: 'translate(0) rotate(0deg)',
  },
});

export const rotate3d = keyframes({
  '0%': {
    transform: 'rotateY(0deg)',
  },
  '100%': {
    transform: 'rotateY(1turn)',
  },
});
