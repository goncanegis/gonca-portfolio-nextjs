import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Icon,
  Link,
} from '@chakra-ui/react';

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
          <Image
            src={require(`../assets/img/projects/${image}`)}
            w={'full'}
            h={'full'}
            objectFit="cover"
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {title}
          </Heading>
          <Text color={'gray.500'}>{description}</Text>
        </Stack>
        <Stack
          mt={6}
          direction={'row'}
          spacing={4}
          align={'center'}
          justify={'center'}
        >
          <Link href={githubLink} isExternal mr={4}>
            <Icon as={FaGithub} w={6} h={6} />
          </Link>
          <Link href={liveLink} isExternal ml={4}>
            <Icon as={FiExternalLink} w={6} h={6} />
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}
