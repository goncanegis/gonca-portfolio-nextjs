import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Icon,
  Link,
} from '@chakra-ui/react';
import { m } from 'framer-motion';
import { ChakraNextImage } from './ChakraNextImage';

import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({
  liveLink,
  githubLink,
  title,
  description,
  image,
}) {
  const cardBg = useColorModeValue('white', 'gray.900');
  const headingColor = useColorModeValue('gray.700', 'gray.200');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const linkColor = useColorModeValue('#805AD5', '#D6BCFA');

  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={cardBg}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <ChakraNextImage
            src={`/images/${image}`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 445px"
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Stack>
          <Heading
            color={headingColor}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {title}
          </Heading>
          <Text color={textColor}>
            {description}
          </Text>
        </Stack>
        <Stack
          mt={6}
          direction={'row'}
          spacing={4}
          align={'center'}
          justify={'center'}
        >
          <m.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            <Link
              href={githubLink}
              isExternal
              display="inline-flex"
              title="View Github repo"
              mr={5}
              color={linkColor}
              _hover={{
                color: '#6B46C1',
              }}
            >
              <Icon as={FaGithub} w={7} h={7} />
            </Link>
          </m.div>
          <m.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            <Link
              href={liveLink}
              isExternal
              display="inline-flex"
              title="Visit live site"
              mr={5}
              ml={5}
              color={linkColor}
              _hover={{
                color: '#6B46C1',
              }}
            >
              <Icon as={FiExternalLink} w={7} h={7} />
            </Link>
          </m.div>
        </Stack>
      </Box>
    </Center>
  );
}
