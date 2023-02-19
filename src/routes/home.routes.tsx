import React, { createRef, FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/home/home';
import { charactersLink, locationsLink, espisodesLink } from '../static-data';
import { RouteObj } from '../types/route/route.type';

export const HomeRoutesList: RouteObj[] = [
  {
    path: '/', name: 'Home', element: <HomePage />, nodeRef: createRef(),
  },
  {
    path: `/${charactersLink}`, name: 'Characters', element: <HomePage />, nodeRef: createRef(),
  },
  {
    path: `/${locationsLink}`, name: 'Locations', element: <HomePage />, nodeRef: createRef(),
  },
  {
    path: `/${espisodesLink}`, name: 'Episodes', element: <HomePage />, nodeRef: createRef(),
  },
];

export const HomeRoutes: FC = () => (
  <Routes>
    {
      HomeRoutesList.map((route) => (
        <Route key={`${route.name}${route.path}`} path={route.path} element={route.element} />
      ))
    }
  </Routes>
);
