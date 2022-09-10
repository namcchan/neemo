import { Button, Grid, Spacer, styled, Text } from '@nextui-org/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Box } from '../Box';
import { featureItems } from './data';

type Props = {};

const FeatureContainer = styled('div', {
  py: '100px',
});

const SectionTitle = styled('div', {
  fontSize: '38px',
  fontWeight: '$semibold',
  pb: '$lg',
  position: 'relative',
  mb: '$10',
  lineHeight: '$sm',
  '&:before': {
    position: 'absolute',
    content: '',
    height: 3,
    width: 80,
    bg: '#fab4a2',
    bottom: 0,
    left: 0,
  },
  '&:after': {
    position: 'absolute',
    content: '',
    height: 3,
    width: 32,
    bg: '#ff724e',
    bottom: 0,
    left: 95,
  },
});

const FeatureItem = styled('div', {
  cursor: 'pointer',
  boxShadow: '$sm',
  transition: 'all .5s',
  backgroundColor: '#f1eff8',
  border: '1px solid #f1eff8',
  color: '#3b3663',
  px: '30px',
  py: '40px',
  borderRadius: '5px',
  '&:hover': {
    borderStyle: 'dashed',
    borderColor: '$primary',
    backgroundColor: 'transparent',
  },
});

const StyledSearch = styled(FiSearch, {
  color: '#5d43bc',
  fontSize: '30px',
});

export default function Features({}: Props) {
  return (
    <FeatureContainer>
      <Grid.Container alignItems="flex-start">
        <Grid sm={5} direction="column">
          <Text span color="$primary">
            CARE FEATURES
          </Text>
          <SectionTitle as="h3">
            Create Awesome Service With Our Tools
          </SectionTitle>
          <Text color="$gray600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </Text>
          <Spacer />
          <Button
            color="error"
            size="lg"
            css={{ width: 'fit-content' }}
            rounded
          >
            More Details
          </Button>
        </Grid>
        <Grid sm={7} css={{ pl: '$xl' }}>
          <Grid.Container gap={2.5} alignItems="flex-start">
            {featureItems.map((item, index) => {
              return (
                <Grid
                  xs={12}
                  sm={6}
                  key={`features_${index}`}
                  css={{ ...item.css }}
                >
                  <FeatureItem css={{ bgColor: item.color }}>
                    <Box
                      css={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 65,
                        height: 65,
                        border: `2px dashed ${item.borderColor}`,
                        borderRadius: '100%',
                      }}
                    >
                      <StyledSearch color={item.borderColor} />
                    </Box>
                    <Text
                      size={20}
                      weight="bold"
                      css={{ mt: '$9', mb: '$5', lineHeight: '$xs' }}
                    >
                      Seo Consultancy
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </Text>
                  </FeatureItem>
                </Grid>
              );
            })}
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </FeatureContainer>
  );
}
