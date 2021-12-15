import React from 'react';
import styled from 'styled-components';
import { ParagraphText } from './type';

const Paragraph = ({ children }: ParagraphText) => {
  return <P>{children}</P>;
};

export { Paragraph };

const P = styled.p`
  font-size: 16px;
  text-indent: 5px;
  padding-bottom: 5px;
`;
