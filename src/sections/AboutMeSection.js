import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Image,
  Flex,
  Container,
  Heading,
  Text,
  useColorModeValue,
  chakra,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';

import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io';
import {
  SiNextdotjs,
  SiReact,
  SiChakraui,
  SiShopify,
  SiJquery,
} from 'react-icons/si';

import mobileIcon from '../assets/img/mobile-ui-1.svg';

import { CustomButton } from '../components/CustomButton';

function StatsCard(props) {
  const { icon } = props;
  return (
    <Flex
      align="center"
      justify="center"
      px={{ base: 2, md: 4 }}
      py={'2'}
      shadow={'lg'}
      borderWidth={1}
      borderColor={useColorModeValue('gray.400', 'gray.500')}
      color={useColorModeValue('gray.700', 'gray.100')}
      rounded={'lg'}
      transition="all 0.2s"
      _hover={{
        borderColor: useColorModeValue('purple.400', 'gray.300'),
        color: useColorModeValue('purple.700', 'gray.300'),
      }}
    >
      {icon}
    </Flex>
  );
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: i => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: 'spring', duration: 1, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    };
  },
};

const mobileVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: [0, 270, 270, 0],
    transition: {
      type: 'spring',
      delay: 0.5,
      stiffness: 100,
      damping: 20,
    },
  },
};

