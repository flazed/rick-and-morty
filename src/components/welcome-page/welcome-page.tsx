import React, { FC, useState } from 'react';
import { Button } from '../button/button';
import { Portal } from '../portal/portal';
import { StyledWelcome } from './welcome-page.styled';

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
