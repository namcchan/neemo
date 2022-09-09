import { styled } from '@nextui-org/react';

export interface IBannerImagesProps {}

const BannerImagesBox = styled('div', {
  position: 'relative',
  width: '100%',
  '@md': {
    mt: '200px',
  },
  '& img': {
    position: 'absolute',
  },
  '& img:first-child': {
    display: 'none',
    top: -200,
    right: 0,
    '@sm': {
      display: 'block',
    },
  },
  '& img:nth-child(2)': {
    display: 'none',
    top: -100,
    right: 55,
    '@sm': {
      display: 'block',
    },
  },
  '& img:nth-child(3)': {
    display: 'none',
    top: -170,
    right: '36%',
    zIndex: 1,
    '@sm': {
      display: 'block',
    },
  },
  '& img:nth-child(4)': {
    display: 'none',
    top: 110,
    left: '27%',
    zIndex: 2,
    '@sm': {
      display: 'block',
    },
  },
  '& img:nth-child(5)': {
    display: 'none',
    top: 80,
    left: '15%',
    zIndex: 2,
    '@sm': {
      display: 'block',
    },
  },
  '& img:nth-child(6)': {
    display: 'none',
    top: -170,
    left: '25%',
    '@sm': {
      display: 'block',
    },
  },
  '& img:nth-child(7)': {
    display: 'none',
    top: 96,
    left: '47%',
    zIndex: 2,
    '@sm': {
      display: 'block',
    },
  },
  '& img:nth-child(8)': {
    display: 'none',
    top: 45,
    left: '22%',
    zIndex: 1,
    '@sm': {
      display: 'block',
    },
  },
  '& img:nth-child(9)': {
    display: 'none',
    top: 20,
    left: 75,
    '@sm': {
      display: 'block',
    },
  },
  '& img:nth-child(10)': {
    display: 'none',
    top: -76,
    right: '32%',
    zIndex: 1,
    '@sm': {
      display: 'block',
    },
  },
  '& img:nth-child(11)': {
    display: 'none',
    left: '40%',
    top: -20,
    '@sm': {
      display: 'block',
    },
  },
  '& img:nth-child(12)': {
    display: 'none',
    top: -292,
    right: 45,
    '@sm': {
      display: 'block',
    },
  },
  '& img:nth-child(13)': {
    display: 'none',
    top: 100,
    left: '38%',
    zIndex: 2,
    '@sm': {
      display: 'block',
    },
  },
  '& img:nth-child(14)': {
    display: 'none',
    bottom: 260,
    left: '16%',
    zIndex: 2,
    '@sm': {
      display: 'block',
    },
  },
  '& img:last-child': {
    display: 'block',
    position: 'static',
    '@sm': {
      display: 'none',
    },
  },
});

export function BannerImages(props: IBannerImagesProps) {
  return (
    <BannerImagesBox>
      <img src="/images/arrow.png" alt="" />
      <img src="/images/box1.png" alt="" />
      <img src="/images/boy1.png" alt="" />
      <img src="/images/boy2.png" alt="" />
      <img src="/images/boy3.png" alt="" />
      <img src="/images/digital-screen.png" alt="" />
      <img src="/images/filter1.png" alt="" />
      <img src="/images/filter2.png" alt="" />
      <img src="/images/filter3.png" alt="" />
      <img src="/images/girl1.png" alt="" />
      <img src="/images/girl2.png" alt="" />
      <img src="/images/monitor.png" alt="" />
      <img src="/images/4.png" alt="" />
      <img src="/images/7.png" alt="" />
      <img src="/images/main-image.png" alt="" />
    </BannerImagesBox>
  );
}
