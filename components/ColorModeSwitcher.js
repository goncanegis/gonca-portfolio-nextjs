import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      aria-label="Toggle color mode"
      fontSize="3xl"
      variant="ghost"
      onClick={() => toggleColorMode()}
      icon={<SwitchIcon />}
      _hover={{ bg: 'transparent' }}
      _active={{ bg: 'transparent' }}
      style={{ boxShadow: 'none' }}
      {...props}
    />
  );
};
