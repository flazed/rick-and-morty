import styled from 'styled-components';

export const SContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: inherit;
  max-width: 90%;
  padding: 10px;

  ${({ theme }) => `
      @media screen and ${theme.media.small} {
        max-width: 540px;
        padding: 10px;
      }
      @media screen and ${theme.media.medium} {
        max-width: 720px;
        padding: 10px;
      }
      @media screen and ${theme.media.large} {
        max-width: 960px;
        padding: 10px;
      }
      @media screen and ${theme.media.extraLarge} {
        max-width: 1140px;
        padding: 10px 20px;
      }
      @media screen and ${theme.media.extraExtraLarge} {
        max-width: 1320px;
        padding: 10px 20px;
      }
    `}
`;
