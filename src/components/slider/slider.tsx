import React, { FC, useEffect, useState } from 'react';
import { Slide, SlideProps } from '../slider-slide/slider-slide';
import { SliderPagination } from '../slider-pagination/slider-pagination';
import { SSlider, SSlidesContainer } from './slider.styled';

interface SliderProps {
  items: SlideProps[];
}

export const Slider: FC<SliderProps> = (props) => {
  const { items } = props;

  const duplicateFirstSlide = items[0];
  const duplicateLastSlide = items[items.length - 1];

  const slides = [
    duplicateLastSlide,
    ...items,
    duplicateFirstSlide,
  ];

  const [activeSlide, setActiveSlide] = useState(1);
  const [paginateItem, setPaginationItem] = useState(0);
  const [isAnimated, setIsAnimated] = useState(true);

  const handleSwipeSlider = () => {
    setIsAnimated(true);
    setActiveSlide(activeSlide + 1);

    if (paginateItem === items.length - 1) {
      setPaginationItem(0);
    } else {
      setPaginationItem(paginateItem + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(
      () => {
        handleSwipeSlider();
      },
      isAnimated ? 2000 : 1000,
    );
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    if (activeSlide >= items.length + 1) {
      const turnOffAnimation = setTimeout(() => {
        setActiveSlide(1);
        setIsAnimated(false);
      }, 1000);
      return () => clearTimeout(turnOffAnimation);
    }
    return undefined;
  }, [activeSlide]);

  return (
    <SSlider>
      <SSlidesContainer active={activeSlide} isAnimated={isAnimated}>
        {slides.map((slide, index) => (
          <Slide key={`${slide}_slide-${index}`} title={slide.title} img={slide.img} path={slide.path} />
        ))}
      </SSlidesContainer>
      <SliderPagination count={items.length} active={paginateItem} />
    </SSlider>
  );
};
