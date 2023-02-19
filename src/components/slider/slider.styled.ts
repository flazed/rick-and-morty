import styled, { css } from 'styled-components';

interface SSlidesContainerProps {
  isAnimated: boolean;
  active: number;
}

export const SSlider = styled.div`
  width: 100%;
  min-height: 450px;
  margin: 20px 0;
  border-radius: ${({ theme }) => theme.borders.fields};;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const SSlidesContainer = styled.div<SSlidesContainerProps>`
  height: 100%;
  display: flex;
  transition: ${({ isAnimated }) => (isAnimated ? '0.5' : '0')}s;
  ${({ active }) => css`
      transform: translateX(calc(${100 * -active}% - ${30 * active}px));
    `}
`;
