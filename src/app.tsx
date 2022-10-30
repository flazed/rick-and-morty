import React from 'react';
import { ThemeProvider } from 'styled-components';
import { WelcomePage } from './components/welcome-page/welcome-page';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <WelcomePage />
  </ThemeProvider>
);
