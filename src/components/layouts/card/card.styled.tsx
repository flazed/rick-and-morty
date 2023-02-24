import styled from 'styled-components';
import { SRow } from '../../row/row.styled';

export const SCard = styled.div`
  background: ${({ theme }) => theme.commonBg};
  border: 1px solid ${({ theme }) => theme.commonBorder};
  border-radius: ${({ theme }) => theme.borders.fields};
  color: ${({ theme }) => theme.text};
  padding: 5px;
  overflow: hidden;

  ${SRow} {
    margin: 5px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const SCardTitle = styled.a`
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  transition: ${({ theme }) => theme.durations.ms300};

  &:hover {
    color: ${({ theme }) => theme.colors.DIRTY_ORANGE};
  }
`;
