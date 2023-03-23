import React from 'react';
import { SectionWraper, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWraper>
      <Title>{title}</Title>
      {children}
    </SectionWraper>
  );
};
