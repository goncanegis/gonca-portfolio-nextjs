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
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm, ValidationError } from '@formspree/react';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_CONTACT_FORM_ID || 'placeholder';
  const [state, handleSubmit, reset] = useForm(formId);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (state.succeeded && !state.submitting) {
      toast('Thank you for contacting me, I will get back to you shortly!', {
        icon: '🥰',
        position: 'bottom-right',
      });
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        reset();
      }, 2000);
    }

    if (state.errors && state.errors.length > 0) {
      toast.error('Oops, something went wrong!');
    }
  }, [state]);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  return (
    <Stack
      m={{ base: 4, md: 8, lg: 20 }}
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
        <VStack spacing={8}>
          <VStack as="form" spacing={4} onSubmit={handleSubmit}>
            <label htmlFor="fullName" style={{ color: 'black' }}>
              Full Name
            </label>
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
            <label htmlFor="email" style={{ color: 'black' }}>
              Email Address
            </label>
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
            <label htmlFor="message" style={{ color: 'black' }}>
              Your message
            </label>

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
              isLoading={state.submitting}
            >
              {state.succeeded ? <CheckIcon /> : 'Submit'}
            </Button>
          </VStack>
        </VStack>
      </Box>
      <ToastContainer autoClose={2000} />
    </Stack>
  );
}
