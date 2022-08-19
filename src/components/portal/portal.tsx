import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { spin, glowShadows } from '../../styles/animations';
import PortalImage from '../../static/portal.png';

interface Props {
  isVisible: boolean;
}

const StyledPortalImage = styled.img<Props>`
  position: relative;
  width: 30vw;
  min-width: 300px;
  z-index: 0;
  transition: 2s;
  animation: ${spin} 40s infinite linear;
  transition: 2s;
  ${({ isVisible }) => !isVisible
    && css`
      width: 100vw;
    `};
`;

const StyledPortalOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 27vw;
    min-width: 280px;
    height: 27vw;
    min-height: 280px;
    border-radius: 50%;
    animation: ${({ theme }) => glowShadows(theme.colors.PRIMARY, 50, 150)} 5s
      infinite linear;
  }
`;

export const Portal: FC<Props> = ({ isVisible }) => (
  <StyledPortalOverlay>
    <StyledPortalImage isVisible={isVisible} src={PortalImage} alt="" />
  </StyledPortalOverlay>
);
