import styled from 'styled-components';

export const SFooter = styled.div`
  margin-top: auto;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.commonBorder};
  background: ${({ theme }) => theme.commonBg};
  color: ${({ theme }) => theme.text};
  transition: background ${({ theme }) => theme.durations.ms300}, color ${({ theme }) => theme.durations.ms300};
`;

export const SText = styled.span`
  font-weight: bold;
  user-select: none;
`;

export const SNick = styled.span`
  color: ${({ theme }) => theme.colors.DIRTY_ORANGE};
`;
