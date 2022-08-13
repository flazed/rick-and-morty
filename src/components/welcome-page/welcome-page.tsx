import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/button';

const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const WelcomePage: FC = () => (
  <Welcome>
    <Button uppercase>explore the multiverse</Button>
  </Welcome>
);
