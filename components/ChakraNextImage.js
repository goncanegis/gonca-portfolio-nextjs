import { chakra } from '@chakra-ui/react';
import Image from 'next/image';

export const ChakraNextImage = chakra(Image, {
  shouldForwardProp: prop =>
    [
      'height',
      'width',
      'quality',
      'src',
      'alt',
      'fill',
      'sizes',
      'priority',
      'style',
      'onLoadingComplete',
    ].includes(prop),
});
