import styled, { css } from 'styled-components';
import { fadeOutAnimation as fadeOut } from '../../styles/animations';
import HouseInside from '../../static/house_inside.png';

export const StyledWelcome = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${HouseInside});
  background-position: center center;
  background-size: cover;

  ${({ isVisible }) =>
    !isVisible &&
    css`
      animation: ${fadeOut} 2s linear;
    `};
`;
