import styled from 'styled-components';

interface SSlideProps {
  preview: string;
}

export const SSlide = styled.div<SSlideProps>`
  position: relative;
  min-width: 100%;
  background: rgba(150, 0, 150, 0.2) url(${({ preview }) => preview}) center center;
  background-size: cover;
  border-radius: ${({ theme }) => theme.borders.fields};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.WHITE};
  font-weight: 900;
  margin-right: 30px;
  user-select: none;
  cursor: pointer;

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    z-index: 0;
  }
`;

export const STitle = styled.span`
  position: relative;
  font-size: 45px;
  z-index: 1;
`;
