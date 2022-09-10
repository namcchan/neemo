import {
  Button,
  Container,
  Grid,
  Link,
  Spacer,
  styled,
  Text,
  useResize,
} from '@nextui-org/react';
import AnimatedShape from '../animted-shape/animated-shape';
import { Box } from '../Box';
import { bannerShape } from './banner-shape';
import { SeoText } from './seo-text';

import { FiPlayCircle } from 'react-icons/fi';
import { BannerImages } from './banner-images';
import { useEffect, useState } from 'react';

type Props = {};

const BannerContainer = styled('div', {
  zIndex: 0,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  background: 'transparent',
  borderBottom: '1px solid #ECEDEE',
  pt: '40px',
  pb: '130px',
  '@sm': {
    height: '800px',
  },
});

const StyledFiPlayCircle = styled(FiPlayCircle, {
  color: '$primary',
  fontSize: 20,
});

export default function Banner({}: Props) {
  return (
    <BannerContainer>
      {bannerShape.map((el, index) => (
        <Box
          key={`shape_${index}`}
          css={{
            display: 'none',
            '@sm': {
              display: 'block',
            },
          }}
        >
          <AnimatedShape css={el.css} src={el.src} />
        </Box>
      ))}
      <SeoText />
      <Container lg>
        <Grid.Container gap={2}>
          <Grid xs={12} sm={6} direction="column">
            <Text
              h1
              weight="bold"
              css={{
                lineHeight: '$sm',
                fontSize: 35,
                '@md': {
                  fontSize: 50,
                },
                '@lg': {
                  fontSize: 72,
                },
              }}
            >
              Digital Agency with Excellence Service
            </Text>
            <Text
              color="$gray800"
              size={18}
              weight="medium"
              css={{ lineHeight: '$lg' }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos alias assumenda nostrum delectus, neque, tempore quo
              adipisci quasi fugiat consequuntur nemo quia molestiae incidunt
              non ex asperiores. Itaque, corporis repellat?
            </Text>
            <Spacer />
            <Box css={{ display: 'flex', alignItems: 'center' }}>
              <Button
                as="a"
                auto
                size="lg"
                rounded
                css={{
                  mr: '$sm',
                  '@sm': {
                    mr: '$xl',
                  },
                  width: 'fit-content',
                }}
              >
                More About Us
              </Button>

              <Link
                css={{
                  color: '#131f58',
                  fontWeight: 'bold',
                  animation: 'all 500ms linear',
                  '&:hover': { color: '$primary' },
                }}
              >
                Watch Video &nbsp;
                <StyledFiPlayCircle />
              </Link>
            </Box>
          </Grid>
          <Grid xs={12} sm={6}>
            <BannerImages />
          </Grid>
        </Grid.Container>
      </Container>
    </BannerContainer>
  );
}
