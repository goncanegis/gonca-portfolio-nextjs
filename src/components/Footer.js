import {
  Box,
  chakra,
  Container,
  Image,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/img/logo.svg';

import { SocialButton } from './SocialButton';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Image src={logo} alt="logo" w={10} h={10} />
        <Text>© 2022 Gonca Negis. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Github'} href={'https://github.com/goncanegis'}>
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
          </SocialButton>{' '}
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
      </Container>
    </Box>
  );
}
