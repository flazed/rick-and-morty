import styled from 'styled-components';
import { SNavbarItem } from '../navbar-item/navbar-item.styled';

export const SNavbarDesktopContainer = styled.div`
  ${SNavbarItem} {
    display: none;
  }

  @media ${({ theme }) => theme.media.small} {
    display: flex;
    justify-content: center;

    ${SNavbarItem} {
      display: inline;
    }
  }
`;
