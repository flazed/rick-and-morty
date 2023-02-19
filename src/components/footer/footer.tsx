import React, { FC } from 'react';
import { SFooter, SText, SNick } from './footer.styled';

export const Footer: FC<{}> = () => (
  <SFooter>
    <SText>
      Develop by
      {' '}
      <SNick>flazed</SNick>
      {' '}
      with 💖
    </SText>
  </SFooter>
);
