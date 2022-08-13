import React from 'react';
import styled from 'styled-components';
import { WelcomePage } from './components/welcome-page/welcome-page';

const StyledApp = styled.div``;

export const App = () => (
  <StyledApp>
    <WelcomePage />
  </StyledApp>
);
