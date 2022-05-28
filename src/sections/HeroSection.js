import React from 'react';
import { motion } from 'framer-motion';
import {
  Image,
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { codingIcons } from '../assets/img';

import { CustomButton } from '../components/CustomButton';

export const HeroSection = () => {
  const heroImageVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const heroImageChildrenVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  const womanImageVariants = {
    hidden: {
      bottom: '100%',
    },
    show: {
      bottom: ['100%', '2%', '4%', '2%'],
    },
  };

  const lampImageVariants = {
    hidden: {
      scale: 0,
      top: '-100px',
    },
    show: {
      scale: 1,
      top: '-47px',
    },
  };
  const plantImageVariants = {
    hidden: {
      scale: 0,
      x: '-500%',
    },
    show: {
      scale: 1,
      x: '-2%',
    },
  };

  const bookImageVariants = {
    hidden: {
      rotate: 0,
    },
    show: {
      rotate: [0, -10, 0, -10, 0, -90],
    },
  };

  return (
    <Container as="section" w={'100%'} minH={'50vh'} centerContent pt={8}>
      <Stack
        w={'100%'}
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          <Flex>
            <Text color={useColorModeValue('#e8645f', '#FBDC8D')}>
              Hi there!
            </Text>
            <motion.div
              style={{
                display: 'inline-block',
                fontSize: '0.75em',
                marginLeft: '0.5em',
              }}
              animate={{ rotate: [20, 0, 20, 0, 20, 0] }}
              transition={{
                from: 0,
                duration: 0.7,
                ease: 'easeInOut',
                type: 'tween',
              }}
            >
              👋
            </motion.div>
          </Flex>

          <Text color={useColorModeValue('gray.600', 'gray.200')}>
            I'm Gonca.
          </Text>
        </Heading>

        {/* Hero image */}
        <Flex
          // w={'100%'}
          // sx={{ height: 'clamp(208px, 40vh, 346px)' }}
          height={{ base: '212px', sm: '303px', md: '363px', lg: '424px' }}
          width={{ base: '350px', sm: '500px', md: '600px', lg: '700px' }}
          pt={8}
          pb={2}
          px={6}
          as={motion.div}
          initial={'hidden'}
          animate={'show'}
          variants={heroImageVariants}
          position="relative"
          overflow={'hidden'}
          bg={useColorModeValue('transparent', 'gray.500')}
          borderRadius={8}
        >
          <Image
            as={motion.img}
            src={codingIcons.scene}
            initial="hidden"
            animate={'show'}
            variants={heroImageChildrenVariants}
            position="absolute"
            bottom={'2%'}
            left={'20%'}
            w={'80%'}
            zIndex={1}
          />
          <Image
            as={motion.img}
            src={codingIcons.woman}
            variants={womanImageVariants}
            position="absolute"
            w={'40%'}
            left={'37%'}
          />
          <Image
            as={motion.img}
            variants={lampImageVariants}
            src={codingIcons.lamp}
            position="absolute"
            w={'10%'}
            left={'15%'}
          />
          <Image
            as={motion.img}
            variants={plantImageVariants}
            src={codingIcons.plant}
            position="absolute"
            w={'13%'}
            bottom={'2%'}
          />

          <Image
            as={motion.img}
            variants={heroImageChildrenVariants}
            src={codingIcons.graphics1}
            position="absolute"
            w={'5%'}
            top={{ base: '30%', md: '25%' }}
            left={'62%'}
          />
          <Image
            as={motion.img}
            variants={heroImageChildrenVariants}
            src={codingIcons.graphics2}
            position="absolute"
            w={'5%'}
            top={'25%'}
            left={'72%'}
          />
          <Image
            as={motion.img}
            variants={heroImageChildrenVariants}
            src={codingIcons.graphics3}
            position="absolute"
            w={'5%'}
            top={'35%'}
            left={'75%'}
          />
          <Image
            as={motion.img}
            variants={heroImageChildrenVariants}
            src={codingIcons.graphics4}
            position="absolute"
            w={'5%'}
            top={{ base: '42%', md: '35%' }}
            left={'84%'}
          />
          <Image
            as={motion.img}
            variants={bookImageVariants}
            src={codingIcons.book}
            position="absolute"
            w={'2%'}
            top={'3.5%'}
            left={'87%'}
            style={{ originY: 1, originX: 0 }}
          />
        </Flex>
        <Text
          color={useColorModeValue('gray.600', 'gray.400')}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          lineHeight={'110%'}
        >
          I came here to drink milk and build apps, and I've just finished my
          milk.
        </Text>
        <CustomButton href="#contact" label={"Let's get in touch!"} />
      </Stack>
      <Stack spacing={6} direction={'row'}></Stack>
    </Container>
  );
};
