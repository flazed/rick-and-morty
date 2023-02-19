import styled from 'styled-components';

export interface SToggleProps {
  isToggled: boolean;
}

export const SToggle = styled.div<SToggleProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 55px;
  height: 30px;
  padding: 5px;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, .3);
  background: ${({ theme, isToggled }) => (isToggled ? theme.colors.PRIMARY : theme.pageBg)};
  transition: ${({ theme }) => theme.durations.ms300};
  cursor: pointer;
`;

export const SToggleDot = styled.div<SToggleProps>`
  position: absolute;
  left: ${({ isToggled }) => (isToggled ? 'calc(100% - 25px)' : '5px')};
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background: ${({ theme, isToggled }) => (isToggled ? theme.pageBg : theme.colors.PRIMARY)};
  transition: ${({ theme }) => theme.durations.ms300};
`;
