import React from 'react';
import { Container } from '../../components/layouts/container/container';
import { WelcomePage } from '../../components/welcome-page/welcome-page';
import { Banners } from '../../components/banner/banner';
import { Slider } from '../../components/slider/slider';
import { slides, banners } from './home.data';

export const HomePage = () => (
  <>
    <WelcomePage />
    <Container>
      <Slider items={slides} />
      <Banners keyName="main-page-banner" banners={banners} />
    </Container>
  </>
);
