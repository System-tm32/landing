import React from 'react';
import styled from 'styled-components';
import { ButtonPropsType, Itheme } from './types';

const theme: Itheme = {
  primary: {
    background: `#e53217`,
    hoverBackground: `#C12E17`,
    border: 'none',
    color: '#fff',
  },
  info: {
    background: 'none',
    hoverBackground: '#FBE0DC',
    border: '1px solid #e53217',
  },
};

const Button = ({ type, children, onClick }: ButtonPropsType): JSX.Element => {
  return (
    <ScButton theme={theme[type]} onClick={onClick}>
      {children}
    </ScButton>
  );
};

export { Button };

const ScButton = styled.button`
  display: flex;
  justify-content: center;
  font-size: 12px;
  border-radius: 24px;
  padding: 15px 45px;
  cursor: pointer;

  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
  border: ${({ theme }) => theme.border};

  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
  }
`;
