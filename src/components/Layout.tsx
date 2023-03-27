import React, { PropsWithChildren } from 'react';
import { Navigation } from './Navigation';

export const Layout = ({ children }: PropsWithChildren) => (
  <div className="relative flex flex-row min-h-screen">
    <nav className="w-full fixed top-0 left-0 h-8 bg-orange-500 drop-shadow-lg z-10 py-2 px-5">
      <Navigation />
    </nav>
    {children}
  </div>
);
