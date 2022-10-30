import React, { FC } from 'react';
import { StyledPortalOverlay, StyledPortalImage } from './portal.styled';
import PortalImage from '../../static/portal.png';

interface StyledPortalProps {
  isVisible: boolean;
}

export const Portal: FC<StyledPortalProps> = ({ isVisible }) => (
  <StyledPortalOverlay>
    <StyledPortalImage isVisible={isVisible} src={PortalImage} alt="" />
  </StyledPortalOverlay>
);
