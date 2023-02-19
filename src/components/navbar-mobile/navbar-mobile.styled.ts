import styled, { css } from 'styled-components';
import { SNavbarItem } from '../navbar-item/navbar-item.styled';

interface SNavbarMobileProps {
  isOpen: boolean;
}

export const SNavbarMobileContainer = styled.div`
  position: relative;
  display: flex;
`;

export const SNavbarMobileBurger = styled.button<SNavbarMobileProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 5px;
  background: transparent;
  border-radius: ${({ theme }) => theme.borders.buttons};
  border: 2px solid ${({ theme }) => theme.text};
  cursor: pointer;
  z-index: 1;

  &::before, &::after {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    border-radius: 50px;
    margin: 5px 0;
    background: ${({ theme }) => theme.text};
    transition: transform ${({ theme }) => theme.durations.ms300};
  }

  ${({ isOpen }) => isOpen
    && css`
      &::before {
        margin-bottom: -7px;
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    `
}

  @media ${({ theme }) => theme.media.small} {
    display: none;
  }
`;

export const SNavbarMobilePopover = styled.div<SNavbarMobileProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  top: 15px;
  opacity: 0;
  background: ${({ theme }) => theme.pageBg};
  border: 1px solid ${({ theme }) => theme.commonBorder};
  border-radius: ${({ theme }) => theme.borders.fields};
  transition: ${({ theme }) => theme.durations.ms300};

  ${({ isOpen }) => isOpen
    && css`
      opacity: 1;
      top: 45px;
    `
}

  ${SNavbarItem} {
    font-size: 1em;
    margin: 3px 0;
  }
`;
