import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SNavbarItem = styled(NavLink)`
  font-size: 1.2em;
  text-decoration: none;
  margin: 0 10px;
  color: ${({ theme }) => theme.text};
  transition: ${({ theme }) => theme.durations.ms300};
  opacity: .5;
  font-weight: 600;

  &.active {
    opacity: 1;
    color: ${({ theme }) => (theme.isDark ? theme.colors.PRIMARY : theme.text)};
  }
`;
