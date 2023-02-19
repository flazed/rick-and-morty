import React, { FC } from 'react';
import { SSliderPagination, SPaginateCirlce } from './slider-pagination.styled';

interface SliderPaginationProps {
  count: number;
  active: number;
}

export const SliderPagination: FC<SliderPaginationProps> = (props) => {
  const { count, active } = props;
  const items = [...Array(count).keys()];

  return (
    <SSliderPagination>
      {items.map((item, index) => (
        <SPaginateCirlce key={`${item}_pagination`} active={active === index} />
      ))}
    </SSliderPagination>
  );
};
