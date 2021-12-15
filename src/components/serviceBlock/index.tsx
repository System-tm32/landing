import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Label } from '../Label';
import { ServiceBlockProps } from './type';

const ServiceBLock = ({ label, description, onClick }: ServiceBlockProps) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Description>{description}</Description>
      <ButtonWrapper>
        <Button type={'info'} onClick={onClick}>
          Подробнее
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export { ServiceBLock };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #fff;
  width: 411px;
  height: 247px;
  border-radius: 16px;
  padding: 24px;
`;

const ButtonWrapper = styled.div`
  width: 50%;
`;

const Description = styled.div`
  height: 90px;
`;
