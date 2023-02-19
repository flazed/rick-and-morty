import styled from 'styled-components';
import HouseInside from '../../static/house_inside.png';

interface SWelcomeProps {
  state: string;
}

export const SWelcome = styled.div<SWelcomeProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: ${({ state }) => (state === 'exited' ? 'none' : 'flex')};
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  justify-content: center;
  align-items: center;
  background: url(${HouseInside});
  background-position: center center;
  background-size: cover;
  transition: opacity 2s;
  z-index: 9999;
`;
