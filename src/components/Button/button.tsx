import React, { FC, MouseEventHandler, PropsWithChildren } from 'react';
import { SButton } from './button.styled';

interface Props extends SButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface SButtonProps {
  view?: 'primary' | 'secondary';
  uppercase?: boolean;
}

export const Button: FC<PropsWithChildren<Props>> = (props) => {
  const {
    onClick, view = 'primary', uppercase = true, children,
  } = props;

  return (
    <SButton onClick={onClick} view={view} uppercase={uppercase}>
      {children}
    </SButton>
  );
};
