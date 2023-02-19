import React, { FC } from 'react';
import { SNavbarItem } from './navbar-item.styled';

interface NavbarItemProps {
  link: string,
  name: string;
  onClick?: () => void;
}

export const NavbarItem: FC<NavbarItemProps> = (props) => {
  const { link, name, onClick } = props;

  return (
    <SNavbarItem to={link} onClick={onClick}>
      {name}
    </SNavbarItem>
  );
};
