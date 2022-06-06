import { chakra } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

export const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || prop === 'children',
});

export const ChakraLink = chakra(motion.a, {
  shouldForwardProp: prop => isValidMotionProp(prop) || prop === 'children',
});
