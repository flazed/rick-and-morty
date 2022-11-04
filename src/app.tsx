import React from 'react';
import { ThemeProvider } from 'styled-components';
import { WelcomePage } from './components/welcome-page/welcome-page';
import { SApp } from './styles/app.styled';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <SApp>
      <WelcomePage />
    </SApp>
  </ThemeProvider>
);
