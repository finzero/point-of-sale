import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Layout = () => (
  <div className="relative flex flex-row min-h-screen">
    <nav className="w-full fixed top-0 left-0 h-8 bg-orange-500 drop-shadow-lg py-2 z-10 px-5">
      <Navigation />
    </nav>
    <div className="mt-8 ">
      <Outlet />
    </div>
  </div>
);
