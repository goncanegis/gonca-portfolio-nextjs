import React from 'react';

export const SectionHeading = ({ text, id }) => {
  return (
    <Heading
      mb={6}
      color={textColor}
      letterSpacing={2}
      fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
      textAlign="center"
      id={id}
      className="section-heading"
      display={'inline-block'}
    >
      {text}
    </Heading>
  );
};
