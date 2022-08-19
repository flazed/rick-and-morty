import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../button/button';
import { Portal } from '../portal/portal';
import { fadeOutAnimation as fadeOut } from '../../styles/animations';
import HouseInside from '../../static/house_inside.png';

const StyledWelcome = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${HouseInside});
  background-position: center center;
  background-size: cover;

  ${(props) => !props.isVisible
    && css`
      animation: ${fadeOut} 2s linear;
    `};
`;

export const WelcomePage: FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleOpenPortal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <StyledWelcome isVisible={isVisible}>
      <Portal isVisible={isVisible} />
      <Button onClick={handleOpenPortal} uppercase>
        explore the multiverse
      </Button>
    </StyledWelcome>
  );
};
