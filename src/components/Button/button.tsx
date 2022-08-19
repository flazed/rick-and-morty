import React, { FC, MouseEventHandler, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props extends DefaultProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface DefaultProps {
  view?: 'primary' | 'secondary';
  uppercase?: boolean;
}

const StyledButton = styled.button<Props>`
  position: relative;
  padding: 10px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 10px;
  outline: none;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'lowercase')};
  user-select: none;
  font-weight: 600;
  transition: background 0.3s, color 0.3s, border-color 0.3s;
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

export const Button: FC<PropsWithChildren<Props>> = (props) => {
  const {
    onClick, view, uppercase, children,
  } = props;

  return (
    <StyledButton onClick={onClick} view={view} uppercase={uppercase}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  view: 'primary',
  uppercase: true,
};
