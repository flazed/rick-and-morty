import React from 'react';
import { ThemeProvider } from 'styled-components';
import { WelcomePage } from './components/welcome-page/welcome-page';
import { Header } from './components/header/header';
import { HomeRoutes } from './routes/home.routes';
import { Footer } from './components/footer/footer';
import { useAppSelector } from './redux/hook';
import { SApp } from './styles/app.styled';
import { GlobalStyles } from './styles/global';

export const App = () => {
  const { theme } = useAppSelector((store) => store.appTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SApp>
        <WelcomePage />
        <Header />
        <HomeRoutes />
        <Footer />
      </SApp>
    </ThemeProvider>
  );
};
