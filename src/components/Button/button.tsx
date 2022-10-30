import React, { FC, MouseEventHandler, PropsWithChildren } from 'react';
import { StyledButton } from './button.styled';

interface Props extends StyledButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface StyledButtonProps {
  view?: 'primary' | 'secondary';
  uppercase?: boolean;
}

export const Button: FC<PropsWithChildren<Props>> = (props) => {
  const { onClick, view = 'primary', uppercase = true, children } = props;

  return (
    <StyledButton onClick={onClick} view={view} uppercase={uppercase}>
      {children}
    </StyledButton>
  );
};
