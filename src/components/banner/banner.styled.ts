import styled from 'styled-components';

export const SBannersContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const SBannerTitle = styled.span`
  letter-spacing: 2px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: rgba(0, 0, 0, .3);
    border-radius: inherit;
    transition: ${({ theme }) => theme.durations.ms300};
  }
`;

export const SBannerPreview = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${({ theme }) => theme.durations.ms300};
`;

export const SBanner = styled.div`
  position: relative;
  width: 100%;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.WHITE};
  font-weight: 700;
  font-size: 2.1em;
  margin: 0 10px;
  border-radius: ${({ theme }) => theme.borders.fields};
  background-size: cover;
  user-select: none;
  overflow: hidden;
  cursor: pointer;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    ${SBannerPreview} {
      transform: scale(1.3);
    }

    ${SBannerTitle} {
      &::before {
        background-color: rgba(0, 0, 0, .6);
      }
    }
  }
`;
