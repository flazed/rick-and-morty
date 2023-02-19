import React, { FC, PropsWithChildren } from 'react';
import { SContainer } from './container.styled';

export const Container: FC<PropsWithChildren<{}>> = ({ children }) => (
  <SContainer>
    { children }
  </SContainer>
);
