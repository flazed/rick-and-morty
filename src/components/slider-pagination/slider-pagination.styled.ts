import styled, { css } from 'styled-components';

interface SPaginateCirlceProps {
  active: boolean;
}

export const SSliderPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: -40px auto 0;
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${({ theme }) => theme.borders.fields};
  z-index: 1;
`;

export const SPaginateCirlce = styled.span<SPaginateCirlceProps>`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  margin: 5px;
  transition: 0.5s;
  background: ${({ theme }) => theme.colors.WHITE};

  ${({ active }) => active
    && css`
      background: ${({ theme }) => theme.colors.PRIMARY};
      width: 20px;
    `}
`;
