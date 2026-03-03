import NextLink from 'next/link';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ChakraNextImage } from './ChakraNextImage';
import { motion } from 'framer-motion';
import { CustomButton } from './CustomButton';
import { SocialButton } from './SocialButton';

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const mobileNavLinkBgColor = useColorModeValue('gray.600', 'gray.800');

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Box as="nav" minH={'60px'} pos="fixed" zIndex={10} minW={'100%'}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
          align={'center'}
        >
          <NextLink href="/">
            <ChakraNextImage
              src={'/images/logo.svg'}
              width={50}
              height={50}
              alt="logo"
            />
          </NextLink>

          <Flex
            display={{ base: 'none', md: 'flex' }}
            ml={10}
            align={'center'}
            h={'100%'}
          >
            {/* Desktop Nav */}
            <Stack direction={'row'} spacing={8}>
              {NAV_ITEMS.map(navItem => (
                <CustomButton
                  key={navItem.label}
                  href={navItem.href}
                  label={navItem.label}
                />
              ))}
            </Stack>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Stack direction={'row'} spacing={6} align="center">
            <SocialButton
              label={'Github'}
              href={'https://github.com/goncanegis'}
            >
              <Icon
                as={FaGithub}
                width={6}
                height={6}
                color={useColorModeValue('purple.500', 'purple.300')}
                transition="all 0.2s"
                _hover={{
                  color: useColorModeValue('purple.700', 'purple.400'),
                }}
              />
            </SocialButton>
            <SocialButton
              label={'LinkedIn'}
              href={'https://www.linkedin.com/in/goncanegis/'}
            >
              <Icon
                as={FaLinkedin}
                width={6}
                height={6}
                color={useColorModeValue('purple.500', 'purple.300')}
                transition="all 0.2s"
                _hover={{
                  color: useColorModeValue('purple.700', 'purple.400'),
                }}
              />
            </SocialButton>
          </Stack>
          <ColorModeSwitcher />
        </Stack>
      </Flex>

      {/* Mobile Nav */}

      <Stack
        as={motion.div}
        initial="hidden"
        animate={isOpen ? 'show' : 'hidden'}
        variants={mobileMenuVariants}
        w={'100%'}
        minH={'100vh'}
        bg={mobileNavLinkBgColor}
        p={4}
        pt={12}
        display={isOpen ? 'flex' : 'none'}
      >
        {NAV_ITEMS.map(navItem => (
          <Stack
            as={motion.div}
            key={navItem.label}
            spacing={4}
            variants={mobileMenuItemVariants}
            onClick={onToggle}
          >
            <Flex
              py={8}
              as={Link}
              href={navItem.href ?? '#'}
              justify={'center'}
              align={'center'}
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Text fontWeight={600} fontSize="3xl" color={'gray.200'}>
                {navItem.label}
              </Text>
            </Flex>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];
