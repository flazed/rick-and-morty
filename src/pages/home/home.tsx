import React from 'react';
import { Container } from '../../components/layouts/container/container';
import { Banners } from '../../components/banner/banner';
import { Slider } from '../../components/slider/slider';
import { slides, banners } from './home.data';

export const HomePage = () => (
  <Container>
    <Slider items={slides} />
    <Banners keyName="main-page-banner" banners={banners} />
  </Container>
);
