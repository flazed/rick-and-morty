import React, { FC, PropsWithChildren } from 'react';
import { SGridContainer } from './grid-container.styled';

interface GridContainerProps {
  XXL?: number;
  XL?: number;
  L?: number;
  M?: number;
  S?: number;
}

export const GridContainer: FC<PropsWithChildren<GridContainerProps>> = (props) => {
  const {
    XXL = 5, XL = 4, L = 3, M = 2, S = 1, children,
  } = props;

  return (
    <SGridContainer XXL={XXL} XL={XL} L={L} M={M} S={S}>
      {children}
    </SGridContainer>
  );
};
