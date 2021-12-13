import React from 'react';
import styled from 'styled-components';
import { PopupProps } from './type';

const Popup = ({ children, onClick }: PopupProps): JSX.Element => {
  return (
    <Overlay onClick={onClick}>
      <Wrapper>{children}</Wrapper>
    </Overlay>
  );
};

export { Popup };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  max-width: 640px;
  background: #fff;
  padding: 24px;
  border-radius: 16px;
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(50, 48, 63, 0.5);
`;
