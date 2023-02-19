import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SNavbarContainer } from '../navbar/navbar.styled';

export const SHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.commonBorder};
  background: ${({ theme }) => theme.commonBg};
  transition: background ${({ theme }) => theme.durations.ms300};
  z-index: 999;

  ${SNavbarContainer} {
    order: -1;

    @media ${({ theme }) => theme.media.small} {
      order: 0;
    }
  }
`;

export const SLink = styled(Link)`
  height: 100%;
`;

export const SLogo = styled.img`
  height: 100%;
`;
