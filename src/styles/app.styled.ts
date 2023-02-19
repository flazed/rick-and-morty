import styled from 'styled-components';

export const SApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.pageBg};
  transition: background ${({ theme }) => theme.durations.ms300};
`;
