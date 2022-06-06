import { chakra, VisuallyHidden } from '@chakra-ui/react';

export const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      variant="ghost"
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
