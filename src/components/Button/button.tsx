import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { variables } from '../../styles/variables';

interface Props extends DefaultProps {}

interface DefaultProps {
  view?: string;
  uppercase?: boolean;
}

const StyledButton = styled.button<Props>`
  padding: 10px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 10px;
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'lowercase')};
  user-select: none;
  font-weight: 600;
  transition: background 0.3s, color 0.3s, border-color 0.3s;
  cursor: pointer;

  ${(props) => {
    switch (props.view) {
      case 'secondary':
        return `
          border-color: ${variables.BLUE};
          color: ${variables.BLUE};

          &:hover {
            background: ${variables.DIRTY_BLUE};
            border-color: ${variables.DIRTY_BLUE};
            color: ${variables.WHITE};
          }
        `;
      default:
        return `
          background: ${variables.GREEN};
          border-color: ${variables.GREEN};
          color: ${variables.WHITE};

          &:hover {
            background: ${variables.WHITE};
            color: ${variables.GREEN};
          }
        `;
    }
  }}
`;

export const Button: FC<PropsWithChildren<Props>> = (props) => {
  const { view, uppercase, children } = props;
  return (
    <StyledButton view={view} uppercase={uppercase}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  view: 'primary',
  uppercase: false,
};
