import React from 'react';
import styled from 'styled-components';
import { LabelText } from './type';

const Label = ({ children }: LabelText) => {
  return <H3>{children}</H3>;
};

export { Label };

const H3 = styled.h3`
  margin-bottom: 37px;
  margin-top: 15px;
`;
