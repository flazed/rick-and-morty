import styled from 'styled-components';

interface SButtonProps {
  view?: 'primary' | 'secondary';
  uppercase?: boolean;
}

export const SButton = styled.button<SButtonProps>`
  position: relative;
  padding: 10px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borders.buttons};
  outline: none;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'lowercase')};
  user-select: none;
  font-weight: 600;
  transition: ${({ theme }) => theme.durations.ms300};
  cursor: pointer;

  ${({ view, theme }) => {
    switch (view) {
      case 'secondary':
        return `
          border-color: ${theme.colors.SECONDARY};
          color: ${theme.colors.SECONDARY};

          &:hover {
            background: ${theme.colors.DIRTY_BLUE};
            border-color: ${theme.colors.DIRTY_BLUE};
            color: ${theme.colors.WHITE};
          }
        `;
      default:
        return `
          background: ${theme.colors.PRIMARY};
          border-color: ${theme.colors.PRIMARY};
          color: ${theme.colors.WHITE};

          &:hover {
            background: ${theme.colors.WHITE};
            color: ${theme.colors.PRIMARY};
          }
        `;
    }
  }}
`;
