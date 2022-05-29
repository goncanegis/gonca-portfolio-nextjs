import {
  Box,
  Button,
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
  useToast,
} from '@chakra-ui/react';

import { useState } from 'react';

import { useForm, ValidationError } from '@formspree/react';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xgerbnbk');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  const handleContactFormSubmit = async e => {
    e.preventDefault();

    try {
      await handleSubmit({
        name,
        email,
        message,
      });
      setName('');
      setEmail('');
      setMessage('');
      toast({
        title: 'Message sent!',
        description: 'I will get back to you as soon as possible.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description:
          'There was an error sending your message. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack
      spacing={{ base: 4, md: 8, lg: 20 }}
      direction={{ base: 'column', md: 'row' }}
      zIndex={5}
    >
      <Stack
        align="center"
        justify="center"
        direction={{ base: 'row', md: 'column' }}
      >
        <Link href="https://github.com/goncanegis" isExternal>
          <IconButton
            aria-label="github"
            variant="ghost"
            size="lg"
            fontSize="3xl"
            icon={<BsGithub />}
            _hover={{
              bg: 'purple.500',
              color: useColorModeValue('white', 'gray.700'),
            }}
            isRound
          />
        </Link>

        <Link href="https://www.linkedin.com/in/goncanegis/">
          <IconButton
            aria-label="linkedin"
            variant="ghost"
            size="lg"
            icon={<BsLinkedin size="28px" />}
            _hover={{
              bg: 'purple.500',
              color: useColorModeValue('white', 'gray.700'),
            }}
            isRound
          />
        </Link>
      </Stack>

      <Box
        bg={useColorModeValue('white', 'gray.700')}
        borderRadius="lg"
        p={8}
        color={useColorModeValue('gray.700', 'whiteAlpha.900')}
        shadow="base"
      >
        <VStack spacing={5}>
          <VStack as="form" onSubmit={handleContactFormSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <InputGroup>
              <InputLeftElement children={<Icon as={BsFillPersonFill} />} />
              <Input
                id="fullName"
                type="text"
                name="fullName"
                value={name}
                onChange={handleNameChange}
              />
            </InputGroup>

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="email">Email Address</label>
            <InputGroup>
              <InputLeftElement children={<Icon as={MdEmail} />} />
              <Input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </InputGroup>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message">Your message</label>

            <Textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button
              colorScheme={'purple'}
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </Button>
          </VStack>
        </VStack>
      </Box>
    </Stack>
  );
}
