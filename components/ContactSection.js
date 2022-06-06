import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  VStack,
  Text,
} from '@chakra-ui/react';

import ContactForm from './ContactForm';
import { ChakraNextImage } from './ChakraNextImage';
import { motion } from 'framer-motion';

const contactSectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.5,
    },
  },
};

const hillVariants = {
  hidden: {
    x: '100vh',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
};

const sunVariants = {
  hidden: {
    y: 700,
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
};

const treeVariants = {
  hidden: {
    scale: 0,
    y: 0,
  },
  visible: {
    scale: 1,
    y: [0, 100, 0],
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.2,
    },
  },
};

const scooterVariants = {
  hidden: {
    x: -1500,
    y: '0%',
  },
  visible: {
    x: 0,

    transition: {
      duration: 7,
    },
  },
};

export default function ContactSection() {
  return (
    <Flex
      as={motion.section}
      initial="hidden"
      whileInView="visible"
      variants={contactSectionVariants}
      bg={useColorModeValue('gray.100', 'gray.900')}
      align="center"
      justify="center"
      id="contact"
    >
      <Box
        borderRadius="lg"
        mt={{ base: 5, md: 16, lg: 10 }}
        mx={{ base: 5, md: 16, lg: 10 }}
        pt={{ base: 5, lg: 16 }}
        px={{ base: 4, lg: 16 }}
        pb={0}
        position={'relative'}
        maxW="1200px"
        overflow="hidden"
      >
        <Box mb={'4rem'}>
          <VStack spacing={{ base: 4, md: 8, lg: 12 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}
            >
              Contact{' '}
              <Text
                as={'span'}
                color={useColorModeValue('teal.400', 'teal.200')}
              >
                Me
              </Text>
            </Heading>

            <Text fontSize="xl" textAlign="center">
              I am looking for job opportunities, and would love to connect!
              Drop me an email and I will get back to you, or find me on social
              media:
            </Text>

            <ContactForm />
          </VStack>
        </Box>

        {/* Animated background */}

        <ChakraNextImage
          as={motion.img}
          src={'/images/hills.svg'}
          variants={hillVariants}
          position="absolute"
          width="100%"
          bottom="0%"
          left="0"
          objectFit="contain"
          zIndex={2}
          filter={useColorModeValue('none', 'brightness(40%)')}
        />

        <ChakraNextImage
          as={motion.img}
          src={'/images/circle.svg'}
          variants={sunVariants}
          position="absolute"
          width="40%"
          bottom="0%"
          left="50%"
          objectFit="contain"
          zIndex={1}
          filter={useColorModeValue('none', 'brightness(80%)')}
        />

        <ChakraNextImage
          as={motion.img}
          position="absolute"
          left="2%"
          bottom="0%"
          width="17%"
          zIndex={2}
          src={'/images/trees-left.svg'}
          variants={treeVariants}
          filter={useColorModeValue('none', 'brightness(80%)')}
        />

        <ChakraNextImage
          as={motion.img}
          position="absolute"
          right="2%"
          bottom="0%"
          width="17%"
          zIndex={2}
          src={'/images/trees-right.svg'}
          variants={treeVariants}
          filter={useColorModeValue('none', 'brightness(80%)')}
        />

        <ChakraNextImage
          as={motion.img}
          position="absolute"
          right="17%"
          top={{ md: '67%', lg: '58%', xl: '56%' }}
          width="8%"
          zIndex={1}
          src={'/images/trees-far.svg'}
          variants={treeVariants}
          filter={useColorModeValue('none', 'brightness(80%)')}
        />

        <ChakraNextImage
          as={motion.img}
          position="absolute"
          left="100%"
          bottom={'0%'}
          width="18%"
          src={'/images/woman-scooter.svg'}
          variants={scooterVariants}
          zIndex={3}
          style={{ originX: '50%', originY: '50%' }}
          filter={useColorModeValue('none', 'brightness(90%)')}
        />
      </Box>
    </Flex>
  );
}
