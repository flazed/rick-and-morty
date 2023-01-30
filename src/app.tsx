import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/home';
import { SApp } from './styles/app.styled';
import { GlobalStyles } from './styles/global';
import { lightTheme } from './styles/theme';

export const App = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <SApp>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </SApp>
  </ThemeProvider>
);
