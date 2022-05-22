import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ChakraBox } from './animation/AnimationComponents';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    toggleColorMode();
  };

  return (
    <Flex
      w={'44px'}
      h={'16px'}
      borderRadius={'6px'}
      align="center"
      justify={isOn ? 'flex-end' : 'flex-start'}
      onClick={toggleSwitch}
      bgColor={useColorModeValue('teal.600', 'teal.300')}
    >
      <ChakraBox className="handle" layout transition={spring}>
        <IconButton
          size="sm"
          borderRadius={'10px'}
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="solid"
          colorScheme={'teal'}
          onClick={toggleSwitch}
          icon={<SwitchIcon color={'teal.500'} />}
          {...props}
        />
      </ChakraBox>
    </Flex>
  );
};
