import styled from 'styled-components';
import HouseInside from '../../static/house_inside.png';

interface StyledWelcomeProps {
  isVisible: boolean;
  state: string;
}

export const StyledWelcome = styled.div<StyledWelcomeProps>`
  display: ${({ state }) => (state === 'exited' ? 'none' : 'flex')};
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${HouseInside});
  background-position: center center;
  background-size: cover;
  transition: 2s;
`;
