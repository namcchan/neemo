import { Text } from '@nextui-org/react';

export const SeoText = () => {
  return (
    <Text
      css={{
        fontSize: 100,
        color: '#f9f8fc',
        fontWeight: '$black',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        lineHeight: 1,
        textAlign: 'center',
        '@sm': {
          textAlign: 'left',
          fontSize: 200,
          left: '30%',
        },
      }}
    >
      SEO
    </Text>
  );
};
