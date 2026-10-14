import React from 'react';
import { m } from 'framer-motion';
import {
  Flex,
  Container,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

import { CustomButton } from './CustomButton';

export const HeroSection = () => {
  const headingColor = useColorModeValue('purple.500', '#FBDC8D');
  const subheadingColor = useColorModeValue('gray.600', 'gray.200');
  const taglineColor = useColorModeValue('gray.600', 'gray.400');
  const heroBg = useColorModeValue('transparent', 'gray.700');
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
      y: -200,
    },
    show: {
      y: [-200, 0, -30, 0],
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
    <Container as="section" w={'100%'} maxWidth="7xl" py={8} id="home">
      <Stack
        w={'100%'}
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 6, md: 8, lg: 10 }}
        pt={{ base: 20, md: 28 }}
        pb={{ base: 10, md: 18 }}
      >
        <Flex align="center">
          <Text
            as="h1"
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            color={headingColor}
            style={{ display: 'inline-flex' }}
          >
            Hi there!
          </Text>
          <Text
            as={m.h1}
            style={{
              display: 'inline-flex',
              marginLeft: '0.5em',
            }}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            animate={{ rotate: [20, 0, 20, 0, 20, 0] }}
            transition={{
              from: 0,
              duration: 0.7,
              ease: 'easeInOut',
              type: 'tween',
            }}
          >
            👋
          </Text>
        </Flex>
        <Text
          as="h1"
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          color={subheadingColor}
          sx={{ marginTop: '0 !important' }}
        >
          I'm Gonca.
        </Text>

        {/* Hero image */}
        <Flex
          height={{ base: '212px', sm: '303px', md: '363px', lg: '424px' }}
          width={{ base: '350px', sm: '500px', md: '600px', lg: '700px' }}
          pt={8}
          pb={2}
          px={6}
          as={m.div}
          initial={'hidden'}
          animate={'show'}
          variants={heroImageVariants}
          position="relative"
          overflow={'hidden'}
          bg={heroBg}
          borderRadius={8}
        >
          <Image
            as={m.img}
            src={'/images/scene.svg'}
            alt={'hero image scene'}
            initial="hidden"
            animate={'show'}
            variants={heroImageChildrenVariants}
            position="absolute"
            bottom={'2%'}
            left={'20%'}
            w={'80%'}
            zIndex={1}
            fetchPriority="high"
          />
          <Image
            as={m.img}
            src={'/images/woman.svg'}
            alt="woman"
            variants={womanImageVariants}
            position="absolute"
            w={'38%'}
            left={'37%'}
            fetchPriority="high"
          />
          <Image
            as={m.img}
            variants={lampImageVariants}
            src={'/images/lamp.svg'}
            alt="lamp"
            position="absolute"
            w={'10%'}
            left={'15%'}
          />
          <Image
            as={m.img}
            variants={plantImageVariants}
            src={'/images/plant.svg'}
            alt="plant"
            position="absolute"
            w={'13%'}
            bottom={'2%'}
          />

          <Image
            as={m.img}
            variants={heroImageChildrenVariants}
            src={'/images/graphics1.svg'}
            alt="graphics"
            position="absolute"
            w={'5%'}
            top={{ base: '30%', md: '25%' }}
            left={'62%'}
          />
          <Image
            as={m.img}
            variants={heroImageChildrenVariants}
            src={'/images/graphics2.svg'}
            alt="graphics"
            position="absolute"
            w={'5%'}
            top={'25%'}
            left={'72%'}
          />
          <Image
            as={m.img}
            variants={heroImageChildrenVariants}
            src={'/images/graphics3.svg'}
            alt="graphics"
            position="absolute"
            w={'5%'}
            top={'35%'}
            left={'75%'}
          />
          <Image
            as={m.img}
            variants={heroImageChildrenVariants}
            src={'/images/graphics4.svg'}
            alt="graphics"
            position="absolute"
            w={'5%'}
            top={{ base: '42%', md: '35%' }}
            left={'84%'}
          />
          <Image
            as={m.img}
            variants={bookImageVariants}
            src={'/images/book.svg'}
            alt="book"
            position="absolute"
            w={'2%'}
            top={'3.5%'}
            left={'87%'}
            style={{ originY: 1, originX: 0 }}
          />
        </Flex>
        <Text
          color={taglineColor}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          lineHeight={'110%'}
          mt={6}
        >
          I came here to drink milk and build apps, and I've just finished my
          milk.
        </Text>
        <CustomButton href="#contact" label={"Let's get in touch!"} />
      </Stack>
    </Container>
  );
};
