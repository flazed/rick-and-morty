import { keyframes } from 'styled-components';
import { fadeOut } from 'react-animations';

export const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const glowShadows = (
  color: string,
  blurStart: number,
  blurEnd: number,
) => keyframes`
  0% {
      box-shadow: 0px 0px ${blurStart}px ${color};
  }
  50% {
    box-shadow: 0px 0px ${blurEnd}px ${color};
  }
  100% {
      box-shadow: 0px 0px ${blurStart}px ${color};
  }
`;

export const fadeOutAnimation = keyframes`${fadeOut}`;
