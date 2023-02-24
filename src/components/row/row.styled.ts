import styled from 'styled-components';

export const SRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SRowTitle = styled.span`
  color: ${({ theme }) => `${theme.text}`};
  opacity: .6;
`;

export const SRowData = styled.p`
  padding: 0;
  margin: 0;
`;
