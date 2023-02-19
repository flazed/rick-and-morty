import React from 'react';
import { Toggle } from '../toggle/toggle';
import { Navbar } from '../navbar/navbar';
import { useAppDispatch } from '../../redux/hook';
import { switchTheme } from '../../redux/reducers/theme.reducer';
import { HomeRoutesList } from '../../routes/home.routes';
import { SHeader, SLogo, SLink } from './header.styled';
import Logo from '../../static/logo.png';

export const Header = () => {
  const dispatch = useAppDispatch();

  const handleToggleTheme = () => {
    dispatch(switchTheme());
  };

  return (
    <SHeader>
      <SLink to="/">
        <SLogo src={Logo} />
      </SLink>
      <Navbar routes={HomeRoutesList} />
      <Toggle onToggle={handleToggleTheme} />
    </SHeader>
  );
};
