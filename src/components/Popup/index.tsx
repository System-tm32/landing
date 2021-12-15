import React from 'react';
import styled from 'styled-components';
import closeSprite from './img/close.svg';
import { PopupProps } from './type';

const Popup = ({ children, onClick }: PopupProps): JSX.Element => {
  return (
    <Overlay onClick={onClick}>
      <Wrapper>
        <CloseButton onClick={onClick}>
          <img src={closeSprite} />
        </CloseButton>
        {children}
      </Wrapper>
    </Overlay>
  );
};

export { Popup };

const Wrapper = styled.div`
  position: relative;
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

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 24px;
  top: 24px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid #e53217;
  cursor: pointer;
  background: none;

  &:hover {
    background: #fbe0dc;
  }
`;
