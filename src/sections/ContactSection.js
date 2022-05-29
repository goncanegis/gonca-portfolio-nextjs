import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  useColorModeValue,
  VStack,
  Text,
  useToast,
  Image,
} from '@chakra-ui/react';

import ContactForm from '../components/ContactForm';

import { motion } from 'framer-motion';

import hillsIcon from '../assets/img/hills-background/hills.svg';
import sunIcon from '../assets/img/hills-background/circle.svg';
import treesLeftIcon from '../assets/img/hills-background/trees-left.svg';
import treesRightIcon from '../assets/img/hills-background/trees-right.svg';
import treesFarIcon from '../assets/img/hills-background/trees-far.svg';
import scooterWomanIcon from '../assets/img/hills-background/woman-scooter.svg';

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
        m={{ base: 5, md: 16, lg: 10 }}
        // mx={{ base: 5, md: 16, lf: 10 }}
        pt={{ base: 5, lg: 16 }}
        px={{ base: 4, lg: 16 }}
        pb={0}
        position={'relative'}
        maxW="1200px"
        overflow="hidden"
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}
            >
              Get in Touch
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

        <Image
          as={motion.img}
          src={hillsIcon}
          variants={hillVariants}
          position="absolute"
          width="100%"
          bottom="0%"
          left="0"
          objectFit="contain"
          zIndex={2}
        />

        <Image
          as={motion.img}
          src={sunIcon}
          variants={sunVariants}
          position="absolute"
          width="40%"
          bottom="0%"
          left="50%"
          objectFit="contain"
          zIndex={1}
        />

        <Image
          as={motion.img}
          position="absolute"
          left="2%"
          bottom="0%"
          width="17%"
          zIndex={2}
          src={treesLeftIcon}
          variants={treeVariants}
        />

        <Image
          as={motion.img}
          position="absolute"
          right="2%"
          bottom="0%"
          width="17%"
          zIndex={2}
          src={treesRightIcon}
          variants={treeVariants}
        />

        <Image
          as={motion.img}
          position="absolute"
          right="17%"
          top={{ md: '60%', lg: '58%', xl: '56%' }}
          width="8%"
          zIndex={1}
          src={treesFarIcon}
          variants={treeVariants}
        />

        <Image
          as={motion.img}
          position="absolute"
          left="100%"
          bottom={'0%'}
          width="10%"
          src={scooterWomanIcon}
          variants={scooterVariants}
          zIndex={3}
          style={{ originX: '50%', originY: '50%' }}
        />
      </Box>
    </Flex>
  );
}