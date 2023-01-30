import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { SSlide, STitle } from './slider-slide.styled';

export interface SlideProps {
  title: string;
  img: string;
  path: string;
}

export const Slide: FC<SlideProps> = (props) => {
  const { title, img, path } = props;
  return (
    <SSlide preview={img}>
      <Link to={path} />
      <STitle>{title}</STitle>
    </SSlide>
  );
};