export const AboutMeSection = () => {
  const bg = useColorModeValue('white', 'gray.100');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Container
      as={motion.section}
      initial="hidden"
      whileInView="visible"
      maxWidth={'75%'}
      minH={'50vh'}
      centerContent
      pt={8}
      pb={8}
      position="relative"
    >
      <Heading mb={6} color={textColor} letterSpacing={2}>
        About Me
      </Heading>

      <Flex width={'65vw'} align="center" justify={'center'} flexWrap="wrap">
        <Box
          width={{ base: '100%', lg: '50%' }}
          mb={{ base: 6, lg: 0 }}
          marginRight={{ base: 0, lg: 4 }}
        >
          <Text fontSize={'2xl'} mb={3} color={textColor}>
            I love building websites and mobile apps as much as I love my cats
            and The IT Crowd, which is a LOT.
          </Text>
          <Text fontSize={'2xl'} color={textColor}>
            I am a self-taught front-end developer with an eye for design, and a
            background of content writing.
          </Text>
        </Box>

        <Box
          bg={bg}
          padding={4}
          align="center"
          justify="center"
          objectFit="cover"
          width="330px"
          height="230px"
          borderRadius={6}
          ml={4}
        >
          <motion.svg
            viewBox="0 0 870 570"
            initial="hidden"
            whileInView="visible"
          >
            <motion.path
              cx="100"
              cy="100"
              r="80"
              stroke="black"
              variants={draw}
              custom={1}
              d="M171.14 72.5H755.86C763.986 72.5 771.78 75.7281 777.526 81.4743C783.272 87.2204 786.5 95.0138 786.5 103.14V477.5H140.5V103.14C140.5 95.0138 143.728 87.2204 149.474 81.4743C155.22 75.7281 163.014 72.5 171.14 72.5Z"
              fill="none"
            />
            <motion.path
              variants={draw}
              d="M39.3099 444.27C47.2518 444.27 53.6899 437.832 53.6899 429.89C53.6899 421.948 47.2518 415.51 39.3099 415.51C31.3681 415.51 24.9299 421.948 24.9299 429.89C24.9299 437.832 31.3681 444.27 39.3099 444.27Z"
              fill="#AB91DF"
            />
            <motion.path
              variants={draw}
              d="M79.8199 444.27C87.7618 444.27 94.1999 437.832 94.1999 429.89C94.1999 421.948 87.7618 415.51 79.8199 415.51C71.8781 415.51 65.4399 421.948 65.4399 429.89C65.4399 437.832 71.8781 444.27 79.8199 444.27Z"
              fill="#AB91DF"
            />
            <motion.path
              variants={draw}
              d="M120.34 444.27C128.282 444.27 134.72 437.832 134.72 429.89C134.72 421.948 128.282 415.51 120.34 415.51C112.398 415.51 105.96 421.948 105.96 429.89C105.96 437.832 112.398 444.27 120.34 444.27Z"
              fill="#AB91DF"
            />
            <motion.path
              variants={draw}
              d="M160.85 444.27C168.792 444.27 175.23 437.832 175.23 429.89C175.23 421.948 168.792 415.51 160.85 415.51C152.908 415.51 146.47 421.948 146.47 429.89C146.47 437.832 152.908 444.27 160.85 444.27Z"
              fill="#AB91DF"
            />
            <motion.path
              variants={draw}
              d="M201.37 444.27C209.312 444.27 215.75 437.832 215.75 429.89C215.75 421.948 209.312 415.51 201.37 415.51C193.428 415.51 186.99 421.948 186.99 429.89C186.99 437.832 193.428 444.27 201.37 444.27Z"
              fill="#AB91DF"
            />
            <motion.path
              variants={draw}
              d="M241.88 444.27C249.822 444.27 256.26 437.832 256.26 429.89C256.26 421.948 249.822 415.51 241.88 415.51C233.938 415.51 227.5 421.948 227.5 429.89C227.5 437.832 233.938 444.27 241.88 444.27Z"
              fill="#AB91DF"
            />
            <motion.path
              variants={draw}
              d="M837.5 477H89.5V519H837.5V477Z"
              stroke="black"
              stroke-width="2"
              stroke-miterlimit="10"
              fill={'none'}
            />
            <motion.path
              variants={draw}
              d="M371 20H39V235H371V20Z"
              fill="#78E5E1"
            />
            <motion.path
              variants={draw}
              opacity="0.68"
              d="M855 374H455V422H855V374Z"
              fill="#F8DA96"
            />
            <motion.path
              variants={draw}
              d="M484.42 352H455V304H547.09"
              stroke="black"
              stroke-width="2"
              stroke-miterlimit="10"
              fill={'none'}
            />
            <motion.path
              variants={draw}
              d="M855 304V352H747.15"
              stroke="black"
              stroke-width="2"
              stroke-miterlimit="10"
              fill={'none'}
            />
            <motion.path
              variants={draw}
              d="M547.09 304H739.92"
              stroke="black"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <motion.path
              variants={draw}
              d="M333 1H1V216H333V1Z"
              stroke="black"
              stroke-width="2"
              stroke-miterlimit="10"
              fill="none"
            />
            <motion.path
              variants={draw}
              d="M534 474H393V502H534V474Z"
              fill="#E2E2E2"
            />
          </motion.svg>
        </Box>
      </Flex>

      <Box
        as={motion.div}
        position="absolute"
        left="-30px"
        bottom="0"
        width="80px"
        height="100px"
        variants={mobileVariants}
        bg={useColorModeValue('#AB91DF', '#AB91DF')}
        borderRadius={6}
        display={{ base: 'none', sm: 'block' }}
      >
        <Image src={mobileIcon} height={'100px'} width={'80px'} />
      </Box>

      {/* Statistics */}
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h2
          textAlign={'center'}
          fontSize={'2xl'}
          pt={10}
          pb={5}
          fontWeight={'bold'}
        >
          Some tech I have been building with:
        </chakra.h2>
        <SimpleGrid columns={{ base: 4, xl: 8 }} spacing={{ base: 4, lg: 6 }}>
          <StatsCard icon={<Icon as={IoLogoHtml5} w={8} h={8} />} />
          <StatsCard icon={<Icon as={IoLogoCss3} w={8} h={8} />} />
          <StatsCard icon={<Icon as={IoLogoJavascript} w={8} h={8} />} />
          <StatsCard icon={<Icon as={SiReact} w={10} h={8} />} />
          <StatsCard icon={<Icon as={SiNextdotjs} w={8} h={8} />} />
          <StatsCard icon={<Icon as={SiChakraui} w={8} h={8} />} />
          <StatsCard icon={<Icon as={SiShopify} w={8} h={8} />} />
          <StatsCard icon={<Icon as={SiJquery} w={8} h={8} />} />
        </SimpleGrid>
      </Box>
    </Container>
  );
};
