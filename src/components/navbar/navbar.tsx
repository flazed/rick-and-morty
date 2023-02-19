import React, { FC } from 'react';
import { NavbarMobile } from '../navbar-mobile/navbar-mobile';
import { NavbarDesktop } from '../navbar-desktop/navbar-desktop';
import { RouteObj } from '../../types/route/route.type';
import { SNavbarContainer } from './navbar.styled';

interface NavbarProps {
  routes: RouteObj[];
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { routes } = props;

  return (
    <SNavbarContainer>
      <NavbarMobile routes={routes} />
      <NavbarDesktop routes={routes} />
    </SNavbarContainer>
  );
};
