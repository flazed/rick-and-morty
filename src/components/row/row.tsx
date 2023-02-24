import React, { FC, PropsWithChildren } from 'react';
import { SRow, SRowData, SRowTitle } from './row.styled';

interface RowProps {
  title: string;
}

export const Row: FC<PropsWithChildren<RowProps>> = ({ title, children }) => (
  <SRow>
    <SRowTitle>{title}</SRowTitle>
    <SRowData>{children}</SRowData>
  </SRow>
);
