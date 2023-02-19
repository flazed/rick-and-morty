import React, { FC } from 'react';
import { NavbarItem } from '../navbar-item/navbar-item';
import { RouteObj } from '../../types/route/route.type';
import { SNavbarDesktopContainer } from './navbar-desktop.styled';

interface NavbarDesktopProps {
  routes: RouteObj[];
}

export const NavbarDesktop: FC<NavbarDesktopProps> = (props) => {
  const { routes } = props;

  return (
    <SNavbarDesktopContainer>
      {
        routes.map((route) => (
          <NavbarItem key={route.path} link={route.path} name={route.name} />
        ))
      }
    </SNavbarDesktopContainer>
  );
};
