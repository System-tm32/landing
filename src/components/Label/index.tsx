import React from 'react';
import styled from 'styled-components';
import { LabelText } from './type';

const Label = ({ children }: LabelText) => {
  return <P>{children}</P>;
};

export { Label };

const P = styled.p`
  margin-bottom: 37px;
  font-size: 16px;
  font-weight: bold;
`;
