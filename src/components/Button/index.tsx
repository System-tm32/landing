import React from 'react';
import styled from 'styled-components';
import { ButtonPropsType } from './types';

const ScButton = styled.button`
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

const Button = ({ type, content }: ButtonPropsType): JSX.Element => {
  return <ScButton>{content}</ScButton>;
};

export { Button };
