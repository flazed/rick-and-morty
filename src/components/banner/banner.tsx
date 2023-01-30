import React, { FC, PropsWithChildren } from 'react';
import {
  SBanner, SBannersContainer, SBannerTitle, SBannerPreview,
} from './banner.styled';

interface SingeBanner {
  id: number;
  title: string;
  img: string;
}

interface MiltiBanner {
  keyName: string;
  banners: SingeBanner[];
}

export const Banner: FC<PropsWithChildren<Omit<SingeBanner, 'id'>>> = (props) => {
  const { title, img } = props;

  return (
    <SBanner>
      <SBannerPreview src={img} />
      <SBannerTitle>{title}</SBannerTitle>
    </SBanner>
  );
};

export const Banners: FC<MiltiBanner> = (props) => {
  const { keyName, banners } = props;

  return (
    <SBannersContainer>
      {
        banners.map((banner) => (
          <Banner key={`${keyName}-${banner.id}`} title={banner.title} img={banner.img} />
        ))
      }
    </SBannersContainer>
  );
};
