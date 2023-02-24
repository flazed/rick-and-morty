import React, { FC, PropsWithChildren } from 'react';
import { SCard } from './card.styled';

export const Card: FC<PropsWithChildren<{}>> = ({ children }) => (
  <SCard>
    {children}
  </SCard>
);
