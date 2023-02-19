import React, {
  FC, useState, useRef, FocusEvent,
} from 'react';
import { NavbarItem } from '../navbar-item/navbar-item';
import { RouteObj } from '../../types/route/route.type';
import { SNavbarMobileContainer, SNavbarMobileBurger, SNavbarMobilePopover } from './navbar-mobile.styled';

interface NavbarMobileProps {
  routes: RouteObj[];
}

export const NavbarMobile: FC<NavbarMobileProps> = (props) => {
  const { routes } = props;

  const navbarMobile = useRef<HTMLDivElement>(null);

  const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false);

  const handleToggleMobileNav = () => {
    setIsNavbarMobileOpen(!isNavbarMobileOpen);
  };

  const handleCloseNavbarMobile = (event: FocusEvent<HTMLDivElement>) => {
    navbarMobile.current
      && !navbarMobile.current.contains(event.relatedTarget)
      && setIsNavbarMobileOpen(false);
  };

  return (
    <SNavbarMobileContainer ref={navbarMobile} onBlur={handleCloseNavbarMobile}>
      <SNavbarMobileBurger onClick={handleToggleMobileNav} isOpen={isNavbarMobileOpen} />
      <SNavbarMobilePopover isOpen={isNavbarMobileOpen}>
        {
        routes.map((route) => (
          <NavbarItem
            key={route.path}
            link={route.path}
            name={route.name}
            onClick={() => setIsNavbarMobileOpen(false)}
          />
        ))
      }
      </SNavbarMobilePopover>
    </SNavbarMobileContainer>
  );
};
