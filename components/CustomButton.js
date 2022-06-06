import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const CustomButton = ({ href, label }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('purple.800', 'purple.200');
  const linkBackgroundColor = useColorModeValue('gray.100', 'gray.700');
  const linkBoxShadow = useColorModeValue(
    '4px 4px 0px -1px rgba(170,140,228,0.75)',
    '4px 4px 0px -1px rgba(170,140,228,0.65)'
  );

  return (
    <Box
      as={motion.div}
      p={2}
      backgroundColor={linkBackgroundColor}
      whileHover={{ y: 2, x: 2 }}
      animate={{
        x: 0,
        boxShadow: linkBoxShadow,
        transitionEnd: {
          display: 'flex',
        },
      }}
    >
      <Link
        h={'100%'}
        href={href ?? '#'}
        fontSize={'lg'}
        fontWeight={500}
        color={linkColor}
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
        }}
        letterSpacing={1}
      >
        {label}
      </Link>
    </Box>
  );
};
