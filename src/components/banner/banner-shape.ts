import {
  animationFramesOne,
  moveBounce,
  moveLeftBounce,
  moveScale,
  rotate3d,
} from '../animations';

export const bannerShape = [
  {
    src: '/images/shape/1.png',
    css: {
      width: '150px',
      left: '20px',
      top: '14%',
    },
  },
  {
    src: '/images/shape/2.png',
    css: {
      left: '30%',
      top: '17%',
      animation: `${animationFramesOne} 20s linear infinite`,
    },
  },
  {
    src: '/images/shape/3.png',
    css: {
      left: '50px',
      top: '50%',
      animation: `${rotate3d} 4s linear infinite`,
    },
  },
  {
    src: '/images/shape/4.png',
    css: {
      left: '0px',
      bottom: '0px',
      width: '314px',
      height: '286px',
      animation: 'none',
    },
  },
  {
    src: '/images/shape/5.png',
    css: {
      left: '20%',
      bottom: '8%',
      animation: `${moveLeftBounce} 3s linear infinite`,
    },
  },
  {
    src: '/images/shape/6.png',
    css: {
      height: 56,
      left: '0',
      right: '0',
      top: '20%',
      animation: `${rotate3d} 4s linear infinite`,
    },
  },
  {
    src: '/images/shape/7.png',
    css: {
      width: 24,
      left: '50%',
      bottom: '28%',
      animation: `${moveBounce} 5s linear infinite`,
    },
  },
  {
    src: '/images/shape/8.png',
    css: {
      right: '25%',
      bottom: '12%',
      animation: `${moveLeftBounce} 3s linear infinite`,
    },
  },
  {
    src: '/images/shape/7.png',
    css: {
      right: '8%',
      top: '15%',
      animation: `${moveScale} 3s linear infinite`,
    },
  },
  {
    src: '/images/shape/10.png',
    css: {
      left: '5%',
      top: '5%',
      animation: `${moveLeftBounce} 3s linear infinite`,
    },
  },
  {
    src: '/images/shape/11.png',
    css: {
      right: '0%',
      bottom: '5%',
      animation: `${moveLeftBounce} 3s linear infinite`,
    },
  },
];
