import React, { FC } from 'react';
import { SPortalOverlay, SPortalImage } from './portal.styled';
import PortalImage from '../../static/portal.png';

interface StyledPortalProps {
  isVisible: boolean;
}

export const Portal: FC<StyledPortalProps> = ({ isVisible }) => (
  <SPortalOverlay>
    <SPortalImage isVisible={isVisible} src={PortalImage} alt="" />
  </SPortalOverlay>
);
