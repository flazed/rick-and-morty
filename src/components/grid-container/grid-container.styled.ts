import styled from 'styled-components';

interface SGridContainerProps {
  XXL?: number;
  XL?: number;
  L?: number;
  M?: number;
  S?: number;
}

export const SGridContainer = styled.div<SGridContainerProps>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media ${({ theme }) => theme.media.small} {
    grid-template-columns: repeat(${({ S }) => S}, 1fr);
  }

  @media ${({ theme }) => theme.media.medium} {
    grid-template-columns: repeat(${({ M }) => M}, 1fr);
  }

  @media ${({ theme }) => theme.media.large} {
    grid-template-columns: repeat(${({ L }) => L}, 1fr);
  }

  @media ${({ theme }) => theme.media.extraLarge} {
    grid-template-columns: repeat(${({ XL }) => XL}, 1fr);
  }

  @media ${({ theme }) => theme.media.extraExtraLarge} {
    grid-template-columns: repeat(${({ XXL }) => XXL}, 1fr);
  }
`;
