import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { WelcomePage } from './components/welcome-page/welcome-page';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

const StyledApp = styled.div``;

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <StyledApp>
      <WelcomePage />
    </StyledApp>
  </ThemeProvider>
);
