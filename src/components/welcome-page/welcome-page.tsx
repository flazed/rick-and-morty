import React, { useRef, FC, useState } from 'react';
import { Transition } from 'react-transition-group';
import { Button } from '../button/button';
import { Portal } from '../portal/portal';
import { StyledWelcome } from './welcome-page.styled';

export const WelcomePage: FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const welcomeRef = useRef(null);

  const handleOpenPortal = () => {
    setIsVisible(false);
  };

  return (
    <Transition in={isVisible} timeout={2000} nodeRef={welcomeRef} unmountOnExit>
      {(state: string) => (
        <StyledWelcome isVisible={isVisible} state={state} ref={welcomeRef}>
          <Portal isVisible={isVisible} />
          <Button onClick={handleOpenPortal} uppercase>
            explore the multiverse
          </Button>
        </StyledWelcome>
      )}
    </Transition>
  );
};
