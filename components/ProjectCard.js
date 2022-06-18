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
import { motion } from 'framer-motion';
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
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
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
            layout="fill"
            objectFit={'cover'}
            priority
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {title}
          </Heading>
          <Text color={useColorModeValue('gray.600', 'gray.300')}>
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
          <Link
            as={motion.a}
            color={useColorModeValue('#805AD5', '#D6BCFA')}
            href={githubLink}
            isExternal
            title="View Github repo"
            mr={5}
            whileHover={{
              scale: 1.05,
              color: '#6B46C1',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            <Icon as={FaGithub} w={7} h={7} />
          </Link>
          <Link
            as={motion.a}
            color={useColorModeValue('#805AD5', '#D6BCFA')}
            mr={5}
            title="Visit live site"
            whileHover={{
              scale: 1.05,
              color: '#6B46C1',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            href={liveLink}
            isExternal
            ml={5}
          >
            <Icon as={FiExternalLink} w={7} h={7} />
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}
