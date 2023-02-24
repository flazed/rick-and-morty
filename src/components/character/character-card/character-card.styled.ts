import styled from 'styled-components';
import { SCard } from '../../layouts/card/card.styled';

export const SCharacterCardImageContainer = styled.div`
  height: 170px;
  overflow: hidden;
`;

export const SCharacterCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${({ theme }) => theme.durations.ms300};
`;

export const SCharacterCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  padding: 5px;
`;

export const SCharacterCard = styled(SCard)`
  display: flex;
  padding: 0;

  &:hover {
    ${SCharacterCardImage} {
      transform: scale(1.2);
    }
  }
`;
