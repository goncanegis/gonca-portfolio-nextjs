import { chakra } from '@chakra-ui/react';
import { m, isValidMotionProp } from 'framer-motion';

export const ChakraBox = chakra(m.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || prop === 'children',
});

export const ChakraLink = chakra(m.a, {
  shouldForwardProp: prop => isValidMotionProp(prop) || prop === 'children',
});
